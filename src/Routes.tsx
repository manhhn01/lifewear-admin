import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import AuthLayout from './containers/layouts/AuthLayout';
import DefaultLayout from './containers/layouts/DefaultLayout';
import LoginPage from './pages/Auth/Login';
import CategoryListPage from './pages/Category/CategoryList';
import DashboardPage from './pages/Dashboard';
import ProductListPage from './pages/Product/ProductList';
import { RootState } from './store';

const Routes = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    // Auth routes
    {
      element: auth.logged ? <DefaultLayout /> : <Navigate to="/auth/login" />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/products",
          element: <ProductListPage />,
        },
        {
          path: "/categories",
          element: <CategoryListPage />,
        },
      ],
    },
    // Guest routes
    {
      path: "/auth",
      element: !auth.logged ? <AuthLayout /> : <Navigate to="/dashboard" />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;

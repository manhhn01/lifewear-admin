import { Children, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { CssBaseline, IconButton, Snackbar, ThemeProvider } from '@mui/material';

import AuthLayout from './containers/layouts/AuthLayout';
import DefaultLayout from './containers/layouts/DefaultLayout';
import LoginPage from './pages/Auth/Login';
import Routes from './Routes';
import { RootState, store } from './store';
import { commonActions } from './store/slices/commonSlice';
import { theme } from './themes';

function App() {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.common.toast);

  const handleCloseToast = () => dispatch(commonActions.hideToast());

  return (
    <>
      <CssBaseline />
      <Snackbar
        open={!!toast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        message={toast}
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseToast}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;

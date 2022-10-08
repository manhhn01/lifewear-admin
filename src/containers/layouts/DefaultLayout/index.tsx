import { Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../../store";
import { MainStyled } from "./DefaultLayout.styled";
import Drawer from "./Drawer";
import Header from "./Header";

const DefaultLayout = () => {
  const drawerOpen = useSelector((state: RootState) => state.common.drawerOpen);

  return (
    <Box minHeight="100vh">
      <Header />
      <Drawer />
      <MainStyled open={drawerOpen}>
        <Box p={2}>
          <Outlet />
        </Box>
      </MainStyled>
    </Box>
  );
};

export default DefaultLayout;

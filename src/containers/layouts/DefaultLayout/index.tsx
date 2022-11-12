import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import {
  Box,
  Paper,
} from "@mui/material";

import { RootState } from "../../../store";
import { theme } from "../../../themes";
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
        <Box
          p={4}
          height="100%"
          overflow="auto"
          bgcolor={theme.palette.blue[50]}
        >
          <Paper sx={{ minHeight: "100%", borderRadius: theme.spacing(1), p: 1 }}>
            <Outlet />
          </Paper>
        </Box>
      </MainStyled>
    </Box>
  );
};

export default DefaultLayout;

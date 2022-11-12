import MuiDrawer from "@mui/material/Drawer";
import {
  CSSObject,
  styled,
  Theme,
} from "@mui/material/styles";

import {
  HEADER_HEIGHT,
  SIDEBAR_CLOSED_WIDTH,
  SIDEBAR_WIDTH,
} from "../../../../constants";

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: SIDEBAR_CLOSED_WIDTH,
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root.MuiDrawer-paper": {
    top: HEADER_HEIGHT,
    borderRightColor: theme.palette.grey[100],
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

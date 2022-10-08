import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";
import { SIDEBAR_CLOSED_WIDTH, SIDEBAR_WIDTH } from "../../../constants";

interface MainProps {
  open: boolean;
}

export const MainStyled = styled("main", {
  shouldForwardProp: (propName) => propName !== "open",
})<MainProps>`
  transition: ${({ theme }) =>
    theme.transitions.create("padding", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
  padding-left: ${({ open }) => (open ? SIDEBAR_WIDTH : SIDEBAR_CLOSED_WIDTH)};
`;

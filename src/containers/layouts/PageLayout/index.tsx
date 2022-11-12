import React, { ReactNode } from "react";

import {
  Box,
  Divider,
  Typography,
} from "@mui/material";

import { theme } from "../../../themes";

interface PageLayoutProps {
  title?: string;
  titleButton?: ReactNode;
  showDivider?: boolean;
  children: ReactNode;
}

const PageLayout = ({
  title,
  titleButton,
  showDivider,
  children,
}: PageLayoutProps) => {
  return (
    <Box>
      <Box display="flex" alignItems="center">
        {!!title && (
          <Box p={2}>
            <Typography
              variant="h3"
              fontSize={theme.spacing(3)}
              fontWeight="bold"
            >
              {title}
            </Typography>
          </Box>
        )}
        {!!titleButton && (
          <Box ml="auto" px={2}>
            {titleButton}
          </Box>
        )}
      </Box>
      {showDivider && <Divider />}
      <Box>{children}</Box>
    </Box>
  );
};

export default PageLayout;

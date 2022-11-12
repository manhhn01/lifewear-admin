import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NAV_ITEMS } from "../../../../constants";
import { useRouteMatcher } from "../../../../hooks/useRouteMatcher";
import { RootState } from "../../../../store";
import { Drawer } from "./Drawer.styled";

const MiniDrawer = () => {
  const open = useSelector((state: RootState) => state.common.drawerOpen);
  const matcher = useRouteMatcher();

  return (
    <Drawer variant="permanent" open={open}>
      <List>
        {NAV_ITEMS.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to={item.url}
              selected={matcher(`${item.url}/*`)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                style={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MiniDrawer;

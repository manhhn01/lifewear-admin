import {
  useMemo,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useLocation } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import Logo from "../../../../components/Logo";
import {
  HEADER_HEIGHT,
  NAV_ITEMS,
  SIDEBAR_WIDTH,
} from "../../../../constants";
import { useRouteMatcher } from "../../../../hooks/useRouteMatcher";
import { RootState } from "../../../../store";
import { authActions } from "../../../../store/slices/authSlice";
import { commonActions } from "../../../../store/slices/commonSlice";
import { theme } from "../../../../themes";

const Header = () => {
  const matcher = useRouteMatcher();
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state: RootState) => state.common.drawerOpen);
  const [userEl, setUserEl] = useState<HTMLElement | null>(null);

  const navLabel = useMemo(
    () => NAV_ITEMS.find((nav) => matcher(`${nav.url}/*`))?.label,
    [matcher]
  );

  return (
    <Box
      display="flex"
      height={HEADER_HEIGHT}
      borderBottom={`1px solid ${theme.palette.grey[200]}`}
      alignItems="center"
    >
      <Box
        display="flex"
        width={SIDEBAR_WIDTH}
        justifyContent="center"
        alignItems="center"
      >
        <Logo size="small" />
        <IconButton
          color="primary"
          style={{
            backgroundColor: drawerOpen ? theme.palette.blue[200] : undefined,
          }}
          sx={{
            borderRadius: theme.spacing(1),

            "&:hover": {
              backgroundColor: theme.palette.blue[100],
            },
          }}
          onClick={() =>
            dispatch(commonActions.toggleDrawer({ open: !drawerOpen }))
          }
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Box display="flex" flex={1} px={3}>
        <Box display="flex" justifyContent="center" alignItems="center" mr={2}>
          <Typography
            variant="h2"
            fontSize={theme.spacing(2.5)}
            fontWeight="600"
            color={theme.palette.primary.main}
          >
            {navLabel}
          </Typography>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            size="small"
            placeholder="Search..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: theme.spacing(45),
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton
            onClick={(e) => {
              setUserEl(e.currentTarget);
            }}
          >
            <Avatar
              sx={{ width: theme.spacing(4), height: theme.spacing(4) }}
            />
          </IconButton>
          <Menu
            open={!!userEl}
            anchorEl={userEl}
            onClose={() => setUserEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              sx={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => dispatch(authActions.clearToken())}
            >
              <LogoutIcon
                fontSize="small"
                htmlColor={theme.palette.grey[600]}
              />
              <Typography ml={1}>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

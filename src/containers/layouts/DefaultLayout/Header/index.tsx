import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../../../components/Logo";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../../../../constants";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../../../themes";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { commonActions } from "../../../../store/slices/commonSlice";

const Header = () => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state: RootState) => state.common.drawerOpen);

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        display: "flex",
        alignItem: "center",
        height: HEADER_HEIGHT,
      }}
    >
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
          onClick={() => dispatch(commonActions.toggleDrawer(!drawerOpen))}
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
            Dashboard
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
          <IconButton>
            <Avatar
              sx={{ width: theme.spacing(4), height: theme.spacing(4) }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

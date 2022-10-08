import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import { theme } from '../themes';

export const SIDEBAR_WIDTH = theme.spacing(32.5);
export const SIDEBAR_CLOSED_WIDTH = theme.spacing(8);
export const HEADER_HEIGHT = theme.spacing(8.5);

export const NAV_ITEMS = [
  {
    icon: <HomeIcon />,
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: <Inventory2Icon />,
    label: "Products",
    url: "/products",
  },
  {
    icon: <CategoryIcon />,
    label: "Categories",
    url: "/categories",
  },
];

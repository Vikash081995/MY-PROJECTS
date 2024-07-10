import { NavLink } from "react-router-dom";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";

import { useLayoutContext } from "../hooks";

import { pagesRoutes } from "../utils/pagesRoutes";

const drawerWidth = 240;

const simpleStyles = {
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0)"
  }
};
const Sidebar = () => {
  const { openSidebar } = useLayoutContext();
  return (
    <div>
      <Drawer
        open={openSidebar}
        hideBackdrop={true}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9
        }}
      >
        <Toolbar />
        <Box sx={simpleStyles.drawer} role="presentation">
          <List>
            {pagesRoutes.map(({ path, label, icon }) => {
              return (
                <NavLink to={path}>
                  <ListItem
                    key={label}
                    sx={{
                      "&:hover": { color: "orange" },
                      fontWeight: 200
                    }}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} sx={{ letterSpacing: 0.5 }} />
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;

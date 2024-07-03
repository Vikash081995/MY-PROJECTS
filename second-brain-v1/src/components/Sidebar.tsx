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
import { IoBookmarks, IoBookSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

type LinksToPageType = {
  path: string;
  label: string;
  icon: any;
}[];

const LinksToPages: LinksToPageType = [
  {
    path: "/bookmarks",
    label: "Bookmarks",
    icon: <IoBookmarks />
  },
  {
    path: "/courses",
    label: "Courses",
    icon: <IoBookSharp />
  },
  {
    path: "/para",
    label: "Para",
    icon: <GrProjects />
  },
  {
    path: "/youtube",
    label: "Youtube",
    icon: <FaYoutube />
  }
];

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
const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <div>
      <Drawer
        open={open}
        hideBackdrop={true}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9
        }}
      >
        <Toolbar />
        <Box sx={simpleStyles.drawer} role="presentation">
          <List>
            {LinksToPages.map(({ path, label, icon }) => {
              return (
                <NavLink to={path}>
                  <ListItem key={label} disablePadding>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
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

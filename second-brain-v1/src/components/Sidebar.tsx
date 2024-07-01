import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
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
const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const toggleDrawer = (toggle: boolean) => {
    setOpen(toggle);
  };

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
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

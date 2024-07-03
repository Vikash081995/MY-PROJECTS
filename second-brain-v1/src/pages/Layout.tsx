import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Toolbar } from "@mui/material";

const RootLayout = () => {
  const [open, setOpen] = useState<boolean>(true);

  const openStyle = {
    marginLeft: "240px",
    padding: "3rem"
  };

  const closeStyle = {
    marginLeft: "0",
    padding: "3rem"
  };

  return (
    <div>
      <header>Second Brain </header>
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} />
      <section style={open ? openStyle : closeStyle}>
        <Toolbar />
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;

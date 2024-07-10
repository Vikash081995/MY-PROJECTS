import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";
import { Toolbar } from "@mui/material";

type LayoutContextValue = {
  openSidebar: boolean;
  toggleSidebar: () => void;
};

export const LayoutContext = createContext<LayoutContextValue | null>(null);

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const openStyle = {
    marginLeft: "240px",
    padding: "3rem"
  };

  const closeStyle = {
    marginLeft: "0",
    padding: "3rem"
  };

  return (
    <LayoutContext.Provider value={{ toggleSidebar, openSidebar }}>
      <header>Second Brain </header>
      <Navbar />
      <Sidebar />
      <section style={openSidebar ? openStyle : closeStyle}>
        <Toolbar />
        <Outlet />
      </section>
    </LayoutContext.Provider>
  );
};

export default DashboardLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div>
      <header>Second Brain </header>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;

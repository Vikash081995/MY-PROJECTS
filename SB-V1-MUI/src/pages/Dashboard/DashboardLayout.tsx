import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Dashboard.module.scss";
import { useLayoutContext } from "../../hooks";

const DashboardLayout = () => {
  const { openSidebar } = useLayoutContext();

  return (
    <div className={styles.dashboarLayout}>
      <header className={styles.header}>Second Brain </header>
      <Navbar />
      <Sidebar />
      <section className={openSidebar ? styles.openStyle : styles.closeStyle}>
        <Toolbar />
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;

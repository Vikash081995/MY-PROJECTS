import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </section>
  );
};

export default RootLayout;

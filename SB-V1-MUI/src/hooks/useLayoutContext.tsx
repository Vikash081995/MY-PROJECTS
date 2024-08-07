import { useContext } from "react";
import { LayoutContext } from "../context/DashboardContext/DashboardContext";

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

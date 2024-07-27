import { useContext } from "react";

import { LayoutContext } from "../pages/DashboardLayout";

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

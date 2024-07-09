import { useContext } from "react";

import { LayoutContext } from "../pages/Layout";

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

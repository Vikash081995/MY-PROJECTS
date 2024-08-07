import { createContext, useState, ReactNode } from "react";

type LayoutContextValue = {
  openSidebar: boolean;
  toggleSidebar: () => void;
};

export const LayoutContext = createContext<LayoutContextValue | null>(null);

export const DashboardContext = ({ children }: { children: ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };


  return (
    <LayoutContext.Provider value={{ toggleSidebar, openSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};

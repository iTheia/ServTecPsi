import React, { createContext, useContext, useState } from "react";
import { DashboardLayout } from "./Layout";

export const DashBoardContext = createContext({
  mobileOpen: false,
  handleDrawerToggle: () => {},
});

export function useDashContext() {
  return useContext(DashBoardContext);
}

export const DashBoardPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <DashBoardContext.Provider value={{ mobileOpen, handleDrawerToggle }}>
      <DashboardLayout />
    </DashBoardContext.Provider>
  );
};

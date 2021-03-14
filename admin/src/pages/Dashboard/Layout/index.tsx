import { ThemeProvider } from "@material-ui/core";
import React, { Fragment } from "react";
import { RouterComponent } from "../../../components/Router";
import { SideBar } from "../../../components/Sidebar";
import { theme } from "./theme";
import { dashboardLinks, dashboardRoutes, AppRoutes, Appinks } from "../routes";
import { useRoutes } from "../../../hooks";
import { useDashboardStyles } from "../styles";
import { useDashContext } from "..";
import { Header } from "../Header";

export const DashboardLayout = () => {
  const classes = useDashboardStyles();
  const [routes, links] = useRoutes(dashboardRoutes, dashboardLinks);
  const { mobileOpen, handleDrawerToggle } = useDashContext();
  const barProps = {
    links: [...Appinks, ...links],
    classes,
    mobileOpen,
    handleDrawerToggle,
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <SideBar {...barProps} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <RouterComponent routes={[...routes, ...AppRoutes]} />
          </main>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

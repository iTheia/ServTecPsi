import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useDashboardStyles } from "../styles";
import { useDashContext } from "../index";

export const Header = () => {
  const classes = useDashboardStyles();
  const { handleDrawerToggle } = useDashContext();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Sistema de psicologia
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

import {
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  ListItemText,
  useTheme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { ILink } from "../../constants";

interface Props {
  links: ILink[];
  classes: any;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  })
);
export const SideBar: React.FC<Props> = ({
  links,
  classes,
  handleDrawerToggle,
  mobileOpen,
}) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {links.map((link) => (
          <ReactLink
            className={styles.link}
            to={link.to}
            key={link.description}
          >
            <ListItem button>
              <ListItemIcon>{link.icon && <link.icon />}</ListItemIcon>
              <ListItemText>{link.description}</ListItemText>
            </ListItem>
          </ReactLink>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      <Hidden smUp>
        <Drawer
          variant='temporary'
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

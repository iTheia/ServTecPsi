import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Button,
  Container,
} from "@material-ui/core";
import { ILink } from "../../../../constants";
import { Link } from "react-router-dom";

interface Props {
  links: ILink[];
}
const Header = ({ links }: Props) => (
  <AppBar position='static'>
    <Container>
      <Toolbar>
        <Typography
          style={{ flexGrow: 1 }}
          component='h2'
          variant='h5'
          color='inherit'
        >
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            Titulo
          </Link>
        </Typography>
        {links.map((link) => (
          <Link
            key={link.to}
            style={{ color: "white", textDecoration: "none" }}
            to={link.to}
          >
            <Button color='inherit' variant='text'>
              {link.description}
            </Button>
          </Link>
        ))}
      </Toolbar>
    </Container>
  </AppBar>
);
export default Header;

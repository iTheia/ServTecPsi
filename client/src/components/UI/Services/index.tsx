import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { TitleComponent } from "../Title";
import { ServicesContainer } from "./Container";

export const Services = () => {
  return (
    <Container>
      <TitleComponent title='Servicios' />
      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod vel
        quidem nostrum, accusantium doloremque repellendus dolorem suscipit
        provident inventore deleniti.
      </Typography>
      <Grid container>
        <ServicesContainer />
      </Grid>
    </Container>
  );
};

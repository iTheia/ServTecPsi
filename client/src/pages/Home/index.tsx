import { Box, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import List from "./List";
import { Services } from "../../components";
import Trending from "./Trending";

export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Box
        height={"50vh"}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box>
          <Typography variant='h1'>&quot;Frase del dia&quot;</Typography>
        </Box>
      </Box>
      <Services />
      <Trending />
      <List title='Ultimos articulos' url='posts/' />
      <List title='Ultimos cuestionarios' url='tests/' />
    </Fragment>
  );
};

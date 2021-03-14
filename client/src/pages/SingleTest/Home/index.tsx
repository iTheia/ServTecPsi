import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { AccessTime } from "@material-ui/icons";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Home() {
  const { url } = useRouteMatch();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant='h4'>Titulo</Typography>
        <Box mt={2}>
          <Grid container alignItems='center'>
            <Grid item xs={6} container alignItems='center'>
              <AccessTime />
              <Typography>Tiempo estimado: </Typography>
              <Typography> 15min </Typography>
            </Grid>
            <Grid item xs={3}>
              <Link to={`${url}/questions`} style={{ textDecoration: "none" }}>
                <Button variant='contained' color='primary'>
                  Comenzar
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Box display='flex' mt={2} justifyContent='start' alignItems='center'>
            <Typography>Puntuacion</Typography>
            <Rating name='read-only' value={2.5} readOnly />
          </Box>
        </Box>
        <Box mt={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eius
          accusantium provident neque rem necessitatibus voluptas unde ipsa nemo
          tempore. Animi sunt officiis ab tenetur asperiores vel rem, corporis,
          doloribus ducimus tempora sapiente! Atque nam perferendis officia ad
          nesciunt, fugiat, sunt obcaecati nemo eius facilis velit error,
          ducimus inventore excepturi.
        </Box>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Paper
          style={{
            height: 350,
            width: "100%",
            backgroundImage: `url("https://picsum.photos/600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
}

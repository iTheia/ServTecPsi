import Card from "./Card";
import { Box, Container, Grid } from "@material-ui/core";
import { ITrending, services } from "./const";
import { useStyles } from "./styles";
import { useGet } from "../../../hooks";
import React, { useEffect } from "react";

export default function Trending() {
  const classes = useStyles();
  const { setData, data, loading } = useGet<ITrending[]>("", []);
  useEffect(() => {
    setData((prev) => [...services, ...prev]);
  }, [setData]);
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          {loading
            ? null
            : data.map((service, index) => (
                <Grid
                  item
                  key={index}
                  xs={index === 0 || index === services.length - 1 ? 6 : 3}
                >
                  <Card {...service} />
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
}

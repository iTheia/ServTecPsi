import { Container, Grid, Button, Box, Card } from "@material-ui/core";
import React from "react";
import { TitleComponent } from "../../../components";
import { useGet } from "../../../hooks";
import { dummyArray } from "../../../util";
import { Item } from "./Item";

interface Props {
  title: string;
  url: string;
}
export default function List({ title, url }: Props) {
  const { data, loading, error } = useGet(`${url}trend`, []);
  console.log(data);
  return (
    <Box mt={2} mb={3}>
      <Container>
        <Box ml={1}>
          <TitleComponent title={title} />
        </Box>
        <Grid container spacing={1}>
          {loading
            ? dummyArray(8).map((_, index) => (
                <Grid item xs={3} key={index}>
                  <Card style={{ minHeight: 150 }}></Card>
                </Grid>
              ))
            : data.map((element: any) => (
                <Grid item xs={3} key={element.slug}>
                  <Item post={element} prefix={url} key={element.slug} />
                </Grid>
              ))}
        </Grid>
        <Button style={{ margin: 10 }} variant='contained' color='primary'>
          Ver mas
        </Button>
      </Container>
    </Box>
  );
}

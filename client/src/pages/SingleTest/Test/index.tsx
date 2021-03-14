import { Box, Button, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { LinearProgressWithLabel } from "./LinearProgress";
import Question from "./Question";
import { gen } from "./util";

export default function Test() {
  return (
    <Fragment>
      <Box width='50%'>
        <Typography variant='h4'>Titulo</Typography>
        <LinearProgressWithLabel value={15} />
        <Box mt={2}>
          {gen(5).map((pregunta) => (
            <Question {...pregunta} />
          ))}
        </Box>
        <Box mt={2} display='flex' alignItems='center'>
          <Box mr={2}>
            <Button size='small' color='primary' variant='contained'>
              Anterior
            </Button>
          </Box>
          <Box>
            <Button size='small' color='primary' variant='contained'>
              Siguiente
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

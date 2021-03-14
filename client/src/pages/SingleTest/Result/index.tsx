import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";

export default function Result() {
  return (
    <Box>
      <Container maxWidth='md'>
        <Typography variant='h4'>Titulo</Typography>
        <Typography variant='h6'>Resultado</Typography>
        <Box
          justifyContent='center'
          alignItems='center'
          display='flex'
          mt={2}
          mb={2}
        >
          <img
            style={{
              borderRadius: 15,
              overflow: "hidden",
            }}
            src='https://picsum.photos/500/200'
            alt=''
          />
        </Box>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          aliquam totam dignissimos modi soluta, libero delectus. Numquam eum
          aut atque unde ea sapiente, impedit odit, nemo, voluptas dolore vero
          voluptate.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sint
          necessitatibus magnam modi, quas rerum! Quis commodi tempore cum quae?
        </Typography>
        <Button variant='contained' color='primary'>
          Conoce mas
        </Button>
      </Container>
    </Box>
  );
}

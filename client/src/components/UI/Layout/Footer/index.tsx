import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Box mt={2} bgcolor='#ededed'>
        <Container>
          <Typography variant='h5' component='h2'>
            Instituto Tecnológico de Durango
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Typography>Informacion de contacto</Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Felipe Pescador 1830 Ote. Col. Nueva Vizcaya Durango, Dgo.
                    México C.P. 34080
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>TEL (618) 829-0900</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <Typography>Redes</Typography>
              <List>
                <ListItem>
                  <ListItemText>Pagina oficial</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Pagina oficial</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Pagina oficial</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <img src='./images/sep.png' alt='' width='100%' />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

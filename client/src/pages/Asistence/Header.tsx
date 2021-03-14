import { Box, Typography } from "@material-ui/core";
import React from "react";
import { TitleComponent } from "../../components";

export default function Header() {
  return (
    <Box mt={5}>
      <TitleComponent title='Asistencia' />
      <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quo
        earum perspiciatis error ipsa voluptate voluptates repellat itaque sunt
        vel.
      </Typography>
    </Box>
  );
}

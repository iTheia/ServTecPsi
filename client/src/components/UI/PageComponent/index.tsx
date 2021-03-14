import { Box, Container } from "@material-ui/core";
import React, { Fragment } from "react";

export const PageComponent: React.FC = ({ children }) => {
  return (
    <Box marginTop={3} minHeight='80vh'>
      <Container>
        <Fragment>{children}</Fragment>
      </Container>
    </Box>
  );
};

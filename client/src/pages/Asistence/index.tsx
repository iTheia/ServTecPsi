import { Box } from "@material-ui/core";
import React from "react";
import { PageComponent, Chat } from "../../components";
import Header from "./Header";

export const AssistencePage: React.FC = () => {
  return (
    <PageComponent>
      <Header />
      <Box mt={2}>
        <Chat />
      </Box>
    </PageComponent>
  );
};

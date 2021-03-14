import { Box, Grid } from "@material-ui/core";
import React from "react";
import Conversation from "./Conversation";
import LeftPanel from "./LeftPanel";
import { ChatProps } from "./types";

export const Chat: React.FC<ChatProps> = ({ rigthPanel, leftPanel, url }) => {
  if (leftPanel === false) {
    return <Box>{rigthPanel ? rigthPanel : <Conversation />}</Box>;
  }
  return (
    <Grid container style={{ height: "70vh" }}>
      <Grid xs={4}>{leftPanel ? leftPanel : <LeftPanel />}</Grid>
      <Grid xs={8}>
        {rigthPanel ? rigthPanel : <Conversation url={url ? url : ""} />}
      </Grid>
    </Grid>
  );
};

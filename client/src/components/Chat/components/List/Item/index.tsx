import { Avatar, Box, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { capitalize } from "../../../util";
import { useStyles } from "./style";

interface Props {
  item: {
    talker: {
      name: string;
      image: string;
    };
    lastMessage: {
      date: string;
      content: string;
    };
  };
}

export const ListItem: React.FC<Props> = ({
  item: { lastMessage, talker },
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.container}>
      <Avatar className={classes.avatar} src={talker.image} />
      <Typography
        variant='subtitle1'
        className={classes.firstMessage}
        color='primary'
      >
        {capitalize(talker.name)}
      </Typography>
      <Typography className={classes.firstMessage} variant='subtitle2'>
        {lastMessage.date}
      </Typography>
      <Typography
        noWrap={true}
        paragraph
        variant='subtitle2'
        className={classes.firstMessage}
        style={{
          gridColumn: "span 2",
        }}
      >
        {lastMessage.content}
      </Typography>
    </Box>
  );
};

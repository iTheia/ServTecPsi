import { Box, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

interface Props {
  message: {
    content: string;
    date: string;
    isMine: boolean;
  };
}

export const Message: React.FC<Props> = ({ message }) => {
  const theme = useTheme();

  const classes = useStyles({ ...theme, isMine: message.isMine });
  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Typography variant='body1' className={classes.text}>
          {message.content}
        </Typography>
        <Typography color='textSecondary' variant='subtitle2'>
          {message.date}
        </Typography>
      </Box>
    </Box>
  );
};

import { Box, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

export default function LeftPanel() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <TextField
          label='Buscar'
          color='primary'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

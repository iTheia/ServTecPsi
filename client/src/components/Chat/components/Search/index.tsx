import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

export const ChatSearch = () => {
  return (
    <TextField
      label='Buscar'
      color='primary'
      InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

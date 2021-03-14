import { Box, Grid } from "@material-ui/core";
import React, { createContext, useState } from "react";
import Sections from "./Sections";
import List from "./List";
import { TitleComponent } from "../UI";

interface Props {
  url: string;
  title: string;
}

interface IContext {
  url: string;
  queryUrl: string;
}
export const SearchContext = createContext<IContext>({
  url: "",
  queryUrl: "",
});

export const SearchEngine: React.FC<Props> = ({ url, title }) => {
  const [queryUrl, setQueryUrl] = useState("limit=10");

  return (
    <SearchContext.Provider value={{ url, queryUrl }}>
      <Box mt={3} mb={2}>
        <TitleComponent title={title} />
      </Box>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Sections />
        </Grid>
        <Grid item xs={8}>
          <List />
        </Grid>
      </Grid>
    </SearchContext.Provider>
  );
};

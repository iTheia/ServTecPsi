import { useTheme } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface Props {
  data: any[];
  columns: any[];
}

export const Table: React.FC<Props> = ({ data, columns }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return <div className={classes.root}>asd</div>;
};

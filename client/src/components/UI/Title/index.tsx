import { Typography, useTheme } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface Props {
  title: string;
  variant?:
    | "h4"
    | "inherit"
    | "button"
    | "overline"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "srOnly"
    | undefined;
}
export const TitleComponent: React.FC<Props> = ({ title, variant = "h4" }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Typography variant={variant} component='h1' className={styles.title}>
      {title}
    </Typography>
  );
};

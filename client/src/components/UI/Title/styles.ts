import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      width: 56,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.palette.primary.main,
      marginTop: -10,
    },
    "&::before": {
      content: '""',
      display: "table",
    },
  },
}));

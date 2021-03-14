import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: 10,
      marginBottom: 10,
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

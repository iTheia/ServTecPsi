import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 40,
    marginBottom: 40,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

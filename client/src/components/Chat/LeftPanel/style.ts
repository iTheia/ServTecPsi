import { makeStyles } from "@material-ui/core";
import { HEADER_HEIGHT } from "../style";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
  },
  header: {
    height: HEADER_HEIGHT,
    padding: 10,
  },
}));

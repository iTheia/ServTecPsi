import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
  container: {
    borderBottom: `1px solid ${palette.primary.light}`,
    padding: "5px 10px",
    display: "grid",
    gridTemplateColumns: "40px 1fr max-content",
    gridGap: "5px",
    backgroundColor: palette.grey[50],
  },
  avatar: { gridRow: "span 2", justifySelf: "center", alignSelf: "center" },
  firstMessage: {
    color: palette.grey[900],
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
  },
}));

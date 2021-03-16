import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
  form: {
    display: "flex",
    padding: "0 45px",
    alignItems: "center",
    borderTop: `1px solid ${palette.grey[50]}`,
    backgroundColor: palette.grey[500],
  },
  input: {
    flex: "1 0",
    borderRight: "none",
    borderTopRightRadius: "0",
  },
  button: {
    height: "56px",
    flex: "0 0 90px",
    borderRadius: "0 6px 6px 0",
    border: `1px solid ${palette.primary.main}`,
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
}));

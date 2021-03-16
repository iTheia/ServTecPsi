import { makeStyles, Theme } from "@material-ui/core";

interface Props {
  isMine: boolean;
}

const container = {
  display: "grid",
  gridTemplateColumns: "70%",
  marginBottom: "8px",
};
const text = {
  padding: "9px 14px",
  marginBottom: "5px",
};
const content = {
  display: "grid",
};
export const useStyles = makeStyles<Theme, Props>(({ palette }) => ({
  container: ({ isMine }) =>
    isMine ? { ...container, justifyContent: "end" } : { ...container },
  text: ({ isMine }) =>
    isMine
      ? {
          ...text,
          backgroundColor: palette.primary.dark,
          color: palette.primary.contrastText,
          borderRadius: "14px 14px 0 14px",
        }
      : {
          ...text,
          backgroundColor: palette.grey[500],
          border: `1px solid ${palette.grey[500]}`,
          borderRadius: "14px 14px 14px 0",
        },
  content: ({ isMine }) =>
    isMine ? { ...content, justifyItems: "end" } : { ...content },
}));

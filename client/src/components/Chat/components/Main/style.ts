import { makeStyles, Theme } from "@material-ui/core";
import { CSSProperties } from "react";

export const HEADER_HEIGHT = 61;
export const FOOTER_HEIGHT = 78;

export const CHAT_STYLES: CSSProperties = {
  display: "flex",
  flexDirection: "column-reverse",
  padding: "10px 20px",
};

interface Props {
  leftPanel: boolean;
}
export const useStyles = makeStyles<Theme, Props>((theme) => ({
  root: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: ({ leftPanel }) => (leftPanel ? "275px 1fr" : "1fr"),
    gridTemplateRows: `${HEADER_HEIGHT}px ${HEADER_HEIGHT}px  1fr ${FOOTER_HEIGHT}px`,
  },
}));

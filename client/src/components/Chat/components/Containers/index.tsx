import { Box } from "@material-ui/core";
import React from "react";

interface Props {
  styles?: React.CSSProperties;
}
export const HeaderContainer: React.FC<Props> = ({ children, styles }) => (
  <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    padding='10px 20px'
    zIndex='1'
    bgcolor='#EEE'
    boxShadow='0 1px 3px -1px #2e2e2e'
    style={styles}
  >
    {children}
  </Box>
);
export const ScrollContainer: React.FC<Props> = ({ children, styles }) => (
  <Box
    style={{
      overflowY: "scroll",
      gridRow: "span 2",
      ...styles,
    }}
  >
    {children}
  </Box>
);

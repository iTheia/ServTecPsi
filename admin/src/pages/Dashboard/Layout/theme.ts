import { createMuiTheme, Theme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

interface ITheme extends Theme {
  custom?: {};
}

export const theme: ITheme = createMuiTheme({
  palette: {
    primary: {
      main: "#111",
    },
    secondary: {
      main: green[500],
    },
  },
});
/* 
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen",
    },
  }, */

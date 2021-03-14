import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { Providers } from "./components/Providers";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);

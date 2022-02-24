import React from "react";
import ReactDOM from "react-dom";
import Providers from "./Providers";
import "./styles/index.scss";
import App from "./App";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);

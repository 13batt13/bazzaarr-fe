import { render } from "react-dom";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app";
import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

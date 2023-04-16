import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app";
import "shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

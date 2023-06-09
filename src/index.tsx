import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "app/styles/index.scss";

import App from "app/App";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers";
import { ThemeProvider } from "app/providers/themeProvider";
import { StoreProvider } from "app/providers/storeProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);

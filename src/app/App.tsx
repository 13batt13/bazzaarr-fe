import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Header } from "widgets/header";

import "./styles/index.scss";
import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/themeProvider";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(window.location.pathname);
  }, []);

  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  );
}

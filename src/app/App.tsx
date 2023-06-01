import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Header } from "widgets/header";

import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/themeProvider";
import { useDispatch } from "react-redux";
import { userActions } from "entities/user";

export default function App() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  useEffect(() => {
    navigate(window.location.pathname);
  }, [navigate]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  );
}

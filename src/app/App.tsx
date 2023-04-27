import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Header } from "widgets/header";

import "./styles/index.scss";
import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(window.location.pathname);
  }, []);

  return (
    <Suspense fallback="">
      <Header />
      <AppRouter />
    </Suspense>
  );
}

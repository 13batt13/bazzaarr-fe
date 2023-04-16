import { AppRouting } from "app/providers/router/AppRouting";
import { Header } from "widgets/header";

import "./styles/index.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(window.location.pathname);
  }, []);

  return (
    <>
      <Header />
      <AppRouting />
    </>
  );
}

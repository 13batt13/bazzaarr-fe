import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = ({ children }: { children: ReactElement }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

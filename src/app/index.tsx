import PagesRouting from "pages";
import { Header } from "widgets/header";
import { withProviders } from "./providers";

import "./styles/index.scss";

function App() {
  return (
    <>
      <Header />
      <PagesRouting />
    </>
  );
}
export default withProviders(App);

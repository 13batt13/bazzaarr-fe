import { withProviders } from "app/providers";

import PagesRouting from "pages";
import Header from "widgets/header/Header";

function App() {
  return (
    <>
      <Header />
      <PagesRouting />
    </>
  );
}
export default withProviders(App);

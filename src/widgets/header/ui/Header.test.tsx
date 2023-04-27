import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header test", () => {
  test("renders", () => {
    const { getByTestId } = renderWithTranslation(<Header />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId("header")).toBeInTheDocument();
  });
});

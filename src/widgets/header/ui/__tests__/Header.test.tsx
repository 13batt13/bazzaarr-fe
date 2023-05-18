import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Header } from "../Header";

describe("Header test", () => {
  test("renders", () => {
    const { getByTestId } = componentRender(<Header />);

    expect(getByTestId("header")).toBeInTheDocument();
  });
});

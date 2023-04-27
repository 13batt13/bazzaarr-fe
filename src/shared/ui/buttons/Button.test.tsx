import { render } from "@testing-library/react";
import { Button } from "shared/ui/buttons/Button";

describe("Button test", () => {
  test("renders", () => {
    const { getByText } = render(<Button title="test" />);
    expect(getByText("test")).toBeInTheDocument();
  });
});

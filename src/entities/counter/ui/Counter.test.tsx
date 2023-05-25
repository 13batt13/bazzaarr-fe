import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("should render successfully", () => {
    const { getByTestId } = componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    expect(getByTestId("title-value")).toHaveTextContent("10");
  });
  test("should increment", async () => {
    const { getByTestId } = componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.click(getByTestId("button-increment"));

    expect(getByTestId("title-value")).toHaveTextContent("11");
  });
  test("should decrement", async () => {
    const { getByTestId } = componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.click(getByTestId("button-decrement"));

    expect(getByTestId("title-value")).toHaveTextContent("9");
  });
});

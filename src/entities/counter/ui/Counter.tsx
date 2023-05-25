/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/buttons/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <span>value= </span>
      <span data-testid="title-value">{counterValue}</span>
      <Button data-testid="button-increment" onClick={increment}>
        +
      </Button>
      <Button data-testid="button-decrement" onClick={decrement}>
        -
      </Button>
    </div>
  );
};

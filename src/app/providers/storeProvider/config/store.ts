import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { loginReducer } from "features/authByUsername";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

// TODO REWORK THIS
const store = createReduxStore();

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//

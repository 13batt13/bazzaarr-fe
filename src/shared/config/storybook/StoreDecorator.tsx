import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/storeProvider";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (Story: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );

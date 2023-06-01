/* eslint-disable i18next/no-literal-string */
import { Button } from "shared/ui/buttons/Button";

import { Input } from "shared/ui/inputs/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "app/providers/storeProvider/config/store";
import { ReduxStoreWithManager } from "app/providers/storeProvider";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DinamicModuleLoader/DinamicModuleLoader";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import styles from "./LoginForm.module.scss";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
  className?: string;
}
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginButtonClick = useCallback(() => {
    appDispatch(loginByUsername({ username, password }));
  }, [appDispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        {/* TODO SHOW ERROR WHEN LOGIN FAIL #34 */}
        username
        <Input
          onChange={onChangeUsername}
          className={styles.input}
          placeholder="username"
          value={username}
        />
        password
        <Input
          onChange={onChangePassword}
          className={styles.input}
          placeholder="password"
          value={password}
        />
        {/* TODO DISABLE BUTTON ON LOADING #34 */}
        <Button onClick={onLoginButtonClick}>Login</Button>
      </div>
    </DynamicModuleLoader>
  );
});
export default LoginForm;

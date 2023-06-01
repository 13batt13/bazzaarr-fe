/* eslint-disable i18next/no-literal-string */
import { Button } from "shared/ui/buttons/Button";

import { Input } from "shared/ui/inputs/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "app/providers/storeProvider/config/store";
import { loginActions } from "../../model/slice/loginSlice";
import styles from "./LoginForm.module.scss";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const { username, password } = useSelector(getLoginState);

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
  );
});

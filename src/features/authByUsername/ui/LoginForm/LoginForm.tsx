/* eslint-disable i18next/no-literal-string */
import { Button } from "shared/ui/buttons/Button";

import { Input } from "shared/ui/inputs/Input";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
    <div>
      username
      <Input className={styles.input} placeholder="username" />
      password
      <Input className={styles.input} placeholder="password" />
      <Button>Login</Button>
    </div>
  );
};

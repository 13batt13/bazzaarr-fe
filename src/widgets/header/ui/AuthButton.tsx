/* eslint-disable i18next/no-literal-string */
import { useState } from "react";
import { Button, ButtonTheme } from "shared/ui/buttons/Button";
import UserIcon from "shared/assets/icons/user.svg";

import { LoginModal } from "features/authByUsername";
import styles from "./Header.module.scss";

export default function Profile() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const showModal = () => {
    setIsModalOpened(true);
  };
  const hideModal = () => {
    setIsModalOpened(false);
  };

  return (
    <div>
      <Button onClick={showModal} theme={ButtonTheme.RED} type="button">
        <UserIcon className={styles.icon} />
        Log In
      </Button>
      {isModalOpened && (
        <LoginModal isOpen={isModalOpened} onClose={hideModal} />
      )}
    </div>
  );
}

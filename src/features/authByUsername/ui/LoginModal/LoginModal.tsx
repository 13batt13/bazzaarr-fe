import { Suspense } from "react";

import { Modal } from "shared/ui/modals/Modal";

import { classNames } from "shared/lib/classNames/classNames";
import { Spinner } from "shared/ui/spinner/Spinner";
import styles from "./LoginModal.module.scss";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Spinner />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};

import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  title = "",
  onClick = () => {},
}) => (
  <button onClick={onClick} type="button" className={styles.Button}>
    {children}
    {title}
  </button>
);

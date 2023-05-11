import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  BLACK = "black",
  RED = "red",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  title = "",
  theme = "",
  className = "",
  ...otherProps
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.Button, { [styles[theme]]: true }, [
        className,
      ])}
      {...otherProps}
    >
      {children}
      {title}
    </button>
  );
};

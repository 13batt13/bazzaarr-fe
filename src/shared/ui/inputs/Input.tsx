import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: string;
  readonly?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    readonly = false,
    ...otherProps
  }: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };
    return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          readOnly={readonly}
          {...otherProps}
        />
      </div>
    );
  }
);

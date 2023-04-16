import { ButtonHTMLAttributes, FC } from "react";
import { Link } from "react-router-dom";

interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  to: string;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  children,
  title,
  to,
}) => (
  <Link to={to}>
    <button>
      {children}
      {title}
    </button>
  </Link>
);

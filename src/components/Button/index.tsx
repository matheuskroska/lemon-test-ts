import { ReactNode } from "react";
import * as B from "./Button.styled";

import { ReactComponent as CrossSign } from "../../assets/images/icons/cross-sign.svg";
import { ReactComponent as ArrowLeft } from "../../assets/images/icons/arrow-left.svg";
import { ReactComponent as Sun } from "../../assets/images/icons/sun.svg";
import { ReactComponent as Moon } from "../../assets/images/icons/moon.svg";

/**
 * This function takes in a bunch of props, and returns a button with those props.
 * @param {ButtonProps}  - ButtonProps
 * @returns A React component
 */

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  variant: "primary" | "close-button" | "back-button" | "next-button" | "dark-mode" | "light-mode";
}

const isIcon = (variant: string): ReactNode => {
  switch (variant) {
    case "close-button":
      return <CrossSign />;
    case "back-button":
      return <ArrowLeft />;
    case "next-button":
      return <ArrowLeft />;
    case "dark-mode":
      return <Moon/>;
    case "light-mode":
      return <Sun/>
    default:
      return null;
  }
};

export const Button = ({ onClick, variant = "primary", children = isIcon(variant), ...props }: ButtonProps) => {
  return (
    <B.Button variant={variant} onClick={onClick} {...props}>
      {children}
    </B.Button>
  );
};

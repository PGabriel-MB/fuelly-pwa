import React from "react";
import { generalButtonStyles, primaryButtonStyle, secondaryButtonStyle } from "./styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  styleType: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, styleType, disabled, ...props }) => {

  let buttonStyle = '';

  if (styleType == "primary") buttonStyle = generalButtonStyles + primaryButtonStyle;
  if (styleType == "secondary") buttonStyle = generalButtonStyles + secondaryButtonStyle;

  if (disabled) buttonStyle = buttonStyle + ` opacity-25`;

  return (
    <button className={buttonStyle} {...props}>{children}</button>
  )
}

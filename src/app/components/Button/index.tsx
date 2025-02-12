import React from "react";
import { generalButtonStyles, primaryButtonStyle, secondaryButtonStyle } from "./styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  styleType: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, styleType }) => {
  
  let buttonStyle = '';

  if (styleType == "primary") buttonStyle = generalButtonStyles + primaryButtonStyle;
  if (styleType == "secondary") buttonStyle = generalButtonStyles + secondaryButtonStyle;

  return (
    <button className={buttonStyle}>{children}</button>
  )
}

import React, { InputHTMLAttributes } from "react";
import { layoutStyle } from './styles';

export type TextFieldProps = {
  label: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  inputProps
}) => {
  return (
    <div className={layoutStyle}>
      <label htmlFor={inputProps?.id}>{label}</label>
      <input {...inputProps} />
    </div>
  );
}

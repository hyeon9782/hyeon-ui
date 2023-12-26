import React from "react";
import "./Button.css";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const colorClass = variant === "primary" ? "blue" : "red";
  return (
    <button
      style={{ backgroundColor: colorClass }}
      {...props}
      className="hyeon"
    >
      {props.children}
    </button>
  );
};

export default Button;

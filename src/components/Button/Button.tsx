import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const colorClass = variant === "primary" ? "blue" : "red";
  return (
    <button style={{ backgroundColor: colorClass }} {...props}>
      {text}
    </button>
  );
};

export default Button;

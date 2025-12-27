import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  bgColor?: string;
  textcolor?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({
  children,
  onClick,
  disabled,
  className,
  bgColor = "green-600",
  textcolor = "white",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`rounded-md bg-${bgColor} px-4 py-2 font-bold text-${textcolor} ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

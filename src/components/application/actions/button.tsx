import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import Loader from "@/components/application/indicators/loader";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "black" | "white";
  variant?: "solid" | "outline";
  disabled: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { type = "button", color = "primary", variant = "solid", disabled, isLoading, children, className, ...props },
  ref
) {
  return (
    <button
      type={type}
      className={`gs-btn -color--${color} -variant--${variant} ${isLoading ? "-loading" : null} ${className ? className : ""} `}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {isLoading ? <Loader size="small" /> : children}
    </button>
  );
});

export default Button;

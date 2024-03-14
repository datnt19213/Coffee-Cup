import {ButtonProps} from "../../types/Props";
import React from "react";

const variants = {
  default: "cursor-pointer px-3 w-auto h-4/5 rounded-full",
  icon: "cursor-pointer h-4/5 aspect-square rounded-full flex flex-shrink-0 justify-center item-center",
};

const modes = {
  line: "border-1 border-dark-green shadow bg-white text-dark-green hover:bg-dark-green transition-colors hover:text-white",
  fill: "bg-dark-green text-white hover:opacity-80 transition-opacity",
  ghost:
    "text-dark-green bg-transparent shadow-none hover:bg-gray-100 transition-colors",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  mode,
  children,
  className,
  ...props
}) => {
  const isVariants = variant === "default" ? variants.default : variants.icon;
  const isModes =
    mode === "ghost" ? modes.ghost : mode === "line" ? modes.line : modes.fill;
  return (
    <button {...props} className={`${isVariants} ${isModes} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

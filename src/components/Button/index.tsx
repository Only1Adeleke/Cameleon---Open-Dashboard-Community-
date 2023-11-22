import React from "react";

const shapes = { square: "rounded-none", round: "rounded" } as const;
const variants = {
  fill: {
    blue_gray_200: "bg-blue_gray-200 text-gray-900_01",
    gray_900_05: "bg-gray-900_05 text-blue_gray-200",
    green_A400_19: "bg-green-A400_19 text-green-A400_01",
  },
  outline: {
    blue_gray_200:
      "border border-blue_gray-200 border-solid text-blue_gray-200",
  },
} as const;
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-[15px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "sm",
  variant = "fill",
  color = "blue_gray_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

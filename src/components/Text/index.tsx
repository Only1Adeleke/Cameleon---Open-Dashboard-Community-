import React from "react";

const sizeClasses = {
  txtInterRegular14Bluegray200: "font-inter font-normal",
  txtInterRegular14Bluegray600: "font-inter font-normal",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold58Lightblue400: "font-inter font-semibold",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterMedium14Bluegray200: "font-inter font-medium",
  txtInterRegular14BlueA700: "font-inter font-normal",
  txtInterRegular16Red60001: "font-inter font-normal",
  txtInterSemiBold58Bluegray200: "font-inter font-semibold",
  txtInterRegular16Bluegray600: "font-inter font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtInterMedium18Red500: "font-inter font-medium",
  txtInterRegular16GreenA40001: "font-inter font-normal",
  txtInterRegular16Bluegray200: "font-inter font-normal",
  txtInterRegular10: "font-inter font-normal",
  txtInterSemiBold58: "font-inter font-semibold",
  txtInterMedium13: "font-inter font-medium",
  txtInterMedium10: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterRegular14LightblueA200: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular20Bluegray200: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium13WhiteA700: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

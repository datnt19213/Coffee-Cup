import {ButtonHTMLAttributes, ReactNode} from "react";

export type BooleanProps = boolean;
export type NumberProps = number;
export type StringProps = string;
export type EventProps = ChangeEvent<HTMLInputElement>;
export type RefProps = ChangeEvent<HTMLDivElement>;

export type PopUpProps = {
  val: "Copied" | "Error" | "Warning" | "Success";
  MsgFnc?: () => void;
};

export type ContentProps = {
  type: StringProps;
  description: StringProps;
};

export type ButtonProps = {
  variant?: "default" | "icon";
  mode: "ghost" | "fill" | "line";
  children?: ReactNode;
  className?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkProps = {
  variant?: "default" | "icon";
  mode?: "ghost" | "fill" | "line";
  to: string;
  children?: ReactNode;
  className?: ReactNode;
} & ButtonHTMLAttributes<HTMLAnchorElement>;

export type ProductProps = {
  id: NumberProps;
  image: StringProps;
  type: StringProps;
  price: StringProps;
  description: StringProps;
};

export type BlogProps = {
  id: NumberProps;
  title: StringProps;
  image: StringProps;
  publisher: StringProps;
  datePublished: StringProps;
  content: ContentProps;
};

export type OrderProps = {
  type: StringProps;
  price: StringProps;
  close: (val: BooleanProps) => void;
};

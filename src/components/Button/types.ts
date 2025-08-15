import { type ReactNode } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  type?: ButtonType;
  name: string;
  onClick?: () => void;
  children?: ReactNode;
}

import { ReactNode } from "react";

export interface ButtonProps {
    action?: () => void;
    children: ReactNode;
    classes?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  }

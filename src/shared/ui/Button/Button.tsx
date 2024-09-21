import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  ReactNode,
} from "react";

// import ArrowIcon from './ll'
import clsx from "clsx";

import styles from "./Button.module.css";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "ghost" | "primary";
  // положение стрелки svg иконки
  arrow?: "down" | "none" | "right";
  children: ReactNode;
  className?: string;
}

export const Button = ({
  appearance = "primary",
  arrow = "none",
  children,
  className,
  ...rest
}: ButtonProps): ReactElement => {
  const classes = clsx(
    styles.button,
    [className],
    appearance === "primary" ? styles.primary : "",
    appearance === "ghost" ? styles.ghost : "",
  );

  return (
    <button {...rest} className={classes}>
      {children}
      {arrow !== "none" && (
        <span
          className={clsx(styles.arrow, arrow === "down" ? styles.down : "")}
        >
          {" "}
        </span>
      )}
    </button>
  );
};

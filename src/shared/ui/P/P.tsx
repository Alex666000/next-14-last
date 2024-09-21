import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import { clsx } from "clsx";

import s from "./P.module.scss";

interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children?: ReactNode;
  className?: string;
  size?: "l" | "m" | "s";
}

export const P = ({
  children,
  className,
  size = "m",
  ...rest
}: PProps): ReactElement => {
  return (
    <p
      className={clsx(s.p, [className], {
        [s.l]: size == "l",
        [s.m]: size == "m",
        [s.s]: size == "s",
      })}
      {...rest}
    >
      {children}
    </p>
  );
};

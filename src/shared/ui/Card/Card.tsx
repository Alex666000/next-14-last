import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import { clsx } from "clsx";

import s from "./Card.module.scss";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;

  color?: "blue" | "white";
}

export const Card = ({
  children,
  className,
  color = "white",
  ...rest
}: CardProps): ReactElement => {
  return (
    <div
      {...rest}
      className={clsx(s.Card, [className], {
        [s.blue]: color === "blue",
      })}
    >
      {children}
    </div>
  );
};

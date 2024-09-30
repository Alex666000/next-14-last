import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { clsx } from "clsx";

import s from "./Tag.module.scss";

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  color?: "ghost" | "gray" | "green" | "primary" | "red";
  // в тэг можно передать ссылку
  href?: string;
  size?: "m" | "s";
}

export const Badge = ({
  children,
  className,
  color = "ghost",
  href,
  size = "m",
  ...rest
}: TagProps) => {
  const TagElement = href ? "a" : "div"; // Определяем элемент тега

  return (
    <TagElement
      className={clsx(
        s.Tag,
        {
          [s.ghost]: color === "ghost",
          [s.gray]: color === "gray",
          [s.green]: color === "green",
          [s.m]: size === "m",
          [s.primary]: color === "primary",
          [s.red]: color === "red",
          [s.s]: size === "s",
        },
        [className],
      )}
      {...rest}
    >
      {children}
    </TagElement>
  );
};

import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from "react";

import { ArrowIcon } from "@/shared/assets/icons";
import clsx from "clsx";

import s from "./Button.module.scss";

export type ButtonProps<T extends ElementType = "button"> = {
  // куда смотрит стрелка: svg иконка
  arrow?: "down" | "none" | "right";
  as?: T;
  children?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "ghost" | "link" | "primary";
} & ComponentPropsWithoutRef<T>;

export const Button = forwardRef(
  <T extends ElementType = "button">(
    {
      arrow = "none",
      as: Component = "button",
      children,
      className,
      disabled = false,
      fullWidth = false,
      variant = "primary",
      ...rest
    }: ButtonProps<T>,
    ref: Ref<Element>,
  ) => {
    return (
      <Component
        className={clsx(
          s.Button,
          {
            [s.ghost]: variant === "ghost",
            [s.link]: variant === "link",
            [s.primary]: variant === "primary",
          },
          fullWidth && s.fullWidth,
          disabled && s.disabled,
          s[arrow],

          [className],
        )}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
        {/* когда стрелка направлена вниз */}
        {arrow !== "none" && (
          <span>
            <ArrowIcon
              className={clsx(s.arrow, {
                [s.down]: arrow === "down",
              })}
            />
          </span>
        )}
      </Component>
    );
  },
);

Button.displayName = "Button";

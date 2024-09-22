import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

import { clsx } from "clsx";

import s from "./Header.module.scss";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const Header = ({ className, ...props }: HeaderProps): ReactElement => {
  return (
    <div {...props} className={clsx(s.Header, [className])}>
      Header
    </div>
  );
};

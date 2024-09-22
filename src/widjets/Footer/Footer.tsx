import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

import { clsx } from "clsx";

import s from "./Footer.module.scss";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const Footer = ({ className, ...props }: FooterProps): ReactElement => {
  return (
    <div {...props} className={clsx(s.Footer, [className])}>
      Footer
    </div>
  );
};

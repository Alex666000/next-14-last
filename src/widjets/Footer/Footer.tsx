import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

import { clsx } from "clsx";
import { format } from "date-fns";

import s from "./Footer.module.scss";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const Footer = ({ className, ...props }: FooterProps): ReactElement => {
  return (
    <footer {...props} className={clsx(s.footer, [className])}>
      <div>OwlTop © 2020 - {format(new Date(), "yyy")} Все права защищены</div>
      <a href={"#"} rel={"noreferrer"} target={"_blank"}>
        Пользовательское соглашение
      </a>
      <a href={"#"} rel={"noreferrer"} target={"_blank"}>
        Политика конфиденциальности
      </a>
    </footer>
  );
};

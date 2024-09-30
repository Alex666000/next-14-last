import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

import Menu from "@/entyties/ui/Memu/Menu";
import LogoIcon from "@/shared/assets/icons/Logo.svg";
import { clsx } from "clsx";

import s from "./Sidebar.module.scss";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const Sidebar = ({
  className,
  ...props
}: SidebarProps): ReactElement => {
  return (
    <div className={clsx(s.Sidebar, [className])} {...props}>
      <LogoIcon className={s.logo} />
      <div>поиск...</div>
      <Menu />
    </div>
  );
};

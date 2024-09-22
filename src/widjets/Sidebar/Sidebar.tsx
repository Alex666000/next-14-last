import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

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
    <div {...props} className={clsx(s.Sidebar, [className])}>
      SidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebar
    </div>
  );
};

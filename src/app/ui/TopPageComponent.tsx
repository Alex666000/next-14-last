import { Fragment } from "react";

import { TopLevelCategory, TopPageModel } from "@/app/model/type/menu";
import { clsx } from "clsx";

import s from "./TopPageComponent.module.scss";

export interface TopPageComponentProps {
  className?: string;
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: any[];
}

export const TopPageComponent = ({
  className,
  firstCategory,
  page,
  products,
}: TopPageComponentProps) => {
  return (
    <Fragment className={clsx(s.TopPageComponent, [className])}>
      TopPageComponent
    </Fragment>
  );
};

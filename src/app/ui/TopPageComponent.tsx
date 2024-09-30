import { Fragment } from "react";

import { TopLevelCategory, TopPageModel } from "@/app/model/type/menu";
import { Htag } from "@/shared/ui/Htag";
import { clsx } from "clsx";

import s from "./TopPageComponent.module.scss";

import { Badge } from "../../shared/ui/Badge";

export interface TopPageComponentProps {
  className?: string;
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: any[];
}

export const TopPageComponent = ({
  className,
  firstCategory,
  page = {},
  products,
}: TopPageComponentProps) => {
  return (
    <div className={s.wrapper}>
      <div className={clsx(s.title, [className])}>
        <Htag tag={"h1"}>{page?.title ? page?.title : "Аналитика"}</Htag>
        <Badge color={"gray"} size={"m"}>
          {products && products.length}
        </Badge>
        <span>Сортировка</span>
      </div>
      <div className={s.products}>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={clsx(s.hhTitle, [className])}>
        <Htag tag={"h2"}>
          Вакансии - {page?.category ? page?.category : "Аналитика"}
        </Htag>
        <Badge color={"red"} size={"m"}>
          hh.ru
        </Badge>
        <div className={s.hh}></div>
      </div>
    </div>
  );
};

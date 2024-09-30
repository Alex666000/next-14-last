"use client";

import { useContext, useEffect } from "react";

import { getMenuDataForPage } from "@/app/model/helpers/getMenuDataForPage";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
  TopLevelCategory,
} from "@/app/model/type/menu";
import { AppContext } from "@/app/providers/context/appContext";
import clsx from "clsx";

import s from "./Menu.module.scss";

import BooksIcon from "../../../shared/assets/icons/Books.svg";
import CoursesIcon from "../../../shared/assets/icons/Courses.svg";
import ProductIcon from "../../../shared/assets/icons/Product.svg";
import ServicesIcon from "../../../shared/assets/icons/Servises.svg";

// Sidebar
const firstLevelMenu = [
  {
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
    name: "Курсы",
    route: "course",
  },
  {
    icon: ServicesIcon,
    id: TopLevelCategory.Services,
    name: "Сервисы",
    route: "/servises",
  },
  {
    icon: <BooksIcon />,
    id: "product",
    name: "Книги",
    route: "/books",
  },
  {
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
    name: "Продукты",
    route: "/product",
  },
];

// Простой обычный компонент который является асинхронным - делаем запрос на сервер
export default function Menu() {
  // на странице (или с любого серверного компонента) делаем запросы без всяких
  // getStaticProps и getServerSideProps и получаем данные с сервера
  // не обязательно как в 13 Некст только со страниц получать данные
  const { firstCategory, menu, setMenu } = useContext(AppContext);
  // console.log(menu);

  // Псоле вмонтирования установить меню
  useEffect(() => {
    setMenu && setMenu([]);
  }, []);

  const buildFirstLevel = () => {
    return (
      <div>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={clsx(s.firstLevel, {
                  [s.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </div>
    );
  };

  const buildSecondLevel = (menuItem: MenuItem[]) => {
    // Проверяем, что menuItem является массивом
    if (!Array.isArray(menuItem)) {
      return null;
    }

    return (
      <div className={s.secondBlock}>
        {menu.map((m) => {
          console.log(m); // Проверка значений menu

          return (
            <div key={m._id.secondCategory}>
              <div>{m._id.secondCategory}</div>
              <div
                className={clsx(s.secondLevel, {
                  [s.secondLevelBlocOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, m._id.secondCategory)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <div key={page._id}>
        <a
          className={clsx(s.thirdLevel, { [s.thirdLevel]: true })}
          href={`/${route}/${page._id}`}
        >
          {page.category}
        </a>
      </div>
    ));
  };

  return (
    <div className={s.menu}>
      <div>{buildFirstLevel()}</div>
    </div>
  );
}

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
import Link from "next/link";
import { useRouter } from "next/router";

import s from "./Menu.module.scss";

import BooksIcon from "../../../shared/assets/icons/Books.svg";
import CoursesIcon from "../../../shared/assets/icons/Courses.svg";
import ProductIcon from "../../../shared/assets/icons/Product.svg";
import ServicesIcon from "../../../shared/assets/icons/Servises.svg";

// Sidebar
const firstLevelMenu = [
  {
    icon: <CoursesIcon />, // Вызовите компонент как элемент
    id: TopLevelCategory.Courses,
    name: "Курсы",
    route: "course",
  },
  {
    icon: <ServicesIcon />, // Вызовите компонент как элемент
    id: TopLevelCategory.Services,
    name: "Сервисы",
    route: "/servises",
  },
  {
    icon: <BooksIcon />, // Вызовите компонент как элемент
    id: "product",
    name: "Книги",
    route: "/books",
  },
  {
    icon: <ProductIcon />, // Вызовите компонент как элемент
    id: TopLevelCategory.Products,
    name: "Продукты",
    route: "/product",
  },
];

export default function Menu() {
  const { firstCategory, menu, setMenu } = useContext(AppContext);

  const router = useRouter();

  // Запрос данных меню после монтирования компонента
  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await getMenuDataForPage(firstCategory);

      setMenu(data);
    };

    fetchMenuData();
  }, [firstCategory]);

  const openSecondLevel = (secondCategory: string) => {
    setMenu(
      setMenu &&
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            // Если в меню есть элемент с таким именем, то открываем его (на кого кликнули)
            // открыли по клику и закрыли меню
            m.isOpened = true;
          }

          return m;
        }),
    );
  };

  const buildFirstLevel = () => {
    return (
      <div>
        {firstLevelMenu.map((m: FirstLevelMenuItem) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={clsx(s.firstLevel, {
                  [s.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </div>
    );
  };

  const buildSecondLevel = (menuItem: MenuItem) => {
    return (
      <div className={s.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages
              .map((page) => page._id)
              .includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = !m.isOpened;
          }

          return (
            <div key={m._id.secondCategory}>
              <div onClick={() => openSecondLevel(m._id.secondCategory)}>
                {m._id.secondCategory}
              </div>
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
        <Link
          className={clsx(s.thirdLevel, {
            [s.thirdLevel]: `${route}/${page._id}` === router.asPath,
          })}
          href={`/${route}/${page._id}`}
        >
          {page.category}
        </Link>
      </div>
    ));
  };

  return (
    <div className={s.menu}>
      <div>{buildFirstLevel()}</div>
    </div>
  );
}

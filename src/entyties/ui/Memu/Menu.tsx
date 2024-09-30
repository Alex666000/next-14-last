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
import { usePathname, useSearchParams } from "next/navigation";

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
    icon: <ServicesIcon />,
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

export default function Menu() {
  const { firstCategory, menu, setMenu } = useContext(AppContext);

  const pathname = usePathname(); // Получаем текущее значение pathname
  const searchParams = useSearchParams(); // Получаем параметры поиска, если они есть

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await getMenuDataForPage(firstCategory);

      setMenu(data);
    };

    fetchMenuData();
  }, [firstCategory]);

  const openSecondLevel = (secondCategory: string) => {
    setMenu(
      menu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
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
            m.pages.map((page) => page._id).includes(pathname.split("/")[2])
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
            [s.thirdLevel]: `${route}/${page._id}` === pathname,
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

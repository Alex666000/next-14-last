import { useContext, useEffect } from "react";

import { getMenuDataForPage } from "@/app/model/helpers/getMenuDataForPage";
import { TopLevelCategory } from "@/app/model/type/menu";
import { AppContext } from "@/app/providers/context/appContext";
import clsx from "clsx";

import s from "./Menu.module.scss";

import BooksIcon from "../../../shared/assets/icons/Books.svg";
import CoursesIcon from "../../../shared/assets/icons/Courses.svg";
import ProductsIcon from "../../../shared/assets/icons/Products.svg";
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
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
    name: "Продукты",
    route: "/product",
  },
];

// Простой обычный компонент который является асинхронным - делаем запрос на сервер
export default async function Menu() {
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
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={clsx(s.firstLevel, {
                  [s.firstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {menu.id == firstCategory && buildSecondLevel()}
          </div>
        ))}
      </div>
    );
  };

  const buildSecondLevel = () => {
    return (
      <div>
        {menu.map((m) => (
          <div key={m._id.secondCategory}></div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>{menu.length}</div>
    </div>
  );
}

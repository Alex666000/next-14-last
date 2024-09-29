import { getMenuDataForPage } from "@/app/model/helpers/getMenuDataForPage";
import { getProductsDataForPage } from "@/app/model/helpers/getProductsDataForPage";
import { API } from "@/shared/api/api";
import { notFound } from "next/navigation";

export function generateMetadata() {
  return {
    description: "Страница конкретного продукта",
    keywords: "конкретный продукт",
    title: "Конкретный продукт",
  };
}
// статически сгенерировать параметры для страниц SSG - подскажем Нексту по каким роутам проитись
// чтобы сгенерить + мгновенная страница отрисуется детальная = оптимизация
// generateStaticParams - какие доступны детальные параметры относительно нашей страницы
export const generateStaticParams = async () => {
  const menu = await getMenuDataForPage(0);

  return menu.flatMap((item) => {
    // вернем массив объектов с параметрами для каждой страницы
    return item.pages.map((page) => {
      return {
        alias: page.alias,
      };
    });
  });
};

// Динамические страницы - это не SSG пока (чтобы стало надо сделать generateStaticParams), а SSR
// каждый раз при запросе будет генерится страница
//
export default async function ProductsPage({
  params,
}: {
  params: { id: string };
}) {
  const productPageData = await getProductsDataForPage(params.id);

  if (!productPageData) {
    // если страница не найдена возвращаем ошибку -  обработка ошибки
    // 404 страницу надо кастомизировать
    notFound();
  }

  return <div>{productPageData.title}</div>;
}

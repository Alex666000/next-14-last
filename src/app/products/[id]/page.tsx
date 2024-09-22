import { API } from "@/app/api/api";
import { getMenuDataForPage } from "@/app/model/helpers/getMenuDataForPage";
import { getProductsDataForPage } from "@/app/model/helpers/getProductsDataForPage";
import { notFound } from "next/navigation";

export function generateMetadata() {
  return {
    description: "Страница конкретного продукта",
    keywords: "конкретный продукт",
    title: "Конкретный продукт",
  };
}
// описали какие доступны детальные параметры относительно нашей страницы
// статически сгенерировать параметры для страниц - подскажем Нексту по каким роутам проитись
// чтобы сгенерить + мгновенная страница отрисуется детальная
export const generateStaticParams = async () => {
  const menu = await getMenuDataForPage(0);

  return menu.flatMap((item) => {
    return item.pages.map((page) => {
      return {
        alias: page.alias,
      };
    });
  });
};

// Динамические страницы
export default async function ProductsPage({
  params,
}: {
  params: { id: string };
}) {
  const productPage = await getProductsDataForPage(params.id);

  if (!productPage) {
    // если страница не найдена возвращаем ошибку
    notFound();
  }

  return <div>{productPage.title}</div>;
}

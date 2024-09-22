// Функция для получения меню
import { API } from "@/app/api/api";
import { MenuItem, TopPageModel } from "@/app/model/type/menu";

export async function getProductsDataForPage(
  alias: string,
): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
}

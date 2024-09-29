// Функция для получения меню
import { MenuItem, TopPageModel } from "@/app/model/type/menu";
import { API } from "@/shared/api/api";

export async function getProductsDataForPage(
  id: string,
): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.id + id);

  if (!res.ok) {
    // throw new Error("Network response was not ok");
    return null;
  }

  return res.json();
}

// Функция для получения меню
import { API } from "@/app/api/api";
import { MenuItem } from "@/app/model/type/menu";

export async function getMenuDataForPage(
  firstCategory: number,
): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "POST",
  } as RequestInit);

  return res.json();
}

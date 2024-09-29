// Функция для получения меню
import { MenuItem } from "@/app/model/type/menu";
import { API } from "@/shared/api/api";

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

/*
fetch - самого Некста
 */

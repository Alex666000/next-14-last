// Функция для получения меню
import { MenuItem, TopPageModel } from "@/app/model/type/menu";
import { API } from "@/shared/api/api";

export async function getProductsDataForPage(
  id: string,
): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.id + id, {
    next: {
      // ревалидировать через 10 сек после того как она сгенерирована: Static + SSG
      // есть страница не нее захоит юзер - через 10 сек будет регенерация с новыми данными
      // слишком маленькое время - нагрузка на сервер
      revalidate: 10,
    },
  });

  if (!res.ok) {
    // throw new Error("Network response was not ok");
    return null;
  }

  return res.json();
}

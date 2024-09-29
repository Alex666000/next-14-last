import { getMenuDataForPage } from "@/app/model/helpers/getMenuDataForPage";

// Простой обычный компонент который является асинхронным - делаем запрос на сервер
export default async function Menu() {
  // на странице (или с любого серверного компонента) делаем запросы без всяких
  // getStaticProps и getServerSideProps и получаем данные с сервера
  // не обязательно как в 13 Некст только со страниц получать данные
  const menu = await getMenuDataForPage(0);

  // console.log(menu);

  return (
    <div>
      <div>{menu.length}</div>
    </div>
  );
}

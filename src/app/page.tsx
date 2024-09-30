import Menu from "@/entyties/ui/Memu/Menu";
import { Sidebar } from "@/widjets/Sidebar/Sidebar";

// Функция для генерации метаданных
export async function generateMetadata() {
  return {
    description: "Главная страница",
    keywords: "главная страница",
    title: "Главная страница",
  };
}

export default async function HomePage() {
  return (
    <main>
      {/*<span>Главная страница</span>*/}
      {/* делаем запрос на сервер в Menu */}
      {/*<Sidebar />*/}
    </main>
  );
}

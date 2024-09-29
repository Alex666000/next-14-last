import Menu from "@/entyties/memu/Menu";

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
      <span>Главная страница</span>
      {/* делаем запрос на сервер в Menu */}
      <Menu />
    </main>
  );
}

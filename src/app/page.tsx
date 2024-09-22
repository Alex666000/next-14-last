import Menu from "@/entyties/memu/menu";

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
      Главная страница <Menu />
    </main>
  );
}

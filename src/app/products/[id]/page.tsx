export function generateMetadata() {
  return {
    description: "Страница конкретного продукта",
    keywords: "конкретный продукт",
    title: "Конкретный продукт",
  };
}

export default function ProductsPage({
  params,
}: {
  params: { alias: string };
}) {
  return <main>Страница с флисасом {params.alias}</main>;
}

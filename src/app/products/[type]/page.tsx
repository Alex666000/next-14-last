import {
  MenuItem,
  TopLevelCategory,
  TopPageModel,
} from "@/app/model/type/menu";
import { TopPageComponent } from "@/app/ui/TopPageComponent";
import { firstLevelMenu } from "@/entyties/ui/Memu/Menu";
import axios from "axios";
import { GetStaticPaths } from "next";

interface CourseProps extends Record<string, unknown> {
  firstCategory: number;
  menu: CourseProps;
  page: TopPageModel;
  products: any[];
}

export default function TopPage({
  firstCategory,
  page,
  products,
}: CourseProps): JSX.Element {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      {
        firstCategory: m.id,
      },
    );

    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`)),
    );
  }

  return {
    fallback: true,
    paths,
  };
};

// type

interface TopPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
  page: TopPageModel;
  products: any[];
}

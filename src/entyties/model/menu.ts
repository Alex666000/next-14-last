import { TopLevelCategory } from "@/app/model/type/menu";

export interface PageItem {
  _id: string;
  category: string;
  id: string;
  title: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  icon: JSX.Element;
  id: TopLevelCategory;
  name: string;
  route: string;
}

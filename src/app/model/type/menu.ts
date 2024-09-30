export interface PageItem {
  _id: string;
  alias: string;
  category: string;
  title: string;
}

// Main Type
export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  // сами добавили на серверер не было такого флага
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  icon: JSX.Element;
  id: unknown;
  name: string;
  route: string;
}

export interface TopPageAdvantage {
  _id: string;
  description: string;
  title: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

// TopPageModel
export interface TopPageModel {
  _id: string;
  advantages?: TopPageAdvantage[]; // Если нужно хранить преимущества
  alias: string;
  category: string;
  firstCategory: number;
  metaDescription: string;
  metaTitle: string;
  secondCategory: string;
  seoText: string;
  tags: string[];
  tagsTitle: string;
  title: string;
}

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

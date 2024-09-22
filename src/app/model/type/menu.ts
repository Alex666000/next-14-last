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
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  icon: JSX.Element;
  id: unknown;
  name: string;
  route: string;
}

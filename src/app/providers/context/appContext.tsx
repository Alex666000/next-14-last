"use client";

import { ReactNode, createContext, useState } from "react";

import { MenuItem, TopLevelCategory } from "@/app/model/type/menu";

export interface IAppContext {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  firstCategory: TopLevelCategory.Courses,
  menu: [],
});

export const AppContextProvider = ({
  children,
  firstCategory,
  menu,
}: { children: ReactNode } & IAppContext): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ firstCategory, menu: menuState, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};

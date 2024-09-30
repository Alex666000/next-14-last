"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { MenuItem, TopLevelCategory } from "@/app/model/type/menu";

// Определение интерфейса для контекста приложения
export interface IAppContext {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
  setMenu: (newMenu: MenuItem[]) => void; // Сделаем setMenu обязательным
}

// Создание контекста с начальным значением
export const AppContext = createContext<IAppContext>({
  firstCategory: TopLevelCategory.Courses,
  menu: [],
  setMenu: () => {}, // Пустая функция по умолчанию
});

// Провайдер контекста
export const AppContextProvider = ({
  children,
  firstCategory,
  initialMenu, // Изменено имя пропса для большей ясности
}: {
  children: ReactNode;
  firstCategory: TopLevelCategory; // Теперь обязательный
  initialMenu: MenuItem[]; // Также обязательный
}): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(initialMenu); // Используем новое имя

  // Функция для обновления состояния меню
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ firstCategory, menu: menuState, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};

// Хук для удобного доступа к контексту
export const useAppContext = () => useContext(AppContext);

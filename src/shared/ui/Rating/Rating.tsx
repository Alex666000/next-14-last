"use client";

import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";

import { StarIcon } from "@/shared/assets/icons";
import { clsx } from "clsx";

import s from "./Rating.module.scss";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<ReactElement[]>([]);

  // Обновляем массив звезд при изменении рейтинга
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  // Генерация массива звезд в зависимости от текущего рейтинга
  const constructRating = (currentRating: number) => {
    const updatedArray = new Array(5).fill(null).map((_, i) => (
      <span
        className={clsx(s.starWrapper, {
          [s.editable]: isEditable,
          [s.filled]: i < currentRating, // Заполненная звезда если индекс меньше текущего рейтинга
        })}
        key={i}
        onClick={() => onClick(i + 1)} // При клике устанавливается новый рейтинг
        onKeyDown={(e: KeyboardEvent<unknown>) => {
          isEditable && handleSpace(i + 1, e);
        }}
        onMouseEnter={() => changeDisplay(i + 1)} // Изменение отображения при наведении
        onMouseLeave={() => changeDisplay(rating)} // Возврат к исходному рейтингу при убирании мыши
        tabIndex={isEditable ? 0 : -1} // Табом перемещаемся по реитингу звездам.
      >
        <StarIcon className={clsx(s.star, { [s.editable]: isEditable })} />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  // Изменение отображения при наведении
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  // Обработка клика по звезде
  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i); // Здесь вызываем функцию для изменения рейтинга
  };

  // Обработка клавиши пробела для установки рейтинга с клавиатуры
  const handleSpace = (i: number, e: KeyboardEvent<unknown>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }

    // Увеличиваем рейтинг на 1, если он меньше максимального
    const newRating = i < 5 ? i + 1 : i;

    setRating(newRating);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

"use client";

import {
  DetailedHTMLProps,
  HTMLAttributes,
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
}: RatingProps): ReactElement => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = new Array(5)
      .fill(null)
      .map((_, i) => (
        <StarIcon
          className={clsx(s.Rating, { [s.filled]: i < currentRating })}
          key={i}
        />
      ));

    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

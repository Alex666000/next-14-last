"use client";

import { useState } from "react";

import { Button } from "@/shared/ui/Button";
import { Htag } from "@/shared/ui/Htag";
import { P } from "@/shared/ui/P";
import { Rating } from "@/shared/ui/Rating";
import { Tag } from "@/shared/ui/Tag";

export default () => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Htag tag={"h1"}>Текст</Htag>
      <Button variant={"primary"}>Кнопка</Button>
      <Button variant={"ghost"}>Кнопка</Button>
      <Button arrow={"down"} variant={"primary"}>
        Кнопка
      </Button>
      <P size={"l"}>Большой</P>
      <P>Средний</P>
      <P size={"s"}>Маленький</P>
      <Tag size={"s"}>Ghost</Tag>
      <Tag color={"red"} size={"m"}>
        Red
      </Tag>
      <Tag color={"green"} size={"s"}>
        Green
      </Tag>
      <Tag color={"primary"}>Green</Tag>

      <Rating isEditable rating={rating} setRating={setRating} />
    </>
  );
};

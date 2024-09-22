## Getting Started

- 1: Преттиер + линтер:
  "@it-incubator/eslint-config": "^1.0.3",
  "@it-incubator/prettier-config": "^0.1.2",
  "@it-incubator/stylelint-config": "^2.0.0",
  "@typescript-eslint/eslint-plugin": "^6.7.5",
  "@typescript-eslint/parser": "^6.7.5",
  "eslint-plugin-react-hooks": "^4.6.2",
  "eslint-plugin-react-refresh": "^0.4.7",
  "format": "prettier --write src",
  "lint": "eslint src --ext .jsx,.js,.tsx,.ts --no-error-on-unmatched-pattern --fix && stylelint --fix src/{,_/}_.{scss,css} --allow-empty-input"

- 2: На главной стрнаице как ui kit использовать:
- "use client";

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

- 3: работа с временем: npm i date-fns

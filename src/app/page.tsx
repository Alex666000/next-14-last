import { Button } from "@/shared/ui/Button";
import { Htag } from "@/shared/ui/Htag";
import { P } from "@/shared/ui/P";
import { Tag } from "@/shared/ui/Tag";

export default () => (
  <>
    <Htag tag={"h1"}>Текст</Htag>
    <Button variant={"primary"}>Кнопка</Button>
    <Button variant={"ghost"}>Кнопка</Button>
    <Button arrow={"right"} variant={"primary"}>
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
  </>
);

import RateIcon from "@/shared/assets/icons/Rate.svg";
import { Card } from "@/shared/ui/Card/Card";

import s from "./HhData.module.scss";

type HhDataProps = {
  className?: string;
  count?: number;
};

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps) => {
  return (
    <div className={s.RootHh}>
      <Card className={s.countBlock}>
        <div className={s.title}>Всего вакансий</div>
        <div className={s.countValue}>{count}</div>
      </Card>
      <Card className={s.salaryBlock}>
        <div>
          <div className={s.title}>Начальный</div>
          <div className={s.countValue}>{juniorSalary}</div>
          <div className={s.rate}>
            <RateIcon className={s.filledSvg} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
      </Card>
      <Card className={s.salaryBlock}>
        <div>
          <div className={s.title}>Средний</div>
          <div className={s.countValue}>{middleSalary}</div>
          <div className={s.rate}>
            <RateIcon className={s.filledSvg} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
      </Card>
      <Card className={s.salaryBlock}>
        <div>
          <div className={s.title}>Профессионал</div>
          <div className={s.countValue}>{seniorSalary}</div>
          <div className={s.rate}>
            <RateIcon className={s.filledSvg} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
      </Card>
    </div>
  );
};

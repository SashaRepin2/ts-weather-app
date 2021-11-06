import React from "react";
import { CardDay } from "./CardDay";
import { Tabs } from "./Tabs";
import styles from "./WeekDays.module.scss";
interface Props {}

export interface Day {
  day: string;
  day_info: string;
  info: string;
  icon_id: string;
  temp_day: string | number;
  temp_nigth: string | number;
}

export const WeekDays = (props: Props) => {
  const days: Day[] = [];

  return (
    <div className={styles.weeK_days}>
      {days.map((el: Day) => {
        return <CardDay dayInfo={el} />;
      })}
    </div>
  );
};

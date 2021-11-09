import React from "react";
import { GlobalSelector } from "../../../../assets/global/GlobalSelector";
import { Day } from "./WeekDays";
import styles from "./WeekDays.module.scss";

interface Props {
  dayInfo: Day;
}

export const CardDay = ({ dayInfo }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__day}>{dayInfo.day}</div>
      <div className={styles.card__day_info}>{dayInfo.day_info}</div>
      <div className={styles.card__img}>
        <GlobalSelector id={dayInfo.icon_id} />
      </div>
      <div className={styles.card__temp_day}>{dayInfo.temp_day}</div>
      <div className={styles.card__temp_nigth}>{dayInfo.temp_night}</div>
      <div className={styles.card__info}>{dayInfo.info}</div>
    </div>
  );
};

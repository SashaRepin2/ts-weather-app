import React from "react";
import { GlobalSelector } from "../../../../assets/global/GlobalSelector";
import styles from "./ThisDay.module.scss";

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top_block}>
        <div className={styles.this__day_container}>
          <div className={styles.this__day_temp}>20°C</div>
          <div className={styles.this__day_name}>Сегодня</div>
        </div>
        <GlobalSelector id="weather_sun" />
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.this__day_time}>Время: 21:24</div>
        <div className={styles.this__day_city}>Город: Kostroma</div>
      </div>
    </div>
  );
};

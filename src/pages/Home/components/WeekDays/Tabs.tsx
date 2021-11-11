import { table } from "console";
import React from "react";
import styles from "./WeekDays.module.scss";

interface Props {
  arrayFilters?: any[];
}

export const Tabs = ({ arrayFilters }: Props) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {arrayFilters?.map((el) => {
          return (
            <div className={styles.tab + " active"} key={el.value}>
              {el.value}
            </div>
          );
        })}
      </div>
      <div className={styles.reset}>Сбросить</div>
    </div>
  );
};

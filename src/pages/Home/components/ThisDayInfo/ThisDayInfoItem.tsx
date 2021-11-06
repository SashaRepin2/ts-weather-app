import React from "react";
import { IndicatorIconSelector } from "../../../../assets/global/IndicatorIconSelector";
import { ItemList } from "./ThisDayInfo";
import styles from "./ThisDayInfo.module.scss";

interface Props {
  item: ItemList;
}

export const ThisDayInfoItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;

  return (
    <div className={styles.item}>
      <div className={styles.item__icon}>
        <IndicatorIconSelector id={icon_id} />
      </div>
      <div className={styles.item__name}>{name}</div>
      <div className={styles.item__value}> {value}</div>
    </div>
  );
};

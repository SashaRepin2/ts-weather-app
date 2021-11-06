import React from "react";
import styles from "./ThisDayInfo.module.scss";
import { ThisDayInfoItem } from "./ThisDayInfoItem";

import imgClouds from "../../../../assets/images/clouds.png";
// type Data = {
//   temp: string | number;
// };

export interface ItemList {
  icon_id: string;
  name: string;
  value: string | number;
}

// type ItemsList = ItemList[];

// interface Props {
//   data: ItemsList;
// }

interface Props {}

export const ThisDayInfo = (props: Props) => {
  const items: ItemList[] = [
    {
      icon_id: "temp",
      name: "Температура:",
      value: "значение",
    },
    {
      icon_id: "pressure",
      name: "Давление:",
      value: "значение",
    },
    {
      icon_id: "precipitation",
      name: "Осадки:",
      value: "значение",
    },
    {
      icon_id: "wind",
      name: "Ветер:",
      value: "значение",
    },
  ];

  return (
    <div className={styles.card__day_info}>
      <div className={styles.card__day_info_items}>
        {items.map((el: ItemList) => {
          return <ThisDayInfoItem key={el.icon_id} item={el} />;
        })}
      </div>
      <img className={styles.card__day_info_bg} src={imgClouds} alt="Clouds" />
    </div>
  );
};

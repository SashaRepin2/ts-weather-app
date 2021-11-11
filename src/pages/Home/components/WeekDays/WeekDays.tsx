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
  temp_night: string | number;
}

export const WeekDays = (props: Props) => {
  const arrayTabs = [
    { value: "На неделю" },
    { value: "На 10 дней" },
    { value: "На месяц" },
  ];

  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "weather_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon_id: "weather_small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "weather_small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "28 авг",
      icon_id: "weather_mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "28 авг",
      icon_id: "weather_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сб",
      day_info: "28 авг",
      icon_id: "weather_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Вс",
      day_info: "28 авг",
      icon_id: "weather_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];

  return (
    <div className={styles.container}>
      <Tabs arrayFilters={arrayTabs} />
      <div className={styles.week_days}>
        {days.map((el: Day) => {
          return <CardDay dayInfo={el} />;
        })}
      </div>
    </div>
  );
};

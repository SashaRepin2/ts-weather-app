import React from "react";
import { Day } from "./WeekDays";
import styles from "./WeekDays.module.scss";

interface Props {
  dayInfo: Day;
}

export const CardDay = ({ dayInfo }: Props) => {
  return <div>{dayInfo.toString()}</div>;
};

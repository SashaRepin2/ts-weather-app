import React from "react";
import Graphic from "../../shared_components/Graphic/Graphic";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { WeekDays } from "./components/WeekDays/WeekDays";

import styles from "./Home.module.scss";

interface Props {}

export const Home = (props: Props) => {
  return (
    <>
      <div className={styles.home}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <WeekDays />
      <Graphic />
    </>
  );
};

export default Home;

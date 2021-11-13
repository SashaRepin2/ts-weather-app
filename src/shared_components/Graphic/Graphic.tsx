import React, { createRef, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomToolTip";

import styles from "./Graphic.module.scss";

interface Props {}

const data = [
  { date: "Пн", dayTemp: 18, nightTemp: -12.321 },
  { date: "Вт", dayTemp: 28.321, nightTemp: -11.321 },
  { date: "Ср", dayTemp: 27.321, nightTemp: -17.321 },
  { date: "Чт", dayTemp: 26.321, nightTemp: 15.321 },
  { date: "Пт", dayTemp: 29.321, nightTemp: 11.321 },
  { date: "Сб", dayTemp: 21.321, nightTemp: 14.321 },
  { date: "Вс", dayTemp: 21.321, nightTemp: 14.321 },
];

const Graphic = (settings: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.top_bar}>
        <div className={styles.top_bar__title}>График прогнозов на неделю </div>
      </div>

      <ResponsiveContainer
        className={styles.card__chart}
        width="100%"
        height={400}
      >
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
          {/* Легенда */}
          <Legend
            wrapperStyle={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              padding: "5px",
            }}
          />
          {/* Сетка */}
          <CartesianGrid
            stroke="#4793FF"
            opacity="1"
            vertical={false}
            horizontal={false}
          />

          {/* Значения оси Х - время */}
          <XAxis dataKey="date" tickLine={false} />

          {/* Значения оси У - температура */}
          <YAxis
            tickLine={false}
            tickCount={5}
            tickFormatter={(value) => {
              return value > 0 ? `+${value}°C` : `${value}°C`;
            }}
          />

          {/* Подсказка при наведении */}
          <Tooltip content={<CustomTooltip />} />

          {/* Отображение данных по дневной температуре */}
          <Line
            // type="monotone"
            dataKey="dayTemp"
            stroke="#4793FF"
            fill="#8884d8"
            strokeWidth={2}
          />

          {/* Отображение данных по ночной температуре */}
          <Line
            // type="monotone"
            dataKey="nightTemp"
            stroke="#2451B7"
            fill="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphic;

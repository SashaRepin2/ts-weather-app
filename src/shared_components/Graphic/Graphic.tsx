import React, { createRef, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomToolTip";

import styles from "./Graphic.module.scss";

interface Props {
  WIDTH?: number;
  HEIGHT?: number;
  PADDING?: number;
  DPI_WIDTH?: number;
  DPI_HEIGHT?: number;
  VIEW_HEIGHT?: number;
  VIEW_WIDTH?: number;
  ROWS_COUNT?: number;
  SPEED?: number;
}

const data = [
  { date: "1", dayTemp: 18, nightTemp: -12.321 },
  { date: "3", dayTemp: 28.321, nightTemp: -11.321 },
  { date: "4", dayTemp: 27.321, nightTemp: -17.321 },
  { date: "5", dayTemp: 26.321, nightTemp: 15.321 },
  { date: "6", dayTemp: 29.321, nightTemp: 11.321 },
  { date: "7", dayTemp: 21.321, nightTemp: 14.321 },
];

const Graphic = (settings: Props) => {
  return (
    <div className={styles.card}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
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
            stroke="#FFFFFF"
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

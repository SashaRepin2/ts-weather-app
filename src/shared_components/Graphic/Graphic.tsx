import React from "react";
import CustomTooltip from "./CustomToolTip";
import styles from "./Graphic.module.scss";

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
import { useTheme } from "../../hooks/useTheme";
import { Themes } from "../../context/ThemeContex";

interface Props {}

const Graphic = (settings: Props) => {
  const theme = useTheme();

  const data = [
    { date: "Пн", dayTemp: 18, nightTemp: -12.321 },
    { date: "Вт", dayTemp: 28.321, nightTemp: -11.321 },
    { date: "Ср", dayTemp: 27.321, nightTemp: -17.321 },
    { date: "Чт", dayTemp: 26.321, nightTemp: 15.321 },
    { date: "Пт", dayTemp: 29.321, nightTemp: 11.321 },
    { date: "Сб", dayTemp: 21.321, nightTemp: 14.321 },
    { date: "Вс", dayTemp: 21.321, nightTemp: 14.321 },
  ];

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
          style={{
            background: theme.theme === Themes.DARK ? "#212025" : "#fff",
            borderRadius: "0 0 20px 20px",
          }}
        >
          {/* Легенда */}
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "flex-end",
              backgroundColor: theme.theme === Themes.DARK ? "#212025" : "#fff",
              // border: "1px solid #d5d5d5",
              fontWeight: "bold",
            }}
            formatter={(value: string, entry: any) => {
              return value === "dayTemp"
                ? "Температура днем"
                : "Температура ночью";
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
          <XAxis
            dataKey="date"
            tickLine={false}
            stroke={theme.theme === Themes.DARK ? "#fff" : "#000"}
          />

          {/* Значения оси У - температура */}
          <YAxis
            tickLine={false}
            tickCount={5}
            stroke={theme.theme === Themes.DARK ? "#fff" : "#000"}
            tickFormatter={(value) => {
              return value > 0 ? `+${value}°C` : `${value}°C`;
            }}
            padding={{ bottom: 10 }}
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

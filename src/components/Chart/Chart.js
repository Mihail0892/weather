import React from "react";
import { useSelector } from "react-redux";
import styles from "./Chart.module.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const weatherData = useSelector((state) => state.Request.weatherData);
  const error = useSelector((state) => state.Request.error);

  return (
    <>
      {error ? (
        <div className={styles.error}>
          <p>No such location found.</p>
        </div>
      ) : (
        weatherData.length !== 0 && (
          <div>
            <ResponsiveContainer width="100%" height={600}>
              <LineChart width={1000} height={600} data={weatherData.list}>
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <CartesianGrid stroke="green" strokeDasharray="10 5" />
                <Line dataKey="main.temp" fill="blue" barSize={25} />

                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend iconSize="30" name="температура по дням" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )
      )}
    </>
  );
};

export default Chart;

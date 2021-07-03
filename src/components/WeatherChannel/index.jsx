import styles from "./styles.module.css";
import WeatherCard from "../WeatherCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import { weather_bgcolor } from "../../constants/constants";

const WeatherChannel = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios
      .get(url.WEATHER_API)
      .then((response) => {
        setWeatherData(response.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.wrapper} id="weather">
      <h2>THE WEATHER CHANNEL</h2>

      {weatherData ? (
        <div className={styles.weather_grid}>
          {weatherData.map((data, index) => {
            return (
              <WeatherCard
                WeatherContent={data}
                bgColor={weather_bgcolor[index]}
                key={index}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default WeatherChannel;

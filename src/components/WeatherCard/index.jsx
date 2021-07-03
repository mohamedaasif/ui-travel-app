import styles from "./styles.module.css";
import SunnyIcon from "../../assets/icon-party-sunny.svg";

const WeatherCard = ({ WeatherContent, bgColor }) => {
  return (
    <div className={styles.weather_card} style={{ background: `${bgColor}` }}>
      <p className={styles.weather_title}>{WeatherContent.city}</p>
      <img src={SunnyIcon} alt="SunnyIcon" />
      <p>
        {WeatherContent.temp_Celsius}
        <span>
          <i className="fas fa-genderless"></i>
        </span>
      </p>
    </div>
  );
};

export default WeatherCard;

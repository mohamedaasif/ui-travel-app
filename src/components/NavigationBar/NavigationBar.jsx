import styles from "./styles.module.css";
import { Link } from "react-scroll";

const NavigationBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav_links}>
        <li className={styles.nav_item}>
          <Link to="weather" smooth={true}>
            WEATHER
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="destination" smooth={true}>
            DESTINATIONS
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="quote" smooth={true}>
            GET A QUOTE
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;

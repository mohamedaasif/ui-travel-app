import styles from "./styles.module.css";
import { nav_items } from "../../constants/constants";
import NavigationLink from "../NavigationLink";

const NavigationBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav_links}>
        {nav_items.map((data, index) => {
          return <NavigationLink data={data} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default NavigationBar;

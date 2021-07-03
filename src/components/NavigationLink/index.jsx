import styles from "./styles.module.css";
import { Link } from "react-scroll";

const NavigationLink = ({ data }) => {
  return (
    <>
      <li className={styles.nav_item}>
        <Link to={data.to} smooth={true}>
          {data.nav_link}
        </Link>
      </li>
    </>
  );
};

export default NavigationLink;

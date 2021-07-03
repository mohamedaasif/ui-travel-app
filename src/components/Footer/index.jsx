import styles from "./styles.module.css";
import FooterContent from "../FooterContent";
import { footer_data } from "../../constants/constants";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      {footer_data.map((data, index) => {
        return <FooterContent footer_data={data} key={index} />;
      })}

      <div className={styles.footer_content}>
        <h3>Disclaimer</h3>
        <p>This layout is created as a part of Sirius UI Recruiments.</p>
        <p>
          All the abouve content has no direct relation with Sirius business.
        </p>
      </div>
    </div>
  );
};

export default Footer;

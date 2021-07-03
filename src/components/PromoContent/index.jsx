import styles from "./styles.module.css";
import PromoImage from "../../assets/promo-image.png";

const PromoContent = () => {
  return (
    <div className={styles.wrapper}>
      <img src={PromoImage} alt="PromoImage" />
      <div className={styles.promo_content}>
        <h1>PLAN A TRIP</h1>
        <h3>
          Make your vacation the most <br /> memorable one
        </h3>
      </div>
    </div>
  );
};

export default PromoContent;

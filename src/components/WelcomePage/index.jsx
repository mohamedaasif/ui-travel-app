import styles from "./styles.module.css";
import WelcomeImage from "../../assets/welcome-image.svg";
import WelcomeContent from "../WelcomeContent";

const WelcomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={WelcomeImage} alt="WelcomeImage" />
      </div>
      <WelcomeContent />
    </div>
  );
};

export default WelcomePage;

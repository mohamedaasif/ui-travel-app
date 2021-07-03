import styles from "./styles.module.css";
import Button from "../Button";

const WelcomeContent = () => {
  return (
    <div className={styles.welcome_content}>
      <h1>
        Life is short <br /> and the world is wide!
      </h1>
      <p>
        Stay at the comfort of your homes and book a trip to travel <br /> after
        the post pandemic era.
      </p>

      <Button buttonText="PLAN A TRIP" />
    </div>
  );
};

export default WelcomeContent;

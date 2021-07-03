import styles from "./styles.module.css";

const Button = ({ buttonText }) => {
  return (
    <div className={styles.btn_wrapper}>
      <button className={styles.btn} type="submit">
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

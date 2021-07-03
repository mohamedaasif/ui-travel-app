import styles from "./styles.module.css";

const Button = ({ buttonText }) => {
  return (
    <div className={styles.btn_container}>
      <button className={styles.btn}>{buttonText}</button>
    </div>
  );
};

export default Button;

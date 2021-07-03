import styles from "./styles.module.css";

const FooterContent = ({ footer_data }) => {
  return (
    <div className={styles.footer_content}>
      <h3>{footer_data.heading}</h3>
      <p>{footer_data.list1}</p>
      <p>{footer_data.list2}</p>
      <p>{footer_data.list3}</p>
      <p>{footer_data.list4}</p>
    </div>
  );
};

export default FooterContent;

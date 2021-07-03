import styles from "./styles.module.css";

const DestinationCard = ({ destinationData }) => {
  return (
    <div className={styles.destination_card}>
      <img src={destinationData.imageUrl} alt={destinationData.city} />
      <p>{destinationData.city}</p>
    </div>
  );
};

export default DestinationCard;

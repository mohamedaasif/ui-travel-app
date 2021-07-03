import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { url } from "../../constants/constants";
import DestinationCard from "../DestinationCard";

const FeaturedDestinations = () => {
  const ref = useRef();
  const [destinationData, setDestinationData] = useState();

  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);

  const onMouseDown = (e) => {
    setIsScrolling(true);
    setClientX(e.clientX);
  };

  const onMouseUp = (e) => {
    setIsScrolling(false);
  };

  const onMouseMove = (e) => {
    if (isScrolling) {
      ref.current.scrollLeft = e.clientX - clientX;
    }
  };

  useEffect(() => {
    axios
      .get(url.DESTINATION_API)
      .then((response) => {
        setDestinationData(response.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.wrapper} id="destination">
      <h2>Featured Destinations</h2>

      {destinationData ? (
        <div
          className={styles.card_container}
          ref={ref}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {destinationData.map((data, index) => {
            return <DestinationCard destinationData={data} key={index} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FeaturedDestinations;

import { useState } from "react";
import styles from "./styles.module.css";

const HeaderBanner = () => {
  const [timer, setTimer] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  var countDownDate = new Date("JUl 10, 2021 18:00:00").getTime();

  setInterval(() => {
    var currentTime = new Date().getTime();
    var timeleft = countDownDate - currentTime;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setTimer({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }, 1000);

  return (
    <div className={styles.wrapper}>
      <p>
        Book now to get exciting travel deals. Upto 40% off on credit card
        payments
      </p>
      <h6>
        Offers ends in {timer.days}d {timer.hours}h {timer.minutes}m{" "}
        {timer.seconds}s
      </h6>
    </div>
  );
};

export default HeaderBanner;

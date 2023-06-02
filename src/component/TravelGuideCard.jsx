import React from "react";
import styles from "@/styles/TravelGuideCard.module.css";
import Image from "next/image";
import DP from "../../public/images/dp.svg";

const TravelGuideCard = () => {
  return (
    <div className={styles.travelGuideCard}>
      <div className={styles.travelGuideCard_left}>
        <div className={styles.travelGuideCard_left_top}>
          <h1>Hadwin Malone</h1>
          <span>Guide since 2012</span>
        </div>
        <div className={styles.travelGuideCard_left_bottom}>
          <button>contact</button>
        </div>
      </div>
      <div className={styles.travelGuideCard_right}>
        <Image src={DP} alt="Picture" />
      </div>
    </div>
  );
};

export default TravelGuideCard;

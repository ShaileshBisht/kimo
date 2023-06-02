import React from "react";
import styles from "@/styles/StickCard.module.css";

const AdventureCard = ({ activity, setActivityModalToggle }) => {
  return (
    <div className={styles.stickCard}>
      <div className={styles.stickCard__left}>
        <p>{activity}</p>
      </div>
      <div className={styles.stickCard__right}>{/* <Image src={arrow} alt="Picture" /> */}</div>
    </div>
  );
};

export default AdventureCard;

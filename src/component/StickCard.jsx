import React, { useState } from "react";
import styles from "@/styles/StickCard.module.css";
import arrow from "../../public/images/arrow_forward.svg";
import Image from "next/image";

const StickCard = ({ details, setActivityModalToggle, setActivityData, stopFlow = false }) => {
  const { name, activities } = details;

  const handleClick = () => {
    if (stopFlow !== true) {
      setActivityModalToggle(true);
      setActivityData(activities);
    }
  };

  return (
    <div
      className={styles.stickCard}
      // onClick={(e) => {
      //   setActivityModalToggle(true), setActivityData(activities);
      // }}
      onClick={handleClick}
    >
      <div className={styles.stickCard__left}>
        <p>{name}</p>
      </div>
      <div className={styles.stickCard__right}>
        <Image src={arrow} alt="Picture" />
      </div>
    </div>
  );
};

export default StickCard;

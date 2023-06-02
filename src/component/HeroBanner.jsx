import React from "react";
import styles from "@/styles/HeroBanner.module.css";
import NavBar from "./NavBar";

const HeroBanner = ({ cover, title, imgScr = false, disc }) => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroBanner__navBar}>
        <NavBar cover={cover} />
      </div>
      <div className={styles.heroBanner__title}>
        {!title && (
          <h1>
            Welcome <br /> to Hawaii
          </h1>
        )}
        <h1>{title}</h1>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default HeroBanner;

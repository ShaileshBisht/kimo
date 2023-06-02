import React, { useEffect } from "react";
import styles from "@/styles/MobileNavBar.module.css";
import Image from "next/image";
import Close from "../../public/images/close.svg";

const MobileNavBar = ({ setNavBarToggle }) => {
  return (
    <div id="fixed" className={styles.mobileNavBar}>
      <div className={styles.mobileNavBar__box}>
        <div className={styles.mobileNavBar__box_close} onClick={(e) => setNavBarToggle(false)}>
          <Image src={Close} alt="Picture" />
        </div>

        <h1>Home</h1>
        <h1>Surfing</h1>
        <h1>Hula</h1>
        <h1>Vulcano</h1>

        <button>Book a trip</button>
      </div>
    </div>
  );
};

export default MobileNavBar;

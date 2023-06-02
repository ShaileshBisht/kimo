import React, { useEffect } from "react";
import styles from "@/styles/MobileNavBar.module.css";
import Image from "next/image";
import Close from "../../public/images/close.svg";
import Link from "next/link";

const MobileNavBar = ({ setNavBarToggle }) => {
  return (
    <div id="fixed" className={styles.mobileNavBar}>
      <div className={styles.mobileNavBar__box}>
        <div className={styles.mobileNavBar__box_close} onClick={(e) => setNavBarToggle(false)}>
          <Image src={Close} alt="Picture" />
        </div>

       <Link className={styles.link} href={"/"}>
          <h1>Home</h1>
        </Link>
        <Link className={styles.link} href={"/activities/Surfing"}>
          <h1>Surfing</h1>
        </Link>
        <Link className={styles.link} href={"/activities/Traditional%20Festivals"}>
          <h1>Festival</h1>
        </Link>
        <Link className={styles.link} href={"/activities/Volcanoes"}>
          <h1>Volcanoes</h1>
        </Link>

        <button>Book a trip</button>
      </div>
    </div>
  );
};

export default MobileNavBar;

import React, { useState } from "react";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import LOGO from "../../public/images/Aloha.png";
import BurgerIcon from "../../public/images/menu.svg";
import MobileNavBar from "./MobileNavBar";
import useResponsive from "@/utils/useResponsive";
import Link from "next/link";

const NavBar = ({ cover }) => {
  const [navBarToggle, setNavBarToggle] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__left}>
        <div className={styles.navBar__left_logo}>
          <Image src={cover || LOGO} alt="Picture" />
        </div>
        <div className={styles.navBar__left_link}>
          <Link className={styles.link} href={"/"}>
            <p>Home</p>
          </Link>
          <Link className={styles.link} href={"/activities/Surfing"}>
            <p>Surfing</p>
          </Link>
          <Link className={styles.link} href={"/activities/Traditional%20Festivals"}>
            <p>Festival</p>
          </Link>
          <Link className={styles.link} href={"/activities/Volcanoes"}>
            <p>Volcanoes</p>
          </Link>
        </div>
      </div>
      <div className={styles.navBar__right}>
        <button>Book a trip</button>
        <div className={styles.navBar__right_logo} onClick={(e) => setNavBarToggle(true)}>
          <Image src={BurgerIcon} alt="Picture" />
        </div>
      </div>

      {navBarToggle && isMobile && <MobileNavBar setNavBarToggle={setNavBarToggle} />}
    </div>
  );
};

export default NavBar;

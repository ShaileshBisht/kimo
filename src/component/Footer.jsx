import React from "react";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import FLOGO from "../../public/images/footer_Aloha.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__title}>
        <Image src={FLOGO} alt="Picture" />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import styles from "@/styles/MiniCard.module.css";
import Image from "next/image";
import arrow from "../../public/images/arrow_forward.svg";
import { useRouter } from "next/router";

const MiniCard = ({ details }) => {
  const router = useRouter();
  const { description, image, title } = details;

  const handleClick = (e, title) => {
    e.preventDefault();
    if (title == "Surfing") {
      router.push("/activities/Surfing");
    }
    if (title == "Traditional Festivals") {
      router.push("/activities/Traditional%20Festivals");
    }
    if (title == "Volcanoes") {
      router.push("/activities/Volcanoes");
    }
  };

  return (
    <div className={styles.miniCard} onClick={(e) => handleClick(e, title)}>
      <div className={styles.miniCard__top}>
        <Image src={image} layout="fill" objectFit="cover" alt="Picture" />
      </div>
      <div className={styles.miniCard__bottom}>
        <p>{title}</p>
        <span>{description}</span>

        <div className={styles.miniCard__bottom_icon}>
          <Image src={arrow} alt="Picture" />
        </div>
      </div>
    </div>
  );
};

export default MiniCard;

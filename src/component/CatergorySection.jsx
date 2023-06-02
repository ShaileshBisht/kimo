import React, { useState } from "react";
import styles from "@/styles/CatergorySection.module.css";
import StickCard from "./StickCard";
import TravelGuideCard from "./TravelGuideCard";
import AdventureCard from "./AdventureCard";
import arrow from "../../public/images/arrow_forward.svg";
import Image from "next/image";

const CatergorySection = ({ categories, stopClickFlow = false }) => {
  const [activityModalToggle, setActivityModalToggle] = useState(false);
  const [activityData, setActivityData] = useState([]);

  return (
    <div className={styles.catergorySection}>
      <div className={styles.catergorySection_Box}>
        <div className={styles.catergorySection_left}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <h1 className="title">{activityModalToggle ? "Activities" : "Catergories"}</h1>
            {activityModalToggle && (
              <div style={{ paddingLeft: "1rem", rotate: "180deg", cursor: "pointer" }} onClick={(e) => setActivityModalToggle(false)}>
                <Image src={arrow} alt="Picture" />
              </div>
            )}
          </div>

          <div className={styles.catergorySection_left_card}>
            {!activityModalToggle &&
              categories.map((category, index) => (
                <StickCard
                  stopFlow={stopClickFlow ? true : false}
                  key={index}
                  details={category}
                  setActivityModalToggle={setActivityModalToggle}
                  setActivityData={setActivityData}
                />
              ))}
            {activityModalToggle &&
              activityData.map((activity, index) => (
                <AdventureCard
                  key={index}
                  activity={activity.title}
                  setActivityModalToggle={setActivityModalToggle}
                  setActivityData={setActivityData}
                />
              ))}
          </div>
        </div>
        <div className={styles.catergorySection_right}>
          <h1 className="title">Travel Guide</h1>

          <div className={styles.catergorySection_right_card}>
            <TravelGuideCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatergorySection;

import React from "react";
import styles from "@/styles/HighlightSection.module.css";
import MiniCard from "./MiniCard";

const HighlightSection = ({ highlights }) => {
  return (
    <div className="outer_margin">
      <div className={styles.highlightSection}>
        <h1 className="title">Highlights</h1>

        <div className={styles.highlightSection__cardBox}>
          {highlights?.map((highlight, index) => (
            <MiniCard details={highlight} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;

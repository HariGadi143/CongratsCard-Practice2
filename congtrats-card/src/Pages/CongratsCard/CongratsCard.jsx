import React from "react";
import styles from "./CongratsCard.module.css";

const CongratsCard = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.congratsCardWrapper}>
        <h1>Congratulations</h1>
        <div className={styles.detailsCard}>
          <figure>
            <img
              src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
              alt="profile_img"
            />
          </figure>
          <h1>Kiran V</h1>
          <p>
            Vishnu Institute of Computer Education and Technology,
            <br /> Bheemavaram
          </p>
          <figure>
            <img
              src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
              alt="watch_img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CongratsCard;

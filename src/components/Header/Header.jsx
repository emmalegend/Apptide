import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.hero_container}>
      <div className={styles.hero_icons} />
      <div>
        <h1>Consult Health Care Professionals</h1>
      </div>
      <div className={styles.text}>
        Get connected with highly experienced medical health care
        <br />
        practitioners at your own time. No waits, no commuting delays.
        <br />
        Professionals anywhere,anytime
        <br />
        <span>
          <b>How easy can that be!</b>
        </span>
      </div>
      <div className={styles.hero_buttons}>
        <Button label="Download Now" />
        <Button label="Explore Features" />
      </div>
      <div className={styles.hero_c} />
    </header>
  );
};

export default Header;

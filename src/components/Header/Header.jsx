import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import Typewriter from "typewriter-effect";

const words = ["Consult Health Care professionals", "Purchase prescribed Drugs","All in One App"];

const Header = () => {
  return (
    <header className={styles.hero_container}>
      <div className={styles.hero_icons} />
      <div className={styles.typewriter}>
        <h1>
          <Typewriter
            options={{
              strings: words,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
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

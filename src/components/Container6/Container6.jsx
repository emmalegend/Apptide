import React from "react";
import styles from "./Container6.module.css";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";

const Container6 = () => {
  return (
    <div className={styles.container6}>
        <h2>Get it on App Store</h2>
      <div className={styles.container6_image}>
        <img src={google} alt="google" />
        <img src={apple} alt="apple" />
      </div>
    </div>
  );
};

export default Container6;

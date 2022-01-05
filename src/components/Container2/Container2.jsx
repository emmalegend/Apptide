import React from "react";
import styles from "./Container2.module.css";
import { ReactComponent as Arrow } from "../../assets/ForwardArrow.svg";
import img2 from '../../assets/second-image.png'

const Container2 = () => {
  return (
    <section className={styles.main_container2}>
      <h1>Do more on MedOnCall</h1>
      <div className={styles.container2}>
        <div>
          <div className={styles.container2_text}>
            <div className={styles.service}>
              <h2>Pick a Service</h2>
              <Arrow />
            </div>
            <div className={styles.line} />
            <p>
              Choose a service to get professsional in specialized
              <br />
              fields, whether General checkup, Emergency,Body and
              <br />
              Nutrition,there is a consultant for it
            </p>
          </div>
          <div className={styles.container2_text}>
            <div className={styles.service}>
              <h2>Connect Virtually</h2>
              <Arrow />
            </div>
            <div className={styles.line} />
            <p>
              Whatever means of communication you prefer-vedio calling,
              <br />
              audio calling or texting is adequate. keep it in mind
              <br />
              that all information divulged will be treated confidentially.
            </p>
          </div>
          <div className={styles.container2_text}>
            <div className={styles.service}>
              <h2>Need Medications</h2>
              <Arrow />
            </div>
            <div className={styles.line} />
            <p>
              We provide an online pharmacy where you order precribed
              <br />
              medication. for quality assurance purpose we source
              <br />
              our products directly from the manufacturer.
            </p>
          </div>
        </div>
        <div className={styles.container2_img}>
          <img src={img2} alt="" className={styles.container2_img_img} />
        </div>
      </div>
    </section>
  );
};

export default Container2;

import React from "react";
import styles from "./Container3.module.css";
import consult1 from '../../assets/consultation1.png'
import consult2 from "../../assets/consultation2.png";
import consult3 from "../../assets/consultation3.png";
import consultleft from "../../assets/consult-left.svg";
import consultright from "../../assets/consult-right.svg";
import Button from "../Button/Button";

const Container3 = () => {
  return (
    <>
      <section className={styles.container3_main}>
        <h2>It only gets better</h2>
        <div className={styles.container3}>
          <div className={styles.container3_text}>
            <h4>Flexible Health Plan</h4>
            <p>
              we work within your budget offering you a variety <br />
              of packages for you,your family and employees
              <br />
              with the best of services included
            </p>
          </div>
          <div className={styles.container3_text}>
            <h4>Covid Compliant Practices</h4>
            <p>
              Concerned about covid,be rest assured; our doctors are <br />
              highly experienced to administer treatment,
              <br />
              taking into all the required preventive measures
              <br />
              when visiting our home.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.container3_container}>
        <img src={consult1} className={styles.consult1} alt="" />
        <img src={consultleft} className={styles.consultleft} alt="" />
        <img src={consult2} className={styles.consult2} alt="" />
        <img src={consultright} className={styles.consultright} alt="" />
        <img src={consult3} className={styles.consult3} alt="" />
      </div>
      <div className={styles.container3_button}>
            <Button label='Learn More About This' />
      </div>
    </>
  );
};

export default Container3;

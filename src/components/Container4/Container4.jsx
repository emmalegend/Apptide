import React from "react";
import Button from "../Button/Button";
import styles from "./Container4.module.css";
import icon2 from '../../assets/icon2.svg'
import icon3 from "../../assets/icon3.svg";
import cont4 from '../../assets/Vector_cont4.svg'

const Container4 = () => {
  return (
    <section>
    <div className={styles.container4}>
      <div className={styles.container4_header}>
        <h3>Pharmacy? You have it on the same App?</h3>
        <Button label="Read More" />
      </div>
    </div>  
      <div className={styles.container4_text}>
        <div className={styles.container4_text_vector}>
          <img src={cont4} alt="" />
        </div>
        <div className={styles.container4_indivi}>
          <div className={styles.icons_container4}>
            <img src={icon2} alt="" />
          </div>
          <h3>
            Buy over the <br /> counter
          </h3>
          <p>
            Buy regular medicine you'd get
            <br />
            from the pharmacist without
            <br />
            necessary prescriptions
          </p>
        </div>
        <div className={styles.container4_indivi}>
          <div className={styles.icons_container4}>
            <img src={icon3} alt="" />
          </div>
          <h3>
            Buy Prescribtion <br /> Drugs
          </h3>
          <p>
            Get medicine precribed by your
            <br />
            personal doctor or pharmacist
            <br />
            on Medoncall or anywhere else
          </p>
        </div>
      </div>
    </section>
  );
};

export default Container4;

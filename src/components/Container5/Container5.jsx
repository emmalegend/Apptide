import React from "react";
import styles from './Container5.module.css'

const Container5 = () => {
  return (
    <section className={styles.container5}>
      <h1>
        Stay ahead with the latest <br /> Health News
      </h1>
      <div >
        <div className={styles.cont5_image}>
          <div className={styles.cont5_img1}></div>
          <div className={styles.cont5_img2}>
            <p>Vaccine</p>
          </div>
          <div className={styles.cont5_img3}>
            <p>Break Through</p>
          </div>
          <div className={styles.cont5_img4}>
            <p>Research</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container5;

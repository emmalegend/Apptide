import React from 'react'
import styles from './Container1.module.css'
import img1 from '../../assets/first-image.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaGem } from "react-icons/fa";

const Container1 = () => {
    return (
      <section className={styles.section1_container}>
        <div className={styles.img1_container}>
          <img src={img1} alt="" className={styles.img1} />
        </div>

        <div className={styles.text_container}>
          <div className={styles.text_container_individual}>
            <FaCloud className={styles.text_container_img} />
            <h3>Thousands of specialists at your disposal</h3>
            <p>
              At Medoncall, we ensure that the best of practitioners attend
              <br />
              to your request providing the highest quality of medical
              <br />
              services for a quick and seamless recovery.
            </p>
          </div>
          <div className={styles.text_container_individual}>
            <FaGem className={styles.text_container_img} />
            <h3>Cost-Friendly Prices</h3>
            <p>
              With our unique telemedicine solution, you do not have to break
              <br />
              the bank to get top notch medical consultations that
              <br />
              enable you and your loved ones access all-inclusive
              <br />
              and affordable healthcare services.
            </p>
          </div>
          <div className={styles.text_container_individual}>
            <FaMapMarkerAlt className={styles.text_container_img} />
            <h3>Scheduled Home Visits</h3>
            <p>
              Even if you require physical attention, we will
              <br />
              still come to you ensuring optimum
              <br />
              convenience as promised.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Container1

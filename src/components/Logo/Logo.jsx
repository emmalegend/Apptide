import React from 'react'
import styles from './Logo.module.css'
import { ReactComponent as Ellipse } from "../../assets/ellipse.svg";

const logo = () => {
    return (
      <div className={styles.nav_logo}>
        <a href="#.com">MedonCall</a>
        <div className={styles.ellipse_container}>
          <Ellipse className={styles.ellipse} />
          <Ellipse className={styles.ellipse} />
          <Ellipse className={styles.ellipse} />
        </div>
      </div>
    );
}

export default logo

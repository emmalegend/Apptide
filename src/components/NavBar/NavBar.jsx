import React from "react";
import styles from "./NavBar.module.css";
import { ReactComponent as Ellipse } from "../../assets/ellipse.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { FaBars } from "react-icons/fa";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_logo}>
        <a href="#.com">MedonCall</a>
        <div className={styles.ellipse_container}>
          <Ellipse className={styles.ellipse} />
          <Ellipse className={styles.ellipse} />
          <Ellipse className={styles.ellipse} />
        </div>
      </div>
      <div className={styles.nav_links}>
        <div className={styles.nav_link}>
          <a href="features.com">
            Features <ArrowDown />
          </a>
        </div>

        <div className={styles.nav_link}>
          <a href="faq.com">FAQ</a>
        </div>

        <div className={styles.nav_link}>
          <a href="contact.com">Contact</a>
        </div>
        <Button label='Get it Now' />
      </div>
      <div className={styles.mobile_icon_container}>
        <FaBars className={styles.mobile_icon} />
      </div>
    </nav>
  );
};

export default NavBar;

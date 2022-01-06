import React from "react";
import styles from "./NavBar.module.css";

import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { FaBars } from "react-icons/fa";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
      <Logo />
      <div className={styles.nav_links}>
        <div className={styles.nav_feature}>
          <div className={styles.nav_link}>
            <a href="features.com">
              Features <ArrowDown />
            </a>
          </div>
          <div className={styles.nav_link_feature}>
            <p>Book Consultation</p>
            <p>Drug Store</p>
          </div>
        </div>

        <div className={styles.nav_link}>
          <a href="faq.com">FAQ</a>
        </div>

        <div className={styles.nav_link}>
          <a href="contact.com">Contact</a>
        </div>
        <Button label="Get it Now" />
      </div>
      <div className={styles.mobile_icon_container}>
        <FaBars className={styles.mobile_icon} />
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import Logo from "../Logo/Logo";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_firstcontainer}>
        <div className={style.footer_logo}>
          <div>
            <Logo />
          </div>
          <div className={style.footer_address}>
            <b>Address:</b> Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
            <br />
            Non arcu condimentum sed id tempus
            <br />
            magnis amet, sagittis semper.
            <div>
              <b>Email Address:</b>info@medoncall.com
            </div>
          </div>
        </div>
        <div className={style.footer_company}>
          <div>
            <h3>Company</h3>
            <p>Pricing</p>
            <p>About us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div>
            <h3>Features</h3>
            <p>Drug Store</p>
            <p>Book Consultation</p>
          </div>
          <div>
            <h3>Help</h3>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
      </div>
      <div className={style.footer_lastcontainer}>
        <div className={style.footer_copyright}>
          (c)Copy 2021 | All Rights Reserved | Medoncall
        </div>
        <div className={style.footer_apptide}>
          Made with <span role="img">❤️</span> by{" "}
          <a href="#">Apptide Technologies</a>
        </div>
        <div className={style.footer_icons}>
          <FaFacebookSquare className={style.footer_icon} />
          <FaTwitterSquare className={style.footer_icon} />
          <FaInstagram className={style.footer_icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

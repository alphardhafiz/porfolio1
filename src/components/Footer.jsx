import React from "react";

import "./FooterStyles.css";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Medan, Indonesia.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +62-877-6872-8483
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              bucialphard@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Moh Alphard Hafiz Buci. i enjoy doing fullstack web
            development.{" "}
          </p>
          <div className="social">
            <Link to="https://wa.me/6287768728483" target="_blank">
              <FaWhatsapp
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/alphardhafiz/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link to="https://instagram.com/alphardhafiz" target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

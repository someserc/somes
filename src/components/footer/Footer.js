import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer my-4 ">
      <div className="row footer-contacts">
        <div className="col-lg-3 col-sm-6 pred">
          <h2>President</h2>
          <p>Mr. Anil Dangi</p>
          <p>
            <Link to="mailto:Royalak297@gmail.com" className="contact-link">
              <FaEnvelope />{" "}
              <span className="contact-text">Royalak297@gmail.com</span>
            </Link>
          </p>
          <p>
            <Link to="tel:+9779863450956" className="contact-link">
              <FaPhoneAlt />{" "}
              <span className="contact-text">+977 9863450956</span>
            </Link>
          </p>
        </div>
        <div className="col-lg-3 col-sm-6 pred">
          <h2>Vice President</h2>
          <p>Mr. Suraj Bhusal</p>
          <p>
            <Link
              to="mailto:bhusalsuraj1009@gmail.com"
              className="contact-link"
            >
              <FaEnvelope />{" "}
              <span className="contact-text">bhusalsuraj1009@gmail.com</span>
            </Link>
          </p>
          <p>
            <Link to="tel:+9779746413683" className="contact-link">
              <FaPhoneAlt />{" "}
              <span className="contact-text">+977 9746413683</span>
            </Link>
          </p>
        </div>

        <div className="col-lg-3 col-sm-6 ">
          <div className="q-links">
            <h3>Quick Links</h3>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/committee">Committee</Link>
              <Link to="/notes">Notes</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/alumni">Alumni</Link>
            </div>
          </div>
        </div>
      </div>

      {/* this col is for map */}
      <div className="col-lg-12 col-sm-12 my-4 div_map">
        {
          <iframe
            title="myfooterunique"
            className="img-fluid map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14245.917467843463!2d87.2923586!3d26.792861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b606ce89f9%3A0x7423e72f8e139e05!2sPurwanchal%20Engineering%20Campus(ERC)!5e0!3m2!1sen!2snp!4v1687102715794!5m2!1sen!2snp"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        }
      </div>

      {/* social media link */}
      <div className="social-media my-2">
        <Link
          to="https://www.facebook.com/somesioepcdharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </Link>

        <Link
          to="https://www.instagram.com/aimes.ioe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
      </div>

      <h2 className="text-center my-4">
        SOCIETY OF MECHANICAL ENGINEERING STUDENTS(SOMES)
      </h2>
    </footer>
  );
};

export default Footer;

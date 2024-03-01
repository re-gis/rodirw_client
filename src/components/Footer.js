import React from "react";
import footerLogo from "../img/rodi/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4 link_cont">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                  We envision a thriving community where everyone has access to
                  knowledge and resources
                </p>
                <div className="mt-3 social-links d-flex">
                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>

                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>

                  <Link to={"/"}>
                    <i className="bi bi-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="text-center col-lg-3 col-md-12 footer-contact text-md-start">
                <h4>Subscribe Now</h4>
                <p>Don’t miss our future updates! Get Subscribed Today!</p>

                <form>
                  <div>
                    <label>Email:</label>
                    <input type="email" />
                  </div>
                  <button className="btn-submit">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span className="foot-right">
                RODIRWANDA© 2023. All Rights Reserved.
              </span>
              <span>Privacy&policy Terms&Conditions FAQ</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

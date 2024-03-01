import React from "react";
import logo from "../img/rodi/logo.png";
//import Navbar from "./Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const InnerHeader = () => {
  //

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  //assigning location variable
  const location = useLocation();

  //destructuring path name from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  //sticky header
  useEffect(() => {
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 80
          ? selectHeader.classList.add("sticked")
          : selectHeader.classList.remove("sticked");
      });
    }
  }, []);

  // mobile view menu
  const mobilemenu = (event) => {
    event.preventDefault();
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("mobile-nav-active");
  };

  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo" onClick={toTop}>
            <img
              src={logo}
              alt="Symbiotic Info tech Pvt. Ltd"
              title="Rodi Rwanda Organization"
              className="logo-main"
            />
          </Link>
          <span onClick={mobilemenu}>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          </span>
          <nav id="navbar" className="navbar">
            <ul onClick={mobilemenu}>
              <li>
                <Link
                  to="/"
                  className={splitLocation[1] === "" ? "active" : ""}
                >
                  {" "}
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={splitLocation[1] === "about" ? "active" : ""}
                >
                  {" "}
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={splitLocation[1] === "contact" ? "active" : ""}
                >
                  {" "}
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className={splitLocation[1] === "programs" ? "active" : ""}
                >
                  {" "}
                  PROGRAMS
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className={splitLocation[1] === "impact" ? "active" : ""}
                >
                  {" "}
                  IMPACT
                </Link>
              </li>
              <li>
                <Link
                  to="/announcement"
                  className={
                    splitLocation[1] === "announcement" ? "active" : ""
                  }
                >
                  {" "}
                  ANNOUNCEMENT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default InnerHeader;

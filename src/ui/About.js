import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import about_1 from "../img/rodi/about-1.jpg";
import manag_photo1 from "../img/team/Padmakumar.png";
import manag_photo2 from "../img/team/Sundaramoorthy.png";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import abtHeader from "../img/about-header.jpg";
import { useEffect } from "react";
import image2 from "../img/rodi/about2.jpg";
import Objectives from "../components/Objectives";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={abtHeader} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2
                style={{
                  color: "#063361",
                }}
              >
                WELCOME TO{" "}
                <span
                  style={{
                    color: "#000",
                  }}
                >
                  About Us
                </span>
              </h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
              <div className="col-lg-6">
                <img
                  src={about_1}
                  className="img-fluid"
                  alt="Helping Clients achieve their Vision"
                  title="Helping Clients achieve their Vision"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  {" "}
                  Rwanda organization for development Initiatives(RODI) is a no
                  profit-making Organization , Created in 2012. We have a legal
                  personality certificate aworded by RGB. who are responsible
                  forall program and staff management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          id="vision"
          className="vision aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Vision</h4>
                        <p>
                          We envision a thriving community where everyone has
                          access to knowledge and resources necessary for
                          achieving a better quality of life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Mission</h4>
                        <p>
                          To strengthen the capacity of small-scale farmers,
                          youth and women to improve livelihoods,food security,
                          and increase economic opportunities by providing
                          technical assistance in the agricultural value chain,
                          adaptation to climate change, and entrepreneurship
                          development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div>
                <p>
                  Just click on dropdown sign to read more about our Programs
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="obje">

        <Objectives/>
      </div>

        <section
          id="management"
          className="management light-bg aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>
                Leveraging their vast experience within the Telecom value added
                services industry, Symbiotic's leadership team is dedicated to
                meet and exceed customer expectations with innovative and
                cost-effective solutions, industry know-how and unmatched
                services.
              </p>
            </div>
            <div className="row member d-flex align-items-center ">
              <div className="col-md-2">
                <div className="pic">
                  <img src={manag_photo1} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>T.Padmakumar</h4>
                  <span>Co-Founder & Director</span>
                  <p>
                    Padma is a visionary Technocrat with 16 Years of experience
                    and has worked with consulting majors & service industries
                    in the field of IT technologies. His specialization includes
                    Networking, Securities, System Architecture, Data base and
                    Enterprise solutions .
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="/">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 row member d-flex align-items-center">
              <div className="col-md-2">
                <div className="pic">
                  <img src={manag_photo2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>V.Sundaramoorthy </h4>
                  <span>Co-Founder & Director</span>
                  <p>
                    Sundar is a visionary and entrepreneur in his own right. He
                    has worked with IT and Engineering majors before entering
                    the telecom business. He has over 14 years of management
                    experience with IT & Engineering majors and has significant
                    global experience and also an expert in corporate alliance.{" "}
                  </p>
                  <p>
                    {" "}
                    Sundar has extensive multi-functional management experience
                    in marketing, sales, business and corporate development and
                    holds a Bachelors degree in Electrical & Electronic
                    Engineering.
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/">
                      {" "}
                      <i className="bi bi-linkedin" target="_blank"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

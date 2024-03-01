import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Welcome to RODI Rwanda </h2>
          </div>
          <div className="row gy-5">
            <div
              className=" service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div>
                  <h4 className="title">
                    <Link to="/ervices" className="stretched-link">
                      Our Mission
                    </Link>
                  </h4>
                  <p className="description">
                    To strengthen the capacity of small-scale farmers, youth and
                    women to improve livelihoods,food security, and increase
                    economic opportunities by providing technical assistance in
                    agricultural value chain, adaptation to climate change, and
                    entrepreneurship development.
                  </p>
                  <Link to="/services" className="mt-3 btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;

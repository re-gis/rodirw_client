import React from "react";
import rgb_card from "../img/rodi/rgb_card.jpeg";
import rg_2 from "../img/rodi/rg_2.jpg";
import { Link } from "react-router-dom";

const MissionCard = () => {
  return (
    <div>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div
            className="pt-5 row gy-5 align-items-center"
            id="Educational-content"
          >
            <div
              className="col-lg-5 col-md-6 service-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={rgb_card}
                className="w-2 h-2 img-fluid"
                alt=""
                title="Educational-content"
              />
            </div>

            <div
              className="col-lg-7 col-md-6 service-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <div className="flex-shrink-0 icon">
                <i className="bi bi-book" style={{ color: "#f57813" }}></i>
              </div> */}
              <div>
                <h4 className="title">
                  {" "}
                  Extreme Poverty, Investing in People's Skills, Transforming
                  from a Laborer to a Farmer{" "}
                </h4>
                <p className="description">
                  Witness an incredible transformation, break free from the
                  cycle of extreme poverty, and rise to become a thriving
                  farmer. The power of investing in people's skills showcases
                  how determination and opportunity can create a life-altering
                  change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="services-list light-bg" id="Entertainment-content">
        <div className="container" data-aos="fade-up">
          <div className="row gy-5 align-items-center ">
            <div
              className="col-lg-7 col-md-6 service-item "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* <div className="flex-shrink-0 icon">
                <i
                  className="bi bi-collection-play"
                  style={{ color: "#15a04a" }}
                ></i>
              </div> */}
              <div>
                <h4 className="title">Unleashing Resilience and Dreams </h4>
                <p className="description">
                  Step into Rodie's extraordinary journey as she defies
                  adversity and discovers her true potential through
                  entrepreneurship. Witness her transformation from a teen
                  mother to a thriving businesswoman, inspiring her community
                  along the way.
                </p>
              </div>
              <Link to="/services" className="mt-3 btn-get-started">
                Read More
              </Link>
            </div>

            <div
              className="order-first col-lg-5 col-md-6 service-item order-sm-last"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={rg_2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionCard;

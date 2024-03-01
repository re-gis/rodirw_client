import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <section id="hero" className="hero d-flex">
        <div className="container cont-one">
          <div
            className="row align-items-center cont-two"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="justify-center text-2xl text-center other-con">
              <h2 data-aos="fade-up">
                RODI believes in participatory Rights based approach
              </h2>
              <div className="d-flex align-items-center header-text">
                <p>
                  We envision a thriving community where everyone has access to
                  knowledge and resources necessary for achieving a better
                  quality of life.
                </p>
              </div>
              <Link to="/contact" className="mt-3 btn-get-started btn-con">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;

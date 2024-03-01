import React from "react";
import { Link } from "react-router-dom";

const Svg = ({ src }) => {
  return (
    <div className="pro_main-cont">
      <div className="pro-cont">
        <img src={src} />
      </div>
      <span>Youth and Women Empowerment Program</span>
      <Link to="/services" className="mt-3 btn-get-started">
        Read More
      </Link>
    </div>
  );
};

export default Svg;

import React from "react";
import { Link } from "react-router-dom";

const ProgramComp = ({ title, img, description }) => {
  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <div>
      <div>
        <Link to={`${formatTitle(title)}`}>{title}</Link>
        <div>
          <img src={img} />
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProgramComp;

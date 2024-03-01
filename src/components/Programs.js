import React from "react";
import Svg from "./Svg";
import woman from "../img/svgs/woman_svg.svg";
import hands from "../img/svgs/hands.svg";
import hand from "../img/svgs/hand.svg";
import pe from "../img/svgs/people.svg";

const Programs = () => {
  return (
    <div className="mb-10">
      <h1 className="prog_head">Our Programs</h1>
      <div className="svg_cont">
        <Svg src={woman} />
        <Svg src={hand} />
        <Svg src={hands} />
        <Svg src={pe} />
      </div>
    </div>
  );
};

export default Programs;

import React from "react";

const FeaturedPost = ({ title, date, img }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <div>
        <img src={img} />
      </div>
    </div>
  );
};

export default FeaturedPost;

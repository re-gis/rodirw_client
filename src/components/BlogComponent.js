import React from "react";
import { Link } from "react-router-dom";

const BlogComponent = ({ img, title, description, program, author, date }) => {
    const formatTitle = (title) => {
        return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\s-]/g, "");
      };
  return (
    <div className="flex items-center gap-[30px] h-[100%]">
      <div className="h-full w-[40%]">
        <img src={img} className="h-[100%] rounded-[3%] object-cover" alt="" />
      </div>
      <div className="w-[60%] flex flex-col gap-[20px] py-[4%]">
        <div>
          <Link to={`/${formatTitle(title)}`} className="text-[#333356] text-[32px]">{title}</Link>
        </div>
        <div>
          <p className="text-[#000] font-bold">{description}</p>
        </div>
        <div className="flex gap-[10%]">
          <p>
            by<span className="text-[#1cb67d]"> {author}</span>
          </p>
          <p>in {date}</p>
        </div>
        <div>
          <p className="text-[#1cb67d]">in {program}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;

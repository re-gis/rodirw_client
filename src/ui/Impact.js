import React from "react";
import InnerHeader from "../components/InnerHeader";
import contactHeader from "../img/contact-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import Footer from "../components/Footer";
import BlogComponent from "../components/BlogComponent";
import blog1 from "../img/rodi/blog1.png";
import FeaturedPost from "../components/FeaturedPost";

const Impact = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Blogs"} img={contactHeader} />

      <main className="flex flex-full gap-[10%] my-[5%] mx-[5%]">
        <div className="w-[70%] flex flex-col gap-[4%] py-[5%]">
          <BlogComponent
            img={blog1}
            title={
              "Transforming Lives Through Resilience: Solange’s Journey with the PAC Project"
            }
            author={"U. Rwagasana Benitha"}
            date={"January 16, 2024"}
            program={"Youth and Women Empowerment Program"}
            description={
              "Impact Story Transforming Lives Through Resilience: Solange's Journey with the PAC Project Meet MUKOBWAJANA Solange, a resilient 32-year-old single mother …"
            }
          />
          <BlogComponent
            img={blog1}
            title={
              "Transforming Lives Through Resilience: Solange’s Journey with the PAC Project"
            }
            author={"U. Rwagasana Benitha"}
            date={"January 16, 2024"}
            program={"Youth and Women Empowerment Program"}
            description={
              "Impact Story Transforming Lives Through Resilience: Solange's Journey with the PAC Project Meet MUKOBWAJANA Solange, a resilient 32-year-old single mother …"
            }
          />
          <BlogComponent
            img={blog1}
            title={
              "Transforming Lives Through Resilience: Solange’s Journey with the PAC Project"
            }
            author={"U. Rwagasana Benitha"}
            date={"January 16, 2024"}
            program={"Youth and Women Empowerment Program"}
            description={
              "Impact Story Transforming Lives Through Resilience: Solange's Journey with the PAC Project Meet MUKOBWAJANA Solange, a resilient 32-year-old single mother …"
            }
          />
        </div>
        <div className="w-[30%] flex flex-col gap-[4%] py-[5%]">
          <div className="border rounded-[10px] pt-[10%] w-[100%] flex text-center">
            <form className="w-full flex flex-col gap-[20px]">
              <h1 className="font-[700] text-[#333356] text-[20px]">Search</h1>
              <div className="flex flex-col items-center w-full h-[70px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[80%] h-full outline-none border-[#101010]"
                />
                <button type="submit">Search</button>
              </div>
            </form>
          </div>
          <div>
            <h1>Featured Posts</h1>
            <div>
              <FeaturedPost title={"Title"} date={"date"} img={blog1} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Impact;

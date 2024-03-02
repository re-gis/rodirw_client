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
        <div className="w-[30%]">
          <div>
            <form>
              <h1>Search</h1>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
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

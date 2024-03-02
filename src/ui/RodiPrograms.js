import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import contactHeader from "../img/contact-header.jpg";
import Footer from "../components/Footer";
import ProgramComp from "../components/ProgramComp";
import proj1 from "../img/rodi/prog1.jpg";
// import proj2 from "../img/rodi/prog2.jpg";
// import proj3 from "../img/rodi/prog3.jpg";
// import proj4 from "../img/rodi/prog4.jpg";

const RodiPrograms = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Programs"} img={contactHeader} />
      <main className="flex flex-wrap my-10 -mx-4">
        <div className="w-full px-16 mb-8 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProgramComp
            img={proj1}
            description={
              "Youth and women empowerment program is designed to support youth and woman to receive services enabling them to create their own job or working in good condition."
            }
            title={"YOUTH AND WOMEN DEVELOPMENT"}
          />
        </div>
        <div className="w-full px-16 mb-8 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProgramComp
            img={proj1}
            description={
              "Youth and women empowerment program is designed to support youth and woman to receive services enabling them to create their own job or working in good condition."
            }
            title={"YOUTH AND WOMEN DEVELOPMENT"}
          />
        </div>
        <div className="w-full px-16 mb-8 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProgramComp
            img={proj1}
            description={
              "Youth and women empowerment program is designed to support youth and woman to receive services enabling them to create their own job or working in good condition."
            }
            title={"YOUTH AND WOMEN DEVELOPMENT"}
          />
        </div>
        <div className="w-full px-16 mb-8 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProgramComp
            img={proj1}
            description={
              "Youth and women empowerment program is designed to support youth and woman to receive services enabling them to create their own job or working in good condition."
            }
            title={"YOUTH AND WOMEN DEVELOPMENT"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RodiPrograms;

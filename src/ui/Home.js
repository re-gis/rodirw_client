import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ClientList from "../components/ClientList";
import Facts from "../components/Facts";
import ServiceList from "../components/ServiceList";
import Revenue from "../components/Revenue";

import MissionCard from "../components/MissionCard";
import Objectives from "../components/Objectives";
import Programs from "../components/Programs";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main" className="main">
        <ServiceList />
        <MissionCard />
        <Objectives />
        <Programs />
        <ClientList />
        {/* <Facts /> */}
        {/* <Revenue /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;

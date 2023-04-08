import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCards from "../components/PricingCards";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading={"PROJECTS."} text="My recent works." />
      <WorkCard />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Project;

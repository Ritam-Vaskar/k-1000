import React from "react";
import Hero from "../../sections/Hero/Hero";
import Benifits from "../Benefits/Benefits";
import AboutSection from "../../sections/About/AboutSection";
import BenefitsSection from "../../sections/Benifits/BenefitsSection";
import SelectionProcessSection from "../../sections/SelectionProcess/SelectionProcessSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <BenefitsSection />
      {/* <SelectionProcessSection /> */}
    </div>
  );
};

export default Home;

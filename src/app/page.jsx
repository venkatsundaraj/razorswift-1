import React from "react";
import "./globals.css";
import HeroSection from "@/components/pageBasedComponents/Homepage/HeroSection";
// import ExploreSection from "@/components/pageBasedComponents/Homepage/ExploreSection";
// import DemoSection from "@/components/pageBasedComponents/Homepage/DemoSection";
// import DropdownSection from "@/components/pageBasedComponents/Homepage/DropdownSection";
// import PathwaySection from "@/components/pageBasedComponents/Homepage/PathwaySection";

const page = () => {
  return (
    <div className="Topcontainer">
      <HeroSection />
    </div>
  );
};

export default page;

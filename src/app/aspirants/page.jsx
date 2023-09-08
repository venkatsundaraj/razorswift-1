import React from "react";
import HeroSection from "@/components/pageBasedComponents/Aspirants/HeroSection";
import { Box } from "@mui/material";

export const metadata = {
  title: "Aspirants | Razorswift",
};

function Aspirants() {
  return (
    <Box component="main">
      <HeroSection />
    </Box>
  );
}

export default Aspirants;

"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PrimaryHeading from "@/components/headingComponents/PrimaryHeading";
import ExtraSuperText from "@/components/headingComponents/ExtraSuperText";
import SuperText from "@/components/headingComponents/SuperText";
import ViewportBoxComponent from "@/components/globalComponents/CustomContainer/ViewportBoxComponent";
import Image from "next/image";
import aspirantPageImagePaths from "@/constants/ImagePaths/Aspirants/aspirantPageImagePaths";
import CenteredFlexComponent from "@/components/globalComponents/CustomContainer/CenteredFlexComponent";
import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";
import { heroSectionData } from "@/constants/Aspirants/aspirantPageData";
import PrimaryFillButton from "@/components/buttonComponents/PrimaryFillButton";
import Link from "next/link";
import CustomImage from "@/components/globalComponents/CustomImage/CustomImage";

function HeroSection() {
  return (
    <ViewportBoxComponent
      sx={{
        flexDirection: "column",
      }}
      component="section"
    >
      <CenteredFlexComponent>
        <Image
          objectFit="cover"
          src={aspirantPageImagePaths.homePage.icon2}
          style={{ width: "clamp(60px,12vw,140px)", height: "auto" }}
        />
        <SuperText component="h2">{heroSectionData.heading.primary}</SuperText>
      </CenteredFlexComponent>
      <CenteredFlexComponent>
        <ExtraSuperText component="h1" variant="h1">
          {heroSectionData.heading.secondary}
        </ExtraSuperText>
        <Image
          width={130}
          objectFit="cover"
          src={aspirantPageImagePaths.homePage.icon1}
          style={{ width: "clamp(60px,12vw,140px)", height: "auto" }}
        />
      </CenteredFlexComponent>
      <ParagraphHeading component="p" align="center" sx={{ maxWidth: "400px" }}>
        {heroSectionData.description}
      </ParagraphHeading>
      <Link href="#">
        <PrimaryFillButton varient="contained" sx={{ marginTop: "18px" }}>
          {heroSectionData.buttonContent}
        </PrimaryFillButton>
      </Link>
    </ViewportBoxComponent>
  );
}

export default HeroSection;

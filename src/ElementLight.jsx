import { Box, Stack } from "@mui/material";
import React from "react";
import { ContentSection } from "./components/ContentSection";
import { HeroSection } from "./components/HeroSection";
import { FooterSection } from './components/FooterSection'
import { IntroductionSection } from "./components/IntroductionSection";
import { MainSection } from "./components/MainSection";
import { NavigationSection } from "./components/NavigationSection";
import { ServicesSection } from "./components/ServicesSection";

export default function ElementLight() {
  return (
    <Box sx={{ backgroundColor: "background.default", width: "100%" }}>

      <NavigationSection />
      <MainSection />
      <Stack
        spacing={0}
        sx={{ width: "100%", maxWidth: "1440px", margin: "auto" , mt: {xs: 6, md:30}}}
      >
        <IntroductionSection />
        <ServicesSection />
        <ContentSection />
        <HeroSection />
        <FooterSection />
      </Stack>
    </Box>
  );
}
import React from "react";
import MultiLayerParallax from "@/components/IndiaParallax";
import { NavbarDemo } from "@/components/Navbar";
import SmoothScroll from "@/components/ScrollManger";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import IndiaContent from "@/components/IndiaContent";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <NextThemesProvider attribute="class" forcedTheme="light">
      <NavbarDemo />
      <SmoothScroll>
        <MultiLayerParallax />
        <IndiaContent />
        <Footer />
      </SmoothScroll>
    </NextThemesProvider>
  );
}

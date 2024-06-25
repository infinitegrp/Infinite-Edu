"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import axios from "axios";

const page = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/v1/blogs`);
    setBlogs(res?.data?.data);
  };
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NavbarDemo />
      <HeroParallax products={blogs} />
    </NextThemesProvider>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../../utils/cn";
import { useTheme } from "next-themes";
import Image from "next/image";
import axios from "axios";

export function NavbarDemo() {
  return (
    <div className="relative top-8 w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}
interface Blog {
  title: string;
  url: string;
  image: string;
  description: string;
}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/v1/blogs`);
    setBlogs(res?.data?.data);
  };
  return (
    <>
      <div
        className={cn(
          "hidden md:block flex-row fixed inset-x-0 w-full mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home" href="/">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#home">Home</HoveredLink>
              <HoveredLink href="#why-guideline">Why Guideline</HoveredLink>
              <HoveredLink href="#about">About Us</HoveredLink>
              <HoveredLink href="#contact">Contact Us</HoveredLink>
              <HoveredLink
                href={"#"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                Theme {theme}
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="WhyGuideline"
            href="/"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="OurService"
            href="/"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blogs"
            href="/blogs"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              {blogs?.slice(0, 4)?.map(item=><ProductItem
                title={item?.title}
                href={item?.url}
                src={`${process.env.NEXT_PUBLIC_API}/uploads/${item.image}`}
                description={item?.description?.substring(0,70)+'...'}
              />)}
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
            href="/"
          ></MenuItem>
        </Menu>
      </div>
      <div
        className={cn(
          "md:hidden fixed inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="menu" href="/">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="#why-guideline">Why Guideline</HoveredLink>
              <HoveredLink href="#about">About Us</HoveredLink>
              <HoveredLink href="/blogs">Blogs</HoveredLink>
              <HoveredLink href="#contact">Contact Us</HoveredLink>
              <HoveredLink
                href={"#"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                Theme {theme}
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}

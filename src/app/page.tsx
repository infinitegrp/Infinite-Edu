"use client"
import { NavbarDemo } from '@/components/Navbar';
import { Lamp } from '@/components/Lamp';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LandingPage from '@/page/LandingPage';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/ScrollManger';
import { Parallax } from '@/components/Parallax';
import { Spotlight } from '@/components/ui/Spotlight';

export default function Home() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
          <NavbarDemo />
          <Spotlight className="fixed z-10 -top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <SmoothScroll>
        <main className="flex  flex-col w-full  items-center justify-between">
{/* <Parallax speed={1} className="self-start"> */}

          <LandingPage />
{/* </Parallax> */}
          {/* <div className="h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Your Education Explore
          </p>
        </div> */}




        </main>
    </SmoothScroll>
        <Footer />
      </NextThemesProvider>
  );
}

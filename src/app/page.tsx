"use client"
import { NavbarDemo } from '@/components/Navbar';
import { Lamp } from '@/components/Lamp';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LandingPage from '@/page/LandingPage';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/ScrollManger';
import { Spotlight } from '@/components/ui/Spotlight';
import { Roboto } from '@next/font/google'
import { Poppins } from 'next/font/google';

const roboto = Poppins({
  subsets: ['latin'],
  weight: ['300','400', '700'],
})

export default function Home() {
  return (

    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NavbarDemo />
      <Spotlight className="fixed z-10 -top-40 left-0 md:left-60 md:-top-20" fill="rgb(147 197 253)" />
      <SmoothScroll >

          <div className={roboto.className}>
        <main className={`flex  flex-col w-full  items-center justify-between`}>
            <LandingPage />
        </main>
          </div>
      <Footer />
      </SmoothScroll>
    </NextThemesProvider>
  );
}

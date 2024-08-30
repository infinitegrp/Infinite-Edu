"use client";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LandingPage from "@/page/LandingPage";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
  function disableDevtool() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    function ctrlShiftKey(e: KeyboardEvent, key: KeyboardEvent["key"]) {
      return e.ctrlKey && e.shiftKey && e.key === key;
    }
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "F12" ||
        ctrlShiftKey(e, "i") ||
        ctrlShiftKey(e, "j") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    });
  }
  // disableDevtool()
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NavbarDemo />
      <Spotlight
        className="fixed z-10 -top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(147 197 253)"
      />
      <div className={roboto.className}>
        <main className={`flex  flex-col w-full  items-center justify-between`}>
          <LandingPage />
        </main>
      </div>
      <Footer />
    </NextThemesProvider>
  );
}

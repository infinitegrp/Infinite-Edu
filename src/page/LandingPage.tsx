"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import ProgressLanding from "@/components/ProgressLanding";
import StudyInternationaly from "@/components/StudyInternationaly";
import UniversityAdmission from "@/components/UniversityAdmission";
import DistanceEducation from "@/components/DistanceEducation";
import WorkInDubai from "@/components/WorkInDubai";
import StudyIndia from "@/components/StudyIndia";
import InfiniteGroup from "@/components/InfiniteGroup";
import Contact from "@/components/Contact";
import { Lamp } from "@/components/Lamp";
import { WhyInfinite } from "@/components/WhyInfinite";
import Location from "@/components/Location";
import BorderLineCard from "@/components/ui/borderCard";
import CourseFinder from "@/components/CourseFinder";
import WhyInfinitePopup from "@/components/Infinite";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.section
      className={` rounded-xl h-full w-full dark:bg-neutral-950  bg-blue-50 border dark:border-gray-800     shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50 overflow-hidden`}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.1 },
      }}
    >
      {children}
    </motion.section>
  );
};

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const text = "Your Education Explorer".split(" ");
  React.useEffect(() => {
    setTimeout(() => setOpen(true), 2000)
  }, [])
  return (
    <>
      {" "}
      <section
        id="home"
        className="pt-[20vh] md:pt-[20vh] pb-5 md:pb-[10vh]   w-full h-screen justify-between  dark:bg-black bg-white  relative  flex flex-col items-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="py-2 font-normal text-lg md:text-xl font-center text-center text-black dark:text-neutral-300">
          Infinite Educational Institution <br />
        </p>
        <div className="flex flex-row ">
          {text.map((el, i) => (
            <motion.h1
              className="text-[1.75rem] md:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-1 md:p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i / 10 }}
              key={i}
            >
              {el}{" "}
            </motion.h1>
          ))}
        </div>
        <div className="w-[20rem] md:w-[40rem] h- relative ">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <p className="font-normal text-sm md:text-xl pb-5 sm:pb-0 font-center text-center text-black dark:text-neutral-300">
          Elevate your future with higher studies - where knowledge meets
          opportunity!
        </p>
        <div className="flex flex-col items-center gap-2">
          <CourseFinder />
          <ProgressLanding />
        </div>
      </section>
      <div
        id="why-Infinite"
        className="w-full px-5 pt-10 dark:bg-black bg-white flex flex-col items-center justify-center"
      >
        <WhyInfinite />
      </div>
      <div
        id="about"
        className=" w-full gap-1 md:gap-2  dark:bg-black bg-white   flex flex-col items-center justify-center"
      >
        <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-7">
          Our Services
        </p>
        <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-300 mb-10 md:mb-20 max-w-[30rem] px-4 sm:px-0">
          Each department is led by a dedicated divisional manager, guaranteeing
          focused expertise and strategic leadership. We are committed to
          “Guiding To Excellence”
        </p>

        <div className="hidden md:flex max-w-screen-2xl px-2 md:px-20 lg:px-40 w-full gap-2 flex-row justify-center mx-auto relative">
          <div className="w-4/6 h-full flex flex-col gap-1 justify-between">
            <div className="h-2/5 rounded-xl">
              <StudyInternationaly />
            </div>
            <BorderLineCard className="h-3/5 min-h-96 justify-center rounded-xl relative">
              <DistanceEducation />
            </BorderLineCard>
          </div>
          <div className="w-2/6 h-full flex flex-col gap-1 relative">
            <BorderLineCard className="h-[13.8rem] min-h-48 justify-center items-start rounded-xl overflow-hidden flex flex-col relative">
              <WorkInDubai />
            </BorderLineCard>
            <BorderLineCard className="h-[13.8rem] min-h-48 justify-center items-start rounded-xl overflow-hidden flex flex-col relative">
              <StudyIndia />
            </BorderLineCard>
            <BorderLineCard className="min-h-[13rem] h-full justify-center items-start rounded-xl overflow-hidden flex flex-col relative">
              <UniversityAdmission />
            </BorderLineCard>
          </div>
        </div>


        <div className="md:hidden max-w-screen-2xl z--10 px-2 md:px-20 lg:px-40  w-full flex gap-1 flex-col justify-center mx-auto">
          <StudyInternationaly />
          <div className="flex flex-row gap-1">
            <div className="md:w-4/6 w-1/2">
              <BorderLineCard className=" md:block h-full justify-center items-start  overflow-hidden flex flex-col relative">
                <DistanceEducation />
              </BorderLineCard>
            </div>
            <div className="flex flex-col  gap-1 h-full w-1/2 md:w-2/6">
              <div className=" flex  flex-col gap-1 md:gap-2 h-full w-full rounded-xl md:rounded-2xl ">
                <BorderLineCard className="h-40  md:h-52 justify-center items-start  overflow-hidden flex flex-col relative">
                  <WorkInDubai />
                </BorderLineCard>
                <BorderLineCard className="h-40 md:h-60 justify-center items-start  overflow-hidden flex flex-col relative">
                  <StudyIndia />
                </BorderLineCard>
                <BorderLineCard className="h-full justify-center items-start  overflow-hidden flex flex-col relative">
                  <UniversityAdmission />
                </BorderLineCard>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Infinite_group"
        className="pt-12 lg:px-0 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center"
      >
        <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-7">
          Infinite Group
        </p>
        <p className="text-xs md:text-sm font-normal font-center text-center text-black dark:text-neutral-300 mb-10 md:mb-10 max-w-[30rem] px-4 sm:px-0">
          Infinite Group is an international conglomerate, marking a
          substantial presence in Dubai and India. With an unwavering focus on
          innovation and excellence
        </p>
        <div className="w-full max-w-screen-2xl px-5 md:px-20 lg:px-40">
          <InfiniteGroup />
        </div>
      </div>


      {/* <div className="h-screen w-full">
        <Lamp />
      </div> */}
      <div
        id="contact"
        className="lg:px-0 py-8 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center"
      >
        <p className="text-2xl md:text-4xl mb-10 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 md:pt-8">
          Contact Us
        </p>
        <div className="w-full max-w-screen-2xl px-5 md:px-20 lg:px-40">
          <Contact />
        </div>
      </div>
      <div className="lg:px-0 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center ">
        <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">
          Our Locations
        </p>
        <p className="text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
          our prime locations in bustling cities across the UAE and India.
        </p>
        <div className="w-full max-w-screen-2xl px-5 md:px-20 lg:px-40 pb-[5rem]">
          <Location />
        </div>
      </div>
      <WhyInfinitePopup open={open} setOpen={setOpen} />
    </>
  );
}

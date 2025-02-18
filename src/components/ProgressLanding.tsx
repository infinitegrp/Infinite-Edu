"use client";
import React, { ReactNode, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import BorderLineCard from "./ui/borderCard";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.section
      className={`rounded-2xl h-40 flex flex-col max-w-72  items-center justify-center   shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:shadow  overflow-hidden`}
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

export default function ProgressLanding() {
  const count = useMotionValue(0);
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const Universities = useTransform(count, (value) => `${Math.round(value)}+`);
  const FastTrack = useTransform(
    count1,
    (value) => `${Math.round(value)} months`
  );
  const Countries = useTransform(count2, (value) => `${Math.round(value)}+`);
  const Years = useTransform(count3, (value) => `${Math.round(value)}+`);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    const animation1 = animate(count1, 6, { duration: 2 });
    const animation2 = animate(count2, 200, { duration: 2 });
    const animation3 = animate(count3, 15, { duration: 2 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:px-5 w-full justify-center items-center max-w-screen-2xl">
      <div className="flex flex-row">
        <div className="p-[3px] md:p-1 lg:p-2">
          <BorderLineCard className="h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent">
            <motion.div
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2 }}
              className="min-w-40 min-h-44"
            >
              <Image
                src="/gif/blueGradient.gif"
                alt="gradient"
                draggable={false}
                width={480}
                height={480}
                className="w-full h-full blur-lg opacity-10"
              />
            </motion.div>
            <div className="flex flex-col sm:p-1 p-4 lg:w-48 absolute items-center justify-center">
              <motion.h1 className=" text-black dark:text-white font-bold text-2xl ">
                {Universities}
              </motion.h1>
              <p className=" text-black dark:text-gray-300 text-sm xl:text-base font-bold text-center">
                International Study Programs
              </p>
              <p className="text-black dark:text-gray-400 text-xs text-center w-32 md:w-40">
                Access to top universities with expert admission support.
              </p>
            </div>
          </BorderLineCard>
        </div>
        <div className="p-[3px] md:p-1 lg:p-2">
          <BorderLineCard className="h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent">
            <motion.div
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2 }}
              className="min-w-40 min-h-44"
            >
              <Image
                src="/gif/blueGradient.gif"
                alt="gradient"
                draggable={false}
                width={480}
                height={480}
                className="w-full h-full blur-lg opacity-10"
              />
            </motion.div>
            <div className="flex flex-col sm:p-1 p-4 lg:w-48 absolute items-center justify-center">
              <motion.h1 className=" text-black dark:text-white font-bold text-2xl ">
                {Countries}
              </motion.h1>
              <p className=" text-black dark:text-gray-400 text-xs text-center w-32 md:w-40">
                More than 200 clients across different countries. Client-Centric
                Achievements 98% Client satisfaction rate.
              </p>
            </div>
          </BorderLineCard>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="p-[3px] md:p-1 lg:p-2">
          <BorderLineCard className="h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent">
            <motion.div
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2 }}
              className="min-w-40 min-h-44"
            >
              <Image
                src="/gif/blueGradient.gif"
                alt="gradient"
                draggable={false}
                width={480}
                height={480}
                className="w-full h-full blur-lg opacity-10"
              />
            </motion.div>
            <div className="flex flex-col sm:p-1 p-4 lg:w-48 absolute items-center justify-center overflow-hidden">
              <motion.h1 className=" text-black dark:text-white font-bold text-2xl ">
                {FastTrack}
              </motion.h1>
              <p className=" text-black dark:text-gray-300 xl:text-base text-center font-bold">
                10th, 12th, UG & PG Programs
              </p>
              <p className=" text-black dark:text-gray-400 text-xs text-center w-32 md:w-40">
                Flexible Distance & FastTrack Programs for Professionals!
              </p>
            </div>
          </BorderLineCard>
        </div>
        <div className="p-[3px] md:p-1 lg:p-2">
          <BorderLineCard className="h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent">
            <motion.div
              className="flex flex-col sm:p-1 p-4 lg:w-48 absolute items-center justify-center "
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
            >
              <motion.h1
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                className=" text-black dark:text-white font-bold text-2xl "
              >
                {Years}
              </motion.h1>
              <p className=" text-black dark:text-gray-300 xl:text-base text-center font-bold">
                Years of Experience{" "}
              </p>
              <p className=" text-black dark:text-gray-400 text-xs text-center w-32 md:w-40">
                Backed by over 15 years of unrivaled experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.01 }}
              whileHover={{ opacity: 0.02 }}
              className="min-w-40 min-h-44"
            >
              <Image
                src="/gif/blueGradient.gif"
                alt="gradient"
                draggable={false}
                width={480}
                height={480}
                className="w-full h-full blur-lg "
              />
            </motion.div>
          </BorderLineCard>
        </div>
      </div>

      {/* {text.map((el, i) => (
                <motion.p className='text-black flex flex-row' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10, }}> {el}{" "}
                </motion.p>
            ))} */}
    </div>
  );
}

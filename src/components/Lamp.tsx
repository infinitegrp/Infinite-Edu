"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Image from "next/image";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <motion.section
    className={` rounded-xl h-full w-full dark:bg-neutral-900  bg-blue-50 border dark:border-gray-800   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50 overflow-hidden`}
    // initial={{ opacity: 0, y: -5, }}
    // whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }}
    >
    {children}
  </motion.section>
};

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }
export function Lamp() {

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 10,
        ease: "easeInOut"
      }
    }
  };

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  max-w-[60rem] text-center"
      >
        Fueling company growth through <br /> mental well-being
      </motion.h1>
      <p
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"></p>
      <div className="flex flex-row w-full h-full items-end gap-2 md:gap-4 max-w-screen-2xl lg:px-40 pt-0">
        <Card><div className="w-full h-80">
          <div className='py-10 px-8 '>
            <h1 className='font-bold text-xl text-black dark:text-gray-100'>UniversityAdmission</h1>
            <p className=' lg:text-md text-gray-500 dark:text-gray-400 pt-5'>
              We're here to make your university admission journey across the globe
              a breeze, and the best part
            </p>
            <motion.svg width="149" height="138" viewBox="0 0 169 158" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="paint0_linear_837_456" x1="8.88004" y1="163.041" x2="163.88" y2="18.0415" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#212121" stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
              <motion.path
                d="M165.133 3.77034C161.109 -0.531716 154.359 -0.756717 150.057 3.26779C145.755 7.29229 145.53 14.0423 149.554 18.3444C153.579 22.6464 160.329 22.8714 164.631 18.8469C168.933 14.8224 169.158 8.0724 165.133 3.77034ZM49.5462 103.38L50.5531 101.652L49.5462 103.38ZM36.2524 106.382L34.6005 105.254L36.2524 106.382ZM71.8547 116.378L72.8616 114.65L71.8547 116.378ZM155.693 9.92865L86.1515 111.654L89.4537 113.911L158.995 12.1861L155.693 9.92865ZM72.8616 114.65L50.5531 101.652L48.5393 105.108L70.8478 118.106L72.8616 114.65ZM34.6005 105.254L0.69191 154.93L3.99562 157.185L37.9042 107.51L34.6005 105.254ZM50.5531 101.652C45.1137 98.4821 38.1498 100.055 34.6005 105.254L37.9042 107.51C40.2704 104.043 44.913 102.995 48.5393 105.108L50.5531 101.652ZM86.1515 111.654C83.1924 115.982 77.3922 117.29 72.8616 114.65L70.8478 118.106C77.1905 121.802 85.3108 119.971 89.4537 113.911L86.1515 111.654Z"
                fill="url(#paint0_linear_837_456)"
                variants={pathVariants}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition}
              />
            </motion.svg>
          </div>
        </div></Card>
        <Card><div className="w-full h-40">
          <div className='py-5 px-8 '>
            <h1 className='font-bold text-6xl text-black dark:text-gray-100'>32+</h1>
            <p className=' lg:text-md text-gray-500 dark:text-gray-400 pt-5'>
            more than 32 countries worldwide
            </p>
          </div>
        </div></Card>
        <Card><div className="w-full h-20">f</div></Card>
        <Card><div className="w-full h-60">
          <div className='py-5 px-8 '>
            <h1 className='font-bold text-6xl text-black dark:text-gray-100'>15+</h1>
            <p className=' lg:text-md text-gray-500 dark:text-gray-400 pt-5'>
            Backed by over 15 years of unrivaled experience
            </p>
          </div>
        <Image src="/images/15 .jpg" alt="Computer man" width={1000} height={480} className='w-30 h-25'/>

        </div>
        </Card>
      </div>
    </LampContainer>
  );
}

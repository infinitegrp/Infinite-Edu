"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Image from "next/image";
import Programs from "./aboutCards/programs";
import University from "./aboutCards/university";
import Countries from "./aboutCards/Countries";
import Years from "./aboutCards/years";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <motion.section
    className={` rounded-xl h-full w-full dark:bg-neutral-900  bg-blue-50 border dark:border-gray-800   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50 overflow-hidden`}
    initial={{ opacity: 0, y: -5, }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }}>
    {children}
  </motion.section>
};

export function Lamp() {

  return (
    <LampContainer>
      <motion.h1 initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
        className="pb-20 text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-neutral-200 to-neutral-500  max-w-[60rem] text-center">
        Fueling company growth through <br /> mental well-being
      </motion.h1>
      <motion.div className="flex flex-row w-full h-full items-end gap-2 md:gap-4 max-w-screen-2xl lg:px-40 pt-0">
        <Card><motion.div className="w-full h-80"><Programs /></motion.div></Card>
        <Card><motion.div className="w-full h-60"><University /></motion.div></Card>
        <Card><motion.div className="w-full h-40"><Countries /></motion.div></Card>
        <Card><motion.div className="w-full h-80"><Years /></motion.div></Card>
      </motion.div>
    </LampContainer>
  );
}

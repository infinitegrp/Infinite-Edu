import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";

export default function PathwayProgram() {
  return (
    <Link
      href={"/dubai"}
      className="h-full w-full justify-center items-start overflow-hidden flex flex-col relative"
    >
      <motion.div className="pt-3 md:pt-4 lg:pt-6 px-2.5 md:px-5 lg:px-6  h-full w-full  bg-white dark:bg-neutral-950">
        <h1 className="font-semibold text-sm md:text-lg text-black dark:text-white">
          Pathway Program to the UK
        </h1>
        <p className="text-xs xl:text-sm text-gray-500 dark:text-gray-300 pt-2 md:pt-2 lg:pt-2 ">
          opportunity for students to begin their educational journey in Dubai
          and complete their final year in the UK.
        </p>
        <div className="d-flex flex-row">
          <CustomButton href={"/dubai"}>Explore</CustomButton>
          <motion.div
            className="absolute inset-0 flex  bg-gradient-to-t from-blue-500 to-transparent z-10"
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
      <div className="absolute flex justify-end h-full w-full">
        <Image
          src="/images/pathway.png"
          alt="dubai"
          width={1480}
          height={1480}
          className="md:w-full w-40 opacity-20 dark:opacity-40"
        />
      </div>
    </Link>
  );
}

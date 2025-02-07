import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";

export default function StudyIndia() {
  return (
    <Link
      href={"/india"}
      className="h-full w-full justify-center items-start  overflow-hidden flex flex-col relative"
    >
      <motion.div className="pt-3 md:pt-4 lg:pt-6 px-2.5 md:px-4 lg:px-6 h-full w-full  bg-white dark:bg-neutral-950">
        <h1 className="font-semibold text-md md:text-xl text-black dark:text-gray-100">
          Study in India
        </h1>
        <p className="text-xs xl:text-sm text-gray-500 dark:text-gray-300 pt-1 md:pt-2 lg:pt-3 ">
          We guide students to the right course and institution in India,
          ensuring a smooth and transparent admission process.
        </p>
        <div className="d-flex flex-row">
          <CustomButton href={"/india"} >Explore</CustomButton>
          <motion.div
            className="absolute inset-0 flex  bg-gradient-to-t from-blue-500 to-transparent z-10"
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
      <div className="absolute pt-20 md:pt-28 pl-20 md:pl-36 h-full w-full">
        <Image
          src="/images/tajShade.png"
          alt="dubai"
          width={1480}
          height={1480}
          className="w-40 md:w-52 md:h-100 absolute"
        />
      </div>
    </Link>
  );
}

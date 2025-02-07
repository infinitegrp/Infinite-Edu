import Image from "next/image";
import React from "react";
import BorderLineCard from "../ui/borderCard";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";

const StudyDubai = () => {
  return (
    <div className="overflow-hidden cursor-pointer">
      <BorderLineCard className="h-52 md:h-[17rem] overflow-hidden">
        <Link
          href={"/dubai"}
          className="h-full w-full justify-center items-start  overflow-hidden flex flex-col relative"
        >
          <motion.div className="pt-3 md:pt-4 lg:pt-6 px-2.5 md:px-5 lg:px-6 h-full w-full bg-white dark:bg-neutral-950">
            <h1 className="font-semibold text-sm md:text-lg text-black dark:text-white">
              Study and Work in Dubai
            </h1>
            <p className="text-xs md:text-sm lg:text-md text-gray-500 dark:text-gray-300 pt-2 md:pt-2 lg:pt-2 ">
              Earn, learn, and build your future with our trusted Study and Work
              programs in the Dubai
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
          <div className="absolute right-5 bottom-0 h-full w-full flex justify-end items-end">
            <Image
              src="/images/dubai.png"
              alt="dubai"
              width={1480}
              height={1480}
              className="md:w-2/3 md:h-4/5 w-40 "
            />
          </div>
        </Link>
      </BorderLineCard>
    </div>
  );
};

export default StudyDubai;

import React from "react";
import BorderLineCard from "./ui/borderCard";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GuideLineGroup() {
  return (
    <BorderLineCard className="h-70 justify-center items-start cursor-pointer overflow-hidden flex flex-col relative border-red-500 bg-tr  border-spacing-2 border ">
      <Link href={"https://www.guidelinegrp.com"} target="_blank">
        <div className="py-5 px-8 bg-white dark:bg-neutral-950">
          <h1 className="font-bold text-xl text-black dark:text-gray-100">
            GuideLine Group
          </h1>
          <p className="text-sm lg:text-base text-gray-500 dark:text-gray-300 pt-3 md:pr-40">
            Guideline Group is an international conglomerate, marking a
            substantial presence in Dubai and India. With an unwavering focus on
            innovation and excellence,
          </p>
          <p className="text-sm text-blue-300 pt-3"> Our Activities</p>
          <p className="text-sm text-gray-400 pt-3">
            - Guideline Educational Institution <br />- Guideline IT services <br />
            - Guideline Business Solution <br /> - Vibgyor Tours and Travel
          </p>
          <motion.div
            className="absolute inset-0 flex  bg-gradient-to-b from-blue-500 to-transparent z-10"
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          />
        </div>
        <Image
          src="/gif/lightblue.gif"
          alt="Computer man"
          width={480}
          height={480}
          className="w-full  opacity-5 absolute"
        />
      </Link>
    </BorderLineCard>
  );
}

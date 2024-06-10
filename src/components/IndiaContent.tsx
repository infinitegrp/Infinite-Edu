"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const IndiaContent = () => {
  return (
    <div className="w-full bg-[#FEFDFD]">
      <div className="max-w-screen-2xl px-5 md:px-20 lg:px-40 w-full space-y-4 mx-auto py-4 pb-24 text-neutral-500">
        <div className="w-full flex flex-col md:flex-row md:gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <b>Transparent Admission Process</b>
            <br />
            <p>
              For students aiming to continue their education in India or the
              UAE, our seasoned experts provide comprehensive support, guiding
              them to choose the appropriate course and institution that matches
              their career goals. We guarantee a transparent admissions process
              without any hidden fees
            </p>
            <br />
            <Link href={"/"}>Learn more</Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={"/images/fastTrack.png"}
              alt="admission-process"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:gap-10">
          <div className="md:w-1/2 flex flex-col justify-center md:order-2">
            <b>Available 24/7 for assistance</b>
            <br />
            <p>
              Since we have a presence in both India and the UAE, our team is
              readily available 24/7 for assistance, both locally and in-person,
              ensuring that every need is addressed promptly and effectively.
            </p>
            <br />
            <Link href={"/"}>Learn more</Link>
          </div>
          <div className="md:w-1/2 md:order-1 flex justify-center">
            <Image
              src={"/images/24x7.png"}
              alt="admission-process"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
      <div className="bg-black ">
      <div className="max-w-screen-2xl px-5 md:px-20 lg:px-40 w-full space-y-4 mx-auto py-24 md:text-base text-xs text-neutral-500">
            
        <p>
          Students looking to pursue their education in the UAE will find
          comprehensive assistance from our experienced professionals. We help
          students select the right course and institution that align with their
          career objectives, ensuring a transparent admissions process free from
        </p>
        <motion.button
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="border px-4 py-1 rounded-2xl"
        >
          Enquire Now
        </motion.button>
        </div>
      </div>
      <div className="max-w-screen-2xl px-5 md:px-20 lg:px-40 w-full space-y-4 mx-auto py-24 text-neutral-500 text-center">
        <p>
          We assist students in securing admissions to a wide array of
          top-ranked colleges throughout South India. Our extensive network
          encompasses numerous prestigious institutions, enabling us to provide
          comprehensive support and guidance throughout the admission process.
          Our aim is to connect students with the best educational opportunities
          that align with their academic goals and aspirations.
        </p>
        <motion.button
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="border px-4 py-1 rounded-2xl"
        >
          Enquire Now
        </motion.button>
      </div>
    </div>
  );
};

export default IndiaContent;

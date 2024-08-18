"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 flex flex-col items-center">
      <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-4 max-w-[40rem] text-center">
        Fueling company growth through mental well-being
      </p>
      <div className=" w-full flex mx-auto rounded-none md:rounded-2xl p-4 shadow-input bg-white dark:bg-black gap-5">
        <div className="w-1/4">
          <motion.section
            className={` rounded-xl h-[15rem] w-full dark:bg-zinc-950 bg-blue-50 border dark:border-black   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50 overflow-hidden`}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.1 },
            }}
          >
            dfh
          </motion.section>
        </div>
        <div className="w-1/4 max-w-30">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Have a question , or just want a Appointment, say hi!
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            We'd love to hear from you! Drop us a line using the form below, and
            our dedicated team will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Have a question , or just want a Appointment, say hi!
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            We'd love to hear from you! Drop us a line using the form below, and
            our dedicated team will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Have a question , or just want a Appointment, say hi!
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            We'd love to hear from you! Drop us a line using the form below, and
            our dedicated team will get back to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

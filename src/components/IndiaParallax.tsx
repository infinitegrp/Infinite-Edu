'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const paraY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const fogY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center bg-amber-50"
    >
      <motion.h1 style={{ y: textY }} initial={{ opacity: 0.5, y: 500 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
        className="text-5xl md:text-6xl font-extrabold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 max-w-[60rem] text-center">
        STUDY IN <br />
        <span className="md:text-[12.5rem] text-[9.5rem] font-extrabold">INDIA</span>
      </motion.h1>
      {/* <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </motion.h1> */}

      <motion.div
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
        className="absolute inset-0 z-0"
        style={{
          // backgroundImage: `url(/images/bg.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
        initial={{ opacity: 0.5, y: 500 }} whileInView={{ opacity: 1, y: 0 }}
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/images/taj.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <motion.div
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut", }}
        initial={{ opacity: 0.5, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        className="absolute inset-0 z-30 flex flex-col justify-end items-center"
        style={{
          backgroundImage: `url(/images/fog.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: fogY,
        }}
      >
        <motion.p
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
          className="text-center  md:text-base text-xs max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 w-full  text-neutral-500">
          <b>Indian Higher Education</b><br /><br />
          India has one of the largest higher education systems in the world that stands second in terms of the higher education network. The term &apos;higher education&apos; with respect to India denotes the tertiary level education that is imparted. The entire higher education ecosystem in India comprises around 1000+ universities and 42,000+ colleges imparting exceptional education. All these institutions fall under the purview of the Ministry of Education.
        </motion.p>
      </motion.div>
    </div>
  );
}
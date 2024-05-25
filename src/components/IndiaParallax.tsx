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
      className="w-full h-screen overflow-hidden relative grid place-items-center bg-white"
    >
      <motion.h1 style={{ y: textY }} initial={{ opacity: 0.5, y: 500 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
        className=" text-4xl md:text-6xl font-extrabold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500  max-w-[60rem] text-center">
        STDUY IN <br /> <span className="text-[12.5rem] font-bold">INDIA</span>
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
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
      initial={{ opacity: 0.5, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: `url(/images/fog.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: fogY,
        }} 
      />
    </div>
  );
}

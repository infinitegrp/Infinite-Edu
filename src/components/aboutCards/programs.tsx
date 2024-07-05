import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';


export default function Programs() {
  return (
    <>
    {/* <Image src="/images/100k.png" alt="Computer man" width={160} height={240} className='' /> */}
    <h1 className='px-5 font-bold text-4xl text-black dark:text-gray-100 md:text-5xl py-5'>100k +</h1>
    <div className='pb-10 md:px-3'>
    <p className='text-sm md:text-base  text-gray-500 dark:text-gray-400 px-3'>
    Embark on a journey of unparalleled opportunity with over 100,000 programs offered
    </p>
    <motion.svg className='hidden sm:flex' width="149" height="138" viewBox="0 0 169 158" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paint0_linear_837_456" x1="8.88004" y1="163.041" x2="163.88" y2="18.0415" gradientUnits="userSpaceOnUse">
          <stop stopColor="#212121" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1
        }}
        strokeWidth={4}
        strokeDasharray="0 1"
        d="M165.133 3.77034C161.109 -0.531716 154.359 -0.756717 150.057 3.26779C145.755 7.29229 145.53 14.0423 149.554 18.3444C153.579 22.6464 160.329 22.8714 164.631 18.8469C168.933 14.8224 169.158 8.0724 165.133 3.77034ZM49.5462 103.38L50.5531 101.652L49.5462 103.38ZM36.2524 106.382L34.6005 105.254L36.2524 106.382ZM71.8547 116.378L72.8616 114.65L71.8547 116.378ZM155.693 9.92865L86.1515 111.654L89.4537 113.911L158.995 12.1861L155.693 9.92865ZM72.8616 114.65L50.5531 101.652L48.5393 105.108L70.8478 118.106L72.8616 114.65ZM34.6005 105.254L0.69191 154.93L3.99562 157.185L37.9042 107.51L34.6005 105.254ZM50.5531 101.652C45.1137 98.4821 38.1498 100.055 34.6005 105.254L37.9042 107.51C40.2704 104.043 44.913 102.995 48.5393 105.108L50.5531 101.652ZM86.1515 111.654C83.1924 115.982 77.3922 117.29 72.8616 114.65L70.8478 118.106C77.1905 121.802 85.3108 119.971 89.4537 113.911L86.1515 111.654Z"
        fill="url(#paint0_linear_837_456)"
      />
    </motion.svg>
  </div>
  </>

  )
}

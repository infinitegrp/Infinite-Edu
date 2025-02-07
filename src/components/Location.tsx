import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { locations } from "../../utils/data";

const Location = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl gap-10 justify-center">
      {locations.map((data, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-[700px] items-center"
        >
          <div className="w-full h-full min-h-10 justify-center flex ">
            <div className="w- h-60 md:h-[19rem] rounded-2xl border-spacing- ml-0 pl-0 dark:border-gray-800 border-4 overflow-hidden">
              <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                <Image
                  src="/images/darkdubai.jpg"
                  className="dark:block hidden rounded-xl h-60 md:h-[19rem]"
                  width={800}
                  height={800}
                  alt="map"
                />
                <Image
                  src="/images/whitedubai.png"
                  className="dark:hidden block rounded-xl h-60 md:h-[19rem]"
                  width={800}
                  height={800}
                  alt="map"
                />
              </motion.div>
            </div>
            <div className="flex absolute bg-gray-50 dark:bg-gray-900 py-2 md:py-3 px-4 md:px-8 rounded-xl backdrop-blur-xl opacity-90 justify-start items-center mt-28 md:mt-40  ">
              <div className="flex flex-row items-center gap-8">
                <p className="w-[60vw] md:w-full text-neutral-400 text-xs md:text-md leading-5">
                  <span className="font-bold dark:text-gray-50 text-sm md:text-md">
                    Infinite Group of Companies {data?.title}
                  </span>{" "}
                  <br />
                  {data?.address_line_1}
                  <br />
                  {data?.address_line_2}
                  <br />
                  {data?.address_line_3}
                  <br />
                  <Link target="_blank" href={data?.directions}>
                    <span className="text-blue-500">View larger map</span>
                  </Link>
                </p>
                <Link target="_blank" href={data?.directions}>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16699 1.3335L10.611 11.2926C11.2497 11.9659 11.7563 12.7654 12.102 13.6453C12.4476 14.5252 12.6254 15.4683 12.6253 16.4207M1.16699 1.3335H8.04199M1.16699 1.3335V8.5835M12.6253 16.4207V25.5002M12.6253 16.4207C12.6252 15.4683 12.8031 14.5252 13.1487 13.6453C13.4943 12.7654 14.001 11.9659 14.6397 11.2926L24.0837 1.3335M24.0837 1.3335H17.2087M24.0837 1.3335V8.5835"
                      stroke="#699BF7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <p className="w-full text-black dark:text-neutral-400 text-md text-center pt-10">
            <span className="font-bold text-gray-50">
              Infinite Group of Companies {data?.title}
            </span>
            <br />
            {data?.address_line_1}
            <br />
            {data?.address_line_2}
            <br />
            {data?.address_line_3}
            <br />
            <br />
            Ph : {data?.ph}
            <br /> Mail : info@infinite-grp.com
            <br />
            <Link href="#contact" className="text-blue-500">
              Enquire Now
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Location;

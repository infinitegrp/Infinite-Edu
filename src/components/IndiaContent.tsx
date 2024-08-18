"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const IndiaContent = () => {
  const [openContact, setopenContact] = useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setopenContact(true);
  };
  return (
    <div className="w-full bg-[#FEFDFD]">
      <div className="max-w-screen-2xl px-5 md:px-20 lg:px-40 w-full space-y-4 mx-auto py-4 pb-24 text-neutral-500">
        <div className="w-full flex flex-col md:flex-row md:gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <b>Transparent Admission Process</b>
            <br />
            <p>
              For students aiming to continue their education in India, our
              seasoned experts provide comprehensive support, guiding them to
              choose the appropriate course and institution that matches their
              career goals. We guarantee a transparent admissions process
              without any hidden fees
            </p>
            <br />
            <Link href={"#"} onClick={handleOpen}>
              Learn more
            </Link>
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
            <Link href={"#"} onClick={handleOpen}>
              Learn more
            </Link>
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
      <div className="bg-black max-h-[40vh]">
        <div className="relative w-full h-72 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/images/indiaBg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="flex items-center w-full h-full md:text-base text-xs text-neutral-200 bg-black bg-opacity-55">
              <p className="max-w-screen-2xl px-5 md:px-20 lg:px-40 text-center mx-auto">
                Students looking to pursue their education in the INDIA will
                find comprehensive assistance from our experienced
                professionals. We help students select the right course and
                institution that align with their career objectives, ensuring a
                transparent admissions process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl px-5 md:px-20 lg:px-40 w-full space-y-4 mx-auto py-24 text-neutral-500 text-center flex flex-col items-center">
        <p>
          We assist students in securing admissions to a wide array of
          top-ranked colleges throughout India. Our extensive network
          encompasses numerous prestigious institutions, enabling us to provide
          comprehensive support and guidance throughout the admission process.
          Our aim is to connect students with the best educational opportunities
          that align with their academic goals and aspirations.
        </p>
        <motion.button
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="border px-4 md:mb-24 rounded-xl mt-3 mb-4 h-8 animate-shimmer items-center flex flex-row border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setopenContact(true)}
        >
          <p className="pr-2 text-white dark:text-neutral-400">Enquire Now</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z"
              fill="white"
              fillOpacity="0.82"
            />
          </svg>
        </motion.button>
        <ContactForm
          open={openContact}
          setOpen={setopenContact}
          bgcolor="#fff"
        />
      </div>
    </div>
  );
};

export default IndiaContent;

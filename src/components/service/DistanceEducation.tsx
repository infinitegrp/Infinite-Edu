import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import ModalLayout from "../ModalLayout";
import Image from "next/image";
import BorderLineCard from "../ui/borderCard";
import ContactForm from "../ContactForm";
import CustomButton from "../ui/CustomButton";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.section
      className={`p-5 py-3 mt-3 flex flex-row items-center rounded-xl h-full w-full dark:bg-zinc-950 bg-blue-100 border dark:border-black   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50`}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 },
      }}
    >
      {children}
    </motion.section>
  );
};

export default function DistanceEducation() {
  const [open, setOpen] = useState(false);
  const [openFastTrack, setOpenFastTrack] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const handleContact = () => {
    setOpen(false);
    setOpenFastTrack(false);
    setOpenContact(true);
  };
  return (
    <>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setOpen(true);
          }
        }}
        className="relative cursor-pointer w-full py-3 md:py-4 xl:py-6 px-2 md:px-4 xl:px-8 bg-white dark:bg-neutral-950 rounded-xl"
      >
        <h1
          onClick={() => setOpen(true)}
          className="font-bold text-sm md:text-xl text-black dark:text-white"
        >
          Distance Education
        </h1>
        <p
          onClick={() => setOpen(true)}
          className="text-xs text-start xl:text-base text-gray-500 dark:text-gray-300 pt-3 "
        >
          Our distance/online education programs are ideal for working
          professionals who cannot commit to full-time, on-campus studies
        </p>
        <CustomButton
          onClick={() => setOpen(true)}
          className="md:hidden xl:flex"
        >
          Explore
        </CustomButton>
        <div
          onClick={() => setOpen(true)}
          className="xl:hidden flex-row items-center cursor-pointer"
        >
          <div className="flex flex-col p-3">
            <div className="text-xs text-gray-500 dark:text-gray-200 p-2 w-full">
              - WES approved <br /> - UGC approved <br /> - NAAC approved <br />{" "}
              - Globally recognized
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-4 xl:pt-8 h-full">
          <BorderLineCard className="w-full h-60 md:h-40 flex  justify-center items-center overflow-hidden relative dark:bg-transparent">
            <div
              className="flex flex-col md:hidden"
              onClick={() => setOpenFastTrack(true)}
            >
              <div className="p-3">
                <h1 className="font-bold text-md text-black dark:text-white">
                  Fast Track
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-300 pt-1 ">
                  Online fits busy professionals unable to commit to full-time
                  on-campus studies.
                </p>
                <div className="text-xs text-gray-400 pt-2">
                  6 months duration
                </div>
                <CustomButton onClick={() => setOpenFastTrack(true)}>
                  Explore
                </CustomButton>
              </div>
              <Image
                src="/gif/lightblue.gif"
                alt="bg"
                onClick={() => setOpenFastTrack(true)}
                width={480}
                height={480}
                className="h-full md:w-full opacity-5 absolute"
              />
            </div>

            {/* For medium screens and above */}

            <div
              className="hidden md:flex flex-row items-center cursor-pointer"
              onClick={() => setOpenFastTrack(true)}
            >
              <div className="flex flex-col p-3">
                <h1 className="font-bold text-md text-black dark:text-white">
                  Fast Track
                </h1>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-300 pt-1 ">
                  Online fits busy professionals unable to commit to full-time
                  on-campus studies.
                </p>
                <div className="text-xs text-gray-400 pt-2">
                  6 months duration
                </div>
              </div>
              <button
                onClick={() => setOpenFastTrack(true)}
                className="hidden md:flex md:mx-1 lg:mx-3 px-1 h-8 animate-shimmer items-center flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7156 13.0608C20.9965 12.7795 21.1543 12.3983 21.1543 12.0008C21.1543 11.6033 20.9965 11.222 20.7156 10.9408L15.0596 5.28177C14.7782 5.00037 14.3966 4.84229 13.9986 4.84229C13.6007 4.84229 13.219 5.00037 12.9376 5.28177C12.6562 5.56316 12.4981 5.94481 12.4981 6.34277C12.4981 6.74072 12.6562 7.12237 12.9376 7.40377L16.0336 10.5008H4.49862C4.10079 10.5008 3.71926 10.6588 3.43796 10.9401C3.15665 11.2214 2.99862 11.6029 2.99862 12.0008C2.99862 12.3986 3.15665 12.7801 3.43796 13.0614C3.71926 13.3427 4.10079 13.5008 4.49862 13.5008H16.0336L12.9376 16.5968C12.7983 16.7361 12.6878 16.9015 12.6124 17.0836C12.5369 17.2656 12.4981 17.4607 12.4981 17.6578C12.4981 17.8548 12.5369 18.0499 12.6124 18.232C12.6878 18.414 12.7983 18.5794 12.9376 18.7188C13.0769 18.8581 13.2424 18.9686 13.4244 19.044C13.6065 19.1194 13.8016 19.1582 13.9986 19.1582C14.1957 19.1582 14.3908 19.1194 14.5728 19.044C14.7549 18.9686 14.9203 18.8581 15.0596 18.7188L20.7156 13.0608Z"
                    fill="white"
                  />
                </svg>
              </button>
              <Image
                src="/gif/lightblue.gif"
                alt="bg"
                onClick={() => setOpenFastTrack(true)}
                width={480}
                height={480}
                className="h-full md:w-full opacity-5 absolute"
              />
            </div>
          </BorderLineCard>
          <div className="hidden xl:block">
            <BorderLineCard className="w-60 h-40 hidden xl:flex justify-center items-center overflow-hidden relative dark:bg-transparent">
              <div
                className="hidden md:flex flex-row items-center cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <div className="flex flex-col p-3">
                  <div className="text-sm text-gray-500 dark:text-gray-200 p-4 mb-3 w-full">
                    - WES approved <br /> - UGC approved <br /> - NAAC approved{" "}
                    <br /> - Globally recognized
                  </div>
                </div>
                <Image
                  src="/gif/lightblue.gif"
                  alt="bg"
                  onClick={() => setOpen(true)}
                  width={480}
                  height={480}
                  className="h-full md:w-full opacity-5 absolute"
                />
              </div>
            </BorderLineCard>
          </div>
        </div>
      </div>
      <ModalLayout
        open={openFastTrack}
        setOpen={setOpenFastTrack}
        title=""
        width={1000}
      >
        <div className="min-h-[70vh] w-full gap-1 md:gap-2 flex flex-col items-center justify-center ">
          <Image
            src={"/images/fastrack.png"}
            alt="fastTrack"
            width={500}
            height={150}
            className=" w-70"
          />

          <h1 className="font-bold text-5xl md:text-6xl mb-5 text-black dark:text-gray-100">
            Fast Track
          </h1>
          <p className="pt-1 text-md md:text-lg font-normal font-center text-center dark:text-gray-300 text-gray-700  max-w-[60rem]">
            We offer a fast-track 6-month education program that accelerates
            learning, allowing students to achieve their educational goals in a
            short period of time. This intensive program is designed to provide
            comprehensive knowledge and skills quickly, making it ideal for
            those looking to fast-track their career advancement.
          </p>
          <CustomButton onClick={() => setOpenContact(true)}>
            Get Connected
          </CustomButton>
        </div>
      </ModalLayout>
      <ModalLayout open={open} setOpen={setOpen} title="" width={1000}>
        <div className="relative overflow-y-scroll h-[90vh] md:h-[70vh] w-full gap-2 md:gap-5  dark:bg-[#212227] bg-white flex flex-col items-center justify-between">
          <p className="text-2xl md:text-4xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">
            Distance Education
          </p>
          <p className="pt-1 md:text-sm text-sm  font-center text-center text-black font-light dark:text-neutral-400  max-w-[45rem]">
            At Infinite Education, we specialize in providing fast-track degrees
            tailored for working professionals of all nationalities. Our
            programs are designed to accommodate the busy schedules of
            professionals, enabling them to advance their education without
            compromising their careers.
          </p>
          <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
            <div className="rounded-2xl flex flex-col min-w-40 max-w-[20rem] items-center justify-center bg-white dark:bg-neutral-900 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 gap-1 ">
              <h1 className=" text-black dark:text-white font-bold text-lg text-center">
                Flexible Learning
              </h1>
              <p className=" text-black dark:text-gray-400 text-xs">
                Study at your own pace, from anywhere in the world.
              </p>
            </div>
            <div className="rounded-2xl flex flex-col min-w-40 max-w-[20rem] items-center justify-center bg-white dark:bg-neutral-900 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 g ">
              <h1 className=" text-black dark:text-white font-bold text-lg text-center">
                Diverse Program Options
              </h1>
              <p className=" text-black dark:text-gray-400 text-xs">
                Choose from a wide array of disciplines and specializations to
                meet your career goals.
              </p>
            </div>
            <div className="rounded-2xl flex flex-col min-w-40 max-w-[20rem] items-center justify-center bg-white dark:bg-neutral-900 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 g ">
              <h1 className=" text-black dark:text-white font-bold text-lg text-center">
                Accredited Courses
              </h1>
              <p className=" text-black dark:text-gray-400 text-xs">
                We offer UGC, NAAC, and WES-approved courses through multiple
                renowned universities. These accreditation ensure global
                recognition and credibility, making your degree highly valuable
                in the job market.
              </p>
            </div>
            <div className="rounded-2xl flex flex-col min-w-40 max-w-[20rem] items-center justify-center bg-white dark:bg-neutral-900 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 g ">
              <h1 className=" text-black dark:text-white font-bold text-lg text-center">
                Dedicated Support
              </h1>
              <p className=" text-black dark:text-gray-400 text-xs">
                Our team provides continuous assistance throughout your multiple
                renowned universities. These accreditation ensure global
                recognition and credibility, making your degree highly valuable
                in the job market.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-25 items-center">
            <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-400 max-w-[30rem]">
              We steer you toward realizing your aspiration of studying your
              desired course at your dream university worldwide.
            </p>
            <CustomButton onClick={() => setOpenContact(true)} className="mb-4">
              Get Connected
            </CustomButton>
          </div>
        </div>
      </ModalLayout>
      <ContactForm open={openContact} setOpen={setOpenContact} />
    </>
  );
}

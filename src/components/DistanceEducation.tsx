import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import ModalLayout from "./ModalLayout";
import Image from "next/image";
import BorderLineCard from "./ui/borderCard";
import ContactForm from "./ContactForm";

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
  const [openOnSite, setOpenOnSite] = useState(false);
  const [openContact, setopenContact] = useState(false);
  const handleContact = () => {
    setOpen(false)
    setOpenOnSite(false)
    setopenContact(true)
  }
  return (
    <>
      <div className="py-3 md:py-4 lg:py-6 px-2 md:px-4 lg:px-8 bg-white dark:bg-neutral-950 rounded-xl">
        <h1 className="font-bold text-sm md:text-xl text-black dark:text-white">
          Distance Education
        </h1>
        <p className="text-xs lg:text-base  text-gray-500 dark:text-gray-400 pt-3 ">
          Our distance/online education programs are ideal for working
          professionals who cannot commit to full-time, on-campus studies
        </p>
        <div className="text-xs text-gray-400 pt-3 mb-3">
          - WES approved <br /> - UGC approved <br /> - NAAC approved <br /> -
          Worldwide recognized
        </div>
        <div className="flex md:flex-row flex-col">

          <BorderLineCard className="w-full h-full flex justify-center items-center overflow-hidden relative dark:bg-transparent">
            <div className="flex flex-col md:hidden">
              <div className="p-3">
                <h1 className="font-bold text-md text-black dark:text-white">
                  On-Site
                </h1>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 pt-2">
                  Learn at your own pace with flexible online courses, interactive tools, and a supportive virtual community.
                </p>
                {/* <div className="text-xs text-gray-400 pt-2">
                6 months duration
              </div> */}
              </div>

              <button
                onClick={() => setOpenOnSite(true)}
                className="hidden md:flex  md:mx-1 lg:mx:3 px-1 h-8 animate-shimmer items-center flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
            </div>
            <Image
              src="/gif/lightblue.gif"
              alt="bg"
              onClick={() => setOpenOnSite(true)}
              width={480}
              height={480}
              className="h-full md:w-full z-20 opacity-5 absolute"
            />
            <div
              className="hidden md:flex flex-row items-center cursor-pointer"
              onClick={() => setOpenOnSite(true)}
            >
              <div className="flex flex-col p-3">
                <h1 className="font-bold text-md text-black dark:text-white">
                  On-Site
                </h1>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 pt-2 ">
                  Learn at your own pace with flexible online courses, interactive tools, and a supportive virtual community.
                </p>
                {/* <div className="text-xs text-gray-400 pt-2">
                6 months duration
              </div> */}
              </div>
              <button
                onClick={() => setOpenOnSite(true)}
                className="hidden md:flex md:mx-1 lg:mx:3 px-1 h-8 animate-shimmer items-center flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
                onClick={() => setOpenOnSite(true)}
                width={480}
                height={480}
                className="h-full md:w-full z-20 opacity-5 absolute"
              />
            </div>
          </BorderLineCard>
          <div className="w-3 h-3"></div>
          <BorderLineCard className="w-full h-full flex  justify-center items-center overflow-hidden relative dark:bg-transparent">
            {/* For small screens */}
            <div
              className="flex flex-col md:hidden"
              onClick={() => setOpen(true)}
            >
              <div className="p-3">
                <h1 className="font-bold text-md text-black dark:text-white">
                  Fast Track
                </h1>
                <p className="text-xs  text-gray-500 dark:text-gray-400 pt-1 ">
                  Online fits busy professionals unable to commit to full-time
                  on-campus studies.
                </p>
                <div className="text-xs text-gray-400 pt-2">6 months duration</div>
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

            {/* For medium screens and above */}

            <div
              className="hidden md:flex flex-row items-center cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="flex flex-col p-3">
                <h1 className="font-bold text-md text-black dark:text-white">
                  Fast Track
                </h1>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 pt-1 ">
                  Online fits busy professionals unable to commit to full-time
                  on-campus studies.
                </p>
                <div className="text-xs text-gray-400 pt-2">
                  6 months duration
                </div>
              </div>
              <button
                onClick={() => setOpen(true)}
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
                onClick={() => setOpen(true)}
                width={480}
                height={480}
                className="h-full md:w-full opacity-5 absolute"
              />
            </div>
          </BorderLineCard>
        </div>
      </div>
      <ModalLayout open={open} setOpen={setOpen} title="" width={1000}>
        <div className="min-h-[70vh] w-full gap-1 md:gap-2 flex flex-col items-center justify-between ">
          <Image
            src={"/images/offline.png"}
            alt="fastTrack"
            width={500}
            height={150}
            className=" w-70"
          />

          <h1 className="font-bold text-5xl md:text-6xl mb-5 text-black dark:text-gray-100">
            Fast Track
          </h1>
          <p className="pt-1 text-md md:text-lg font-normal font-center text-center dark:text-gray-400 text-gray-700  max-w-[60rem]">
            We offer a fast-track 6-month education program that accelerates
            learning, allowing students to achieve their educational goals in a
            short period of time. This intensive program is designed to provide
            comprehensive knowledge and skills quickly, making it ideal for
            those looking to fast-track their career advancement.
          </p>
          <button
            onClick={handleContact}
            className="mt-2 mb-4 p-2 animate-shimmer items-center flex flex-row rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-sm text-white dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <p className="pr-2"> Get Connected</p>
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
          </button>
        </div>
      </ModalLayout>
      <ModalLayout
        open={openOnSite}
        setOpen={setOpenOnSite}
        title=""
        width={1000}
      >
        <div className="min-h-[70vh] w-full gap-1 md:gap-2 flex flex-col items-center justify-between ">
          <Image
            src={"/images/online.png"}
            alt="fastTrack"
            width={500}
            height={100}
            className=" w-60"
          />

          <h1 className="font-bold text-4xl md:text-6xl mb-5 text-black dark:text-gray-100">
            On-Site
          </h1>
          <p className="pt-1 text-md md:text-lg font-normal font-center text-center dark:text-gray-400 text-gray-700  max-w-[60rem]">
            For those who prefer a traditional learning environment, our
            on-campus programs provide a comprehensive educational experience
            tailored to meet your needs. With our meticulously designed
            curriculum and UGC-approved courses, you can embark on a journey of
            academic excellence in a supportive and enriching atmosphere.
            Whether you're a working professional seeking to enhance your skills
            or an individual looking to complete your education, our on-campus
            offerings provide the resources and guidance you need to succeed.
            Join us and earn a respected degree that opens doors to endless
            opportunities in your chosen field.
          </p>
          <button
            onClick={handleContact}
            className="mt-2 mb-4 p-2 animate-shimmer items-center flex flex-row rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-sm text-white dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <p className="pr-2"> Get Connected</p>
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
          </button>
        </div>
      </ModalLayout>
      <ContactForm open={openContact} setOpen={setopenContact} />
    </>
  );
}

"use client";
import React, { useState } from "react";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { Leva } from "leva";
import Image from "next/image";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ScrollController } from "../../components/scrollController";
import { NavbarDemo } from "@/components/Navbar";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import StudyInDubaiSection from "@/components/StudyInDubaiSection";
import PathwaySection from "@/components/PathwaySection";

const page = () => {
  const [section, setSection] = useState(0);
  const sm = useMediaQuery({ maxWidth: 768 });
  const md = useMediaQuery({ maxWidth: 768 });
  const [openContact, setopenContact] = useState(false);

  return (
    <>
      <NextThemesProvider attribute="class" forcedTheme="dark">
        <NavbarDemo />
        <MotionConfig
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 150,
            damping: 50,
            restDelta: 0.0001,
          }}
        >
          <div className="h-screen ">
            <ScrollController section={section} onSectionChange={setSection} />

            <div className="h-screen w-full flex justify-center overflow-hidden relative">
              <motion.div
                animate={{ opacity: section === 0 ? 1 : 0 }}
                className="absolute h-screen items-center  pt-[65vh] z-10"
              >
                <p className="text-3xl text-center md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                  Study & Work in Dubai
                </p>

                <p className="w-[40vh] md:w-[80vh] text-xs md:text-base font-normal text-center text-gray-300">
                  Students looking to pursue education in Dubai, can rely on our
                  expert guidance for course selection and a transparent,
                  hassle-free admissions process. With dedicated support
                  available round-the-clock, we ensure a smooth and efficient
                  academic journey.
                </p>
              </motion.div>
              <motion.svg
                initial={{ opacity: 0 }}
                whileInView={{ opacity: section === 1 ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                animate={{
                  scale: section === 0 ? 50 : sm ? 4 : 1,
                  y: section === 0 ? "400px" : sm ? "400px" : "100px",
                  x: sm ? 15 : 0,
                }}
                className="z-20 inset-0 absolute overflow-hidden"
                viewBox="0 0 1920 1025"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1482_5120)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1920 -5H0V1031H1920V-5ZM792.794 527.268C800.146 531.978 808.647 534.333 818.297 534.333C825.535 534.333 832.112 532.984 838.028 530.284C844.002 527.584 849.143 523.822 853.451 518.997C857.759 514.172 861.061 508.6 863.359 502.282C865.714 495.906 866.892 489.071 866.892 481.776V411.469H843.111V481.776C843.111 487.06 842.164 491.885 840.268 496.251C838.373 500.616 835.558 504.091 831.824 506.676C828.148 509.261 823.639 510.553 818.297 510.553C813.013 510.553 808.504 509.261 804.77 506.676C801.037 504.034 798.193 500.53 796.24 496.165C794.287 491.799 793.311 487.003 793.311 481.776V411.469H769.531V481.776C769.531 491.483 771.57 500.329 775.648 508.313C779.784 516.24 785.499 522.558 792.794 527.268ZM961.046 411.469H933.991L890.222 532.093H915.467L922.704 512.104H972.333L979.57 532.093H1004.81L961.046 411.469ZM963.63 488.324H931.407L947.432 444.124L963.63 488.324ZM1030.93 411.469V532.093H1107.27V508.313H1054.71V479.363H1095.72V455.583H1054.71V435.249H1107.27V411.469H1030.93Z"
                    fill="#121212"
                  />
                </g>{" "}
                <defs>
                  <clipPath id="clip0_1482_5120">
                    <rect width="1920" height="1025" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
              <motion.div
                className="absolute w-full h-full overflow-hidden"
                transition={{ delay: 0, duration: 1 }}
                animate={{
                  scale: section === 0 ? 1 : 2,
                  y: section === 0 ? "0px" : "600px",
                }}
              >
                {sm ? (
                  <Image
                    className="absolute w-full h-full overflow-hidden"
                    src="/images/dubaibgsm.png"
                    width={2000}
                    height={2000}
                    alt="Dubai Work"
                  />
                ) : (
                  <Image
                    className="absolute w-full h-full overflow-hidden"
                    src="/images/dubaiBg.png"
                    width={2000}
                    height={2000}
                    alt="Dubai Work"
                  />
                )}
              </motion.div>
            </div>
            <StudyInDubaiSection />
            <PathwaySection />
            <div className="w-full bg-[#121212] overflow-hidden relative">
              <div className="flex flex-col items-center justify-center">
                <motion.p
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  className="pt-40 text-[8px] md:text-sm font-normal font-center text-center text-white mb-5 max-w-[60rem] px-4 sm:px-10"
                >
                  By participating in our pathway program, students gain the
                  advantage of experiencing diverse educational systems,
                  cultures, and networks, significantly enriching their academic
                  and personal development. We are committed to guiding our
                  students every step of the way, ensuring they achieve their
                  goals and make the most of this unique educational adventure.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  className="border px-4 p-4 md:mb-24 rounded-xl mt-3 mb-4 h-8 animate-shimmer items-center flex flex-row border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  onClick={() => setopenContact(true)}
                >
                  <p className="pr-2 py-4 text-base text-white">
                    Enquire Now
                  </p>
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
              </div>
            </div>
            <Footer />
          </div>
        </MotionConfig>
        <Leva hidden />
        <ContactForm
          open={openContact}
          setOpen={setopenContact}
          bgcolor="#212227"
        />
      </NextThemesProvider>
    </>
  );
};

export default page;

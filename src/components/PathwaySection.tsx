import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PathwaySection = () => {
  return (
    <div className="w-full bg-[#121212] pt-20 overflow-hidden relative">
      <div className="flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4"
        >
          Pathway Program
        </motion.p>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="pt-1 text-sm font-normal font-center text-center text-gray-400 mb-20 max-w-[30rem] px-4 sm:px-0"
        >
          opportunity for students to begin their educational journey in Dubai
          and complete their final year in the UK
        </motion.p>

        <motion.div className=" max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 flex flex-col gap-5  w-full h-full">
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative w-full  flex items-center justify-center overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1 }}
              initial={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative w-full  flex items-end  justify-start overflow-hidden"
            >
              <Image
                src="/images/dubai/section-1.jpg"
                className="w-full h-80 lg:h-[30rem] object-cover"
                width={1000}
                height={1000}
                alt="Dubai Work"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0 "
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.p
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0.5 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute text-[8px] md:text-[15px] ml-7 mr-7 md:ml-16 xl:ml-24 mb-10 md:mb-14 xl:mb-20 font-normal text-gray-100 max-w-[50rem] sm:px-0"
              >
                <span className="text-lg md:text-lg font-bold">
                  Dubai-UK International Study Pathway
                </span>
                <br />
                <p className="max-w-lg">
                  For students aspiring to migrate to the UK, our pathway
                  programs offer a cost- effective and practical solution.
                </p>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className=" w-full h-full md:h-[30rem] flex md:flex-row flex-col gap-5">
            <motion.div
              className="bg-white md:w-4/6  overflow-hidden"
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <motion.div
                whileHover={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative w-full  flex items-center justify-center overflow-hidden"
              >
                <Image
                  src="/images/dubai/benefits.jpg"
                  className="w-full h-[35rem] lg:h-[35rem] object-cover"
                  width={1000}
                  height={1000}
                  alt="Dubai Work"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-0" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.p
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute text-xs md:text-sm font-normal p-10 md:p-12 xl:p-20 pt-10 text-white max-w-[60rem]"
                >
                  <span className="text-xl font-bold pb-24">
                    Benefits of Our Pathway Programs
                  </span>
                  <br />
                  <br />
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex gap-8">
                      <p className="w-1/2 ">
                        <b className="text-sm">Cost Savings</b>
                        <br />
                        <br />
                        Study for two years in Dubai and complete your education
                        in the UK, significantly reducing tuition and living
                        expenses.
                      </p>
                      <p className="w-1/2">
                        <b className="text-sm">
                          UK Post-Study Work (PSW) Permit
                        </b>{" "}
                        <br />
                        <br />
                        After completing your degree in the UK, you become
                        eligible for the PSW , allowing you to gain work
                        experience in one of the world&nbsp;s leading economies.
                      </p>
                    </div>
                    <div className="flex gap-8">
                      <p className="w-1/2">
                        <b className="text-sm">Experience in Two Countries</b>
                        <br />
                        <br />
                        Gain unique academic and cultural exposure by studying
                        in both Dubai and the UK, enriching your resume and
                        providing a global perspective.
                      </p>
                      <p className="w-1/2">
                        <b className="text-sm">Seamless Transition</b>
                        <br />
                        <br />
                        Our programs are designed to provide a smooth academic
                        and cultural transition from Dubai to the UK.
                      </p>
                    </div>
                  </div>
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-2/6 h-[300px] md:h-full overflow-hidden"
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <motion.div
                whileHover={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative w-full  md:h-[30rem] bg-[#60c7e9] flex  overflow-hidden"
              >
                <Image
                  src="/images/dubai/how.jpg"
                  className="w-full h-full "
                  width={3000}
                  height={3000}
                  alt="Dubai Work"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b h-full md:bottom-8 from-black to-transparent z-0"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.p
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute text-xs md:text-sm font-normal p-10 md:p-5 pb-2 md:pb-1 md:bottom-8 max-w-[60rem] z-20"
                >
                  <span className="text-lg font-bold pb-4">How It Works</span>

                  <div className="flex flex-col gap-2 pt-4">
                    <p className="flex flex-row gap-2">
                      <h2 className="flex font-bold">Step 1</h2>
                      <p className="text-xs">
                        Enroll in a recognized institution in Dubai for the
                        first two years of your degree program.
                      </p>
                    </p>
                    <p className="flex flex-row gap-2">
                      <h2 className="flex font-bold">Step 2</h2>
                      <p className="text-xs">
                        Transfer to a partner university in the UK to complete
                        your studies.
                      </p>
                    </p>
                    <p className="flex flex-row gap-2">
                      <h2 className="flex font-bold">Step 3</h2>
                      <p className="text-xs">
                        Graduate with a globally recognized degree and take
                        advantage of the PSW permit.
                      </p>
                    </p>
                  </div>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PathwaySection;

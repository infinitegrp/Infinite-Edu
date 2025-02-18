import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const StudyInDubaiSection = () => {
  return (
    <div className="bg-[#121212] w-full  overflow-hidden relative">
      <div className="flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4"
        >
          Study & Work in Dubai
        </motion.p>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="pt-1 text-sm font-normal font-center text-center text-gray-400 mb-20 max-w-[30rem] px-4 sm:px-0"
        >
          Dubai has become a global hub for education and career opportunities.
          Infinite Education simplifies the admission process for universities
          and colleges in Dubai, ensuring transparency and trust at every step.
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
              className="relative w-full  flex items-end  justify-start overflow-hidden "
            >
              <Image
                src="/images/dubai/dubai-1.jpg"
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
                className="absolute text-xs md:text-[15px] p-8 md:p-14 lg:p-16 xl:p-20 font-normal text-gray-100 max-w-[50rem] "
              >
                <span className="text-lg md:text-lg font-bold">
                  Study and Work in Dubai
                </span>
                <br />
                <p className="max-w-lg">
                  Dubai has become a global hub for education and career
                  opportunities. Infinite Education simplifies the admission
                  process for universities and colleges in Dubai, ensuring
                  transparency and trust at every step.
                </p>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className=" w-full h-[1300px] md:h-[30rem] flex md:flex-row flex-col md:gap-5">
            <motion.div
              className="h-full md:h-[60vh] md:w-4/6 overflow-hidden"
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
                className="relative w-full flex items-center justify-center"
              >
                <Image
                  src="/images/dubai/dubai-2.jpg"
                  className="w-full h-[60vh] md:h-[35rem] object-cover"
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
                  className="absolute text-xs md:text-sm font-normal p-10 md:p-12 xl:p-20 pt-14  text-white max-w-[60rem]"
                >
                  <span className="text-2xl font-bold pb-24">Our Services</span>
                  <br />
                  <br />
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex gap-8">
                      <p className="w-1/2 ">
                        <b className="text-sm">Transparent Admission Process</b>
                        <br />
                        <br />
                        As an authorized partner, we guarantee no hidden fees.
                        Students can directly pay all tuition and other fees to
                        the respective universities or colleges.
                      </p>
                      <p className="w-1/2">
                        <b className="text-sm">Comprehensive Support</b> <br />
                        <br />
                        From selecting the right institution to visa processing
                        and settling in Dubai, we assist you at every step.
                      </p>
                    </div>
                    <br />
                    <div className="flex gap-2">
                      <p className="w-full">
                        Our team is committed to guiding students through this
                        journey, ensuring a smooth transition and a successful
                        academic experience.
                      </p>
                    </div>
                  </div>
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-2/6 h-full overflow-hidden"
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
                className="relative w-full  h-[30rem] bg-[#60c7e9] flex "
              >
                <div className="absolute h-full w-full bg-black opacity-40 z-10" />
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source
                    src="/images/dubai/why-choose-dubai.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t h-full bottom-0 from-black to-transparent z-0"
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
                  className="absolute text-[8px] md:text-sm font-normal p-10 md:p-8 bottom-1 max-w-[60rem] z-20"
                >
                  <span className="text-lg font-bold pb-4 text-white">
                    Why Choose Dubai?
                  </span>

                  <div className="flex flex-col gap-2 pt-4 text-xs text-white">
                    <h2 className="font-bold text-sm text-white">World-Class Education</h2>
                    Dubai hosts some of the top universities and colleges with
                    state-of-the-art facilities and experienced faculty.
                    <h2 className="font-bold text-sm text-white">Work Opportunities</h2>
                    Students can work part-time while studying, gaining valuable
                    international work experience.
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

export default StudyInDubaiSection;

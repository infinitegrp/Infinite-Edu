'use client'
import React, { useState } from "react";
import { MotionConfig } from "framer-motion";
import { motion } from 'framer-motion';
import { Leva } from "leva";
import Image from "next/image";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ScrollController } from '../../components/scrollController';
import { NavbarDemo } from "@/components/Navbar";
import { useMediaQuery } from 'react-responsive';
import Footer from "@/components/Footer";

const page = () => {
  const [section, setSection] = useState(0);
  const sm = useMediaQuery({ maxWidth: 768 });
  const md = useMediaQuery({ maxWidth: 768 });

  return (
    <>
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NavbarDemo />
      <MotionConfig transition={{ type: 'spring', mass: 5, stiffness: 150, damping: 50, restDelta: 0.0001 }}>
        <div className="h-screen ">
          <ScrollController section={section} onSectionChange={setSection} />

          <div className="h-screen w-full flex justify-center overflow-hidden relative" >

          <motion.div className="absolute h-screen items-center  pt-[65vh] z-10">
          <p className="text-3xl text-center md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Study & Work in Dubai</p>

               <p className="w-[40vh] md:w-[80vh] text-xs md:text-sm font-normal text-center text-gray-300">Students looking to pursue their education in the UAE will find comprehensive assistance from our experienced professionals. 
                We help students select the right course and institution that align with their career objectives, ensuring a transparent admissions process free from hidden charges. With operations in both India and the UAE, our team offers round-the-clock support,
                 available both locally and in-person, to meet your needs quickly and efficiently. </p>
                 
            </motion.div>
            <motion.svg
              initial={{ opacity: 0 }} whileInView={{ opacity: section === 1 ? 1 : 0 }}
              transition={{ delay: 0, duration: 1 }} animate={{ scale: section === 0 ? 50 : (sm ? 4 : 1), y: section === 0 ? '400px' : ( sm ? '400px':'100px' ),x: (sm ? 15 : 0)}}
              className='z-20 inset-0 absolute overflow-hidden' viewBox="0 0 1920 1025" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1482_5120)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1920 -5H0V1031H1920V-5ZM792.794 527.268C800.146 531.978 808.647 534.333 818.297 534.333C825.535 534.333 832.112 532.984 838.028 530.284C844.002 527.584 849.143 523.822 853.451 518.997C857.759 514.172 861.061 508.6 863.359 502.282C865.714 495.906 866.892 489.071 866.892 481.776V411.469H843.111V481.776C843.111 487.06 842.164 491.885 840.268 496.251C838.373 500.616 835.558 504.091 831.824 506.676C828.148 509.261 823.639 510.553 818.297 510.553C813.013 510.553 808.504 509.261 804.77 506.676C801.037 504.034 798.193 500.53 796.24 496.165C794.287 491.799 793.311 487.003 793.311 481.776V411.469H769.531V481.776C769.531 491.483 771.57 500.329 775.648 508.313C779.784 516.24 785.499 522.558 792.794 527.268ZM961.046 411.469H933.991L890.222 532.093H915.467L922.704 512.104H972.333L979.57 532.093H1004.81L961.046 411.469ZM963.63 488.324H931.407L947.432 444.124L963.63 488.324ZM1030.93 411.469V532.093H1107.27V508.313H1054.71V479.363H1095.72V455.583H1054.71V435.249H1107.27V411.469H1030.93Z" fill="#121212" />
              </g> <defs><clipPath id="clip0_1482_5120"><rect width="1920" height="1025" fill="white" /></clipPath></defs>
            </motion.svg>
            <motion.div className="absolute w-full h-full overflow-hidden" transition={{ delay: 0, duration: 1 }}
              animate={{ scale: section === 0 ? 1 : 2, y: section === 0 ? '0px' : '600px' }} >
              {(sm ? (
                <Image className="absolute w-full h-full overflow-hidden" src='/images/dubaibgsm.png' width={2000} height={2000} alt="Dubai Work" />
                ) :(
              <Image className="absolute w-full h-full overflow-hidden" src='/images/dubaiBg.png' width={2000} height={2000} alt="Dubai Work" />
            ) )}
            </motion.div>
          </div>            



          <div className="bg-[#121212] h-[120rem] w-full  overflow-hidden relative" >
            <div className="flex flex-col items-center justify-center">
              <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
                className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Study in Dubai Pathway</motion.p>
              <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
                className="pt-1 text-sm font-normal font-center text-center text-gray-400 mb-20 max-w-[30rem] px-4 sm:px-0">
                opportunity for students to begin their educational journey in Dubai and complete their final year in the UK
              </motion.p>


              <motion.div className=" max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 flex flex-col gap-5  w-full h-full">
                <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full  flex items-center justify-center overflow-hidden">
                  <motion.div whileHover={{ scale: 1 }} initial={{ scale: 1.1 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="relative w-full  flex items-end  justify-start overflow-hidden" >
                    <Image src='/images/dubai/dubai.png' className="w-full h-80 lg:h-[30rem] object-cover" width={1000} height={1000} alt="Dubai Work" />
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0 "
                      initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }} transition={{ duration: 1 }} />
                     <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0.5 }} whileHover={{ scale: 1.1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                      className="absolute text-xs md:text-sm ml-7 mr-7 md:ml-24 mb-10 md:mb-20 font-normal text-gray-300 max-w-[50rem]  sm:px-0 z-999">
                      <span className="text-lg md:text-lg font-bold">Work in dubai</span><br />
                      By participating in our pathway program, students gain the advantage of
                      experiencing diverse educational systems, cultures, and networks, significantly
                      enriching their academic and personal development. We are committed to guiding our
                      students every step of the way, ensuring they achieve their goals and make the most
                      of this unique educational adventure.
                    </motion.p>
                  </motion.div>
                </motion.div>


                <motion.div className=" w-full h-[60vh] md:h-[23rem] flex md:flex-row flex-col gap-5">
                  <motion.div className="bg-white md:w-4/6 h-full overflow-hidden"
                    initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}>
                    <motion.div whileHover={{ scale: 1 }} initial={{ scale: 1.1 }} whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                      className="relative w-full  flex items-center justify-center overflow-hidden" >
                      <Image src='/images/dubai/Work.png' className="w-full lg:h-[30rem] object-cover" width={1000} height={1000} alt="Dubai Work" />
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"
                        initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }} transition={{ duration: 1 }} />
                      <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0.5 }} whileHover={{ scale: 1.1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        className="absolute text-xs md:text-sm font-normal mx-3 md:mx-20 pt-14  text-gray-300 max-w-[60rem] px-4 sm:px-0 z-999">
                        <span className="text-lg font-bold">Study & Work in dubai</span><br />
                        First impressions should always leave an indelible mark. The New Safari’s Parametric Grille is designed to do just that. It makes the frontal stance bolder and masculine, captivating the onlooker instantly.
                      </motion.p>
                    </motion.div>
                  </motion.div>


                  <motion.div className="bg-blue-500 md:w-2/6 h-full overflow-hidden" initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}>
                    <motion.div whileHover={{ scale: 1 }} initial={{ scale: 1.1 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                      className="relative w-full  flex  overflow-hidden" >
                      <Image src='/images/dubai/happyFace.png' className="w-full h-full " width={3000} height={3000} alt="Dubai Work" />
                      <motion.div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0"
                        initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }} transition={{ duration: 1 }} />
                      <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0.5 }} whileHover={{ scale: 1.1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        className="absolute text-xs md:text-sm font-normal mx-3 md:mx-10 pt-24 md:pt-10  text-gray-300 max-w-[60rem] px-4 sm:px-0 z-999">
                        <span className="text-lg font-bold">Study in dubai</span><br />
                        By participating in our pathway program, students gain the advantage of
                        experiencing diverse educational systems, cultures, and networks, significantly
                        enriching their academic and personal development.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>


                <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
                  className="bg-orange-500 w-full h-48 md:h-[20rem] overflow-hidden rounded-sm">
                  <motion.div whileHover={{ scale: 1 }} initial={{ scale: 1.1 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="relative w-full  flex  overflow-hidden" >
                    <Image src='/images/dubai/VISA-support.png' className="w-screen md:w-full h-[22vh] md:h-full" width={3000} height={3000} alt="Dubai Work" />
                    <motion.div className="absolute inset-0 flex  bg-gradient-to-t from-black to-transparent z-0"
                      initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }} transition={{ duration: 1 }} />
                    <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0.5 }} whileHover={{ scale: 1.1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                      className="absolute text-xs md:text-sm font-normal md:pt-36 pt-10 mx-7 md:mx-24 text-gray-300 max-w-[50rem]  sm:px-0 z-999">
                      <span className="text-lg font-bold"> Visa Support for Studying Abroad</span><br />
                      By participating in our pathway program, students gain the advantage of
                      experiencing diverse educational systems, cultures, and networks, significantly
                      enriching their academic and personal development. 
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>


              <motion.p initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
                className="pt-40 text-xs md:text-sm font-normal font-center text-center text-gray-400 mb-10 max-w-[60rem] px-4 sm:px-0">
                By participating in our pathway program, students gain the advantage of
                experiencing diverse educational systems, cultures, and networks, significantly
                enriching their academic and personal development. We are committed to guiding our
                students every step of the way, ensuring they achieve their goals and make the most
                of this unique educational adventure.
              </motion.p>
              <motion.button initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
                className="border px-4 py-1 rounded-2xl">Enquire Now</motion.button>
            </div>
          </div>
        </div>
      </MotionConfig>
      <Leva hidden />
      <Footer/>
      </NextThemesProvider>
    </>
  );
};

export default page;

"use client";
import React, { ReactNode, useState } from 'react';
import { motion } from "framer-motion";
import ProgressLanding from '@/components/ProgressLanding';
import StudyInternationaly from '@/components/StudyInternationaly';
import UniversityAdmission from '@/components/UniversityAdmission';
import DistanceEducation from '@/components/DistanceEducation';
import WorkInDubai from '@/components/WorkInDubai';
import StudyIndia from '@/components/StudyIndia';
import GuideLineGroup from '@/components/GuideLineGroup';
import Contact from '@/components/Contact';
import About from '@/components/About';
import { Lamp } from '@/components/Lamp';
import { WhyGuideline } from '@/components/WhyGuideline';
import Location from '@/components/Location';
import BorderLineCard from '@/components/ui/borderCard';
import CourseFinder from '@/components/CourseFinder';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {

    return <motion.section
        className={` rounded-xl h-full w-full dark:bg-neutral-950  bg-blue-50 border dark:border-gray-800     shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50 overflow-hidden`}
        initial={{ opacity: 0, y: -5, }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }}>
        {children}
    </motion.section>
};

export default function LandingPage() {

    const text = "Your Education Explorer".split(" ");
    return (
        <>  <section id='home' className="pt-[20vh] md:pt-[20vh] pb-5 md:pb-[10vh] px-5  w-full h-screen justify-between  dark:bg-black bg-white  relative flex flex-col items-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="py-2 font-normal text-lg md:text-xl font-center text-center text-black dark:text-neutral-300">
                    Guideline Educational Institution <br />
                </p>
                <div className="flex flex-row ">
                    {text.map((el, i) => (
                        <motion.h1
                            className="text-3xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-1 md:p-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.25, delay: i / 10, }}
                            key={i} >
                            {el}{" "}
                        </motion.h1>
                    ))}
                </div>
                <div className="w-[24rem] md:w-[40rem] h- relative ">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
                <p className="font-normal text-sm md:text-xl pb-5 sm:pb-0 font-center text-center text-black dark:text-neutral-300">
                    Elevate your future with higher studies - where knowledge
                    meets opportunity!
                </p>
                <div className='flex flex-col p-5 items-center gap-2'>
                <CourseFinder />    
                <ProgressLanding />
                </div>
            </section>


            <div id='why-guideline' className="w-full px-5 pt-10 dark:bg-black bg-white flex flex-col items-center justify-center">
                <WhyGuideline />
            </div>


            <div id='about' className=" w-full gap-1 md:gap-2  dark:bg-black bg-white   flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Our Services</p>
                <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-300 mb-20 max-w-[30rem] px-4 sm:px-0">
                    Each department is led by a dedicated divisional manager, guaranteeing focused expertise and strategic leadership. We are committed to “Guiding To Excellence”
                </p>
                {/* <div className="max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 h-60 w-full flex gap-2 md:gap-4 flex-row justify-center mx-auto">
                    <div className='md:w-2/3'><Card ><StudyInternationaly /></Card> </div>
                    <div className='md:w-1/3'><Card ><UniversityAdmission /></Card> </div>
                </div> */}
                {/* <div className="max-w-screen-2xl z--10 px-5 md:px-20 lg:px-40  w-full flex gap-2 md:gap-4 flex-row justify-center mx-auto">
                    <div className="md:w-2/6"> <Card ><DistanceEducation /></Card></div>
                    <div className="flex flex-col gap-4 w-full h-full md:w-4/6">
                        <div className=" flex flex-row md:gap-4 h-full w-full rounded-xl md:rounded-2xl ">
                            <Card className="md:w-1/2 "><WorkInDubai /></Card>
                            <Card className="md:w-1/2 "><StudyIndia /></Card>
                        </div>
                        <Card><GuideLineGroup /></Card>
                    </div>
                </div> */}
                <div className="max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 h-60 w-full flex gap-2 md:gap-4 flex-row justify-center mx-auto">
                    <div className='md:w-2/3'><StudyInternationaly /> </div>
                    <div className='md:w-1/3 hidden md:block'><BorderLineCard className='h-60 justify-center items-start  overflow-hidden flex flex-col relative'><UniversityAdmission /></BorderLineCard> </div>
                </div>
                <div className='md:w-1/3'> </div>
                <div className="max-w-screen-2xl z--10 px-5 md:px-20 lg:px-40  w-full flex gap-2 md:gap-4 flex-row justify-center mx-auto">
                    <div className="md:w-2/6 w-1/2">
                        <BorderLineCard className=' md:block h-full justify-center items-start  overflow-hidden flex flex-col relative'><DistanceEducation /></BorderLineCard>

                    </div>
                    <div className="flex flex-col  gap-4 h-full w-1/2 md:w-4/6">
                        <div className=" flex md:flex-row flex-col gap-2 md:gap-4 h-full w-full rounded-xl md:rounded-2xl ">
                            <BorderLineCard className="h-48 md:h-60 justify-center items-start  overflow-hidden flex flex-col relative"><WorkInDubai /></BorderLineCard>
                            <BorderLineCard className="h-44 md:h-60 justify-center items-start  overflow-hidden flex flex-col relative"><StudyIndia /></BorderLineCard>
                            <div className='md:w-1/3 block md:hidden'><BorderLineCard className='h-full justify-center items-start  overflow-hidden flex flex-col relative'><UniversityAdmission /></BorderLineCard> </div>

                        </div>
                        <div className="hidden md:block"><GuideLineGroup /></div>
                    </div>
                </div>
                <div className="block md:hidden max-w-screen-2xl px-5 pt-1"><GuideLineGroup /></div>
            </div>

            <div className="h-screen w-full">
                <Lamp />
            </div>


            <div id='contact' className="lg:px-0 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl mb-10 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">Contact Us</p>
                {/* <p className="text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
                    Have a nice works? Reach out and let’s chat.
                </p> */}
                <div className='w-full max-w-screen-2xl px-5 md:px-20 lg:px-40'><Contact /></div>
            </div>
            <div className="lg:px-0 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center ">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">Our Locations</p>
                <p className="text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
                    our prime locations in bustling cities across the UAE and India.
                </p>
                <div className='w-full max-w-screen-2xl px-5 md:px-20 lg:px-40 pb-[5rem]'><Location /></div>
            </div>
        </>
    )
}

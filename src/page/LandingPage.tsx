"use client";
import React, { ReactNode } from 'react';
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";
import { Spotlight } from "../components/ui/Spotlight";
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
import SmoothScroll from '@/components/ScrollManger';
import BorderLineCard from '@/components/ui/borderCard';

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
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value);
    //   };
    //   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("submitted");
    //   };
    //  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]

    return (
        <>
            {/* <SmoothScroll> */}

            <div className="py-40 w-full dark:bg-black bg-white  relative flex flex-col items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="flex flex-row ">
                    {text.map((el, i) => (
                        <motion.h1
                            className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.25, delay: i / 10, }}
                            key={i} >
                            {el}{" "}
                        </motion.h1>
                    ))}
                </div>
                <p className="py-8 pb-40 font-normal font-center text-center text-black dark:text-neutral-300">
                    Elevate your future with higher studies - where knowledge <br />
                    meets opportunity!
                </p>
                <PlaceholdersAndVanishInput
                    placeholders={placeholders} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                        throw new Error('Function not implemented.');
                    }} onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
                        throw new Error('Function not implemented.');
                    }}                // onChange={handleChange}
                // onSubmit={onSubmit}
                />
                <ProgressLanding />
            </div>


            <div className="w-full pt-10 dark:bg-black bg-white flex flex-col items-center justify-center">
                <WhyGuideline />
            </div>


            <div className=" w-full gap-1 md:gap-2  dark:bg-black bg-white   flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Our Services</p>
                <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-300 mb-20 max-w-[30rem] px-4 sm:px-0">
                    Spotlight effect is a great way to draw attention to a specific part of the
                    page. Here, we are drawing the attention towards the text section of the
                    page. I don&apos;t know why but I&apos;m running out of copy.
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
                            <BorderLineCard className="h-40 md:h-60 justify-center items-start  overflow-hidden flex flex-col relative"><WorkInDubai /></BorderLineCard>
                            <BorderLineCard className="h-40 md:h-60 justify-center items-start  overflow-hidden flex flex-col relative"><StudyIndia /></BorderLineCard>
                            <div className='md:w-1/3 block md:hidden'><BorderLineCard className='h-full justify-center items-start  overflow-hidden flex flex-col relative'><UniversityAdmission /></BorderLineCard> </div>

                        </div>
                        <div className="hidden md:block"><GuideLineGroup /></div>
                    </div>
                </div>
                    <div className="block md:hidden max-w-screen-2xl px-5 pt-1"><GuideLineGroup /></div>
            </div>


            <Lamp />


            <div className="lg:px-0 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">Contact Us</p>
                <p className="text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
                    Have a nice works? Reach out and let’s chat.
                </p>
                <div className='w-full max-w-screen-2xl px-5 md:px-20 lg:px-40'><Contact /></div>
            </div>
            <div className="lg:px-0 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center ">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">Our Locations</p>
                <p className="text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
                    our prime locations in bustling cities across the UAE and India.
                </p>
                <div className='w-full max-w-screen-2xl px-5 md:px-20 lg:px-40 pb-[1rem]'><Location /></div>
            </div>
        </>
    )
}

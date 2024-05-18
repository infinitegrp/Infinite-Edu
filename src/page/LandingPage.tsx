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

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {

    return <motion.section
        className={` rounded-xl h-full w-full dark:bg-neutral-900  bg-blue-50 border dark:border-gray-800     shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50 overflow-hidden`}
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
            <div className="h-[50rem] pt-20 w-full dark:bg-black bg-white  relative flex flex-col items-center justify-center">
                <Spotlight className="fixed z-10 -top-40 left-0 md:left-60 md:-top-20" fill="white" />
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
                <p className="pt-8 font-normal font-center text-center text-black dark:text-neutral-700 pb-10 ">
                    Spotlight effect is a great way to draw attention to a specific partof the <br />
                    page. Here, we are drawing the attention towards the text section of the page. <br />
                    I don&apos;t know why but I&apos;m running out of copy.
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
            <div className=" w-full gap-1 md:gap-2  dark:bg-black bg-white   flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Our Services</p>
                <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-700 mb-20">
                    Spotlight effect is a great way to draw attention to a specific partof the <br />
                    page. Here, we are drawing the attention towards the text section of the <br />
                    page. I don&apos;t know why but I&apos;m running out of copy.
                </p>
                <div className="max-w-screen-2xl px-5 my-2 md:px-20 lg:px-40 h-60 w-full flex gap-2 md:gap-4 flex-row justify-center mx-auto">
                    <div className='md:w-2/3'><Card ><StudyInternationaly /></Card> </div>
                    <div className='md:w-1/3'><Card ><UniversityAdmission /></Card> </div>
                </div>
                <div className="max-w-screen-2xl z--10 px-5 md:px-20 lg:px-40  w-full flex gap-2 md:gap-4 flex-row justify-center mx-auto">
                    <div className="md:w-2/6"> <Card ><DistanceEducation /></Card></div>
                    <div className="flex flex-col gap-4 w-full h-full md:w-4/6">
                        <div className=" flex flex-row md:gap-4 h-full w-full rounded-xl md:rounded-2xl ">
                            <Card className="md:w-1/2 "><WorkInDubai /></Card>
                            <Card className="md:w-1/2 "><StudyIndia /></Card>
                        </div>
                        <Card><GuideLineGroup /></Card>
                    </div>
                </div>
            </div>
            <Lamp />

            {/* <div className="h-[80rem] px-5 md:px-20 lg:px-20 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">About Us</p>
                <p className="pt- text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
                    At Guideline Educational Institution, we are dedicated to delivering premier educational services on a global scale,
                    with a strategic presence in both the UAE and India. We offer a wide range of educational pathways including distance learning,
                    international study opportunities, university admissions within India and UAE, and vocational training programs,
                    tailored to students from all corners of the globe.
                </p>
                <About />
            </div> */}
            <div className="h-[80rem]  px-5 md:px-20 lg:px-40 w-full gap-1 md:gap-2  dark:bg-black bg-white flex flex-col items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4">Contact Us</p>
                <p className="pt- text-md font-normal font-center text-center text-black dark:text-neutral-400 mb-20">
                    Have a nice works? Reach out and let’s chat.
                </p>
                <div className='max-w-screen-2xl'><Contact /></div>
            </div>
        </>
    )
}

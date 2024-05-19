"use client";
import React, { ReactNode, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from 'next/image';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {

    return <motion.section
        className={`rounded-2xl h-40 flex flex-col min-w-40 max-w-72  items-center justify-center bg-white dark:bg-neutral-950   shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:shadow  overflow-hidden`}
        initial={{ opacity: 0, y: -5, }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }}>
        {children}
    </motion.section>
};

export default function ProgressLanding() {

    const text = "Framer Motion is a really cool tool".split(" ");
    const count = useMotionValue(0);
    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);
    const Universities = useTransform(count, Math.round);
    const Students = useTransform(count1, Math.round);
    const Countries = useTransform(count2, Math.round);
    const Years = useTransform(count3, Math.round);

    useEffect(() => {
        const animation = animate(count, 12450, { duration: 2 });
        const animation1 = animate(count1, 245000, { duration: 2 });
        const animation2 = animate(count2, 50, { duration: 2 });
        const animation3 = animate(count3, 30, { duration: 2 });
    }, []);

    return (
        <div className='flex flex-row mt-20 gap-5 w-full justify-between max-w-screen-2xl lg:px-40'>
            <Card>
                <div className="flex flex-col lg:w-44 absolute items-center justify-center">
                    <motion.h1 className=' text-black dark:text-white font-bold text-4xl '>{Universities}</motion.h1>
                    <p className=' text-black dark:text-gray-300  font-bold'>Universities</p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </div>
                <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-150 h-150 ml-auto opacity-10' />
            </Card>
            <Card>
                <div className="flex flex-col lg:w-44 absolute items-center justify-center">
                    <motion.h1 className=' text-black dark:text-white font-bold text-4xl '>{Students}</motion.h1>
                    <p className=' text-black dark:text-gray-300  font-bold'>Students</p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </div>
                <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-150 h-150 ml-auto opacity-10' />
            </Card>
            <Card>
                <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-150 h-150 ml-auto opacity-10' />
                <div className="flex flex-col lg:w-44 absolute items-center justify-center">
                    <motion.h1 className=' text-black dark:text-white font-bold text-4xl '>{Countries}</motion.h1>
                    <p className=' text-black dark:text-gray-300  font-bold'>Countries</p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </div>
            </Card>
            <Card>
                <div className="flex flex-col lg:w-44 absolute items-center justify-center">
                    <motion.h1 initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className=' text-black dark:text-white font-bold text-4xl '>{Years}</motion.h1>
                    <p className=' text-black dark:text-gray-300  font-bold'>Years of Experience </p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </div>
                    <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-150 h-150 ml-auto opacity-10' />
            </Card>

            {/* {text.map((el, i) => (
                        <motion.p className='text-black flex flex-row' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ duration: 0.25, delay: i / 10, }}> {el}{" "}
                        </motion.p>
                    ))} */}

        </div>
    )
}

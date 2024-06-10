"use client";
import React, { ReactNode, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from 'next/image';
import BorderLineCard from './ui/borderCard';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {

    return <motion.section
        className={`rounded-2xl h-40 flex flex-col min-w-40 max-w-72  items-center justify-center   shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:shadow  overflow-hidden`}
        initial={{ opacity: 0, y: -5, }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }}>
        {children}
    </motion.section>
};

export default function ProgressLanding() {

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
        const animation1 = animate(count1, 24500, { duration: 2 });
        const animation2 = animate(count2, 50, { duration: 2 });
        const animation3 = animate(count3, 30, { duration: 2 });
    }, []);

    return (
    <div className='flex flex-col pt-20 md:flex-row md:px-5 w-full justify-center items-center max-w-screen-2xl'>
        <div className='flex flex-row'>
            <div className="p-2">
            <BorderLineCard className='h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent '>
                <motion.div initial={{ opacity: 0.1 }} whileHover={{ opacity: 0.2 }} className='w-150 h-150' >
                    <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-full h-full blur-lg opacity-10' />
                </motion.div>
                <div className="flex flex-col sm:p-1 p-4 lg:w-44 absolute items-center justify-center">
                    <motion.h1 className=' text-black dark:text-white font-bold text-2xl '>{Universities}</motion.h1>
                    <p className=' text-black dark:text-gray-300 text-sm xl:text-base font-bold'>Universities</p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </div>
            </BorderLineCard>
                </div>
            <div className="p-2">
            <BorderLineCard className='h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent'>
                <motion.div initial={{ opacity: 0.1 }} whileHover={{ opacity: 0.2 }} className='w-150 h-150' >
                    <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-full h-full blur-lg opacity-10' />
                </motion.div>
                <div className="flex flex-col sm:p-1 p-4 lg:w-44 absolute items-center justify-center overflow-hidden">
                    <motion.h1 className=' text-black dark:text-white font-bold text-2xl '>{Students}</motion.h1>
                    <p className=' text-black dark:text-gray-300 xl:text-base font-bold'>Students</p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                    
                </div>
            </BorderLineCard>

            </div>
        </div>
        <div className="flex flex-row">
            <div className="p-2">

            <BorderLineCard className='h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent'>
                <motion.div initial={{ opacity: 0.1 }} whileHover={{ opacity: 0.2 }} className='w-150 h-150' >
                    <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-full h-full blur-lg opacity-10' />
                </motion.div>
                <div className="flex flex-col sm:p-1 p-4 lg:w-44 absolute items-center justify-center">
                    <motion.h1 className=' text-black dark:text-white font-bold text-2xl '>{Countries}</motion.h1>
                    <p className=' text-black dark:text-gray-300 xl:text-base font-bold'>Countries</p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </div>
            </BorderLineCard>
            </div>
            <div className="p-2">

            <BorderLineCard className='h-40 justify-center items-center overflow-hidden bg-transparent dark:bg-transparent'>
                <motion.div className="flex flex-col sm:p-1 p-4 lg:w-44 absolute items-center justify-center " initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} >
                    <motion.h1 initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className=' text-black dark:text-white font-bold text-2xl '>{Years}</motion.h1>
                    <p className=' text-black dark:text-gray-300 xl:text-base font-bold'>Years of Experience </p>
                    <p className=' text-black dark:text-gray-400 text-xs text-center'>Lorem Ipsum is a dummy text for country without any sense that is used to fill spaces in graphic</p>
                </motion.div>
                <motion.div initial={{ opacity: 0.01 }} whileHover={{ opacity: 0.02 }} className='w-150 h-150' >
                    <Image src="/gif/blueGradient.gif" alt="Computer man" width={480} height={480} className='w-full h-full blur-lg ' />
                </motion.div>
            </BorderLineCard>  
            </div>
            </div>

            {/* {text.map((el, i) => (
                <motion.p className='text-black flex flex-row' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10, }}> {el}{" "}
                </motion.p>
            ))} */}

        </div>
    )
}

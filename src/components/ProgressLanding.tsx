"use client";
import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

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
        const animation1 = animate(count1, 5840, { duration: 2 });
        const animation2 = animate(count2, 3250, { duration: 2 });
        const animation3 = animate(count3, 50, { duration: 2 });
    }, []);

    return (
        <div className='flex flex-row mt-20 gap-5'>
            <div className='rounded-2xl flex flex-col min-w-40 max-w-60  items-center justify-center bg-white dark:bg-black shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 '>
                <motion.h1 className=' text-black dark:text-white font-bold text-xl '>{Universities}</motion.h1>
                <p className=' text-black dark:text-white  font-bold'>Universities</p>
                <p className=' text-black dark:text-white text-xs text-center'>Lorem Ipsum is a dummy text without any sense that is used to fill spaces in graphic</p>
            </div>
            <div className='rounded-2xl flex flex-col min-w-40 max-w-60  items-center justify-center bg-white dark:bg-black shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 '>
                <h1 className=' text-black dark:text-white font-bold text-xl '>12450+</h1>
                <p className=' text-black dark:text-white  font-bold'>Universities</p>
                <p className=' text-black dark:text-white text-xs text-center'>Lorem Ipsum is a dummy text without any sense that is used to fill spaces in graphic</p>
            </div>
            <div className='rounded-2xl flex flex-col min-w-40 max-w-60  items-center justify-center bg-white dark:bg-black shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 '>
                <h1 className=' text-black dark:text-white font-bold text-xl '>12450+</h1>
                <p className=' text-black dark:text-white  font-bold'>Universities</p>
                <p className=' text-black dark:text-white text-xs text-center'>Lorem Ipsum is a dummy text without any sense that is used to fill spaces in graphic</p>
            </div>
            <div className='rounded-2xl flex flex-col min-w-40 max-w-60  items-center justify-center bg-white dark:bg-black shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 '>
                <h1 className=' text-black dark:text-white font-bold text-xl '>12450+</h1>
                <p className=' text-black dark:text-white  font-bold'>Universities</p>
                <p className=' text-black dark:text-white text-xs text-center'>Lorem Ipsum is a dummy text without any sense that is used to fill spaces in graphic</p>
            <div className='text-black flex flex-row gap-1' >
            {text.map((el, i) => (
                <motion.p className='text-black flex flex-row' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: i / 10, }}> {el}{" "}
                </motion.p>
            ))}
            </div>
            </div>
        </div>
    )
}

import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {

    return <motion.section
        className={`p-5 py-3 mt-3 flex flex-row items-center rounded-xl h-full w-full dark:bg-zinc-950 bg-blue-100 border dark:border-black   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow shadow-blue-50`}
        initial={{ opacity: 0, y: -5, }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}>
        {children}
    </motion.section >
};

export default function DistanceEducation() {
    return (
        <div className='py-6 px-8 '>
            <h1 className='font-bold text-xl text-black dark:text-white'>Distance Education</h1>
            <p className=' xs:text-sm lg:text-md  text-gray-500 dark:text-white pt-3 '>
                Our distance/online education programs are ideal for working professionals
                who cannot commit to full-time, on-campus studies
            </p>
            <div className="text-sm text-gray-400 pt-3">- WES approved <br /> - UGC approved</div>
            <Card>
                <div className="flex flex-col">
                    <h1 className='font-bold text-lg text-black dark:text-white'>Fast Track</h1>
                    <p className=' xs:text-sm lg:text-sm  text-gray-500 dark:text-white pt-2 '>
                        Online fits busy professionals unable to commit to full-time on-campus studies.
                    </p>
                    <div className="text-sm text-gray-400 pt-2">1 year duration</div>

                </div>
                <button className="mx-3 px-1 h-8 animate-shimmer items-center flex flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7156 13.0608C20.9965 12.7795 21.1543 12.3983 21.1543 12.0008C21.1543 11.6033 20.9965 11.222 20.7156 10.9408L15.0596 5.28177C14.7782 5.00037 14.3966 4.84229 13.9986 4.84229C13.6007 4.84229 13.219 5.00037 12.9376 5.28177C12.6562 5.56316 12.4981 5.94481 12.4981 6.34277C12.4981 6.74072 12.6562 7.12237 12.9376 7.40377L16.0336 10.5008H4.49862C4.10079 10.5008 3.71926 10.6588 3.43796 10.9401C3.15665 11.2214 2.99862 11.6029 2.99862 12.0008C2.99862 12.3986 3.15665 12.7801 3.43796 13.0614C3.71926 13.3427 4.10079 13.5008 4.49862 13.5008H16.0336L12.9376 16.5968C12.7983 16.7361 12.6878 16.9015 12.6124 17.0836C12.5369 17.2656 12.4981 17.4607 12.4981 17.6578C12.4981 17.8548 12.5369 18.0499 12.6124 18.232C12.6878 18.414 12.7983 18.5794 12.9376 18.7188C13.0769 18.8581 13.2424 18.9686 13.4244 19.044C13.6065 19.1194 13.8016 19.1582 13.9986 19.1582C14.1957 19.1582 14.3908 19.1194 14.5728 19.044C14.7549 18.9686 14.9203 18.8581 15.0596 18.7188L20.7156 13.0608Z" fill="white" />
                    </svg>
                </button>
            </Card>
            <Card>
                <div className="flex flex-col">
                    <h1 className='font-bold text-lg text-black dark:text-white'>Distance Education on Sit</h1>
                    <p className=' xs:text-sm lg:text-sm  text-gray-500 dark:text-white pt-2 '>
                        Online fits busy professionals unable to commit to full-time on-campus studies.
                    </p>
                    <div className="text-sm text-gray-400 pt-2">6 months duration</div>

                </div>
                <button className="mx-3 px-1 h-8 animate-shimmer items-center flex flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7156 13.0608C20.9965 12.7795 21.1543 12.3983 21.1543 12.0008C21.1543 11.6033 20.9965 11.222 20.7156 10.9408L15.0596 5.28177C14.7782 5.00037 14.3966 4.84229 13.9986 4.84229C13.6007 4.84229 13.219 5.00037 12.9376 5.28177C12.6562 5.56316 12.4981 5.94481 12.4981 6.34277C12.4981 6.74072 12.6562 7.12237 12.9376 7.40377L16.0336 10.5008H4.49862C4.10079 10.5008 3.71926 10.6588 3.43796 10.9401C3.15665 11.2214 2.99862 11.6029 2.99862 12.0008C2.99862 12.3986 3.15665 12.7801 3.43796 13.0614C3.71926 13.3427 4.10079 13.5008 4.49862 13.5008H16.0336L12.9376 16.5968C12.7983 16.7361 12.6878 16.9015 12.6124 17.0836C12.5369 17.2656 12.4981 17.4607 12.4981 17.6578C12.4981 17.8548 12.5369 18.0499 12.6124 18.232C12.6878 18.414 12.7983 18.5794 12.9376 18.7188C13.0769 18.8581 13.2424 18.9686 13.4244 19.044C13.6065 19.1194 13.8016 19.1582 13.9986 19.1582C14.1957 19.1582 14.3908 19.1194 14.5728 19.044C14.7549 18.9686 14.9203 18.8581 15.0596 18.7188L20.7156 13.0608Z" fill="white" />
                    </svg>
                </button>
            </Card>
        </div>
    )
}

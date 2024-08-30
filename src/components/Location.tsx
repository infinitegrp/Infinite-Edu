import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const Location = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-screen-2xl gap-10">
            <div className="flex flex-col w-full items-center">
                <div className='w-full h-full min-h-10 justify-center flex '>
                    <div className="w- h-60 md:h-[19rem] rounded-2xl border-spacing- ml-0 pl-0 dark:border-gray-800 border-4 overflow-hidden">
                        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                            <Image src='/images/darkdubai.jpg' className='dark:block hidden rounded-xl h-60 md:h-[19rem]' width={800} height={800} alt='map' />
                            <Image src='/images/whitedubai.png' className='dark:hidden block rounded-xl h-60 md:h-[19rem]' width={800} height={800} alt='map' />
                        </motion.div>
                    </div>
                    <div className='flex absolute bg-gray-50 dark:bg-gray-900 py-2 md:py-3 px-4 md:px-8 rounded-xl backdrop-blur-xl opacity-90 justify-start items-center mt-28 md:mt-40  '>
                        <div className="flex flex-row items-center gap-8">
                            <p className='w-[60vw] md:w-full text-neutral-400 text-xs md:text-md leading-5'><span className='font-bold dark:text-gray-50 text-sm md:text-md'>
                                Guideline International LLC</span> <br />Office no 112 - First floor,
                                Ansar gallery, Hamshah building<br />Al karama - Dubai - United Arab Emirates
                                <br />
                                <Link href={`https://www.google.com/maps/place/25%C2%B015'09.3%22N+55%C2%B018'30.4%22E/@25.252582,55.308438,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.252582!4d55.308438?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D`}>
                                    <span className='text-blue-500'>View larger map</span>
                                </Link>
                            </p>
                            <Link href={`https://www.google.com/maps/dir//25.2525833,55.3084444/@25.252582,55.308438,17z?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D`}>
                                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16699 1.3335L10.611 11.2926C11.2497 11.9659 11.7563 12.7654 12.102 13.6453C12.4476 14.5252 12.6254 15.4683 12.6253 16.4207M1.16699 1.3335H8.04199M1.16699 1.3335V8.5835M12.6253 16.4207V25.5002M12.6253 16.4207C12.6252 15.4683 12.8031 14.5252 13.1487 13.6453C13.4943 12.7654 14.001 11.9659 14.6397 11.2926L24.0837 1.3335M24.0837 1.3335H17.2087M24.0837 1.3335V8.5835" stroke="#699BF7" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='w-full text-black dark:text-neutral-400 text-md text-center pt-10'>
                    <span className='font-bold text-gray-50'>Guideline International LLC </span>
                    <br />Office no 112 - First floor, Ansar gallery, <br />Hamshah building, Al karama - Dubai, U.A.E
                    <br />Ph : +971 58 5121 260<br /> Mail : info@guidelineedu.com
                    <br /><Link href="#contact" className='text-blue-500'>Enquire Now</Link>
                </p>
            </div>
            <div className="flex flex-col w-full items-center">
                <div className='w-full h-full min-h-10 justify-center flex '>
                    <div className="w- h-60 md:h-[19rem] rounded-2xl border-spacing- ml-0 pl-0 dark:border-gray-800 border-4 overflow-hidden">
                        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                            <Image src='/images/darkIndia.jpg' className='dark:block hidden rounded-xl h-60 md:h-[19rem]' width={800} height={800} alt='map' />
                            <Image src='/images/whiteIndia.png' className='dark:hidden block rounded-xl h-60 md:h-[19rem]' width={800} height={800} alt='map' />
                        </motion.div>
                    </div>
                    <div className='flex absolute bg-gray-50 dark:bg-gray-900 py-2 md:py-3 px-4 md:px-8 rounded-xl backdrop-blur-xl opacity-90 justify-start items-center mt-28 md:mt-40 '>
                        <div className="flex flex-row items-center gap-8">
                            <p className='w-[60vw] md:w-full text-neutral-400 text-xs md:text-md leading-5'><span className='font-bold dark:text-gray-50 text-sm md:text-md'>
                                Wolfpack Workspaces</span> <br />62/5011, Iyyattil Junction, Shenoys, Kochi, <br />Ernakulam, Kerala 682011
                                <br />
                                <Link href={`https://www.google.com/maps/place/Wolfpack+Workspaces/@9.972368,76.285694,13z/data=!4m6!3m5!1s0x3b08735dc8b6d7c9:0x288abf72636ee334!8m2!3d9.9723681!4d76.2856941!16s%2Fg%2F11j4dhxlv3?hl=en-US&entry=ttu`}>
                                    <span className='text-blue-500'>View larger map</span>
                                </Link>
                            </p>
                            <Link href={`https://www.google.com/maps/dir//Wolfpack+Workspaces+62%2F5011+Iyyattil+Junction,+Shenoys+Kochi,+Ernakulam,+Kerala+682011/@9.9723681,76.2856941,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b08735dc8b6d7c9:0x288abf72636ee334!2m2!1d76.2856941!2d9.9723681?entry=ttu`}>
                                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16699 1.3335L10.611 11.2926C11.2497 11.9659 11.7563 12.7654 12.102 13.6453C12.4476 14.5252 12.6254 15.4683 12.6253 16.4207M1.16699 1.3335H8.04199M1.16699 1.3335V8.5835M12.6253 16.4207V25.5002M12.6253 16.4207C12.6252 15.4683 12.8031 14.5252 13.1487 13.6453C13.4943 12.7654 14.001 11.9659 14.6397 11.2926L24.0837 1.3335M24.0837 1.3335H17.2087M24.0837 1.3335V8.5835" stroke="#699BF7" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='w-full text-black dark:text-neutral-400 text-md text-center pt-10'>
                    <span className='font-bold text-gray-50'>Head office INDIA </span>
                    <br />Wolfpack Business Tower. KPCC Jn.,<br /> MG Road - Cochin Kerala, India
                    <br />Ph :+91 99477 31238<br /> Mail : info@guidelineedu.com
                    <br /><Link href="#contact" className='text-blue-500'>Enquire Now</Link>
                </p>
            </div>
        </div>
    )
}

export default Location
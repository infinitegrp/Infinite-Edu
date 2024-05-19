import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const Location = () => {
    return (
        <div className="flex flex-row max-w-screen-2xl gap-10">
            <div className="flex flex-col w-full items-center">
                <div className='w-full h-full min-h-10 justify-center flex '>
                    <div className="w- h-[19rem] rounded-2xl border-spacing- ml-0 pl-0 border-gray-800 border-4 overflow-hidden">
                        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                            <Image src='/images/darkdubai.jpg' className='rounded-xl h-[19rem]' width={800} height={800} alt='map' />
                        </motion.div>
                    </div>
                    <div className='flex absolute bg-gray-900 py-3 px-8 rounded-xl blur-xs opacity-90 justify-start items-center mt-40 '>
                        <div className="flex flex-row items-center gap-8">
                            <p className='w-full text-gray-300'><span className='font-bold text-gray-50'>
                                Wolfpack Workspaces</span> <br />62/5011, Iyyattil Junction, Shenoys, Kochi, ,<br />Ernakulam, Kerala 682011
                                <br /><span className='text-blue-500'>View larger map</span>
                            </p>
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16699 1.3335L10.611 11.2926C11.2497 11.9659 11.7563 12.7654 12.102 13.6453C12.4476 14.5252 12.6254 15.4683 12.6253 16.4207M1.16699 1.3335H8.04199M1.16699 1.3335V8.5835M12.6253 16.4207V25.5002M12.6253 16.4207C12.6252 15.4683 12.8031 14.5252 13.1487 13.6453C13.4943 12.7654 14.001 11.9659 14.6397 11.2926L24.0837 1.3335M24.0837 1.3335H17.2087M24.0837 1.3335V8.5835" stroke="#699BF7" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <p className='w-full text-gray-300 text-lg text-center pt-10'>
                    <span className='font-bold text-gray-50'>Head office INDIA </span>
                    <br />Wolfpack Business Tower. KPCC Jn.,<br/> MG Road - Cochin Kerala, India
                    <br />Ph :+91 99477 31238<br /> Mail : info@guidelineedu.com
                    <br /><span className='text-blue-500'>Enquire Now</span>
                </p>
            </div>
            <div className="flex flex-col w-full items-center">
                <div className='w-full h-full min-h-10 justify-center flex '>
                    <div className="w- h-[19rem] rounded-2xl border-spacing- ml-0 pl-0 border-gray-800 border-4 overflow-hidden">
                        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                            <Image src='/images/darkdubai.jpg' className='rounded-xl h-[19rem]' width={800} height={800} alt='map' />
                        </motion.div>
                    </div>
                    <div className='flex absolute bg-gray-900 py-3 px-8 rounded-xl blur-xs opacity-90 justify-start items-center mt-40 '>
                        <div className="flex flex-row items-center gap-8">
                            <p className='w-full text-gray-300'><span className='font-bold text-gray-50'>
                                Wolfpack Workspaces</span> <br />62/5011, Iyyattil Junction, Shenoys, Kochi, ,<br />Ernakulam, Kerala 682011
                                <br /><span className='text-blue-500'>View larger map</span>
                            </p>
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16699 1.3335L10.611 11.2926C11.2497 11.9659 11.7563 12.7654 12.102 13.6453C12.4476 14.5252 12.6254 15.4683 12.6253 16.4207M1.16699 1.3335H8.04199M1.16699 1.3335V8.5835M12.6253 16.4207V25.5002M12.6253 16.4207C12.6252 15.4683 12.8031 14.5252 13.1487 13.6453C13.4943 12.7654 14.001 11.9659 14.6397 11.2926L24.0837 1.3335M24.0837 1.3335H17.2087M24.0837 1.3335V8.5835" stroke="#699BF7" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <p className='w-full text-gray-300 text-lg text-center pt-10'>
                    <span className='font-bold text-gray-50'>Head office INDIA </span>
                    <br />Wolfpack Business Tower. KPCC Jn.,<br/> MG Road - Cochin Kerala, India
                    <br />Ph :+91 99477 31238<br /> Mail : info@guidelineedu.com
                    <br /><span className='text-blue-500'>Enquire Now</span>
                </p>
            </div>
        </div>
    )
}

export default Location
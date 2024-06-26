import Image from 'next/image'
import React from 'react'
import BorderLineCard from './ui/borderCard'

export default function UniversityAdmission() {
    return (
        <>
        <div className='h-full pb-2 md:pb-9 pt-3 md:pt-4 lg:pt-6 px-4 md:px-5 lg:px-8  bg-white dark:bg-neutral-950  overflow-hidden'>
            <h1 className='font-semibold text-base md:text-xl text-black dark:text-gray-100'>University Admission</h1>
            <p className='text-sm lg:text-base text-gray-500 dark:text-gray-300 pt-1 md:pt-2'>
                We're here to make your university admission journey across the globe 
                a breeze, and the best part – we don't charge any extra fees for it! 
                Think of us as your friendly guide
            </p>
            <svg className='absolute' width="159" height="169" viewBox="0 0 159 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M158.26 6.51394C158.26 6.51394 148.57 -1.39853 137.666 2.28723C126.761 5.97299 112.352 12.6552 111.729 30.9544C111.106 49.2536 121.502 52.0668 122.685 65.4687C123.868 78.8705 122.547 94.7678 106.333 106.347C90.1179 117.927 88.3209 115.324 66.2174 118.096C44.114 120.868 44.2927 137.268 35.8785 148.457C27.4643 159.647 1.15354 168.013 1.15354 168.013" stroke="#E8E8E8" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
        </div>
            {/* <Image src="/gif/textearth.gif" alt="Computer man" width={480} height={480} className='w-full  opacity-20 absolute' /> */}
        </>
    )
}

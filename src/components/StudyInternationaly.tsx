import Image from 'next/image'
import React, { useState } from 'react'
import ModalLayout from './ModalLayout'
import UniversityAdmission from './UniversityAdmission'
import DistanceEducation from './DistanceEducation'
import WorkInDubai from './WorkInDubai'
import StudyIndia from './StudyIndia'
import GuideLineGroup from './GuideLineGroup'
import { Card } from '@/page/LandingPage' 

export default function StudyInternationaly() {
    const [open, setOpen] = useState(false)
    return (
        <div className='py-10 px-8 '>
            <h1 className='font-bold text-xl text-black dark:text-white'>StudyInternationaly</h1>
            <p className='text-sm lg:text-base text-gray-500 dark:text-white lg:pt-2 md:pt-1 pt-2 lg:pr-10 md:pr-5 '>
                With partnerships in over 30+ countries and connections to 700+ universities,
                we guide students in finding their ideal international study opportunity
            </p>
            <div className='flex pb-11'>

                <button onClick={() => setOpen(true)} className="mt-5 mb-4 h-8 animate-shimmer items-center flex flex-row rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-sm dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <p className='pr-2'> Explore</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z" fill="white" fill-opacity="0.82" />
                    </svg>
                </button>

                {/* <Image src="/gif/fallingStars.gif" alt="Computer man" width={480} height={480} className='w-100 h-100 opacity-10' /> */}
                <Image src="/gif/giphy-downsized-large.gif" alt="Computer man" width={480} height={480} className='w-100 h-100 ml-auto' />
            </div>


            <svg width="159" height="169" viewBox="0 0 159 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M158.26 6.51394C158.26 6.51394 148.57 -1.39853 137.666 2.28723C126.761 5.97299 112.352 12.6552 111.729 30.9544C111.106 49.2536 121.502 52.0668 122.685 65.4687C123.868 78.8705 122.547 94.7678 106.333 106.347C90.1179 117.927 88.3209 115.324 66.2174 118.096C44.114 120.868 44.2927 137.268 35.8785 148.457C27.4643 159.647 1.15354 168.013 1.15354 168.013" stroke="#E8E8E8" stroke-opacity="0.1" stroke-width="2" stroke-dasharray="4 4" />
            </svg>
            
            <ModalLayout open={open} setOpen={setOpen} title='' width={1000}>
                <div className="h-[70vh] w-full gap-1 md:gap-2  dark:bg-neutral-950 bg-white flex flex-col items-center justify-center ">
                    <p className="text-2xl md:text-4xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Study Internationaly</p>
                    <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-700 mb-12 max-w-[40rem]">
                        we guide students in finding their ideal international study opportunity. Our services cover personalized counseling, university matching, application assistance, visa guidance, pre-departure briefings, financial guidance and ongoing support throughout their educational journey.
                    </p>
                    <div className='flex flex-row gap-5 pb-20'>

                        <div className='rounded-2xl flex flex-col min-w-40 max-w-[16rem] items-center justify-center bg-white dark:bg-black shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 '>
                            <h1 className=' text-black dark:text-white font-bold text-xl '>30+ Countries</h1>
                            <p className=' text-black dark:text-white text-xs text-center'>Operating in 30+ countries, our extensive partnerships form the backbone of our global presence.</p>
                        </div>
                        <div className='rounded-2xl flex flex-col min-w-40 max-w-[16rem] items-center justify-center bg-white dark:bg-black shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 '>
                            <h1 className=' text-black dark:text-white font-bold text-xl '>700+ Universities</h1>
                            <p className=' text-black dark:text-white text-xs text-center'>Our network encompasses connections to 700+ universities, offering unparalleled access to diverse educational resources and opportunities.</p>
                        </div>
                    </div>

                    <div className='flex flex-col h-25 overflow-hidden items-center'
                        style={{
                            // backgroundImage: 'url("/images/rounded-globe.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '480px' // Adjust as needed
                        }}
                    >
                        <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-700 max-w-[30rem]">
                            We steer you toward realizing your aspiration of studying your desired course at your dream university worldwide.
                        </p>

                        <button className="mt-5 mb-4 h-8 animate-shimmer items-center flex flex-row rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <p className='pr-2'> Get Connected</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z" fill="white" fill-opacity="0.82" />
                            </svg>
                        </button>
                        <Image src="/images/rounded-globe.jpg" alt="Computer man" width={1000} height={480} className='w-30 h-25'/>
                    </div>
                </div>
            </ModalLayout>
        </div>
    )
}

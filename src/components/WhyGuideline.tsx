"use client";
import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import ModalLayout from "./ModalLayout";
import { useTheme } from "next-themes";
import ContactForm from "./ContactForm";
import Link from "next/link";

export function WhyGuideline() {
    const { theme } = useTheme()
    const [open, setOpen] = useState(false)
    const [openContact,setopenContact] = useState(false)
    return (
        <div className="pt-10 md:h-[40rem] h-screen w-full dark:bg-black bg-white flex flex-col items-center justify-start overflow-hidden rounded-md">
            <h1 className="md:text-3xl pb-5 text-2xl lg:text-4xl font-bold text-center text-black dark:text-white relative z-20">
                Why Guideline
            </h1>
            <div className="w-[20rem] md:w-[40rem] h-40 relative ">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor={theme === 'dark' ? "#ffff" : "#0000ff"}
                />
                <div className="absolute inset-0 w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                <div className="absolute flex justify-center w-full items-center h-full">

                    <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="540" cy="186" r="6" fill="#5652FF" />
                        <circle cx="406" cy="393" r="248.5" stroke="#CCCFE1" strokeOpacity="0.05" strokeWidth="3" />
                        <circle cx="400" cy="400" r="398.5" stroke="url(#paint0_linear_24_3)" strokeOpacity="0.05" strokeWidth="3" />
                        <defs>
                            <linearGradient id="paint0_linear_24_3" x1="400" y1="0" x2="400" y2="800" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#CCCFE1" stopOpacity="0" />
                                <stop offset="0.35" stopColor="#6F717B" />
                                <stop offset="0.666667" stopColor="#6F717B" stopOpacity="0.681416" />
                                <stop offset="1" stopColor="#6F717B" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex justify-center flex-col pt-80 md:pt-0 mx-5 absolute items-center">
                    <p className="text-center w-[90vw] pt-20 pb-6 px-10 md:;px-none dark:text-gray-300 text-gray-700">We are authorized to manage student enrolments for universities and colleges.  </p>
                    <div className=" max-w-screen-2xl px-10 my-2 md:px-20 lg:px-60  flex flex-col md:flex-row justify-center items-start gap-4">
                        <button className="hidden md:flex mt-1 mb-4 h-8 animate-shimmer items-center flex-row rounded-xl border border-gray-800 bg-[linear-gradient(110deg,#5858fb,45%,#9595f7,55%,#5858fb)]
                      bg-[length:200%_100%] px-2 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            {/* <p className='pr-2'> Get Connected</p> */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z" fill="white" fillOpacity="0.82" />
                            </svg>
                        </button>
                        <p className="dark:text-gray-400 text-gray-700 text-md text-center md:text-left"><span className="dark:text-gray-300">Guideline Educational Institution is committed to transparency, ensuring that students make their payments directly to their chosen college or
                            university.</span> We support a straightforward, no-extra-cost payment procedure, maintaining both transparency and trust throughout the
                            process</p>
                        <button className="hidden md:flex mt-1 mb-4 h-8 animate-shimmer items-center flex-row rounded-xl border border-gray-800 bg-[linear-gradient(110deg,#5858fb,45%,#9595f7,55%,#5858fb)]
                      bg-[length:200%_100%] px-2 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            {/* <p className='pr-2'> Get Connected</p> */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z" fill="white" fillOpacity="0.82" />
                            </svg>
                        </button>
                        <p className="dark:text-gray-400 text-gray-700 text-md text-center md:text-left"><span className="dark:text-gray-300">Become a part of Guideline Group's extensive alumni network,</span> connecting with a community of successful graduates and professionals who have benefitted
                            from our educational programs and are now making significant strides in their respective fields.</p>
                    </div>
                    <p className="text-center w-[50vw] pt-10 dark:text-gray-300 text-gray-700 font-bold text-lg">What is guideline group <span className="text-indigo-500">alumni ?</span> </p>
                    <div className="flex flex-row">
                        <p className="text-center  pt-1 dark:text-gray-300 text-gray-700 text-sm">known more</p>
                        
                        <Link href='/Aluminis'>
                        <button onClick={() => setOpen(true)} className="md:hidden block mt-1 ml-2 mb-4  animate-shimmer items-center flex-row rounded-2xl border border-gray-800 bg-[linear-gradient(110deg,#5858fb,45%,#9595f7,55%,#5858fb)]
                      bg-[length:200%_100%] p-1 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            {/* <p className='pr-2'> Get Connected</p> */}
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11091 10.2052L10.0107 4.24561" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.1986 9.64438L10.2073 4.07522L4.69612 3.27373" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        </Link>
                        <button onClick={() => setOpen(true)} className="hidden md:block mt-1 ml-2 mb-4  animate-shimmer items-center flex-row rounded-2xl border border-gray-800 bg-[linear-gradient(110deg,#5858fb,45%,#9595f7,55%,#5858fb)]
                      bg-[length:200%_100%] p-1 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            {/* <p className='pr-2'> Get Connected</p> */}
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11091 10.2052L10.0107 4.24561" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.1986 9.64438L10.2073 4.07522L4.69612 3.27373" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ModalLayout open={open} setOpen={setOpen} title='' width={1000}>
                <div className="h-[70vh] w-full gap-1 md:gap-2 flex flex-col items-center justify-center ">
                    <h1 className='font-bold text-6xl mb-5 text-black dark:text-gray-100'>
                        What is Guideline <br />Group's&nbsp;
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500">alumni !</span>
                    </h1>
                    <p className="pt-1 text-lg font-normal font-center text-center dark:text-gray-400 text-gray-700 mb-12 max-w-[40rem]">
                        Embark on a journey with Guideline Group and become a distinguished member of our widespread alumni community. Spanning across the globe, our operations in Education, Emigration, IT, Hospitality, Management, Corporate Services, Travel & Tourism, Technical Services, and Trading Industries position us alongside market leaders. Our vast network offers our students unparalleled career assistance, leveraging our connections with industry frontrunners to help them achieve their professional aspirations
                    </p>
                    <button onClick={()=>setopenContact(true)} className="mt-5 mb-4 p-2 animate-shimmer items-center flex flex-row rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <p className='pr-2'> Get Connected</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z" fill="white" fillOpacity="0.82" />
                        </svg>
                    </button>
                </div>
            </ModalLayout>
            <ContactForm open={openContact} setOpen={setopenContact}/>
        </div>
    );
}

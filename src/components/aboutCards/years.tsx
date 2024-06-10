import Image from 'next/image'
import React from 'react'

export default function Years() {
    return (
        <>
            <Image src="/images/15.png" alt="Computer man" width={150} height={150} className='w-15 h-15' />
            <div className='py-5 md:px-8 px-3'>
            {/* <h1 className='font-bold text-6xl text-black dark:text-gray-100'>15+</h1>      */}
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-400 pt-5'>
                    Backed by over 15 years of unrivaled experience
                </p>
            </div>

        </ >
    )
}

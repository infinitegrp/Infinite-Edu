import Image from 'next/image'
import React from 'react'

export default function Years() {
    return (
        <>
            <div className='py-5 px-8 '>
                <h1 className='font-bold text-6xl text-black dark:text-gray-100'>15+</h1>
                <p className=' lg:text-md text-gray-500 dark:text-gray-400 pt-5'>
                    Backed by over 15 years of unrivaled experience
                </p>
            </div>
            <Image src="/images/15.png" alt="Computer man" width={500} height={240} className='w-15 h-15' />

        </ >
    )
}

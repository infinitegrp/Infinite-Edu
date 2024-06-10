import Image from 'next/image'
import React from 'react'

export default function Countries() {
  return (
    <div className='md:py-5 py-1 md:px-8 px-3'>
      <Image src="/images/32.png" alt="Computer man" width={100} height={240} className='w-15 h-15' />
      <p className='text-sm md:text-base text-gray-500 dark:text-gray-400 pt-3'>
      more than 32 countries worldwide
      </p>

    </div>
  )
}

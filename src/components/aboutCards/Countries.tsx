import Image from 'next/image'
import React from 'react'

export default function Countries() {
  return (
    <div className='py-5 px-8 '>
      <Image src="/images/32.png" alt="Computer man" width={100} height={240} className='w-15 h-15' />
      <p className=' lg:text-md text-gray-500 dark:text-gray-400 pt-3'>
      more than 32 countries worldwide
      </p>

    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function University() {
  return (
    <div className='py-6 md:py-1 md:px-8 px-3'>
      <svg width="24" height="40" className='md:pt-3' viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7503 33.3333C12.7503 33.6648 12.6713 33.9828 12.5306 34.2172C12.39 34.4516 12.1992 34.5833 12.0003 34.5833C11.8014 34.5833 11.6106 34.4516 11.47 34.2172C11.3293 33.9828 11.2503 33.6648 11.2503 33.3333V17.9166H6.00032C5.85208 17.9164 5.7072 17.843 5.58399 17.7056C5.46077 17.5682 5.36474 17.3731 5.30803 17.1448C5.25132 16.9166 5.23647 16.6654 5.26535 16.4231C5.29424 16.1807 5.36556 15.9581 5.47032 15.7833L11.4703 5.78329C11.6109 5.54921 11.8016 5.41772 12.0003 5.41772C12.1991 5.41772 12.3897 5.54921 12.5303 5.78329L18.5303 15.7833C18.6351 15.9581 18.7064 16.1807 18.7353 16.4231C18.7642 16.6654 18.7493 16.9166 18.6926 17.1448C18.6359 17.3731 18.5399 17.5682 18.4166 17.7056C18.2934 17.843 18.1486 17.9164 18.0003 17.9166H12.7503V33.3333Z" fill="white" />
      </svg>

      <h1 className='font-bold text-md sm:pb-2 md:text-2xl text-black dark:text-gray-100 md:pt-5'>esteemed universities</h1>
      <h1 className='font-bold text-xl text-black dark:text-gray-100'>700+</h1>

      <p className='text-sm md:text-base text-gray-500 dark:text-gray-400 pb-1'>
        more than 700 universities worldwide
      </p>
      <motion.div className="bg-gray-500 w-30 lg:w-56 h-1" >
        <motion.div
          className="bg-white h-1 md:block hidden"
          style={{ width: '1rem' }} // Initial width
          animate={{ width: '10rem'  }} // Target width
          transition={{ duration: 6 }} // Duration of the animation
        >
        </motion.div>
        <motion.div
          className="bg-white h-1 md:hidden block "
          style={{ width: '1rem' }} // Initial width
          animate={{ width: '4rem'  }} // Target width
          transition={{ duration: 6 }} // Duration of the animation
        >
        </motion.div>
      </motion.div>
    </div>
  )
}

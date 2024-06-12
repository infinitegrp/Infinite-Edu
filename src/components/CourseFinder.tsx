import React, { useState } from 'react'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import { motion } from "framer-motion";

const CourseFinder = () => {
   const [isExpanded, setIsExpanded] = useState(true);
   const toggleHeight = () => {
      setIsExpanded(!isExpanded);
   };
   const placeholders = [
      "What's the first rule of Fight Club?",
      "Who is Tyler Durden?",
      "Where is Andrew Laeddis Hiding?",
      "Write a Javascript method to reverse a string",
      "How to assemble your own PC?",
   ];
   return (
      <>
         <PlaceholdersAndVanishInput
            placeholders={placeholders} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
               throw new Error('Function not implemented.');
            }} onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
               throw new Error('Function not implemented.');
            }}                // onChange={handleChange}
         // onSubmit={onSubmit}
         />
         <motion.div className='backdrop-blur-lg bg border-gray-600 bg-gray-50/5 border rounded-2xl w-[30vw] p-5 flex flex-row gap-2' onClick={toggleHeight}
            initial={false}
            animate={{ height: isExpanded ? '15vh' : '0vh', opacity: isExpanded ? 1 : 0 }}
            whileTap={{ scale: 0.95 }}
         >
            <motion.div
               className='backdrop-blur-lg bg border-gray-600 bg-gray-50/5 border rounded-2xl w-full p-5 text-sm'
               initial={false}
               animate={{ opacity: isExpanded ? 1 : 0 }}
            >
               MBBS | Srinivas Mangalore
               <br /><span className='text-xs'>Bachelor of medicine & Bachelor of Surgery</span>
            </motion.div>
            <motion.div
               className='backdrop-blur-lg bg border-gray-600 bg-gray-50/5 border rounded-2xl w-full p-5 text-sm'
               initial={false}
               animate={{ opacity: isExpanded ? 1 : 0 }}
            >
               B.Com | Rosy Royal Banglore
               <br /><span className='text-xs'>Logistics with supply chain management</span>
            </motion.div>
         </motion.div>
      </>
   )
}

export default CourseFinder
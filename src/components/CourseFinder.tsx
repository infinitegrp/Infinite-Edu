'use client'
import React, { useState } from 'react'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import { motion } from "framer-motion";
import ContactForm from './ContactForm';

const CourseFinder = () => {   
   const [openContact, setopenContact] = useState(false)
   const [isExpanded, setIsExpanded] = useState(false);
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

   const courses = [
      { title : 'MBBS', collage : 'Srivinvas Bangalore' ,description : 'Bachelar of medicine & Bachelar of Surgery'},
      { title : 'B.com', collage : 'Rose Royal Bangalore' ,description : 'Logistics with supply chain management'},
      { title : 'MBBS', collage : 'Srivinvas Bangalore' ,description : 'Bachelar of medicine & Bachelar of Surgery'},
      { title : 'B.com', collage : 'Rose Royal Bangalore' ,description : 'Logistics with supply chain management'},
      ]
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
         <motion.div className='backdrop-blur-lg bg border-gray-600 bg-gray-50/5 border rounded-2xl w-[75vw] md:w-[70vw] lg:w-[40vw] items-center p-2 gap-2 overflow-y-auto overflow-x-clip grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
         onClick={toggleHeight}
            initial={false}
            animate={{ height: isExpanded ? '15vh' : '0vh', opacity: isExpanded ? 1 : 0 }}
            whileTap={{ scale: 0.95 }}
         >
            {courses.map((courses, index) => (
            <motion.div
               onClick={()=>setopenContact(true)}
               className='backdrop-blur-lg bg border-gray-600 bg-gray-50/5 border rounded-2xl w-full px-3 py-2 text-sm' initial={false}
               animate={{ opacity: isExpanded ? 1 : 0 }}>{courses.title} | {courses.collage} <br />
               <span className='text-xs dark:text-gray-400'>{courses.description}</span>
            </motion.div>
            ))}
            
         </motion.div>
         <ContactForm open={openContact} setOpen={setopenContact}/>
      </>
   )
}

export default CourseFinder
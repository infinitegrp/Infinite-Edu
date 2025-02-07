"use client";
import React, { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import axios from "axios";
import ModalLayout from "./ModalLayout";

const initalValue = [
  {
    name: "MBBS",
    abbreviation: "Srivinvas Bangalore",
    description: "Bachelor of medicine & Bachelor of Surgery",
  },
  {
    name: "B.com",
    abbreviation: "Rose Royal Bangalore",
    description: "Logistics with supply chain management",
  },
  {
    name: "MBBS",
    abbreviation: "Srivinvas Bangalore",
    description: "Bachelor of medicine & Bachelor of Surgery",
  },
  {
    name: "B.com",
    abbreviation: "Rose Royal Bangalore",
    description: "Logistics with supply chain management",
  },
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const CourseFinder = () => {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState(""); // Add search state
  const [courses, setCourses] = useState(initalValue);
  const { width } = useWindowSize();
  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  const placeholders = [
    "Looking for University Admission ?",
    "How to apply for Study in India ?",
    "What's the Study in Dubai Pathway program ?",
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/v1/courses`
    );
    setCourses(res?.data?.data);
  };

  const handleCourseClick = (coursename: string) => {
    setCourse(coursename);
    setOpenContact(true);
  };

  // Filter courses based on the search input
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.abbreviation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e: any) => {
          setSearch(e.target.value);
          if (width >= 768) {
            setIsExpanded(true);
          }
          if (width < 768) {
            setOpen(true);
          }
        }}
        onBlur={(e: any) => {
          setTimeout(() => setIsExpanded(false), 100);
        }}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          // Handle the submit here
        }}
      />
      <motion.div
        className="backdrop-blur-lg border-gray-600 bg-gray-100 dark:bg-gray-50/5 border rounded-2xl w-[75vw] md:w-[70vw] lg:w-[50vw] items-center p-2 gap-2 overflow-y-auto overflow-x-clip grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        onClick={toggleHeight}
        initial={false}
        animate={{
          height: isExpanded ? "28vh" : "0vh",
          opacity: isExpanded ? 1 : 0,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {filteredCourses.map((courseItem, index) => (
          <motion.div
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleCourseClick(courseItem.name);
            }}
            className="backdrop-blur-lg text-gray-600 dark:text-gray-400 border-gray-600 bg-gray-50/5 border rounded-2xl w-full h-full px-3 py-2 text-sm"
            initial={false}
            animate={{ opacity: isExpanded ? 1 : 0 }}
          >
            {courseItem.name} <br />
            <span className="text-xs">{courseItem.description}</span>
          </motion.div>
        ))}
      </motion.div>
      <ContactForm
        open={openContact}
        setOpen={setOpenContact}
        course={course}
        dispatch={setCourse}
      />
      <ModalLayout open={open} setOpen={setOpen} title="" width={1000}>
        <div className="h-[90vh] flex flex-col items-center pt-5 gap-4">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e: any) => {
              setSearch(e.target.value);
            }}
            onBlur={(e: any) => {
              setTimeout(() => setIsExpanded(false), 100);
            }}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              // Handle the submit here
            }}
          />
          <motion.div
            className="backdrop-blur-lg border-gray-600 bg-gray-100 dark:bg-gray-50/5 border rounded-2xl w-[80vw] md:w-[70vw] lg:w-[50vw] items-center p-2 gap-2 overflow-y-auto overflow-x-clip grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            onClick={toggleHeight}
            initial={false}
            animate={{
              height: "50vh",
              opacity: 1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {filteredCourses.map((courseItem, index) => (
              <motion.div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCourseClick(courseItem.name);
                }}
                className="backdrop-blur-lg text-gray-800 dark:text-gray-200 border-gray-600 bg-gray-50/5 border rounded-2xl w-full h-full px-3 py-2 text-sm"
                initial={false}
                animate={{ opacity: 1 }}
              >
                {courseItem.name} <br />
                <span className="text-xs">{courseItem.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ModalLayout>
    </>
  );
};

export default CourseFinder;

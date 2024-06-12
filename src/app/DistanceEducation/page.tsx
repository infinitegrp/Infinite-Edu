"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React, { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function page() {
  const [openContact, setopenContact] = useState(false);
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <div className="h-[70vh] w-full gap-1 md:gap-2 flex flex-col items-center justify-between  ">
        <Image
          src={"/images/online.png"}
          alt="fastTrack"
          width={500}
          height={100}
          className=" w-60 pt-14"
        />

        <h1 className="font-bold text-4xl mb-5 text-black dark:text-gray-100 text-center">
          Distance Education <br /> on Site
        </h1>
        <p className="pt-1 p-5 text-lg font-normal font-center text-center dark:text-gray-400 text-gray-700  max-w-[60rem]">
          For those who prefer a traditional learning environment, our on-campus
          programs provide a comprehensive educational experience tailored to
          meet your needs. With our meticulously designed curriculum and
          UGC-approved courses, you can embark on a journey of academic
          excellence in a supportive and enriching atmosphere. Whether you're a
          working professional seeking to enhance your skills or an individual
          looking to complete your education, our on-campus offerings provide
          the resources and guidance you need to succeed. Join us and earn a
          respected degree that opens doors to endless opportunities in your
          chosen field.
        </p>
        <button
          onClick={() => setopenContact(true)}
          className="mt-2 mb-4 p-2 animate-shimmer items-center flex flex-row rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <p className="pr-2"> Get Connected</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00065 14.6663C11.6827 14.6663 14.6673 11.6817 14.6673 7.99967C14.6673 4.31767 11.6827 1.33301 8.00065 1.33301C4.31865 1.33301 1.33398 4.31767 1.33398 7.99967C1.33398 11.6817 4.31865 14.6663 8.00065 14.6663ZM8.31398 5.64634C8.40773 5.55271 8.53482 5.50011 8.66732 5.50011C8.79982 5.50011 8.9269 5.55271 9.02065 5.64634L11.0207 7.64634C11.1143 7.74009 11.1669 7.86717 11.1669 7.99967C11.1669 8.13218 11.1143 8.25926 11.0207 8.35301L9.02065 10.353C8.97488 10.4021 8.91968 10.4415 8.85834 10.4689C8.79701 10.4962 8.7308 10.5109 8.66367 10.5121C8.59653 10.5133 8.52984 10.5009 8.46759 10.4758C8.40533 10.4506 8.34877 10.4132 8.30129 10.3657C8.25381 10.3182 8.21638 10.2617 8.19124 10.1994C8.16609 10.1371 8.15374 10.0705 8.15492 10.0033C8.15611 9.93619 8.1708 9.86998 8.19813 9.80865C8.22546 9.74732 8.26486 9.69212 8.31398 9.64634L9.46065 8.49967H5.33398C5.20138 8.49967 5.0742 8.447 4.98043 8.35323C4.88666 8.25946 4.83398 8.13228 4.83398 7.99967C4.83398 7.86707 4.88666 7.73989 4.98043 7.64612C5.0742 7.55235 5.20138 7.49967 5.33398 7.49967H9.46065L8.31398 6.35301C8.22035 6.25926 8.16776 6.13218 8.16776 5.99967C8.16776 5.86717 8.22035 5.74009 8.31398 5.64634Z"
              fill="white"
              fill-opacity="0.82"
            />
          </svg>
        </button>
      </div>
      <ContactForm open={openContact} setOpen={setopenContact} />
    </NextThemesProvider>
  );
}

export default page;

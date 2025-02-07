import Image from "next/image";
import React, { useState } from "react";
import ModalLayout from "../ModalLayout";
import ContactForm from "../ContactForm";
import CustomButton from "../ui/CustomButton";

export default function StudyInternationally() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="h-full pb-2 pt- md:pt-2 px-2.5 md:px-5 lg:px-6 bg-white dark:bg-neutral-950 cursor-pointer overflow-hidden"
      >
        <h1 className="font-semibold text-md md:text-xl text-black dark:text-gray-100">
          Study Internationally
        </h1>
        <p className="text-xs xl:text-sm text-gray-500 dark:text-gray-300 pt-1 md:pt-2">
          With global university partnerships, we help students find their
          perfect international study path.
        </p>
        <CustomButton onClick={() => setOpen(true)}>Explore</CustomButton>
      </div>
      <Image
        src="/gif/earth.gif"
        alt="bg"
        onClick={() => setOpen(true)}
        width={340}
        height={340}
        className="w-[45%] dark:hidden opacity-20 absolute right-[30%] cursor-pointer"
      />
      <Image
        src="/gif/textearth.gif"
        alt="bg"
        onClick={() => setOpen(true)}
        width={480}
        height={480}
        className="w-full hidden dark:block opacity-20 absolute cursor-pointer"
      />
      <ModalLayout open={open} setOpen={setOpen} title="" width={1000}>
        <div className="h-[90vh] md:h-[70vh] w-full gap-2 md:gap-5  dark:bg-[#212227] bg-white flex flex-col items-center justify-center">
          <p className="text-2xl md:text-4xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Study Internationally
          </p>
          <p className="pt-1 md:text-base text-sm  font-center text-center text-black font-light dark:text-neutral-400  max-w-[50rem]">
            we guide students in finding their ideal international study
            opportunity. Our services cover personalized counseling, university
            matching, application assistance, visa guidance, pre-departure
            briefings, Financial guidance and accommodation & loan assistance
            throughout their educational journey.
          </p>
          <div className="flex flex-row gap-5">
            <div className="rounded-2xl flex flex-col min-w-40 max-w-[20rem] items-center justify-center bg-white dark:bg-neutral-900 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 gap-2 ">
              <h1 className=" text-black dark:text-white font-bold text-lg text-center">
                <span className="text-2xl">33+</span> Countries
              </h1>
              <p className=" text-black dark:text-gray-400 text-xs text-center">
                Offering in 33+ countries, our extensive partnerships form the
                backbone of our global presence.
              </p>
            </div>
            <div className="rounded-2xl flex flex-col min-w-40 max-w-[20rem] items-center justify-center bg-white dark:bg-neutral-900 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] px-5 py-5 gap-2 ">
              <h1 className=" text-black dark:text-white font-bold text-lg text-center">
                <span className="text-2xl">700+</span> Universities
              </h1>
              <p className=" text-black dark:text-gray-400 text-xs text-center">
                Our network encompasses connections to 700+ universities,
                offering unparalleled access to diverse educational resources
                and opportunities.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col h-25 items-center"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "480px",
            }}
          >
            <p className="pt-1 text-sm font-normal font-center text-center text-black dark:text-neutral-400 max-w-[30rem]">
              We steer you toward realizing your aspiration of studying your
              desired course at your dream university worldwide.
            </p>
            <CustomButton onClick={() => setOpenContact(true)}>
              Get Connected
            </CustomButton>
            <Image
              onClick={() => setOpenContact(true)}
              src="/images/map.png"
              alt="Computer man"
              width={700}
              height={480}
              className="w-30 h-25 absolute"
            />
          </div>
        </div>
      </ModalLayout>
      <ContactForm open={openContact} setOpen={setOpenContact} />
    </>
  );
}

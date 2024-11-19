import React from "react";
import BorderLineCard from "./ui/borderCard";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string,
  icon?: React.ReactNode;
  description?: string,
  link: string
}

const InfiniteCard: React.FC<Props> = ({ title, icon, description, link }) => {
  return <BorderLineCard className="w-full h-full flex  justify-center items-center overflow-hidden relative dark:bg-transparent">
    <Link href={link} target="_blank">
      <div
        className="flex flex-row items-center cursor-pointer"
      >
        <div className="flex flex-col p-5">
          <h1 className="font-bold text-md text-black dark:text-white">
            {title}
          </h1>
          {icon}
          <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 pt-1 ">
            {description}
          </p>

        </div>
        <button
          className="hidden md:flex md:mx-1 lg:mx-3 px-1 h-8 animate-shimmer items-center flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7156 13.0608C20.9965 12.7795 21.1543 12.3983 21.1543 12.0008C21.1543 11.6033 20.9965 11.222 20.7156 10.9408L15.0596 5.28177C14.7782 5.00037 14.3966 4.84229 13.9986 4.84229C13.6007 4.84229 13.219 5.00037 12.9376 5.28177C12.6562 5.56316 12.4981 5.94481 12.4981 6.34277C12.4981 6.74072 12.6562 7.12237 12.9376 7.40377L16.0336 10.5008H4.49862C4.10079 10.5008 3.71926 10.6588 3.43796 10.9401C3.15665 11.2214 2.99862 11.6029 2.99862 12.0008C2.99862 12.3986 3.15665 12.7801 3.43796 13.0614C3.71926 13.3427 4.10079 13.5008 4.49862 13.5008H16.0336L12.9376 16.5968C12.7983 16.7361 12.6878 16.9015 12.6124 17.0836C12.5369 17.2656 12.4981 17.4607 12.4981 17.6578C12.4981 17.8548 12.5369 18.0499 12.6124 18.232C12.6878 18.414 12.7983 18.5794 12.9376 18.7188C13.0769 18.8581 13.2424 18.9686 13.4244 19.044C13.6065 19.1194 13.8016 19.1582 13.9986 19.1582C14.1957 19.1582 14.3908 19.1194 14.5728 19.044C14.7549 18.9686 14.9203 18.8581 15.0596 18.7188L20.7156 13.0608Z"
              fill="white"
            />
          </svg>
        </button>
        <Image
          src="/gif/lightblue.gif"
          alt="bg"
          width={480}
          height={480}
          className="h-full md:w-full opacity-5 absolute"
        />
      </div>
    </Link>
  </BorderLineCard>
}

export default function InfiniteGroup() {
  return (
    <BorderLineCard className="h-70 justify-center items-start cursor-pointer overflow-hidden flex flex-col relative border-red-500 bg-tr  border-spacing-2 border ">
      <div className="py-5 px-8 bg-white dark:bg-neutral-950">
        <h1 className="font-bold text-xl text-black dark:text-gray-100">
          Infinite Group: Enhancing Education, IT, and Business Solutions
        </h1>
        <p className="text-xs md:text-sm xl:text-base text-gray-500 dark:text-gray-300 pt-3 md:pr-10">
          At Infinite Group, we envision a world where technology, education, and business solutions converge to create unparalleled value and opportunities. Our mission is to be at the forefront of this convergence, leading the way in innovation and service.
          We are committed to sustainability, ethical practices, and community engagement. Our initiatives across all departments aim to create a positive impact on society and the environment.
          &nbsp;<Link href={"https://www.Infinitegrp.com"} target="_blank" className="text-sm text-blue-300 py-2">Learn more</Link>
        </p>
        <p className="text-sm text-blue-300 py-3"> Our Activities</p>
        <div className="flex flex-col xxl:flex-row gap-2 z-50">
          <div className="flex flex-col md:flex-row gap-2">
            <InfiniteCard
              title="Infinite Educational Institution"
              icon={
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>}
              link="https://www.Infiniteedu.com"
              description="Our Educational arms are more than just schools and universities. We are cradles of learning where the leaders of tomorrow are nurtured. We believe in creating environments that foster curiosity, creativity, and critical thinking."
            />
            <InfiniteCard
              title="Infinite IT services"
              icon={
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                </svg>}
              link="https://Infiniteitserv.com"
              description="Our method blends expertise, innovation, and trend awareness to deeply understand and address client needs. By strategizing tailored, scalable solutions, we ensure effectiveness and future readiness. Our expert team prioritizes transparency and collaboration, employing agile methodologies and advanced tools for robust, adaptable solutions."
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <InfiniteCard
              title="Infinite Business Solution"
              icon={
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                </svg>}
              link="https://Infinitebiz.com"
              description="Our Businessmen solutions division stands as a testament to our commitment to excellence. We offer a range of services from management consulting to market research, all designed to help businesses thrive in an ever-changing landscape."
            />
            <InfiniteCard
              title="Infinite Tours and Travel"
              icon={
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                </svg>}
              link="https://Infinitetour.com"
              description="Infinite TOURS & TRAVELS invites you to explore the vibrant colors of the world with unmatched travel experiences. From breathtaking landscapes to rich cultural adventures, travel the world with us and make unforgettable memories."
            />
          </div>
        </div>
      </div>
    </BorderLineCard>
  );
}

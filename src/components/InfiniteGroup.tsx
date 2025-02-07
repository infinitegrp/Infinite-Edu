import React from "react";
import BorderLineCard from "./ui/borderCard";
import Image from "next/image";
import Link from "next/link";
import { companyDataList } from "../../utils/companyData";
import { Icons } from "../../utils/Icons";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
  description?: string;
  link: string;
}

const InfiniteCard: React.FC<Props> = ({
  title,
  subtitle,
  icon,
  description,
  link,
}) => {
  const Icon = Icons[icon as keyof typeof Icons] || null;
  return (
    <BorderLineCard className="w-full h-full flex  justify-center items-center overflow-hidden relative dark:bg-transparent">
      <Link href={link} target="_blank">
        <div className="flex flex-row items-center cursor-pointer">
          <div className="flex flex-col p-5">
            <div className="flex gap-2">
              {Icon && (
                <Icon className="w-12 h-12 text-gray-800 dark:text-white" />
              )}
              <div className="flex flex-col">
                <h1 className="font-bold text-md text-black dark:text-white">
                  {title}
                </h1>
                <h1 className="font-normal text-xs text-black dark:text-white">
                  {subtitle}
                </h1>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 pt-1 ">
              {description}
            </p>
          </div>
          <button className="hidden md:flex md:mx-1 lg:mx-3 px-1 h-8 animate-shimmer items-center flex-row rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
  );
};

export default function InfiniteGroup() {
  return (
    <BorderLineCard className="h-70 justify-center items-start cursor-pointer overflow-hidden flex flex-col relative border-spacing-2 border">
      <div className="py-5 px-2 md:px-4 bg-white dark:bg-neutral-950">
        <h1 className="font-bold text-xl text-black dark:text-gray-100">
        Innovating Solutions Across Multiple Industries
        </h1>
        <p className="text-xs md:text-sm xl:text-base text-gray-500 dark:text-gray-300 pt-3 md:pr-10">
          At Infinite Group of Companies, we believe in infinite possibilities.
          With operations spanning across the UAE, Qatar, India and Sri Lanka,
          we have established ourselves as a dynamic group of companies involved
          in a wide array of industries. Our expertise spans multiple sectors,
          enabling us to deliver innovative solutions that cater to the
          ever-evolving needs of our clients. &nbsp;
          <Link
            href={"https://www.infinite-grp.com"}
            target="_blank"
            className="text-sm text-blue-300 py-2"
          >
            Learn more
          </Link>
        </p>
        <p className="text-sm text-blue-300 py-3"> Our Companies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
          {companyDataList.map((data) => (
            <InfiniteCard
              title={data.title}
              subtitle={data.subtitle}
              icon={data.icon}
              link={data.href}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </BorderLineCard>
  );
}

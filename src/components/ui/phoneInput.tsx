"use client";
import * as React from "react";
import { cn } from "../../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import CountryList from "country-list-with-dial-code-and-flag";

interface PhoneData {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
  preferred: boolean;
}

interface ExtraProps {
  data: PhoneData;
  dispatch: React.Dispatch<React.SetStateAction<PhoneData>>;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ExtraProps {}

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, data, dispatch, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <div
          className={cn(
            `flex items-center h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md py-2 text-sm  file:border-0 file:bg-transparent 
           file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
           focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
        >
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-sm font-medium text-center text-gray-700 dark:text-gray-200 rounded-s-lg bg-transparent"
            type="button"
          >
            {data?.flag} {data?.dial_code}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown-phone"
            className={`${
              open ? "block" : "hidden"
            } z-10 absolute mt-80  bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 h-[17rem] overflow-scroll"
              aria-labelledby="dropdown-phone-button"
            >
              {CountryList.getAll()?.map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(item);
                      setOpen(false);
                    }}
                    className="flex justify-start items-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    {item.flag} {`${item.name} (${item.dial_code})`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type={type}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-e-md dark:placeholder-gray-400 dark:text-white focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
              pattern="[0-9]{10}"
              placeholder="123-456-7890"
              required
              ref={ref}
              {...props}
            />
          </div>
        </div>
      </motion.div>
    );
  }
);
PhoneInput.displayName = "Input";

export { PhoneInput };

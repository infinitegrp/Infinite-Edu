"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../../utils/cn";
import { PhoneInput } from "./ui/phoneInput";
import axios from "axios";

export default function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [code, setCode] = React.useState({
    code: "IN",
    dial_code: "+91",
    flag: "🇮🇳",
    name: "India",
    preferred: true,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}/api/v1/enquiry`, data);
      if (formRef.current) {
        formRef.current.reset(); // Reset the form
      }
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className=" w-full flex mx-auto rounded-none md:rounded-2xl p-4 shadow-input bg-white dark:bg-black">
        <div className="w-5/5 md:w-3/5">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Have a question , or just want a Appointment, say hi!
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            We'd love to hear from you! Drop us a line using the form below, and
            our dedicated team will get back to you as soon as possible.
          </p>
          <form ref={formRef} className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="Tyler"
                  type="text"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Durden"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="phone">Phone</Label>
                <PhoneInput
                  id="phone"
                  name="phone"
                  type="phone"
                  data={code}
                  dispatch={setCode}
                />
                <input className="hidden" name="code" value={code?.dial_code} readOnly/>
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Message</Label>
              <Input
                id="password"
                name="message"
                className="h-40"
                type="text"
              />
            </LabelInputContainer>
            <div className="flex flex-row justify-end">
              <button
                disabled={loading}
                className="flex items-center justify-center bg-gradient-to-br w-28  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              >
                {loading && (
                  <>
                    <svg
                      aria-hidden="true"
                      className="pl-1 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    &nbsp;
                  </>
                )}
                Connect
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:w-2/5 pl-10 xl:pl-20 sm:flex gap-2 flex-col">
          <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
            Contact Informations
          </h2>
          <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-400">
            <span className="font-bold text-lg">Head office U.A.E</span> <br />
            Office No. 3109 Aspin Commercial Tower Sheikh Zayed Road Dubai,
            U.A.E <br /> <br />
            Ph : +971 50 339 7437
            <br /> Mail : info@guidelineedu.com
          </p>
          <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-400">
            <span className="font-bold text-lg">Head office U.A.E</span> <br />
            Office No. 3109 Aspin Commercial Tower Sheikh Zayed Road Dubai,
            U.A.E <br /> <br />
            Ph : +971 50 339 7437
            <br /> Mail : info@guidelineedu.com
          </p>
          <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-400">
            <span className="font-bold text-lg">Appointment</span> <br />
            Mon to Thursday : 9am to 6pm (1pm to 2pm lunch break)
            <br />
            Friday : 2 pm to 6pm Public Holidays Off
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full">
        <BottomGradient />
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

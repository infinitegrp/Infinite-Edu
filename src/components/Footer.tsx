import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href={"/"}
              className="flex flex-col justify-center gap-2 items-center text-blue-900 dark:text-gray-300"
            >
              <Image
                src="/images/secondarylogo.png"
                alt="logo"
                width={48}
                height={56}
                className="w-12 h-28"
              />
              <div className="text-lg flex flex-col justify-center uppercase">
                <h1 className="font-bold text-center text-base md:text-xl">
                  Infinite Education
                </h1>
                <p className="text-xs text-center">
                  An Affiliate of Infinite Group of Companies
                </p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://www.infinite-grp.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Infinite Group
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/dubai" className="hover:underline">
                    Study in UAE
                  </Link>
                </li>
                <li>
                  <Link href="/india" className="hover:underline">
                    Study in India
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61568257455081"
                    target="_blank"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://www.instagram.com/infinite.education__/?next=%2F"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://api.whatsapp.com/send?phone=971501402316&text=Hi%C2%A0there,%C2%A0Let%27s%C2%A0have%C2%A0a%C2%A0talk"
                    target="_blank"
                    className="hover:underline"
                  >
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="https://infinite-edu.com" className="hover:underline">
              Infinite Education
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="https://www.facebook.com/profile.php?id=61568257455081"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=971501402316&text=Hi%C2%A0there,%C2%A0Let%27s%C2%A0have%C2%A0a%C2%A0talk"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M15.997 2.007c-7.724 0-13.99 6.268-13.99 13.995 0 2.468.656 4.881 1.897 6.993l-1.998 7.292 7.574-1.987c1.956 1.095 4.185 1.677 6.422 1.677 7.723 0 13.992-6.27 13.992-13.975-.003-7.726-6.268-13.995-13.997-13.995zm8.135 19.765c-.344.967-1.703 1.773-2.337 1.877-.591.096-1.342.169-2.164-.139-.5-.182-1.149-.37-1.975-.719-3.455-1.5-5.66-4.943-5.83-5.177-.169-.235-1.387-1.85-1.387-3.526 0-1.676.873-2.504 1.184-2.849.311-.344.683-.432.911-.432.235 0 .468.003.672.012.216.009.512-.082.801.614.311.742 1.056 2.568 1.15 2.75.086.169.145.369.027.591-.12.23-.182.372-.356.558-.169.182-.356.406-.512.544-.169.144-.348.3-.151.591.196.282.868 1.43 1.859 2.315 1.282 1.144 2.352 1.503 2.63 1.676.27.144.426.13.6-.084.176-.215.694-.808.882-1.086.182-.282.369-.235.627-.141.262.095 1.654.781 1.943.923.285.145.479.215.548.336.073.127.073.735-.273 1.702z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
              href="mailto:info@infinite-grp.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.885-7.838A.99.99 0 0 0 23 4H1c-.354 0-.672.186-.885.475L12 12.713zM23.96 5.12l-11.94 7.869L0 5.12V20c0 .553.447 1 1 1h22c.553 0 1-.447 1-1V5.12z" />
              </svg>
              <span className="sr-only">Gmail</span>
            </Link>

            <Link
              href="https://www.instagram.com/infinite.education__/?next=%2F"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.259.058 2.006.273 2.47.46.608.238 1.04.524 1.497.981.457.457.743.889.981 1.497.188.464.402 1.21.46 2.47.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.058 1.259-.273 2.006-.46 2.47-.238.608-.524 1.04-.981 1.497-.457.457-.889.743-1.497.981-.464.188-1.21.402-2.47.46-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.259-.058-2.006-.273-2.47-.46-.608-.238-1.04-.524-1.497-.981-.457-.457-.743-.889-.981-1.497-.188-.464-.402-1.21-.46-2.47C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.058-1.259.273-2.006.46-2.47.238-.608.524-1.04.981-1.497.457-.457.889-.743 1.497-.981.464-.188 1.21-.402 2.47-.46C8.416 2.212 8.8 2.2 12 2.2m0-2.2C8.737 0 8.332.013 7.052.07 5.77.127 4.868.337 4.16.634c-.742.313-1.373.732-1.987 1.347-.615.615-1.034 1.245-1.347 1.987C.337 5.132.127 6.034.07 7.316.013 8.6 0 9.005 0 12c0 2.995.013 3.4.07 4.684.057 1.282.267 2.184.634 2.892.313.742.732 1.373 1.347 1.987.615.615 1.245 1.034 1.987 1.347.708.367 1.61.577 2.892.634C8.6 23.987 9.005 24 12 24c2.995 0 3.4-.013 4.684-.07 1.282-.057 2.184-.267 2.892-.634.742-.313 1.373-.732 1.987-1.347.615-.615 1.034-1.245 1.347-1.987.367-.708.577-1.61.634-2.892.057-1.284.07-1.689.07-4.684 0-2.995-.013-3.4-.07-4.684-.057-1.282-.267-2.184-.634-2.892-.313-.742-.732-1.373-1.347-1.987-.615-.615-1.245-1.034-1.987-1.347C18.184.337 17.282.127 16.004.07 14.72.013 14.317 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-8.002 3.999 3.999 0 0 1 0 8.002zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

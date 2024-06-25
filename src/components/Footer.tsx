import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://guideline.com/" className="flex items-center">
              <img
                src="/images/logo.png"
                className="md:h-16 me-3"
                alt="guideline Logo"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GuideLine</span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.guidelinegrp.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Guideline group
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://guidelineedu.com/dubai"
                    target="_blank"
                    className="hover:underline"
                  >
                    Study in UAE
                  </a>
                </li>
                <li>
                  <a
                    href="https://guidelineedu.com/india"
                    target="_blank"
                    className="hover:underline"
                  >
                    Study in India
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://guidelineedu.com/" className="hover:underline">
              guideline™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
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
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
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
            </a>
            <a
              href="#"
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
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

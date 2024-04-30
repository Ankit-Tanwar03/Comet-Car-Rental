import React from "react";
import { footerContent } from "../Content/carRental";
import Button from "./Button";

function Footer() {
  return (
    <>
      <div className="bg-black opacity-80 py-10 px-5">
        <div className="flex flex-col flex-wrap xl:flex-nowrap md:flex-row items-start justify-center sm:justify-start xl:justify-center md:gap-20 lg:gap-x-32 xl:gap-6 px-4">
          <div className="w-full md:w-1/4 pb-10 md:pb-0">
            <div>
              <h1 className="text-white text-lg font-semibold mb-4">
                {footerContent.title}
              </h1>
              <p className="text-white mb-4">{footerContent.description}</p>
              <h3 className="text-white mb-4">{footerContent.phoneNo}</h3>
              <h3 className="text-white mb-4">{footerContent.email}</h3>
            </div>
          </div>
          <div className="w-full md:w-1/4 pb-10 md:pb-0">
            <ul>
              <h1 className="text-white text-lg font-semibold mb-4">
                {footerContent.heading1}
              </h1>
              {footerContent.list1.map((list, index) => (
                <li key={index} className="text-white mb-2">
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 pb-10 md:pb-0">
            <ul>
              <h1 className="text-white text-lg font-semibold mb-4">
                {footerContent.heading2}
              </h1>
              {footerContent.list2.map((list, index) => (
                <li key={index} className="text-white mb-2">
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 pb-10 md:pb-0">
            <ul>
              <h1 className="text-white text-lg font-semibold mb-4">
                {footerContent.heading3}
              </h1>
              {footerContent.list3.map((list, index) => (
                <li key={index} className="text-white mb-2">
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 pb-10 md:pb-0">
            <div>
              <h1 className="text-white text-lg font-semibold mb-4">
                {footerContent.heading4}
              </h1>
              <ul>
                {footerContent.list4.map((list, index) => (
                  <li key={index} className="text-white mb-2">
                    {list}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row md:items-center mt-4">
                <input
                  type="email"
                  className="bg-white w-52 px-4 py-2 rounded-sm mb-2 md:flex-row md:rounded-r-none md:rounded-l-md focus:outline-none"
                  placeholder="Your Email Address"
                />
                <Button
                  bgColor="bg-dark-green"
                  className="px-4 py-2 w-52 mb-2 rounded-sm md:flex-row md:rounded-l-none md:rounded-r-md text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

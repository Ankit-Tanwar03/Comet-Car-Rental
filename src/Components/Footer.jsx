import React from "react";
import { footerContent } from "../Content/carRental";
import Button from "./Button";

function Footer() {
  return (
    <>
      {/* <div className="bg-slate-400">
        <div className="flex items-start justify-center mx-[20px]">
          <div>
            <h1>{footerContent.title}</h1>
            <p>{footerContent.description}</p>
            <h3>{footerContent.phoneNo}</h3>
            <h3></h3>
            {footerContent.email}
          </div>
          <div>
            <ul>
              <h1>{footerContent.heading1}</h1>
              {footerContent.list1.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <h1>{footerContent.heading2}</h1>
              {footerContent.list2.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <h1>{footerContent.heading3}</h1>
              {footerContent.list3.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1>{footerContent.heading4}</h1>
            {footerContent.list4.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
            <input type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div> */}

      <div className="bg-slate-400 py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4 lg:px-8 xl:px-12">
          <div className="flex flex-wrap justify-center lg:justify-between items-start">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4">
                {footerContent.title}
              </h1>
              <p className="text-sm lg:text-base mb-4">
                {footerContent.description}
              </p>
              <h3 className="text-base lg:text-lg mb-4">
                {footerContent.phoneNo}
              </h3>
              <p className="text-base lg:text-lg mb-4">{footerContent.email}</p>
            </div>
            <div className="mb-8 lg:mb-0">
              <ul>
                <h1 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4">
                  {footerContent.heading1}
                </h1>
                {footerContent.list1.map((list, index) => (
                  <li key={index} className="text-sm lg:text-base mb-2">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <ul>
                <h1 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4">
                  {footerContent.heading2}
                </h1>
                {footerContent.list2.map((list, index) => (
                  <li key={index} className="text-sm lg:text-base mb-2">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <ul>
                <h1 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4">
                  {footerContent.heading3}
                </h1>
                {footerContent.list3.map((list, index) => (
                  <li key={index} className="text-sm lg:text-base mb-2">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4">
                {footerContent.heading4}
              </h1>
              {footerContent.list4.map((list, index) => (
                <li key={index} className="text-sm lg:text-base mb-2">
                  {list}
                </li>
              ))}
              <div className="flex items-center mt-4">
                <input
                  type="email"
                  className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                />
                <Button className="bg-blue-500 text-white rounded-r-md px-6 py-2 ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
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

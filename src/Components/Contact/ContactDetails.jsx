import React from "react";
import { contactInfo } from "../../Content/contact";

function ContactDetails() {
  return (
    <>
      {/* <div>
        <div className="w-[40vw] xl:h-[65vh] p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{contactInfo.title}</h2>
          <p className="mb-4">{contactInfo.description1}</p>
          <div className="grid grid-cols-2 gap-4">
            {contactInfo.headings.map((heading, index) => (
              <div key={index}>
                <h3 className="font-bold">{heading}</h3>
                <p>{contactInfo.details[index]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">{contactInfo.description2}</p>
        </div>
      </div> */}

      <div className="w-full px-4 sm:px-6 lg:px-8 m-6 sm:m-0">
        <div className="max-w-screen-xl mx-auto overflow-auto">
          <div className="w-full md:w-[40vw] xl:w-[30vw] xl:h-full p-6 bg-white ">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {contactInfo.title}
            </h2>
            <p className="mb-4">{contactInfo.description1}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {contactInfo.headings.map((heading, index) => (
                <div key={index}>
                  <h3 className="font-bold">{heading}</h3>
                  <p>{contactInfo.details[index]}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">{contactInfo.description2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;

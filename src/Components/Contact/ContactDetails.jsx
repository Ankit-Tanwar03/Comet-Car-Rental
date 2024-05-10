import React from "react";
import { contactInfo } from "../../Content/contact.js";

function ContactDetails() {
  return (
    <>
      <div className="w-full p-4 sm:p-6 m-6 sm:m-0 bg-light-beige rounded-lg shadow-2xl max-w-screen-xl mx-auto overflow-auto lg:h-[500px]">
        <div className="w-full md:w-full xl:w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-950">
            {contactInfo.title}
          </h2>
          <p className="mb-4">{contactInfo.description1}</p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {contactInfo.headings.map((heading, index) => (
              <div key={index}>
                <h3 className="font-bold text-slate-950">{heading}</h3>
                <p className="text-dark-gray">{contactInfo.details[index]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">{contactInfo.description2}</p>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;

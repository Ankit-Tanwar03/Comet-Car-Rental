import React from "react";
import Form from "../Components/Contact/Form";
import ContactDetails from "../Components/Contact/ContactDetails";

function Contact() {
  return (
    <>
      {/* <div className="p-[100px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <ContactDetails />
          <Form />
        </div>
      </div> */}

      <div className="p-6 md:p-8 lg:p-20 xl:p-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Contact Us
        </h1>
        <div className="flex flex-col justify-between items-center sm:flex-row lg:justify-around lg:items-start">
          <ContactDetails />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;

import React from "react";
import Form from "../Components/Contact/Form.jsx";
import ContactDetails from "../Components/Contact/ContactDetails.jsx";

function Contact() {
  return (
    <>
      <div className="p-6 md:p-8 lg:p-20 xl:p-32 bg-beige">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-center text-slate-950">
          Contact Us
        </h1>
        <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-around lg:items-start gap-4">
          <ContactDetails />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;

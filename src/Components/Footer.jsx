import React from "react";
import { footerContent } from "../Content/carRental";
import Button from "./Button";

function Footer() {
  return (
    <>
      <div className="bg-slate-400">
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
      </div>
    </>
  );
}

export default Footer;

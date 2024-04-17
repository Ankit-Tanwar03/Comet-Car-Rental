import React from "react";
import Button from "../Button";
import { downloadApp } from "../../Content/carRental";

function DownloadApp() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <h1>{downloadApp.title}</h1>
          <p>{downloadApp.description}</p>
          <Button>
            Get it on <br /> <span>Google Play</span>
          </Button>
          <Button>
            Download on the <br /> <span>App Store</span>
          </Button>
        </div>
        <div>
          <img src={downloadApp.image} alt="" className="w-[700px]" />
        </div>
      </div>
    </>
  );
}

export default DownloadApp;

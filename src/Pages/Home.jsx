import React, { useEffect } from "react";
import Hero from "../Components/Home/Hero.jsx";
import Service from "../Components/Home/Service.jsx";
import Fleet from "../Components/Home/Fleet.jsx";
import Banner from "../Components/Home/Banner.jsx";
import WhyChooseUs from "../Components/Home/WhyChooseUs.jsx";
import FAQ from "../Components/Home/FAQ.jsx";
import DownloadApp from "../Components/Home/DownloadApp.jsx";
import BookNow from "../Components/Home/BookNow.jsx";

function Home() {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    scrollToTop();
    return () => {
      window.removeEventListener("load", scrollToTop);
    };
  }, []);

  return (
    <>
      <Hero />
      <BookNow />
      <Service />
      <Fleet />
      <Banner />
      <WhyChooseUs />
      <FAQ />
      <DownloadApp />
    </>
  );
}

export default Home;

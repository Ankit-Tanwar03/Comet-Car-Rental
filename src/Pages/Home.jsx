import React from "react";
import Hero from "../Components/Home/Hero";
import Service from "../Components/Home/Service";
import Fleet from "../Components/Home/Fleet";
import Banner from "../Components/Home/Banner";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import FAQ from "../Components/Home/FAQ";
import DownloadApp from "../Components/Home/DownloadApp";

function Home() {
  return (
    <>
      <Hero />
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

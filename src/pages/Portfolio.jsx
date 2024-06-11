import React from "react";
import Footer from "../components/Footer";
import Project from "./Project";

const Portfolio = () => {
  return (
    <>
      <section>
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-easing="linear"
          className="text-2xl font-bold mb-10"
        >
          PORTFOLIO
        </h2>
        <div className="flex flex-wrap gap-4">
          <Project />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

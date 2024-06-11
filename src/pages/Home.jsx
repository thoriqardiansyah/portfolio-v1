import React from "react";

const Home = () => {
  return (
    <section className="mt-32">
      <div className="text-center">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="relative mx-auto mt-40 max-w-[800px]"
        >
          <div className="mb-10">
            <img
              src="./images/profile-photo.png"
              alt="profile-photo"
              className="mx-auto shadow-[20px_-20px_#000] rounded-[20px] mb-10 w-[190px] h-[250px] md:w-[270px] md:h-[350px]"
            />
          </div>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="2300"
            className="animate-wiggle md:absolute md:top-0 md:right-[90px] mx-auto w-[200px] md:w-auto text-xl bg-[#CFCFCF76] py-2 px-8 rounded-[10px] backdrop-blur-lg"
          >
            {" "}
            Hi! I’m Ardi
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="2500"
            className="absolute animate-wiggle hidden md:block top-[180px] left-[100px] bg-[#CFCFCF76] py-2 px-8 rounded-[10px] backdrop-blur-lg"
          >
            UI/UX Designer
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="2800"
            className="absolute animate-wiggle hidden md:block bottom-[60px] right-[100px] bg-[#CFCFCF76] py-2 px-8 rounded-[10px] backdrop-blur-lg"
          >
            React Developer
          </p>
        </div>
        <h1
          data-aos="fade-right"
          data-aos-duration="3000"
          className="text-xl md:text-3xl font-bold my-3"
        >
          Hello I’m Thoriq Ardiansyah
        </h1>
        <h2
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="200"
          className="text-xl md:text-3xl font-semibold my-3"
        >
          I’m a Frontend Developer and UI/UX Designer
        </h2>
        <h3
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          data-aos-delay="200"
          data-aos-offset="-200"
          className="text-xl md:text-3xl font-semibold text-[#C4C4C4]"
        >
          Based in Jakarta, Indonesia
        </h3>
      </div>
    </section>
  );
};

export default Home;

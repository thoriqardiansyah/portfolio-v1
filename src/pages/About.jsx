import React from "react";
import Download from "../assets/download-icons.svg";
import HTML from "../assets/html-icons.svg";
import CSS from "../assets/css-icons.svg";
import Javascript from "../assets/javascript-icons.svg";
import Typescript from "../assets/typescript-icons.svg";
import ReactJS from "../assets/react.svg";
import NextJS from "../assets/nextjs-icons.svg";
import Git from "../assets/git-icons.svg";
import TailwindCSS from "../assets/tailwind-icons.svg";
import Figma from "../assets/figma-icons.svg";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        <article className="flex flex-col-reverse lg:flex-row lg:mt-48">
          <div className="flex-[1_1_40%] mt-20 lg:mt-0 flex items-center">
            <div data-aos="fade-right" data-aos-duration="2000">
              <h2
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="1000"
                className="text-3xl font-bold text-center mb-10 mt-5 md:mt-0"
              >
                ABOUT ME
              </h2>
              <p>
                Hello! I am Thoriq Ardiansyah, Thank you for visiting my
                profile. I am a web developer with a strong interest in
                front-end web development. I am currently a fresh graduate of a
                Bachelor of Informatics. I attended many bootcamps to expand my
                knowledge and improve my skills in the field of frontend web
                development and UI/UX Design. I specialize in JavaScript and I'm
                currently exploring the fields of React Js and Tailwind CSS. I
                am dedicated to honing my programming skills every day. I really
                enjoy hobbies such as watching movies and listening to music. I
                also love artworks, which helps me stay balanced and creative in
                everyday life. One of my main goals is to become a professional
                front-end developer. I am sure that my efforts and consistency
                in studying will not be in vain. I love being able to connect
                with new people and share experiences. If you want to contact
                me, please feel free to contact me.
              </p>
              <Link
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="1500"
                className="w-44 py-2 rounded-lg bg-black text-white font-medium mt-10 flex items-center justify-center gap-2"
                to={
                  "https://drive.google.com/file/d/1DNG8TimI6KZlR7rF1MrNWqiw2ThUplmB/view?usp=sharing"
                }
                target="_blank"
              >
                <img src={Download} alt="cv" />
                Download CV
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex justify-center flex-[1_1_30%] "
          >
            <div className="relative ">
              <img
                src="./images/profile2.png"
                alt="profile"
                className="scale-[.9] shadow-[20px_-20px_0_#000]"
              />
              <img
                src="./images/bubbling.png"
                alt="bubbling"
                className="absolute scale-[.7] md:scale-100 bottom-[-80px] lg:-bottom-20 -left-20 -z-10"
              />
            </div>
          </div>
        </article>
        <article className="mt-20 lg:mt-[200px] h-72">
          <h2
            className="text-3xl font-bold md:text-center"
            data-aos="zoom-in-down"
            data-aos-delay="50"
            data-aos-easing="linear"
          >
            MY SKILLS
          </h2>
          <div className="my-14 flex flex-wrap md:justify-center gap-10">
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              title="HTML"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={HTML} alt="html" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="100"
              title="CSS"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:left-1 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={CSS} alt="css" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="200"
              title="Javascript"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-6 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={Javascript} alt="javascript" className="rounded-md" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="300"
              title="Typescript"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-6 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={Typescript} alt="typescript" className="rounded-md" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="400"
              title="ReactJS"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-3 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={ReactJS} alt="reactjs" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="500"
              title="NextJS"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-2 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={NextJS} alt="nextjs" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="600"
              title="Tailwind"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-2 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={TailwindCSS} alt="Tailwind" className="scale-150" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="700"
              title="Git"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:left-2 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={Git} alt="Git" className="scale-125" />
            </div>
            <div
              data-aos="fade-up"
              data-oas-duration="100"
              data-aos-delay="800"
              title="Figma"
              className="relative before:content-[attr(title)] before:px-2 before:py-1 before:bg-black before:text-white before:rounded-md before:absolute before:-top-12 before:-left-2 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 cursor-pointer"
            >
              <img src={Figma} alt="Figma" className="scale-125" />
            </div>
          </div>
        </article>
        <Card />
      </section>
      <Footer />
    </>
  );
};

export default About;

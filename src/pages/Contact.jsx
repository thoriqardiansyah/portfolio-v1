import React from "react";
import emailIcons from "../assets/email-icons.svg";
import instagramIcons from "../assets/instagram-icons.svg";
import linkedinIcons from "../assets/linkedin-icons.svg";
import githubIcons from "../assets/github-icons.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-64 ">
        <h3 className="text-3xl font-bold mb-20">Let's Get In Touch</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            to={"https://www.instagram.com/duxie.s/"}
            target="_blank"
            className="relative mx-6 before:w-[80px] before:h-[80px] before:bg-indigo-500 before:hover:absolute before:-z-10 before:blur-md before:-top-2 before:-left-2"
          >
            <img src={instagramIcons} alt="instagram" />
          </Link>
          <Link
            to={"mailto:thoriq.ardiansyah0@gmail.com"}
            target="_blank"
            className="relative mx-6 before:w-[80px] before:h-[80px] before:bg-indigo-500 before:hover:absolute before:-z-10 before:blur-md before:-top-2 before:-left-2"
          >
            <img src={emailIcons} alt="email" />
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/thoriq-ardiansyah/"}
            className="relative mx-6 before:w-[80px] before:h-[80px] before:bg-indigo-500 before:hover:absolute before:-z-10 before:blur-md before:-top-2 before:-left-2"
          >
            <img src={linkedinIcons} alt="linkedin" />
          </Link>
          <Link
            target="_blank"
            to={"https://github.com/thoriqardiansyah"}
            className="relative mx-6 before:w-[80px] before:h-[80px] before:bg-indigo-500 before:hover:absolute before:-z-10 before:blur-md before:-top-2 before:-left-2"
          >
            <img
              src={githubIcons}
              alt="github"
              className="relative before:w-[80px] before:h-[80px] before:bg-indigo-500 before:hover:absolute before:-z-10 before:blur-md before:-top-2 before:-left-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

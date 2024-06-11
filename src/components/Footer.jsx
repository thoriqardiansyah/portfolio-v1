import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 py-10 w-full border-t-2 border-black flex flex-col md:flex-row md:gap-10 md:justify-center">
      <div className="cursor-not-allowed">
        <h2 className=" text-2xl md:text-3xl font-bold">Thoriq Ardiansyah</h2>
        <p className="flex items-center">
          <span className="text-xl font-semibold mr-1 ">&copy;</span> Thoriq
          Ardiansyah 2023
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <Link to={"mailto:thoriq.ardiansyah0@gmail.com"} target="_blank">
          Email
        </Link>
        <Link target="_blank" to={"https://github.com/thoriqardiansyah"}>
          Github
        </Link>
        <Link to={"https://www.instagram.com/duxie.s/"} target="_blank">
          Instagram
        </Link>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/thoriq-ardiansyah/"}
        >
          LinkedIn
        </Link>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Services</h3>
        <p>UI/UX Design</p>
        <p>Frontend Web</p>
      </div>
    </footer>
  );
};

export default Footer;

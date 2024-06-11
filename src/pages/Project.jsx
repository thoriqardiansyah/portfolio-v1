import React from "react";
import { projects } from "../data/data";
import githubIcons from "../assets/github-icons.svg";
import { Link } from "react-router-dom";

const Project = () => {
  console.log(projects);
  return (
    <>
      {projects.map((item, id) => {
        return (
          <figure
            data-aos="fade-down"
            data-aos-duration="2000"
            key={id}
            className="w-[600px] md:p-4 rounded-md group hover:bg-gray-50 cursor-pointer"
          >
            <img src={item.imageUrl} alt={item.title} className="rounded-lg" />
            <figcaption className="my-4 flex items-center justify-between mr-5">
              <span className="md:text-2xl font-semibold">{item.title}</span>
              <div className="relative flex items-center justify-center">
                <div className="w-32 border-t-2 border-black absolute"></div>
                <p className="bg-white px-2 z-10 group-hover:bg-gray-50">
                  {item.type}
                </p>
              </div>
            </figcaption>
            <p className="font-normal">{item.description}</p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex flex-wrap my-2">
                <h4 className="mr-2 font-semibold">Tech Stack: </h4>
                {item.tech?.map((x, id) => {
                  return (
                    <p key={id} className="mr-2">
                      {x}
                    </p>
                  );
                })}
              </div>

              <div className="flex items-center">
                {item.icon?.map((x, id) => {
                  return (
                    <div className="p-1" key={id}>
                      <img key={id} src={x.url} alt="" width={30} height={30} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col md:flex-row my-2">
              {item.github && (
                <Link
                  target="_blank"
                  to={item.github}
                  className="flex items-center gap-3 md:mr-6"
                >
                  <img src={githubIcons} alt="github" width={20} height={20} />
                  <p>Source Code</p>
                </Link>
              )}
              {item.url && (
                <Link
                  to={item.url}
                  target="_blank"
                  className="flex items-center my-4 md:my-0 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  <p className="ml-1">Demo</p>
                </Link>
              )}
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default Project;

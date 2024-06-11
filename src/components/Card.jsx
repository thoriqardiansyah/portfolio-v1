import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <article className="mt-32 md:my-10">
      <h2
        className="text-3xl font-bold mb-12"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-easing="linear"
      >
        CERTIFICATES
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        <Link
          to={
            "https://drive.google.com/file/d/1tfWHUQcOub6psfNbIfewIztZQ43LFCJr/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm rounded-md transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/basicweb-dicoding.png"
            alt="basicweb-dicoding"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1WcJ4D9UFFMZR8dxFLqFvKKV8J0ZmmoJV/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/javascript-dicoding.png"
            alt="javascript-dicoding"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1hRBqQScujZa2iBC55zZ4auCz70aphuc_/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/dicoding-frontend.png"
            alt="dicoding-frontend"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1vFw8IOzI98-0D5QdEWszb290iCyLJQR4/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/react-dicoding.png"
            alt="react-dicoding"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1vFw8IOzI98-0D5QdEWszb290iCyLJQR4/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/react-dicoding.png"
            alt="react-dicoding"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1n2CFXJOxAfeKsnAL_3i-F26VGJzWNGrq/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/uiux.png"
            alt="uiux"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1Y3KOPv3uuo9PwcpQWEIBQD4gM68O-tHw/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/reactjs-sanber.png"
            alt="reactjs-sanber"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1XQN0QEiGwy6jDxcUR96kxzvux0znG2VL/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/NextJS.png"
            alt="NextJS"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1N8ed8WPD2NO_qnd8Db0EmHUYQ0ljD0qd/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/ReactNative.png"
            alt="ReactNative"
            className="rounded-md"
          />
        </Link>
        <Link
          to={
            "https://drive.google.com/file/d/1Hr5RBfpHveuMvqa-Un_Mv3T-eAXZL9bA/view?usp=sharing"
          }
          target="_blank"
          className="max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            src="./images/certificates/basicweb-ug.png"
            alt="basicweb-ug"
            className="rounded-md"
          />
        </Link>
      </div>
    </article>
  );
};

export default Card;

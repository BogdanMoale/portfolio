import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

function Sidebar() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <Image
        src="/images/profile/profile-pic.png"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height={128}
        width={128}
        layout="intrinsic"
        quality="100"
        priority
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Bogdan</span> Moale
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Application Engineer : Labor Quotation
      </p>
      {/* Resume */}
      <a
        href="CV-Model2_Moale Bogdan.pdf"
        download="BogdanMoale_CV.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <FaFileDownload className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
        <a
          href="https://www.youtube.com/@_Sirverian_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700"
          aria-label="YouTube"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/bogdan-moale-20914a195/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://github.com/BogdanMoale/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Arad,Romania </span>
        </div>
        <div className="flex items-center justify-center">
          <CiMail className="my-2" />{" "}
          <span>moale.bogdan.ionica@gmail.com </span>
        </div>
        <div className="flex items-center justify-center">
          <BsTelephone className="my-2" /> <span>+40756575650 </span>
        </div>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:moale.bogdan.ionica@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
}

export default Sidebar;

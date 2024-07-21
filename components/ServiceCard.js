import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { SiGoogletagmanager } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { LuCable } from "react-icons/lu";
import { SiSap } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";

// import { motion } from 'framer-motion'

function ServiceCard({ service }) {
  //decide image
  let contentImage;
  if (service.title === "Frontend Development") {
    contentImage = (
      <RiComputerLine className="w-12 h-12 text-green"></RiComputerLine>
    );
  }

  if (service.title === "Estimation of Harness Assembly Labor") {
    contentImage = <LuCable className="w-12 h-12 text-green"></LuCable>;
  }

  if (service.title === "Labor Cost Management") {
    contentImage = (
      <SiGoogletagmanager className="w-14 h-16 text-green"></SiGoogletagmanager>
    );
  }

  if (service.title === "Excel and VBA Expertise") {
    contentImage = (
      <RiFileExcel2Line className="w-16 h-16 text-green"></RiFileExcel2Line>
    );
  }

  if (service.title === "SAP Expertise") {
    contentImage = <SiSap className="w-16 h-16 text-green"></SiSap>;
  }

  if (service.title === "Data Visualization") {
    contentImage = <FaDatabase className="w-16 h-16 text-green"></FaDatabase>;
  }

  //vulnerable on XSS attack
  function createMarkup() {
    return {
      __html: service.about,
    };
  }

  return (
    <div className="flex items-center p-2 space-x-4 ">
      {contentImage}
      <div className="">
        <h5 className="font-bold">{service.title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default ServiceCard;

import React from "react";
import { RiComputerLine, RiFileExcel2Line } from "react-icons/ri";
import { SiGoogletagmanager, SiSap } from "react-icons/si";
import { LuCable } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa6";
import { FaNodeJs, FaServer } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { AiOutlineCode } from "react-icons/ai";

function ServiceCard({ service }) {
  let contentImage;

  const iconClasses = "w-12 h-12 text-green";

  switch (service.title) {
    case "Full Stack Development":
      contentImage = <FaNodeJs className={iconClasses} />;
      break;
    case "Frontend Development":
      contentImage = <RiComputerLine className={iconClasses} />;
      break;
    case "Backend Development":
      contentImage = <FaServer className={iconClasses} />;
      break;
    case "Database Management":
      contentImage = <FaDatabase className={iconClasses} />;
      break;
    case "DevOps & Deployment":
      contentImage = <TbCloudComputing className={iconClasses} />;
      break;
    case "Data Visualization":
      contentImage = <FaDatabase className="w-16 h-16 text-green" />;
      break;
    case "Labor Cost Management":
      contentImage = <SiGoogletagmanager className="w-14 h-16 text-green" />;
      break;
    case "Excel and VBA Expertise":
      contentImage = <RiFileExcel2Line className="w-16 h-16 text-green" />;
      break;
    case "SAP Expertise":
      contentImage = <SiSap className="w-16 h-16 text-green" />;
      break;
    case "Estimation of Harness Assembly Labor":
      contentImage = <LuCable className={iconClasses} />;
      break;
    case "Software Development":
      contentImage = <AiOutlineCode className={iconClasses} />;
      break;
    default:
      contentImage = <AiOutlineCode className={iconClasses} />;
  }

  function createMarkup() {
    return { __html: service.about };
  }

  return (
    <div className="flex items-center p-2 space-x-4">
      {contentImage}
      <div>
        <h5 className="font-bold">{service.title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default ServiceCard;

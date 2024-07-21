import React, { useState, useRef, useEffect } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

const ProjectCard = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  // Create a ref for the detail container
  const detailRef = useRef(null);

  // Scroll into view when the detail is shown
  useEffect(() => {
    if (showDetail === id && detailRef.current) {
      detailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showDetail, id]);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        width={300}
        height={150}
        priority
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div
          ref={detailRef}
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 rounded-lg"
        >
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {deployed_url && (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

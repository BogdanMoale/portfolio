import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState(null);

  const handlerFilterCategory = (category) => {
    if (category === "all") {
      setProjects(projectsData);
    } else {
      const newArray = projectsData.filter((project) =>
        project.category.includes(category)
      );
      setProjects(newArray);
    }
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <Head>
        <title>Projects Moale Bogdan</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.name} // Move key to the outermost div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ProjectsPage;

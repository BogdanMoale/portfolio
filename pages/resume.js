import React from "react";
import { professionalSkils, personalSkills } from "@/data";
import Bar from "@/components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";

import Head from "next/head";
function ResumePage() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <Head>
        <title>Moale Bogdan Resume</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Automation and Intelligent Systems
            </h5>

            <p className="font-semibold">AUREL VLAICU UNIVERSITY (2017-2019)</p>
            <p>Master Degree in Engineering</p>
            <p className="my-3">
              During this time, I studied the structure and architecture of
              computing systems, systems based on microprocessors, programming
              languages, software applications systems, artificial intelligence
              and expert systems.My degree paper had the title “ Automatic
              learning. Facial recognition system
            </p>
          </div>

          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Automatic and Applied Informatics
            </h5>

            <p className="font-semibold">AUREL VLAICU UNIVERSITY (2013-2017)</p>
            <p>Bachelor Degree in Engineering</p>
            <p className="my-3">
              During this time, I had course on Algorithms, Data Structures,
              Electronics, modeling and simulating systems.. My degree paper had
              the title “ Automatic regulation algorithms and structures.
              Applications in robotics ”.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Application Engineer</h5>
            <p className="font-semibold">
              APTIV TECHNOLOGY SERVICES (2017-Present)
            </p>
            <p className="my-3">
              My responsibilities includes the estimation of harness assembly
              labor for new business quotes and conducting labor analysis for
              cable preparation and final assembly. I managed cost analysis,
              evaluated labor expenses for engineering changes, and proposed
              cost reduction strategies. To enhance efficiency, I developed and
              maintained Excel VBA macros, automating tasks and streamlining
              processes. Utilizing Excel features like formulas, charts, and
              pivot tables, I provided insightful data visualizations. My
              proficiency extended to implementing change requests in SAP,
              contributing to a comprehensive approach in optimizing labor and
              operational processes. .
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Professional Skils</h5>
          <div className="my-2">
            {professionalSkils.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Personal Skills</h5>
          <div className="my-2">
            {personalSkills.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ResumePage;

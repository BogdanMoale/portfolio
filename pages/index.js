// import { services } from "@/data";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";
import { services as dataServices } from "@/data";

function index({ services }) {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1 "
    >
      <Head>
        <title>Moale Bogdan portfolio</title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        Passionate about continuous learning and personal growth, I consistently
        seek out professional development opportunities to enhance my skills and
        knowledge. I am a strong advocate for collaboration and teamwork, and I
        thrive in diverse and inclusive environments. Additionally, I am a
        proactive problem-solver with a creative mindset, constantly seeking
        opportunities for process improvement and efficiency. I thrive in
        fast-paced environments and am adept at adapting to new challenges and
        technologies.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 my-3 md:grid-cols-2"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              // initial="initial"
              // animate="animate"
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default index;
// //!called every time  the page refreshed [API Based]
// export async function getServerSideProps(context) {
//   const response = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error("Could not fetch the data");
//   }

//   // console.log("SERVER SIDE", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// }

//!called only during the build of the project [API Based]
// export async function getStaticProps(context) {
//   const response = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error("Could not fetch the data");
//   }

//   // console.log("SERVER SIDE", services);

//   return {
//     props: {
//       services: data.services,
//     },
//     revalidate: 360,
//   };
// }

//!called only during the build of the project [Local file Based]
export function getStaticProps(context) {
  // console.log("SERVER SIDE", services);

  return {
    props: {
      services: dataServices,
    },
    revalidate: 360,
  };
}

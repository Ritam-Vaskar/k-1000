import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

// const images = [
//   "https://crf.kiit.ac.in/wp-content/uploads/2022/01/KIIT-Research-Development-1.jpg",
//   "https://sustainability.kiit.ac.in/wp-content/uploads/2023/07/crf.jpg",
//   "https://crf.kiit.ac.in/wp-content/uploads/2020/09/KIIT-Campus-2.jpg",
// ];

const members = [
  {
    name: "Prof. Dr. Saranjit Singh",
    position: "Vice Chancellor",
    image: "/About Page/member-1.jpg",
  },
  {
    name: "Prof. Dr. Jnyana Ranjan Mohanty",
    position: "Registrar",
    image: "/About Page/member-2.jpg",
  },
  {
    name: "Dr. Ajit Kumar Pasayat",
    position: "Faculty Incharge",
    image: "/About Page/member-3.jpg",
  },
];

const stats = [
  {
    count: "500",
    label: "Students Selected Annually",
  },
  {
    count: "100+",
    label: "Faculty Mentors",
  },
  {
    count: "50+",
    label: "Research Collaborations",
  },
];

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.overlay} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.content} flex w-full bg-[url(/About%20Page/KIIT.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start justify-center pt-20 px-8 w-full bg-gradient-to-r from-[#121212] to-[#121212]/60 via-[#121212]/85"
        >
          <motion.h1
            className={`${styles.title} md:ml-4 mt-10`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span>KIIT</span>
          </motion.h1>

          <motion.p
            className={`${styles.description} md:mx-4 mt-7 pb-6 text-balance text-left w-full mb-[2rem] max-w-2xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Kalinga Institute of Industrial Technology (KIIT), a household name
            in the education sector, has become a sought-after destination in
            India for professional studies. It is admired all over for the
            quality of its academic courses, its community outreach work and as
            a university of compassion and humanitarianism. It has become a case
            study because no other educational institution in India has grown in
            its scope and scale as much as KIIT has in a short span of 25 years.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        {/* <div className={styles.imageContainer}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={images[0]} alt="KIIT Campus" className={styles.image} />
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500</div>
            <div className={styles.statLabel}>Students Selected Annually</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Faculty Mentors</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Research Collaborations</div>
          </div>
        </motion.div>


        <motion.p
          className={styles.subText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Students are selected based on academic performance, research
          inclination, and alignment with program goals. The program supports
          students from their first year, ensuring early exposure to
          interdisciplinary research opportunities.
        </motion.p>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={images[2]}
            alt="KIIT Research Development"
            className={styles.image}
          />
        </motion.div>

        <motion.a
          href="https://kiit.ac.in/research"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a> */}
      </motion.div>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-evenly mt-6 min-[800px]:px-12 mb-10 px-8"
      >
        <motion.div
          className="min-[800px]:w-[50%] flex items-center justify-start z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/About Page/Founder.png"
            alt="Founder"
            className="w-[100%] max-w-[550px]"
          />
        </motion.div>

        <motion.div
          className="min-[800px]:w-[50%] flex flex-col items-center justify-center z-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className={`text-2xl ${styles.title} mb-5 min-[800px]:text-left text-center w-full`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About our <span>Founder</span>
          </motion.h1>

          <motion.p
            className={`${styles.description} min-[800px]:text-left text-center text-balance`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Prof Achyuta Samanta’s life story reads like a powerful saga of
            grit, determination, and social responsibility. Born and brought up
            in poverty in a remote village in Odisha, he was dealt a cruel blow
            at the tender age of four when he lost his father, after which his
            life became a struggle for food and education for 15 long years.
            However, he persevered, and at the age of 22, joined teaching. At
            25, he embarked on a journey that would change his own life, and the
            lives of thousands of people. With just Rs 5000 in his pocket, he
            started KIIT (Kalinga Institute of Industrial Technology) and KISS
            (Kalinga Institute of Social Sciences) in two rented houses.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Members Section */}
      <motion.h1
        className={`text-2xl ${styles.title} text-center w-full tracking-wide z-10 mt-4 px-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Notable <span>Board Members</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-evenly mt-11 min-[800px]:px-12 mb-16 px-8 w-full z-10 gap-4"
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="max-w-[150px] aspect-square rounded-full mb-2 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out group-hover:shadow-[#17d059] group-hover:shadow-md"
            />
            <h3 className="text-lg font-bold mt-2">{member.name}</h3>
            <p className="text-md font-semibold">{member.position}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About K-1000 Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.content} flex w-full bg-[url(/About%20Page/K-1000.jpg)] bg-cover bg-center bg-no-repeat mt-5 md:mt-10 mb-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start justify-center w-full bg-gradient-to-t from-[#121212] to-[#121212]/40 via-[#121212]/90"
        >
          <img
            src="/About Page/K-1000.jpg"
            alt="About K-1000"
            className={`w-full opacity-0`}
          />
        </motion.div>
      </motion.div>

      {/* About K-1000 Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center px-6 md:px-20 mb-10 md:mb-20 z-10"
      >
        <motion.h1
          className={`${styles.title} -mt-48 md:-mt-[500px] w-full text-left`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About <span>K-1000</span>
        </motion.h1>

        <motion.p
          className={`${styles.description} mt-7 text-left w-full mb-[2rem]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          K-1000 is KIIT’s official Research and Development (R&D) organization,
          aimed at supporting 1000 exceptional students in cutting-edge
          research. It focuses on skill development in a competitive environment
          and encourages building projects that solve real-world problems across
          various domains.
        </motion.p>

        <motion.div
          className={`my-7 w-full flex flex-wrap items-center justify-evenly gap-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-4xl font-black text-[#17d059]">
                {stat.count}
              </h3>
              <p className="text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className={`${styles.description} mt-7 w-full mb-[2rem] text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Students are selected based on academic performance, research
          inclination, and alignment with program goals. The program supports
          students from their first year, ensuring early exposure to
          interdisciplinary research opportunities.
        </motion.p>
      </motion.div>

      {/* Apply Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.content} flex w-full bg-[url(/About%20Page/Apply.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/40 -mb-1"
        >
          <a
            href="/apply"
            className="hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="my-14 rounded-3xl overflow-hidden py-4 px-10 backdrop-blur-sm border-white border-1.5 text-[#17d059] font-extrabold text-xl shadow-sm shadow-white"
            >
              Apply Now
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

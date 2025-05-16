import React from "react";
import { motion } from "framer-motion";
import styles from "./Branches.module.scss";

const images = [
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa32340b3a8697b5760399_KIIT-Campus-Front-Library-1200x416.jpg",
];

const benefits = [
  {
    title: "Training Program",
    desc: "The K-1000 Training Program is a peer-to-peer learning initiative focused on skill development in both technical and non-technical domains. Students gain hands-on experience through workshops, real-world projects, and one-on-one mentoring. It fosters collaboration, builds confidence, and equips students with practical knowledge for personal and professional growth.",
  },
  {
    title: "Research and Publications",
    desc: "This branch supports students in academic research and publication. From choosing topics to submitting papers, students receive guidance from mentors, faculty, or alumni. The aim is to promote a culture of innovation and help students publish in reputed journals and conferences.",
  },
  {
    title: "Project Wing",
    desc: "The Project Wing enables skilled students to work on real-world solutions in a team-driven environment. It offers mentorship, resources, and recognition for impactful project work. Students also get opportunities to showcase their work on various platforms while building practical experience.",
  },
  {
    title: "Event Organization",
    desc: "The Event Organization wing of K-1000 focuses on planning and executing technical and non-technical events throughout the year. From workshops and hackathons to webinars and speaker sessions, this team ensures smooth coordination and impactful experiences. It helps members build skills in leadership, communication, and event management.",
  },
  {
    title: "Internship and Placement",
    desc: "This wing assists students in securing internships and placements by providing resources, guidance, and industry connections. It conducts resume reviews, mock interviews, and training sessions to prepare students for recruitment. The goal is to bridge the gap between campus learning and industry expectations.",
  },
  {
    title: "Higher Studies",
    desc: "The Higher Studies wing supports students aspiring to pursue postgraduate education in India or abroad. It offers guidance on entrance exams, university applications, statement of purpose (SOP) writing, and scholarship opportunities. The wing aims to streamline the preparation process and help students make informed academic decisions.",
  },
];

const Branches = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.overlay} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.content}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Branches At <span>K-1000</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {"Explore the various branches of K-1000, each designed to enhance your skills and knowledge in different domains. From research and publications to event organization and internships, we provide a comprehensive platform for your growth. Join us to unlock your potential and make a difference in the world of technology and innovation."}
        </motion.p>

        {/* Branches List */}
        <motion.div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.benefitItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={images[0]}
            alt="Research Development"
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
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Branches;

import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const images = [
  "https://crf.kiit.ac.in/wp-content/uploads/2022/01/KIIT-Research-Development-1.jpg",
  "https://sustainability.kiit.ac.in/wp-content/uploads/2023/07/crf.jpg",
  "https://crf.kiit.ac.in/wp-content/uploads/2020/09/KIIT-Campus-2.jpg",
];

const About = () => {
  return (
    <div className={styles.about}>
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
          About <span>K-1000</span>
        </motion.h1>

        <motion.p
          className={styles.description}
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

        {/* Image Section */}
        <div className={styles.imageContainer}>
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

        {/* Image Section */}

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

        {/* Image Section */}
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
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import styles from "./Benefits.module.scss";

const images = [
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa3147b53442d24541b355_KIIT-University-Bhubaneswar.jpeg",
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa32340b3a8697b5760399_KIIT-Campus-Front-Library-1200x416.jpg",
  "https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/473190529_582937564531623_4156672289478721110_n.jpg",
];

const benefits = [
  {
    title: "Early Research Exposure",
    desc: "Get involved in research from the first year, fostering an inquisitive mindset.",
  },
  {
    title: "Mentorship & Guidance",
    desc: "Work closely with experienced faculty mentors who guide your research journey.",
  },
  {
    title: "Skill Development",
    desc: "Gain hands-on experience in research methodologies, data analysis, and problem-solving.",
  },
  {
    title: "Publication & Patents",
    desc: "Opportunity to publish research papers and file patents through university support.",
  },
  {
    title: "Networking & Collaborations",
    desc: "Connect with like-minded peers, researchers, and industry experts.",
  },
  {
    title: "International Exposure",
    desc: "Participate in research collaborations with top institutions worldwide.",
  },
  {
    title: "Training in a Competitive Environment",
    desc: "Develop skills and knowledge through rigorous training in a competitive and growth-oriented setting.",
  },
];

const Benefits = () => {
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
          Why Join <span>K-1000</span>?
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          The K-1000 initiative is a research and development platform where
          students can train, compete, publish research, and grow. It offers
          opportunities in internships, placements, higher studies, and overall
          skill enhancement.
        </motion.p>

        {/* Image Section */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={images[0]} alt="KIIT Campus" className={styles.image} />
        </motion.div>

        {/* Benefits List */}
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
            src={images[1]}
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

export default Benefits;

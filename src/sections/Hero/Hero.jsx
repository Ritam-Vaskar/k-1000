import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://crf.kiit.ac.in/wp-content/uploads/2020/09/KIIT-Campus-2.jpg",
    "https://crf.kiit.ac.in/wp-content/uploads/2022/01/KIIT-Research-Development-1.jpg",
    "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa3147b53442d24541b355_KIIT-University-Bhubaneswar.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "200+", label: "Research Projects" },
    { number: "100+", label: "Publications" },
    { number: "50+", label: "Patents Filed" },
    { number: "50+", label: "International Collaborations" }
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.backgroundCarousel}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            className={styles.carouselImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <div className={styles.overlay} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.content}
      >
        <div className={styles.titleWrapper}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Welcome to KIIT's Elite Program
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: "3rem" }}
          >
            Join the <span>K-1000</span> Research Program
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Embark on a journey of innovation and discovery with KIIT's premier
            research initiative. Shape the future through groundbreaking
            research and global collaborations.
          </motion.p>
        </div>

        <motion.div
          className={styles.buttonsWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScuql7qJv9M2FmKDrZQONN1wC6i9FNagM76gvb3cktOI3SjCQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.primaryButton}
          >
            Apply Now
          </motion.a>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.secondaryButton}
          >
            Learn More
          </motion.button> */}
        </motion.div>

        {/* Goals Section */}
        <motion.div
          className={styles.goals}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className={styles.goal}>
            
            <div className={styles.goalText}>🚀 Our Goals</div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

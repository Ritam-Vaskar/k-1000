import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/Hero Section/hero-1.jpg",
    "/Hero Section/hero-2.jpg",
    "/Hero Section/hero-3.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "100+", label: "Projects" },
    { number: "50+", label: "Publications" },
    { number: "20+", label: "Patents Filed" },
    { number: "20+", label: "Collaborations" },
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
            Join <span>K-1000</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Embark on a journey of innovation and discovery with KIIT's premier
            research and development initiative. Shape the future through
            groundbreaking projects and global collaborations.
          </motion.p>
        </div>

        <motion.div
          className={`${styles.buttonsWrapper} -mt-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/apply"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.primaryButton} hover:text-white text-lg font-bold`}
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

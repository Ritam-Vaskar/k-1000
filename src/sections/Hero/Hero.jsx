import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.scss";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://crf.kiit.ac.in/wp-content/uploads/2020/09/KIIT-Campus-2.jpg",
    "https://crf.kiit.ac.in/wp-content/uploads/2022/01/KIIT-Research-Development-1.jpg",
    "https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/473190529_582937564531623_4156672289478721110_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z_cHhcwvUR8Q7kNvgHkLuBI&_nc_zt=23&_nc_ht=scontent.fbbi2-1.fna&_nc_gid=AsUoSHhfBglgyZaEMuyuKmO&oh=00_AYDdWELhYBPowB8h1dVjiylltmUujRIqVHdWnVNYCUvLVw&oe=67A65C0F",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "1000+", label: "Research Projects" },
    { number: "500+", label: "Publications" },
    { number: "50+", label: "Patents Filed" },
    { number: "100+", label: "International Collaborations" },
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
          <NavLink to="/apply">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
            >
              Apply Now
            </motion.button>
          </NavLink>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.secondaryButton}
          >
            Learn More
          </motion.button>
        </motion.div>

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

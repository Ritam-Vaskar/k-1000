import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/sections.module.scss';

const AboutSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About the Program
      </motion.h2>
      <motion.div 
        className={styles.logoContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img 
          src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/67a07fbff2e2a5e3767149d1_KIIT-Full-Logo-Center.png" 
          alt="KIIT Logo"
          className={styles.fullLogo}
        />
      </motion.div>
      <p className={styles.cardDescription} style={{ marginLeft: '1rem' }}>
      The K-1000 Research Program is KIIT's flagship initiative to nurture the next generation of researchers and innovators. Our mission is to support 1000 exceptional students in pursuing cutting-edge research across various disciplines, fostering innovation and scientific excellence.
      </p>
    </div>
  </section>
);

export default AboutSection;

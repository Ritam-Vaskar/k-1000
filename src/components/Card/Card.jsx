import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.scss";

const Card = ({ icon: Icon, title, description }) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className={styles.cardIcon}>
      <Icon size={32} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </motion.div>
);

export default Card;

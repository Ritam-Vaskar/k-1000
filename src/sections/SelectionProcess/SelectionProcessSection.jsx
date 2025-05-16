import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/sections.module.scss";
import { selectionSteps } from "../../../public/data.json";

const SelectionProcessSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>How to Get Selected?</h2>
      <div className={styles.steps}>
        {selectionSteps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.stepNumber}>{index + 1}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SelectionProcessSection;

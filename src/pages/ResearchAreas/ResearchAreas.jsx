import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaptopCode, FaUniversity, FaMicroscope, FaHeartbeat, FaGavel, FaDumbbell } from "react-icons/fa";
import styles from "./ResearchAreas.module.scss";

const categories = [
  {
    title: "Engineering & Technology",
    icon: <FaLaptopCode />,
    schools: [
      "School of Computer Applications",
      "School of Computer Engineering",
      "School of Civil Engineering",
      "School of Electronics Engineering",
      "School of Mechanical Engineering",
      "School of Electrical Engineering",
      "School of Chemical Engineering"
    ]
  },
  {
    title: "Sciences & Applied Sciences",
    icon: <FaMicroscope />,
    schools: [
      "School of Biotechnology",
      "School of Applied Sciences",
      "School of Architecture & Planning"
    ]
  },
  {
    title: "Management & Social Sciences",
    icon: <FaUniversity />,
    schools: [
      "School of Management",
      "School of Rural Management",
      "School of Economics & Commerce",
      "Department of Psychology",
      "Department of Sociology",
      "Department of Library and Information Science",
      "Department of Humanities (English)",
      "Department of Language & Literature"
    ]
  },
  {
    title: "Medical & Health Sciences",
    icon: <FaHeartbeat />,
    schools: [
      "School of Medical Sciences",
      "School of Dental Sciences",
      "School of Nursing Sciences",
      "School of Public Health",
      "School of Pharmacy",
      "School of Physiotherapy",
      "School of Yoga & Naturopathy"
    ]
  },
  {
    title: "Law & Public Policy",
    icon: <FaGavel />,
    schools: ["School of Law", "School of Public Policy"]
  },
  {
    title: "Sports & Tourism",
    icon: <FaDumbbell />,
    schools: ["School of Sports and Yogic Sciences", "School of Hospitality and Tourism"]
  }
];

const ResearchArea = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={styles.researchArea}>
      <h2 className={styles.title}>Research Areas at KIIT</h2>
      {categories.map((category, index) => (
        <motion.div
          key={index}
          className={styles.category}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={styles.categoryHeader}>
            {category.icon} <h3>{category.title}</h3>
          </div>
          <motion.ul className={styles.schoolList}>
            {category.schools.map((school, i) => (
              <motion.li
                key={i}
                className={styles.schoolItem}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {school}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </div>
  );
};

export default ResearchArea;

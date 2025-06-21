import React from "react";
import { motion } from "framer-motion";
import styles from "./ApplicationForm.module.scss";
import cardStyles from "../../sections/styles/sections.module.scss";
import Card from "../../components/Card/Card";
import { socials } from "../../../public/data.json";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const ApplicationForm = () => {
  const GOOGLE_FORM_LINK = "https://forms.gle/irg7nzkhh3tWnpib8";

  const iconMap = {
    linkedin: FaLinkedinIn,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Apply for K-1000 Program
        </motion.h2>

        <motion.p
          className={`${styles.description} text-lg text-center max-w-[800px]`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The K-1000 Program is an excellent opportunity for students to engage
          in research and academic excellence. If you have a passion for
          innovation and learning, apply now to be part of this prestigious
          program.
        </motion.p>

        <motion.p
          className={`${styles.description} text-lg text-center`}
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Click the button below to fill out the official application form.
        </motion.p>

        <motion.a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.applyButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className={styles.submitButton}>Apply Now</button>
        </motion.a>

        <div className={`${cardStyles.cardsGrid} w-full px-5`}>
          {socials.map((social, index) => {
            const IconComponent = iconMap[social.icon];
            return (
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <Card
                  key={index}
                  icon={IconComponent}
                  title={social.title}
                  description={social.description}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;

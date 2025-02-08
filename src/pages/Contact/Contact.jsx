import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
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
          Contact <span>Us</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Reach out to us for any queries regarding the K-1000 Research Program.
        </motion.p>

        <motion.div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <MapPin className={styles.icon} size={20} />
            <div>
              KIIT Research Office <br />
              Campus-5, KIIT University <br />
              Bhubaneswar, Odisha 751024
            </div>
          </div>

          <div className={styles.contactItem}>
            <Phone className={styles.icon} size={20} />
            <div>+91 70085 88187</div>
          </div>

          <div className={styles.contactItem}>
            <Mail className={styles.icon} size={20} />
            <div>k.1000@kiit.ac.in</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.overlay} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Image Section */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://crf.kiit.ac.in/wp-content/uploads/2022/01/KIIT-Research-Development-1.jpg"
            alt="KIIT Research Office"
            className={styles.image}
          />
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className={styles.title}>
            Contact <span>Us</span>
          </h1>

          <p className={styles.description}>
            Reach out to us for any queries regarding the K-1000 Research
            Program.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={20} />
              <div>
                KIIT University <br />
                Bhubaneswar, Odisha 751024
              </div>
            </div>

            <div className={styles.contactItem}>
              <Phone className={styles.icon} size={20} />
              <div>
                Dr. Ajit Kumar Pasyat <br />
                Asst. Prof., Computer Science  <br />
                +91 70085 88187
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail className={styles.icon} size={20} />
              <div>k.1000@kiit.ac.in</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

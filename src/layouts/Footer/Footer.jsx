import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight
} from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Program', path: '/about' },
    { title: 'Benefits', path: '/benefits' },
    { title: 'Apply Now', path: '/apply' },
    { title: 'Contact', path: '/contact' }
  ];

  const researchAreas = [
    { title: 'Computer Science', href: '#' },
    { title: 'Biotechnology', href: '#' },
    { title: 'Mechanical Engineering', href: '#' },
    { title: 'Electronics', href: '#' },
    { title: 'Civil Engineering', href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Logo and Description */}
          <motion.div 
            className={styles.logoSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/67a07ffa91f78ddf2b941175_KIIT-logo-HD.png"
              alt="KIIT Logo"
              className={styles.logo}
            />
            <p className={styles.description}>
              The K-1000 Research Program is KIIT's flagship initiative fostering innovation 
              and research excellence among undergraduate students.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => isActive ? styles.activeLink : ""}
                  >
                    <ChevronRight size={16} />
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Research Areas */}
          <motion.div 
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Research Areas</h3>
            <ul>
              {researchAreas.map((area, index) => (
                <li key={index}>
                  <a href={area.href}>
                    <ChevronRight size={16} />
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className={styles.contactSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={20} />
              <div>
                KIIT Research Office<br />
                Campus-5, KIIT University<br />
                Bhubaneswar, Odisha 751024
              </div>
            </div>

            <div className={styles.contactItem}>
              <Phone className={styles.icon} size={20} />
              <div>+917008588187</div>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} size={20} />
              <div>k.1000@kiit.ac.in</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p>© {new Date().getFullYear()} KIIT University. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

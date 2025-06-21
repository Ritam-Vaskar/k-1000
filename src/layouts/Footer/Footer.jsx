import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import styles from "./Footer.module.scss";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About Program", path: "/about" },
    { title: "Benefits", path: "/benefits" },
    { title: "Branches", path: "/branches" },
    { title: "Apply Now", path: "/apply" },
    { title: "Contact", path: "/contact" },
  ];

  const researchAreas = [
    { title: "Engineering & Technology", href: "/departments" },
    { title: "Sciences & Applied Sciences", href: "/departments" },
    { title: "Management & Social Sciences", href: "/departments" },
    { title: "Medical & Health Sciences", href: "/departments" },
    { title: "Law & Public Policy", href: "/departments" },
    { title: "Sports & Tourism", href: "/departments" },
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
            <div className="w-full flex gap-6 mb-5 items-center">
              <img
                src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/67a07ffa91f78ddf2b941175_KIIT-logo-HD.png"
                alt="KIIT Logo"
                className={`h-[65px]`}
              />
              <img
                src="/logo.png"
                alt="K-1000 Logo"
                className={`h-[65px]`}
              />
            </div>
            <p className={styles.description}>
              K-1000 is KIIT's premier R&D initiative, empowering 1000
              exceptional students to engage in innovative, skill-driven
              research and develop solutions to real-world problems across
              diverse domains.
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
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
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
            <h3>Departments</h3>
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
            <div className="flex gap-3.5 items-center justify-start mb-5">
              <a
                href="https://www.linkedin.com/company/k1000-kiit"
                target="_blank"
              >
                <FaLinkedinIn className="text-[#17d059] text-xl" />
              </a>
              <a href="https://www.instagram.com/k1000_kiit" target="_blank">
                <FaInstagram className="text-[#17d059] text-xl" />
              </a>
              <a
                href="https://chat.whatsapp.com/CAM4B9Qf0mN6i4CvJaVKi3"
                target="_blank"
              >
                <FaWhatsapp className="text-[#17d059] text-xl" />
              </a>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={20} />
              <div>
                KIIT University
                <br />
                Bhubaneswar, <br />
                Odisha 751024
              </div>
            </div>

            <div className={styles.contactItem}>
              <Phone className={styles.icon} size={20} />
              <div>
                Dr. Ajit Kumar Pasyat <br /> +917008588187
              </div>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} size={20} />
              <div>k.1000@kiit.ac.in</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p>
            © {new Date().getFullYear()} KIIT University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

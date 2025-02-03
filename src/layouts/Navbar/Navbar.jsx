import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Selection', path: '/selection' },
    { name: 'Apply', path: '/apply' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className={styles.logoDiv}>
              <img className={styles.logoimg} src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/67a07ffa91f78ddf2b941175_KIIT-logo-HD.png" alt="KiiT" />
              <span className={styles.logo}>K-1000</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.menuDesktop}>
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? styles.activeMenuItem : styles.menuItem}
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className={styles.menuMobile}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? styles.activeMobileItem : styles.mobileItem}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

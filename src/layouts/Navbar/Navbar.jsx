import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Benefits", path: "/benefits" },
    { name: "Branches", path: "/branches" },
    { name: "Departments", path: "/departments" },
    { name: "Apply", path: "/apply" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className={`${styles.navbar} backdrop-blur-3xl bg-black/10 shadow-xl py-1.5 overflow-hidden`}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className={styles.logoDiv}>
              <img
                className={styles.logoimg}
                src="/logo-horizontal.png"
                alt="K-1000 Horizontal Logo"
              />
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
                  className={({ isActive }) =>
                    isActive ? styles.activeMenuItem : styles.menuItem
                  }
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
          className={styles.menux}
          style={{ display: isOpen ? "block" : "none" }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? styles.activeMobileItem : styles.mobileItem
                }
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

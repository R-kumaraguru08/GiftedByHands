import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.navbar}>
        <a className={styles.logo} href="#top">
          Gifted By Hands
        </a>

        <nav className={`${styles.menu} ${open ? styles.open : ''}`}>
          {links.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className={styles.orderLink}
            href="https://instagram.com/__giftedbyhands__"
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;

import { motion } from 'framer-motion';
import styles from './InstagramCTA.module.css';

function InstagramCTA() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className={styles.tag}>Let’s create something special together</p>
          <h2 >Your story, your gift, beautifully brought to life on Instagram.</h2>
        </div>
        <a
          className="cta-link"
          href="https://instagram.com/__giftedbyhands__"
          target="_blank"
          rel="noreferrer"
        >
          Order on Instagram
        </a>
      </motion.div>
    </section>
  );
}

export default InstagramCTA;

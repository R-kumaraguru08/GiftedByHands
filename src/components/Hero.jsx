import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import heroImage from '../assets/images/hero-image.png';
import heroImageWebp from '../assets/images/hero-image.webp';

function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.decorative}>
        <span className={styles.sparkle} />
        <span className={styles.sparkleMini} />
        <span className={styles.round} />
      </div>
      <div className={styles.container}>
        <div className={styles.copy}>
          <motion.p
            className={styles.kicker}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            Handmade gifts with heart
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75 }}
          >
            Personalized gifts for every special moment.
          </motion.h1>
          <motion.p
            className={styles.subtext}
            
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
          >
            Gifted By Hands turns memories, love stories and celebrations into elegant keepsakes for couples, families and every special moment.
          </motion.p>
          <motion.a
            className="cta-link"
            href="#products"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
          >
            View Collection
          </motion.a>
        </div>

        <motion.div
          className={styles.media}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
        >
          <picture>
            <source srcSet={heroImageWebp} type="image/webp" />
            <img
              src={heroImage}
              alt="Handcrafted gift arrangement"
              loading="eager"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </picture>
          <div className={styles.badge}>Premium handmade keepsakes</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

import { motion } from 'framer-motion';
import { gallery } from '../data/products';
import styles from './Gallery.module.css';

const headingAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function Gallery() {
  return (
    <section className={styles.section} id="gallery">
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        variants={headingAnimation}
      >
        <p className={styles.sectionTag}>Recent Works</p>
        <h2  style={{ color: '#5C3A35' }} >Moments we turned into elegant keepsakes.</h2>
      </motion.div>
      <div className={styles.grid}>
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            className={styles.item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <div className={styles.frame}>
              <picture>
                <source srcSet={item.imageWebp} type="image/webp" />
                <img src={item.image} alt={`Gift design ${index + 1}`} loading="lazy" />
              </picture>
              <div className={styles.overlay}>
                <span>View Design</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

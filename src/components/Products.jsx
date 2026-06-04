import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import styles from './Products.module.css';

const headingAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Products() {
  return (
    <section className={styles.section} id="products">
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={headingAnimation}
      >
        <p className={styles.sectionTag}>Signature Gifts</p>
        <h2  style={{ color: '#5C3A35' }} >Gift ideas made for every heart, wedding and special moment.</h2>
        <p className={styles.intro}>
          Browse by image and story — each gift is designed to feel personal, premium and instantly beautiful.
        </p>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} delay={index * 0.08} />
        ))}
      </motion.div>
    </section>
  );
}

export default Products;

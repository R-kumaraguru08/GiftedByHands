import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';

function ProductCard({ product, delay }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.media}>
        <picture>
          <source srcSet={product.imageWebp} type="image/webp" />
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            sizes="(max-width: 700px) 100vw, 45vw"
          />
        </picture>
      </div>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul className={styles.list}>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a
          className="cta-link"
          href="https://instagram.com/__giftedbyhands__"
          target="_blank"
          rel="noreferrer"
        >
          Order Now
        </a>
      </div>
    </motion.article>
  );
}

export default ProductCard;

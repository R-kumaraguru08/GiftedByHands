import { motion } from 'framer-motion';
import styles from './Reviews.module.css';

const headingAnimation = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const testimonials = [
  {
    name: 'Ananya',
    text: 'The love box felt like a warm hug packed in a beautiful presentation. Every detail was perfectly personal.',
  },
  {
    name: 'Rohan',
    text: 'I gifted the custom artwork to my wife and she cried tears of joy. This feels premium and heartfelt.',
  },
  {
    name: 'Priya',
    text: 'Gifted By Hands helped me create a wedding keepsake that made the day even more special. Truly crafted with love.',
  }
];

function Reviews() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        variants={headingAnimation}
      >
        <p className={styles.sectionTag}>Customer Love</p>
        <h2  style={{ color: '#5C3A35' }} >Real stories from people who wanted something unforgettable.</h2>
      </motion.div>
      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <p>“{item.text}”</p>
            <footer>— {item.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export default Reviews;

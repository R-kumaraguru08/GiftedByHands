import { motion } from 'framer-motion';
import styles from './WhyChoose.module.css';

const headingAnimation = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const reasons = [
  { title: 'Handmade with Love', description: 'Each gift feels personal, warm and crafted with care.' },
  { title: 'Personalized Designs', description: 'Every detail is tailored to your story, tone and style.' },
  { title: 'Premium Quality', description: 'Luxury materials, elegant finishes and thoughtful presentation.' },
  { title: 'Made for Memories', description: 'Designed to become keepsakes that are treasured forever.' }
];

function WhyChoose() {
  return (
    <section className={styles.section} id="about">
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        variants={headingAnimation}
      >
        <p className={styles.sectionTag}>Why Gifted By Hands</p>
        <h2  style={{ color: '#5C3A35' }} > Because every gift should feel meaningful and beautifully made.</h2>
      </motion.div>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={styles.marker}>{index + 1}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

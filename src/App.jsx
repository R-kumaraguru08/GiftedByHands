import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';

const pageTransition = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 }
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageTransition}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <Home />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

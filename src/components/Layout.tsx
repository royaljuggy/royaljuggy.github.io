import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedOutlet = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <AnimatedOutlet />
      </main>
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500 flex justify-between">
        <span>© 2026 Jacob Meksavanh</span>
        <span>Built with React & Framer Motion</span>
      </footer>
    </div>
  );
};

export default Layout;

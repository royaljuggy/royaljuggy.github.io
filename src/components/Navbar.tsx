import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/hobbies', label: 'Hobbies' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          JD<span className="text-blue-600">.</span>
        </NavLink>
        <div className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

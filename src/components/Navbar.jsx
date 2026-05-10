import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data/constants";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold tracking-tighter cursor-pointer text-white"
        >
          <span className="text-gradient">AR.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-indigo-400"
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {link.title}
            </Link>
          ))}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Using text instead of icons here temporarily if react-icons are an issue, but let's assume they work */}
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-nav flex flex-col items-center py-6 gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

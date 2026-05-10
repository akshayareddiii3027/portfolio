import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10 mt-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-medium mb-4 tracking-wider uppercase text-sm md:text-base"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
        >
          Hi, I&apos;m <span className="text-gradient">Akshaya Reddy</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-slate-300 mb-8 h-16"
        >
          <Typewriter
            options={{
              strings: [
                "Computer Science Engineering Student",
                "Java Developer",
                "Full Stack Learner",
                "DSA Enthusiast",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 max-w-2xl text-lg mb-12 leading-relaxed"
        >
          I&apos;m passionate about building scalable web applications and solving
          complex problems. Constantly learning and evolving in the tech world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden hover-glow cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 glass-card hover:bg-slate-800/50 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover-glow"
          >
            <FiDownload />
            Download Resume
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-4 glass-card hover:bg-slate-800/50 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover-glow cursor-pointer"
          >
            <FiMail />
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
      >
        <Link to="about" smooth={true} duration={500}>
          <span className="text-slate-400 text-sm mb-2 font-medium tracking-widest uppercase block">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1"
          >
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

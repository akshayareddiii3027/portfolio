import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden glass-card p-2 border border-slate-700/50 group">
              <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/0 transition-colors duration-500 z-10"></div>
              {/* Fallback image if user doesn't have one */}
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Akshaya Reddy"
                className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              B.Tech CSE Student & Developer
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              Hello! I am <span className="text-white font-medium">Akshaya Reddy</span>, a passionate Computer Science Engineering student currently studying at{" "}
              <span className="text-indigo-400 font-medium">Matrusri Engineering College</span>, Hyderabad.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              My core interests lie in <span className="text-white">Java, Full Stack Development</span>, and building <span className="text-white">AI projects</span>. I thrive on problem-solving and am deeply enthusiastic about Data Structures and Algorithms.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              I am focused on continuous learning, preparing for placements, and striving to build scalable, modern, and beautiful web applications that provide seamless user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover-glow">
                <div className="text-indigo-400 text-3xl font-bold">200+</div>
                <div className="text-slate-300 text-sm">DSA Problems<br/>Solved</div>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover-glow">
                <div className="text-purple-400 text-3xl font-bold">3+</div>
                <div className="text-slate-300 text-sm">Major Projects<br/>Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { experiences, achievements, certifications } from "../data/constants";
import { FiBriefcase, FiAward, FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FiBriefcase className="text-indigo-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-indigo-500 group-hover:scale-110 transition-all z-10 ml-0 md:ml-0">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-indigo-500/50 transition-colors ml-4 md:ml-0">
                    <div className="flex flex-col mb-2">
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <span className="text-indigo-400 text-sm font-medium">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-slate-400 text-sm space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FiAward className="text-purple-400 text-2xl" />
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>
              <div className="grid gap-4">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-xl flex items-start gap-4 hover-glow">
                    <FiCheckCircle className="text-purple-400 text-xl shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FiCheckCircle className="text-pink-400 text-2xl" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <div className="grid gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-xl flex items-center gap-4 hover-glow border-l-4 border-l-pink-500">
                    <p className="text-slate-300 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

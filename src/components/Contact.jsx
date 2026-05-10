import { motion } from "framer-motion";
import { contactInfo } from "../data/constants";
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 font-medium mb-1">Email</h4>
                    <p className="text-slate-200">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 font-medium mb-1">Phone</h4>
                    <p className="text-slate-200">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 font-medium mb-1">Location</h4>
                    <p className="text-slate-200">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700/50">
                <h4 className="text-sm text-slate-400 font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href={contactInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
                    <FiLinkedin size={20} />
                  </a>
                  <a href={contactInfo.leetcode} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
                    <SiLeetcode size={20} />
                  </a>
                  <a href={contactInfo.hackerrank} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
                    <SiHackerrank size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <form className="glass-card p-8 rounded-2xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto self-start mt-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 overflow-hidden hover-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

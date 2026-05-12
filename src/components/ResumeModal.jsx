import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload } from "react-icons/fi";

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/50">
              <h3 className="text-xl font-bold text-white">My Resume</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Akshaya_Reddy_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <FiDownload />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-hidden bg-slate-200">
                 <iframe 
                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                    title="Resume"
                    className="w-full h-full min-h-[75vh] sm:min-h-[80vh] border-0" 
                 />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} Akshaya Reddy. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Designed & Developed by <span className="text-indigo-400 font-medium">Akshaya Reddy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

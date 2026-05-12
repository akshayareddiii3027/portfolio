export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python (Basics)"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React"],
  },
  {
    category: "Backend",
    items: ["Core Java", "REST API (Basics)"],
  },
  {
    category: "Database",
    items: ["MySQL", "Firebase (Basics)"],
  },
  {
    category: "Core Concepts",
    items: ["Data Structures", "Algorithms", "OOPS", "Searching & Sorting"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Based Internship Recommendation System",
    description: "Developed a web application that recommends internships based on user skills and interests. Implemented skill-gap analysis and generated personalized learning suggestions. Integrated backend logic using Java and connected data storage with Firebase. Designed responsive UI using React to enhance user experience.",
    tech: ["React", "Java", "Firebase"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Advanced Task Management Web Application",
    description: "Built a dynamic task tracking system with CRUD operations. Implemented real-time UI updates using React state management. Designed a responsive and clean frontend interface.",
    tech: ["React", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Student Record Management System",
    description: "Developed a console-based application to manage 100+ student records. Implemented CRUD operations and applied Object-Oriented Programming principles. Improved search efficiency using structured logic and data handling.",
    tech: ["Java", "OOPS"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "", // Resume doesn't specify
    duration: "May 2025 - Present", // Keep placeholder if resume doesn't specify
    details: [
      "Assisted in debugging and optimizing Java-based modules.",
      "Collaborated with developers to build and test frontend components using React.",
      "Practiced version control and collaborative workflows using Git.",
    ],
  },
];

export const achievements = [
  "Solved 200+ Data Structures and Algorithms problems.",
  "Active participant in technical workshops and coding sessions.",
];

export const certifications = [
  "Java Programming Certification",
  "Frontend Development Fundamentals",
];

export const contactInfo = {
  email: "gaddampally.akshaya@gmail.com",
  phone: "+91 9177136979",
  location: "Hyderabad, India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  leetcode: "https://leetcode.com/",
  hackerrank: "https://hackerrank.com/",
};

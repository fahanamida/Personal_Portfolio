export const portfolioData = {
  personal: {
    name: "Fahana ",
    role: "MERN Stack Developer",
    location: "Calicut, Kerala, India",
    bio: "I am a motivated and enthusiastic Fresher MERN Stack Developer currently pursuing a Bachelor's degree in Computer Science. I have a strong interest in web development and hands-on experience with the MERN stack, including MongoDB, Express.js, React.js, and Node.js. I enjoy building responsive, user-friendly web applications and continuously learning new technologies to enhance my development skills.",
    subBio: "As a beginner in the software industry, I am eager to apply my knowledge to real-world projects, gain professional experience, and grow as a full-stack developer. I am a quick learner, a team player, and committed to delivering high-quality work. My goal is to build innovative web solutions while continuously improving my technical and professional skills. I aspire to create high-performance web applications with fast load times, responsive user interfaces, smooth animations, and modern design principles.",
    github: "https://github.com/fahanamida",
    linkedin: "https://www.linkedin.com/in/fahana-v-mida",
    instagram: "https://www.instagram.com/_.fhhna._?igsh=bWpyMDBvdndpcjA4",
    whatsappNumber: "7591956218",
    email: "fahanamida@gmail.com",
    phone: "+91 7591956218"
  },
  skills: {
    frontend: [
      { name: "React.js", level: 90, color: "from-blue-500 to-cyan-400" },
      { name: "Next.js", level: 85, color: "from-blue-500 to-cyan-400" },
      { name: "Angular", level: 88, color: "from-blue-500 to-cyan-400" },
      { name: "JavaScript", level: 80, color: "from-yellow-500 to-amber-400" },
      { name: "TypeScript", level: 80, color: "from-yellow-500 to-amber-400" },
      { name: "Tailwind CSS", level: 95, color: "from-sky-500 to-indigo-500" },
      { name: "Bootstrap", level: 90, color: "from-purple-500 to-indigo-500" },
      { name: "HTML / CSS", level: 95, color: "from-orange-500 to-red-500" }
    ],
    backend: [
      { name: "Node.js", level: 80, color: "from-green-500 to-emerald-400" },
      { name: "Express.js", level: 75, color: "from-gray-500 to-slate-400" },
      { name: "REST APIs", level: 89, color: "from-teal-500 to-cyan-500" }
    ],
    database: [
      { name: "MongoDB", level: 85, color: "from-green-600 to-emerald-500" },
    ],
    tools: [
      { name: "Git & GitHub", level: 90, color: "from-orange-500 to-amber-500" },
      { name: "Postman", level: 95, color: "from-orange-600 to-red-500" },
      { name: "VS Code", level: 92, color: "from-blue-500 to-indigo-500" },
    ]
  },
  projects: [
    {
      id: "featured-1",
      title: "Cookspedia - Recipe Discovery & Cooking Platform",
      description: "A responsive recipe web application built using Angular and TypeScript. Users can browse a wide collection of recipes, search by dish name, view detailed cooking instructions, ingredients, preparation steps, and explore recipes through a clean, user-friendly interface with responsive design.",
      impact: "Provides a seamless recipe browsing experience with fast search functionality, responsive UI, and organized recipe details, making meal planning and recipe discovery more efficient.",
      tech: ["Angular", "TypeScript", "Tailwind", "Node.js", "Express.js", "MongoDB Atlas", "JWT Authentication"],
      liveLink: "https://cookspedia-one.vercel.app/",
      githubLink: "https://github.com/fahanamida/Cooks_Pedia",
      isFeatured: false,
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352"
    },
    {
      id: "project-2",
      title: "BookStore - MERN Stack E-Commerce & Job Portal",
      description: "A full-stack BookStore web application developed using React.js, Tailwind CSS, Express.js, and MongoDB Atlas. The platform includes secure user authentication with Google Sign-In, Stripe payment integration for book purchases, role-based access control for Admin and User modules, book management, job vacancy management, and job application functionality.",
      impact: "Provides a seamless platform for buying books, publishing books, and applying for jobs while enabling administrators to efficiently manage book approvals, job postings, and user applications through a centralized dashboard.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "JWT Authentication", "Google Authentication", "Stripe Payment Gateway"],
      liveLink: "https://bookstore-rho-kohl.vercel.app/",
      githubLink: "https://github.com/fahanamida/Book_Store",
      isFeatured: true,
      image: "https://sites.rutgers.edu/itiip/wp-content/uploads/sites/1243/2025/03/istockphoto-949118068-612x612-1.jpg"
    },
    {
      id: "project-3",
      title: "Smart Resume Builder - Online Resume Generator",
      description: "A modern resume builder web application built using React.js and Bootstrap CSS. Users can create, edit, and download professional resumes with real-time preview. Includes multiple templates, form-based data entry, section customization, and PDF export functionality.",
      impact: "Reduces resume creation time by 60% and helps users generate ATS-friendly resumes with structured formatting and clean UI design.",
      tech: ["React.js", "Bootstrap CSS", "JavaScript", "HTML5", "CSS3", "jspdf"],
      liveLink: "https://resume-builder-omega-ashen.vercel.app/",
      githubLink: "https://github.com/fahanamida/Resume_Builder",
      isFeatured: false,
      image: "https://www.shutterstock.com/image-photo/businessman-using-laptop-human-resources-600nw-2687201853.jpg",
    },
    {
      id: "project-4",
      title: "Swiggy Clone - Food Delivery UI",
      description: "A responsive Swiggy-inspired food delivery frontend clone built using HTML, CSS, and Bootstrap 5. Includes homepage layout, restaurant listing cards, category sections, navigation bar, and responsive mobile-friendly design replicating the Swiggy UI experience.",
      impact: "Improves frontend UI replication skills and demonstrates strong understanding of responsive design, Bootstrap grid system, and real-world food delivery app layouts.",
      tech: ["HTML5", "CSS3", "Bootstrap 5"],
      liveLink: "https://swiggy-clone-gray-zeta.vercel.app/",
      githubLink: "https://github.com/fahanamida/Swiggy_Clone",
      isFeatured: false,
      image: "https://cdn.dribbble.com/userupload/45641256/file/956d12c4fc4d74b6661e3641b15ec3c1.jpg?resize=752x&vertical=center",
    },
    {
      id: "project-5",
      title: "Job Application Tracker - CRUD System",
      description: "A full-featured job application management system built using React.js with Redux for state management and JSON Server as a mock backend. Users can add, edit, delete, and track job applications including personal details like name, email, education, and application status. Includes status filtering and real-time UI updates.",
      impact: "Improves data handling and state management skills by 50% and demonstrates practical CRUD operations with Redux architecture and API simulation using JSON Server.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "JSON Server", "JavaScript", "JSX"],
      liveLink: "https://job-application-ten-lime.vercel.app/",
      githubLink: "https://github.com/fahanamida/JobApplication",
      isFeatured: false,
      image: "https://www.shutterstock.com/image-photo/job-search-icons-show-recruitment-600nw-2723971183.jpg",
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "MERN Stack Developer Intern",
      company: "Luminar Technolab",
      location: "Calicut, Kerala",
      period: "7 Months (2025-2026)",
      description: [
        "Developed responsive and interactive web applications using React, Tailwind CSS, and JavaScript.",
        "Built and maintained RESTful APIs using Node.js and Express, ensuring smooth client-server communication.",
        "Worked with MongoDB for database design, data modeling, and efficient CRUD operations.",
        "Collaborated with developers to implement features, fix bugs, and improve application performance.",
        "Followed MVC architecture and best practices to write clean, scalable, and maintainable code."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "BSC Computer Science",
      institution: "Amal College of Advanced Studies, Nilambur",
      period: "2026 - Present",
      description:"Currently pursuing a Bachelor's degree in Computer Science, building a strong foundation in programming, data structures, algorithms, and database management. Passionate about web development and continuously improving through hands-on MERN stack projects."
    },
    {
      id: "edu-2",
      degree: "Higher Secondary (Plus Two Bio Science)",
      institution: "Government Higher Secondary School",
      period: "2023 - 2025",
      description: "Specialized in Biological Sciences, Physics, Chemistry, and Mathematics."
    }
  ]
};

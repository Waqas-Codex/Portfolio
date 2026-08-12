import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "FULL-STACK DEVELOPER & SOFTWARE ENGINEER",
    name: "Waqas Ahmed",
    role: "Junior Full-Stack Developer",
    tagline: "Building clean, responsive, and scalable web applications with React.js, Next.js, Node.js, PostgreSQL, MongoDB, and modern cloud DevOps.",
    statusBadge: "Open for Full-Stack & Engineering Roles",
    videoBgUrl: "hero.mp4",
    resumeUrl: "#resume",
    socials: [
      { platform: "GitHub", url: "https://github.com/Waqas-Codex", iconName: "Github" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/waqas-codex", iconName: "Linkedin" },
      { platform: "Email", url: "mailto:Waqas.codex@gmail.com", iconName: "Mail" }
    ]
  },

  about: {
    name: "Waqas Ahmed",
    role: "Junior Full-Stack Developer",
    tagline: "Passionate software engineer specializing in modern JavaScript/TypeScript ecosystems, RESTful APIs, and database engineering.",
    bio: [
      "I am a Junior Full-Stack Developer with hands-on experience building modern, responsive, and high-performance web applications using React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and MySQL.",
      "Deeply passionate about developing clean, maintainable code and scalable backend systems, I work with REST APIs, Docker containerization, Redis caching, Linux environments, and Git workflows.",
      "Currently pursuing a B.S. in Computer Science, I am eager to contribute to real-world engineering teams while continuously learning cutting-edge technologies and enterprise best practices."
    ],
    avatarUrl: "https://res.cloudinary.com/duuk3xsls/image/upload/v1785757585/waqas_naggkw.png",
    location: "Naudero / Pakistan",
    status: "Available for Hire & Remote Work",
    stats: [
      { label: "Full-Stack Web Apps", value: "2+", suffix: "Projects", description: "Built end-to-end PERN & MERN production-grade applications." },
      { label: "Technologies Mastered", value: "12+", suffix: "Techs", description: "React, Next.js, Node.js, Postgres, MongoDB, Docker, Redis." },
      { label: "Academic Standing", value: "Grade A1", suffix: "", description: "Strong foundation in Computer Science & Mathematics." },
      { label: "Code Quality & Testing", value: "100%", suffix: "Clean", description: "Committed to REST standards, RBAC security, & modular code." }
    ],
    focusAreas: [
      {
        title: "Full-Stack Web Engineering",
        description: "Designing end-to-end applications with React.js, Next.js, Node.js, and Express.",
        iconName: "Layout"
      },
      {
        title: "RESTful API Architecture",
        description: "Building secure, stateless REST APIs with JWT auth, role-based access control, and rate limiting.",
        iconName: "Server"
      },
      {
        title: "Database Design & Optimization",
        description: "Architecting relational schemas in PostgreSQL/MySQL and document models in MongoDB.",
        iconName: "Database"
      },
      {
        title: "DevOps & Modern Workflows",
        description: "Deploying applications using Docker containers, Redis caching, Linux, and Git/GitHub pipelines.",
        iconName: "Boxes"
      }
    ]
  },

  skillCategories: [
    {
      id: "languages",
      title: "Languages",
      description: "Core programming languages for modern web & backend development.",
      iconName: "Code2",
      skills: [
        { name: "JavaScript (ES6+)", level: 92, experience: "2+ yrs", iconName: "Code2", highlight: true },
        { name: "TypeScript", level: 88, experience: "1.5+ yrs", iconName: "FileCode2", highlight: true }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Modern UI frameworks, responsive styling, and client state management.",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: 90, experience: "2 yrs", iconName: "Atom", highlight: true },
        { name: "Next.js (App Router)", level: 88, experience: "1.5 yrs", iconName: "Flame", highlight: true },
        { name: "Tailwind CSS", level: 94, experience: "2 yrs", iconName: "Palette", highlight: true }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Server runtimes, HTTP routing, REST APIs, and authentication middleware.",
      iconName: "Server",
      skills: [
        { name: "Node.js", level: 90, experience: "2 yrs", iconName: "Server", highlight: true },
        { name: "Express.js", level: 92, experience: "2 yrs", iconName: "Layers", highlight: true },
        { name: "RESTful API Design", level: 90, experience: "2 yrs", iconName: "Share2", highlight: true }
      ]
    },
    {
      id: "databases",
      title: "Databases & Caching",
      description: "Relational SQL databases, NoSQL document stores, and in-memory caches.",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", level: 88, experience: "1.5 yrs", iconName: "Database", highlight: true },
        { name: "MongoDB", level: 88, experience: "1.5 yrs", iconName: "FolderGit2", highlight: true },
        { name: "MySQL", level: 85, experience: "1.5 yrs", iconName: "Database" },
        { name: "Redis Caching", level: 82, experience: "1 yr", iconName: "Zap" }
      ]
    },
    {
      id: "devtools",
      title: "Developer Tools & Cloud",
      description: "Containerization, version control, API testing, and OS environments.",
      iconName: "Workflow",
      skills: [
        { name: "Git & GitHub", level: 92, experience: "2 yrs", iconName: "FolderGit2", highlight: true },
        { name: "Docker", level: 84, experience: "1 yr", iconName: "Box", highlight: true },
        { name: "Postman", level: 90, experience: "2 yrs", iconName: "Send" },
        { name: "Linux Environment", level: 86, experience: "1.5 yrs", iconName: "Terminal" },
        { name: "VS Code", level: 95, experience: "2 yrs", iconName: "Code" },
        { name: "AWS (Basic)", level: 75, experience: "Basic", iconName: "Cloud" }
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      institution: "University Name / City",
      degree: "Bachelor of Science in Computer Science",
      field: "Computer Science & Software Engineering",
      startDate: "2026",
      endDate: "Present",
      isCurrent: true,
      description: "Focusing on Data Structures & Algorithms, Database Management Systems, Web Application Architecture, Computer Networks, and Object-Oriented Programming.",
      courses: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming", "Operating Systems", "Web Engineering"]
    },
    {
      id: "edu-2",
      institution: "Government Boys Degree College, Naudero",
      degree: "Intermediate (FSC / HSSC)",
      field: "Pre-Engineering / Mathematics & Sciences",
      grade: "Grade A",
      startDate: "2021",
      endDate: "2023",
      isCurrent: false,
      description: "Completed Higher Secondary Certificate with Grade A, developing strong analytical thinking, mathematics, and problem-solving skills.",
      courses: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      id: "edu-3",
      institution: "Government English Medium Model High School, Naudero",
      degree: "Secondary (Matriculation)",
      field: "Science Stream",
      grade: "Grade A1",
      startDate: "2016",
      endDate: "2021",
      isCurrent: false,
      description: "Graduated Secondary School Certificate with top honors (Grade A1), excelling in science and fundamentals of mathematics.",
      courses: ["Computer Science", "Mathematics", "Science"]
    }
  ],

  projects: [
    {
      id: "url-shortener",
      title: "URL Shortener Platform",
      subtitle: "PERN Stack Analytics & Authentication Platform",
      category: "Full-Stack Web App",
      featured: true,
      shortDescription: "A full-stack URL shortening platform built with PostgreSQL, Express.js, React.js, Node.js, and Tailwind CSS. Features custom slug generation, click analytics dashboard, and secure user profile authentication.",
      fullDescription: "The URL Shortener Platform is a production-ready web application engineered using the PERN stack (PostgreSQL, Express, React, Node.js). Designed for high efficiency and crisp UX, it enables users to generate custom short aliases, monitor click statistics, analyze device insights, and manage their links securely.",
      thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
      bannerUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600",
      techStack: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST API", "JWT Auth"],
      githubUrl: "https://github.com/Waqas-Codex",
      liveUrl: "https://github.com/Waqas-Codex",
      architectureSummary: "React Frontend -> Express REST Controller -> JWT Auth Middleware -> PostgreSQL Relational Storage -> Click Analytics Aggregator.",
      problemStatement: "Generic URL shorteners lack customized branding, device-level visitor analytics, and secure link management for individual user accounts.",
      solutionDetails: "Developed custom slug validation algorithms and dynamic URL redirection middleware backed by indexed PostgreSQL schemas. Built an interactive analytics dashboard in React displaying real-time click metrics and device distributions.",
      keyFeatures: [
        "Full-Stack PERN architecture with responsive, intuitive Tailwind UI",
        "Custom slug generation allowing users to create personalized short URLs",
        "Comprehensive analytics dashboard displaying click counts, device insights, & performance metrics",
        "Secure JWT authentication with user profile management and link editing",
        "Fast 301/302 HTTP redirection with low database query latency"
      ],
      technicalChallenges: [
        {
          challenge: "Preventing duplicate custom slugs during high-concurrency URL creation.",
          resolution: "Enforced unique indexing at the PostgreSQL database layer combined with pre-insert check validation."
        },
        {
          challenge: "Aggregating device and location insights without impacting redirection speed.",
          resolution: "Offloaded visitor analytics logging to asynchronous non-blocking background handlers."
        }
      ],
      performanceMetrics: [
        { metric: "Redirect Latency", value: "< 15 ms", impact: "Fast database index lookups" },
        { metric: "Analytics Accuracy", value: "100%", impact: "Real-time click & device tracking" },
        { metric: "Code Coverage", value: "Clean Architecture", impact: "Modular controller & component structure" }
      ],
      futureImprovements: [
        "Integration of Redis cache for instant memory lookups on viral links",
        "QR code generation for physical short link scanning"
      ],
      architectureDiagramNodes: [
        { title: "React Dashboard", type: "client", description: "User UI & Analytics Charts" },
        { title: "Express API Gateway", type: "gateway", description: "JWT & Request Router" },
        { title: "Node.js Controller", type: "service", description: "Slug generator & Business logic" },
        { title: "PostgreSQL DB", type: "database", description: "Users & Short URLs storage" }
      ]
    },
    {
      id: "music-streaming",
      title: "Music Streaming Platform",
      subtitle: "Next.js & TypeScript Audio Streaming Application",
      category: "Full-Stack Web App",
      featured: true,
      shortDescription: "Full-stack music streaming platform built with Next.js, Express.js, Node.js, TypeScript, MongoDB, and Tailwind CSS. Implements role-based access control (RBAC), custom audio streaming, and playlist management.",
      fullDescription: "A modern, high-performance music streaming application constructed with Next.js App Router, TypeScript, and MongoDB. It offers seamless audio playback, playlist curation, album browsing, and a robust Role-Based Access Control (RBAC) authorization system separating admin content management from listener privileges.",
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      bannerUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
      techStack: ["Next.js", "TypeScript", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "REST API", "RBAC Auth"],
      githubUrl: "https://github.com/Waqas-Codex",
      liveUrl: "https://github.com/Waqas-Codex",
      architectureSummary: "Next.js UI Client -> Audio Player State -> Express REST API -> RBAC Middleware -> MongoDB Atlas Document Store.",
      problemStatement: "Building a seamless music streaming web application requires persistent audio playback across page transitions, strict admin upload permissions, and fast song metadata retrieval.",
      solutionDetails: "Utilized Next.js layout persistence for continuous audio context execution, coupled with MongoDB Mongoose schemas for albums, tracks, and playlists. Implemented role-based authorization for administrative song management.",
      keyFeatures: [
        "Modern, responsive Next.js & Tailwind CSS UI with reusable component library",
        "Role-Based Access Control (RBAC) granting administrative vs user permissions",
        "RESTful APIs for managing users, albums, songs, and custom playlists",
        "Efficient HTML5 audio streaming and persistent playback control bar",
        "Optimized client state management and smooth route transitions"
      ],
      technicalChallenges: [
        {
          challenge: "Maintaining uninterrupted audio playback while navigating between routes.",
          resolution: "Architected a global React Context provider mounted at the Next.js Root Layout level."
        },
        {
          challenge: "Securing admin media upload APIs against unauthorized regular users.",
          resolution: "Designed custom RBAC middleware verifying JWT payload roles before route execution."
        }
      ],
      performanceMetrics: [
        { metric: "Audio Stream Initial Load", value: "< 200 ms", impact: "Fast chunked audio buffering" },
        { metric: "Page Navigation Jitter", value: "0 ms", impact: "Persistent layout player" },
        { metric: "Role Security", value: "100% RBAC", impact: "Protected admin endpoints" }
      ],
      futureImprovements: [
        "Add AWS S3 integration for cloud audio file storage",
        "Implement real-time synchronized group listening rooms via WebSockets"
      ],
      architectureDiagramNodes: [
        { title: "Next.js App", type: "client", description: "Audio Player & UI" },
        { title: "Express Server", type: "service", description: "REST API & RBAC Security" },
        { title: "MongoDB Store", type: "database", description: "Tracks & Playlist Documents" }
      ]
    }
  ],

  services: [
    {
      id: "srv-1",
      title: "Full-Stack Web Development",
      shortDescription: "Building responsive, modern web applications with React.js, Next.js, and Node.js.",
      fullDescription: "End-to-end full-stack web application development combining sleek client-side user interfaces with robust, scalable server backends.",
      iconName: "Layout",
      deliverables: [
        "Single-Page Applications (SPAs) & Next.js App Router websites",
        "Responsive, mobile-first design with Tailwind CSS",
        "Clean, maintainable React component architecture",
        "State management & API integration"
      ],
      techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
      featured: true
    },
    {
      id: "srv-2",
      title: "RESTful API Engineering",
      shortDescription: "Architecting secure, stateless REST APIs using Node.js, Express.js, and JWT.",
      fullDescription: "Designing structured RESTful API endpoints with input validation, JWT token authentication, role-based access control, and clear documentation.",
      iconName: "Server",
      deliverables: [
        "Node.js & Express.js REST API creation",
        "User authentication (JWT) & RBAC authorization",
        "Request data validation & error handling middleware",
        "Postman API documentation & testing"
      ],
      techStack: ["Node.js", "Express.js", "REST APIs", "JWT", "Postman"],
      featured: true
    },
    {
      id: "srv-3",
      title: "Database Modeling & Integration",
      shortDescription: "Designing relational schemas in PostgreSQL/MySQL and document models in MongoDB.",
      fullDescription: "Creating optimized database schemas, index strategies, and object-relational mapping (ORM) integrations for data-driven web applications.",
      iconName: "Database",
      deliverables: [
        "PostgreSQL & MySQL relational schema design",
        "MongoDB document modeling with Mongoose",
        "Redis caching integration for frequent queries",
        "CRUD query optimization & data integrity"
      ],
      techStack: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQL"],
      featured: true
    },
    {
      id: "srv-4",
      title: "DevOps & Containerization Basics",
      shortDescription: "Containerizing web services with Docker and deploying on Linux environments.",
      fullDescription: "Containerizing web applications and database services with Docker containers for consistent development and production deployments.",
      iconName: "Boxes",
      deliverables: [
        "Dockerfile & Docker Compose setup for full-stack apps",
        "Linux server administration & bash workflows",
        "Git & GitHub version control management",
        "Basic AWS cloud deployment"
      ],
      techStack: ["Docker", "Linux", "Git", "GitHub", "AWS"],
      featured: false
    }
  ],

  testimonials: [
    {
      id: "test-1",
      authorName: "Senior Engineering Mentor",
      authorRole: "Software Architect",
      company: "Computer Science Dept.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "Waqas demonstrates exceptional commitment to clean code standards and full-stack software development. His work on the PERN URL Shortener platform showcased strong command over database indexing and backend API security.",
      relationship: "Academic Project Supervisor"
    },
    {
      id: "test-2",
      authorName: "Peer Developer",
      authorRole: "Frontend Developer",
      company: "Tech Collaborator",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      quote: "Collaborating with Waqas on full-stack JavaScript applications is always a great experience. He writes modular, predictable backend controllers and integrates Next.js frontend state effortlessly.",
      relationship: "Project Collaborator"
    }
  ],

  blogPosts: [
    {
      id: "blog-1",
      slug: "building-pern-url-shortener",
      title: "Building a Full-Stack URL Shortener with PostgreSQL, Express, React & Node (PERN)",
      excerpt: "Step-by-step architectural breakdown of custom slug generation, analytics tracking, and JWT authentication in a PERN stack app.",
      contentSnippet: "Creating a production-ready URL shortener involves more than just string manipulation. In this article, we examine database index strategies in PostgreSQL, dynamic redirection controllers in Express, and real-time dashboard analytics in React...",
      publishedAt: "August 2026",
      readTime: "6 min read",
      category: "Full-Stack Web",
      tags: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      coverImageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "blog-2",
      slug: "rbac-in-nextjs-express",
      title: "Implementing Role-Based Access Control (RBAC) in Next.js & Express Applications",
      excerpt: "How to design secure permission layers for Admin and User roles with JWT middleware and protected React routes.",
      contentSnippet: "Security is paramount when building multi-user web platforms. By combining Express authorization middleware with Next.js client-side route guards, developers can guarantee that sensitive media upload routes remain accessible strictly to authorized administrators...",
      publishedAt: "July 2026",
      readTime: "7 min read",
      category: "Web Security",
      tags: ["Next.js", "TypeScript", "Express.js", "Security", "RBAC"],
      coverImageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800"
    }
  ],

  contactDetails: {
    phone: "+92422378822",
    email: "Waqas.codex@gmail.com",
    location: "Naudero / Pakistan",
    github: "https://github.com/Waqas-Codex",
    linkedin: "https://linkedin.com/in/waqas-codex",
    timezone: "PKT (UTC+5)",
    availability: "Immediate Availability for Full-Time & Project Roles"
  }
};

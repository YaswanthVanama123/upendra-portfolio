export const profile = {
  name: 'Naga Upendra Morampudi',
  shortName: 'Naga Upendra',
  role: 'Full Stack Developer',
  tagline: 'MERN & PERN Stack',
  intro:
    'Full Stack Developer with 3 years of experience building scalable, secure ' +
    'web applications end to end. I specialize in the MERN stack (MongoDB, ' +
    'Express.js, React.js, Node.js) with strong hands-on PostgreSQL, and I have ' +
    'delivered enterprise-grade software using React, Node.js, and AWS.',
  email: 'morampudinagaupendra@gmail.com',
  phone: '+1 201-205-9170',
  location: 'Wilmington, DE, USA',
  photo: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/upendramorampudi',
    linkedin: 'https://www.linkedin.com/in/naga-upendra-morampudi-b6663417a',
  },
}

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer with 3 years of experience designing, developing, testing, and deploying scalable web applications. My core strength is the MERN stack (MongoDB, Express.js, React.js, Node.js), backed by hands-on PostgreSQL and RESTful API development.",
    'At HCL Technologies, I worked on Common Provider Master — an enterprise healthcare platform for Kaiser Permanente — building responsive React components and RESTful Node.js services while working across both MongoDB and PostgreSQL. I care about clean architecture, reliable APIs, and delivering across the full SDLC in Agile teams.',
  ],
  highlights: [
    'JavaScript & TypeScript',
    'React.js & Next.js',
    'Node.js & Express.js',
    'MongoDB & PostgreSQL',
    'REST APIs & GraphQL',
    'AWS, Docker & CI/CD',
  ],
  stats: [
    { value: 3, label: 'Years Experience' },
    { value: 20, label: 'Technologies' },
    { value: 10, label: 'Projects & Modules' },
  ],
}

export const stacks = [
  {
    key: 'mern',
    title: 'MERN Stack',
    tag: 'Document / NoSQL',
    items: [
      { letter: 'M', name: 'ongoDB', note: 'flexible document database' },
      { letter: 'E', name: 'xpress.js', note: 'Node.js web framework' },
      { letter: 'R', name: 'eact.js', note: 'component-driven UI' },
      { letter: 'N', name: 'ode.js', note: 'JavaScript runtime' },
    ],
  },
  {
    key: 'pern',
    title: 'PERN Stack',
    tag: 'Relational / SQL',
    items: [
      { letter: 'P', name: 'ostgreSQL', note: 'relational database' },
      { letter: 'E', name: 'xpress.js', note: 'Node.js web framework' },
      { letter: 'R', name: 'eact.js', note: 'component-driven UI' },
      { letter: 'N', name: 'ode.js', note: 'JavaScript runtime' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    title: 'AI & Generative AI',
    skills: ['OpenAI API', 'Google Gemini', 'Claude', 'LangChain', 'LangGraph', 'RAG', 'AI Agents', 'Vector DBs'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Jira', 'Swagger', 'Agile / Scrum', 'System Design', 'OOP'],
  },
]

export const projects = [
  {
    title: 'Common Provider Master — Healthcare Platform',
    slug: 'common-provider-master',
    context: 'HCL Technologies · Client: Kaiser Permanente USA',
    description:
      'An enterprise healthcare platform that collects, consolidates, and maintains provider (doctor) information from multiple Kaiser Permanente USA applications into a single centralized source — provider profiles, specialties, practice locations, appointment availability, scheduling, and insurance data. I built responsive React components and RESTful Node.js/Express services, integrated multiple source applications, and worked across MongoDB and PostgreSQL to power accurate provider search and appointment booking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS'],
    codeUrl: null,
    liveUrl: null,
    features: [
      'Centralized master record consolidating provider data from multiple Kaiser Permanente USA source applications',
      'Provider profiles with specialties, practice locations, and contact details',
      'Appointment availability, scheduling, and available time-slot management',
      'Insurance-related data tied to each provider',
      'Fast, accurate provider search to support appointment booking',
      'Reusable, responsive React components for provider-management screens',
    ],
    stackUsage: [
      {
        tech: 'React.js',
        detail:
          'Built responsive, reusable components for provider profiles, specialties, locations, and appointment availability.',
      },
      {
        tech: 'Node.js / Express',
        detail:
          'Developed RESTful APIs and backend services to exchange and consolidate provider data across integrated applications, plus business logic for scheduling, time slots, and insurance.',
      },
      {
        tech: 'MongoDB',
        detail:
          'Stored flexible, semi-structured provider profile documents arriving from heterogeneous source systems.',
      },
      {
        tech: 'PostgreSQL',
        detail:
          'Held structured, validated provider records where relational integrity and consistency were critical.',
      },
      {
        tech: 'AWS / Docker / CI-CD',
        detail: 'Containerized services and deployed through CI/CD pipelines for reliable, repeatable releases.',
      },
    ],
    challenges: [
      {
        problem:
          'Provider data arrived from many source applications in inconsistent formats, causing duplicates and mismatches.',
        solution:
          'Built an integration and validation layer to retrieve, process, validate, and consolidate records into a single normalized master, eliminating duplication.',
      },
      {
        problem: 'Guaranteeing data accuracy and consistency across integrated healthcare applications.',
        solution:
          'Added automated validation rules plus unit, API, integration, and automation testing to catch anomalies before they reached production.',
      },
      {
        problem: 'Data ranged from flexible provider profiles to strictly structured relational records.',
        solution:
          'Used MongoDB for flexible documents and PostgreSQL for relational data needing transactional integrity — choosing the right store per use case.',
      },
      {
        problem: 'Provider search had to stay fast as data volume grew.',
        solution:
          'Optimized queries and indexing and streamlined API responses to keep search and appointment booking responsive.',
      },
    ],
  },
  {
    title: 'Food Ordering & Delivery Platform',
    slug: 'food-ordering-platform',
    context: 'Personal Project',
    description:
      'A full-stack, e-commerce-style food ordering platform with three role-based dashboards — Users browse menus, place orders, and track delivery; Admins manage menus, restaurants, and orders; Super Admins oversee the entire platform and manage admins and users. Includes cart, checkout, and order management with secure JWT authentication and role-based access control.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    codeUrl: null,
    liveUrl: null,
    repos: [
      { label: 'User App', url: 'https://github.com/upendramorampudi/food-user' },
      { label: 'Admin Dashboard', url: 'https://github.com/upendramorampudi/food-admin' },
      { label: 'Super Admin Console', url: 'https://github.com/upendramorampudi/food-superadmin' },
      { label: 'Backend API', url: 'https://github.com/upendramorampudi/food-backend' },
    ],
    features: [
      'Three role-based dashboards — User, Admin, and Super Admin',
      'Users browse menus, add to cart, checkout, and track orders',
      'Admins manage menus, restaurants, and incoming orders',
      'Super Admins oversee the whole platform and manage admins and users',
      'Secure JWT authentication with role-based access control (RBAC)',
      'Cart, checkout, and full order-lifecycle management',
    ],
    stackUsage: [
      {
        tech: 'React.js',
        detail: 'Separate role-based dashboards (user / admin / super admin) with protected routes and a cart/checkout flow.',
      },
      {
        tech: 'Node.js / Express',
        detail: 'REST APIs for menus, orders, and users, with role-based middleware guarding each endpoint.',
      },
      {
        tech: 'MongoDB',
        detail: 'Flexible schema for menus, restaurants, and orders — order items embedded as nested documents.',
      },
      {
        tech: 'JWT',
        detail: 'Token-based authentication and per-role authorization across the three access levels.',
      },
    ],
    challenges: [
      {
        problem: 'Three distinct permission levels had to be enforced securely without leaking data across roles.',
        solution:
          'Centralized authorization with JWT and role-based Express middleware, plus protected routes on the frontend for each dashboard.',
      },
      {
        problem: 'Cart totals and prices could be tampered with from the client.',
        solution: 'Re-validated cart contents and recalculated pricing on the server before creating an order.',
      },
      {
        problem: 'Orders move through many states (placed, preparing, out for delivery, delivered).',
        solution:
          'Modeled a clear order state machine and exposed status updates so users could track orders in near real time.',
      },
    ],
  },
  {
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    context: 'Personal Project',
    description:
      'A full-stack, role-based e-commerce platform split into dedicated apps — a customer storefront, an admin dashboard, and a super-admin console — all powered by a shared Node.js/Express REST API. Customers browse products, manage a cart, and check out; admins manage products, categories, and orders; super admins oversee the whole platform and manage admins and users. Secured end to end with JWT authentication and role-based access control.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    codeUrl: null,
    liveUrl: null,
    repos: [
      { label: 'Customer Storefront', url: 'https://github.com/upendramorampudi/ecommerce-user' },
      { label: 'Admin Dashboard', url: 'https://github.com/upendramorampudi/ecommerce-admin' },
      { label: 'Super Admin Console', url: 'https://github.com/upendramorampudi/ecommerce-superadmin' },
      { label: 'Backend API', url: 'https://github.com/upendramorampudi/ecommerce-backend' },
    ],
    features: [
      'Separate apps for Customer, Admin, and Super Admin — each a focused React frontend',
      'Product catalog with categories, search, and product detail pages',
      'Shopping cart, checkout, and order management',
      'Admin tools to manage products, categories, inventory, and orders',
      'Super Admin console to oversee the platform and manage admins and users',
      'JWT authentication with role-based access control across all apps',
    ],
    stackUsage: [
      {
        tech: 'React.js',
        detail:
          'Three independent React frontends (customer storefront, admin, and super admin) sharing UI patterns and consuming one API.',
      },
      {
        tech: 'Node.js / Express',
        detail:
          'A single REST API serving products, carts, orders, and users, with role-based middleware protecting every route.',
      },
      {
        tech: 'MongoDB',
        detail: 'Document storage for products, categories, carts, orders, and users.',
      },
      {
        tech: 'JWT',
        detail: 'Stateless authentication and per-role authorization shared across the customer, admin, and super-admin apps.',
      },
    ],
    challenges: [
      {
        problem: 'Three separate frontends had to stay in sync with one backend contract.',
        solution:
          'Centralized business logic and validation in the Express API and kept a consistent REST contract so every app consumed the same endpoints.',
      },
      {
        problem: 'Different roles needed very different capabilities without exposing privileged actions.',
        solution:
          'Enforced role-based access control with JWT and Express middleware, and split the UIs so each role only ships the screens it needs.',
      },
      {
        problem: 'Cart and order integrity had to hold across sessions and users.',
        solution:
          'Validated cart contents and recomputed totals server-side before placing an order, backed by clear order states.',
      },
    ],
  },
  {
    title: 'Payment Ledger & Expense Tracker',
    slug: 'payment-ledger',
    context: 'Personal Project',
    description:
      'A payment ledger application to record and track all expenses and transactions with categorized reporting and summaries. Built on a relational data model for accurate, ACID-compliant financial records — a natural fit for the PERN stack with PostgreSQL handling transactional integrity.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    codeUrl: 'https://github.com/upendramorampudi/account-expenses',
    liveUrl: 'https://account-expenses.onrender.com/',
    features: [
      'Record income and expense transactions with categories',
      'Categorized reporting, summaries, and running balances',
      'Dashboard with charts and breakdowns of spending',
      'Filter and search transactions by date, category, and amount',
    ],
    stackUsage: [
      {
        tech: 'React.js',
        detail: 'Dashboards, transaction forms, and charts for visualizing expenses and summaries.',
      },
      {
        tech: 'Node.js / Express',
        detail: 'REST APIs for transactions plus aggregation endpoints that power the reports.',
      },
      {
        tech: 'PostgreSQL',
        detail: 'Relational, ACID-compliant storage with SQL aggregation for accurate financial reporting.',
      },
    ],
    challenges: [
      {
        problem: 'Financial records must stay accurate — no lost updates or rounding errors.',
        solution:
          'Wrapped writes in PostgreSQL transactions and used precise numeric/decimal types instead of floats to avoid rounding drift.',
      },
      {
        problem: 'Reports required grouping and summarizing large numbers of transactions.',
        solution:
          'Used SQL aggregation (GROUP BY and window functions) with indexed columns to keep reporting queries fast.',
      },
      {
        problem: 'Related records (accounts, categories, transactions) had to stay consistent.',
        solution:
          'Enforced foreign keys and a normalized relational schema so data integrity is guaranteed at the database level.',
      },
    ],
  },
]

export const timeline = [
  {
    date: '03/2022 — 12/2024',
    title: 'Full Stack Developer',
    org: 'HCL Technologies (Client: Kaiser Permanente USA)',
    description:
      'Built and maintained Common Provider Master — a MERN-based enterprise healthcare platform that consolidates provider data across multiple Kaiser Permanente USA applications. Developed reusable React components and RESTful Node.js/Express services, worked across MongoDB and PostgreSQL, and deployed via AWS, Docker, and CI/CD pipelines in an Agile/Scrum team. Performed unit, API, integration, and automation testing to ensure quality and data accuracy.',
  },
  {
    date: '01/2025 — 08/2026',
    title: 'M.S. in Computer Information Systems',
    org: 'Wilmington University, Delaware, USA',
    description:
      'Master of Science in Computer Information Systems — deepening expertise in software engineering, system design, and modern full-stack development.',
  },
]

export const profile = {
  name: 'Naga Upendra Morampudi',
  shortName: 'Naga Upendra',
  role: 'Java Full Stack Developer',
  tagline: 'Core Java, J2EE, Spring & React',
  intro:
    'Java Full Stack Developer with 3 years of experience in enterprise application ' +
    'development. I build backend services with Core Java, J2EE, and Spring — RESTful ' +
    'APIs, web services, and Kafka and MQ integrations — write thorough JUnit tests, and ' +
    'support releases on OpenShift and AWS, with React on the frontend.',
  email: 'morampudinagaupendra@gmail.com',
  phone: '+1 201-205-9170',
  location: 'Wilmington, DE, USA',
  photo: '/profile.jpg',
  resumeUrl: null,
  socials: {
    linkedin: 'https://www.linkedin.com/in/naga-upendra-morampudi-b6663417a',
  },
}

export const about = {
  paragraphs: [
    "I'm a Java Full Stack Developer with 3 years of experience designing, developing, testing, and deploying enterprise applications. My core strength is backend development with Core Java, J2EE, Spring Boot, and Spring Integration — building RESTful APIs and web services, integrating systems through Kafka and IBM MQ, and working with Oracle and NoSQL stores like Cassandra and MongoDB.",
    'At HCL Technologies, I worked on Common Provider Master — an enterprise healthcare application for Kaiser Permanente — building Spring services and integrations, writing JUnit tests against SonarQube quality gates, and supporting testing, deployments, and production releases on OpenShift and AWS with Splunk and Dynatrace. I collaborate closely with cross-functional teams in Agile/Scrum, evaluate new technologies, and build React frontends when a feature needs a UI.',
  ],
  highlights: [
    'Core Java & J2EE',
    'Spring Boot & Spring Integration',
    'REST APIs & Web Services',
    'Kafka & IBM MQ',
    'Oracle, Cassandra & NoSQL',
    'OpenShift, Kubernetes & AWS',
    'JUnit, SonarQube & Splunk',
    'React.js & JavaScript',
  ],
  stats: [
    { value: 3, label: 'Years Experience' },
    { value: 20, label: 'Technologies' },
    { value: 10, label: 'Projects & Modules' },
  ],
}

export const stacks = [
  {
    key: 'backend',
    title: 'Java Backend',
    tag: 'Services / APIs',
    items: [
      { name: 'Core Java', note: 'OOP, collections & multithreading' },
      { name: 'J2EE', note: 'Servlets, JDBC, JMS & JPA' },
      { name: 'Spring Boot & MVC', note: 'REST & SOAP web services' },
      { name: 'Spring Integration', note: 'enterprise integration flows' },
    ],
  },
  {
    key: 'integration',
    title: 'Messaging & Data',
    tag: 'Integration',
    items: [
      { name: 'Apache Kafka', note: 'event streaming' },
      { name: 'IBM MQ / JMS', note: 'reliable messaging' },
      { name: 'Oracle & SQL Server', note: 'relational SQL' },
      { name: 'Cassandra & MongoDB', note: 'NoSQL data stores' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Java & J2EE',
    skills: ['Core Java', 'Collections & Streams', 'Multithreading', 'J2EE / Jakarta EE', 'Servlets', 'JDBC', 'JMS', 'JPA / Hibernate'],
  },
  {
    title: 'Spring',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Integration', 'Spring Security', 'Spring Data', 'Microservices'],
  },
  {
    title: 'APIs & Messaging',
    skills: ['REST APIs', 'SOAP Web Services', 'JAX-RS / JAX-WS', 'Apache Kafka', 'IBM MQ', 'JSON / XML'],
  },
  {
    title: 'Databases',
    skills: ['Oracle', 'SQL Server', 'PostgreSQL', 'MySQL', 'Cassandra', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Kubernetes', 'OpenShift', 'AWS', 'Docker', 'Jenkins', 'CI/CD', 'Unix / Linux', 'Shell Scripting'],
  },
  {
    title: 'Quality & Monitoring',
    skills: ['JUnit 5', 'Mockito', 'SonarQube', 'Splunk', 'Dynatrace', 'Postman'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Maven', 'IntelliJ IDEA', 'Jira', 'Agile / Scrum', 'SDLC', 'Design Patterns', 'OOP'],
  },
]

export const projects = [
  {
    title: 'Common Provider Master — Healthcare Platform',
    slug: 'common-provider-master',
    context: 'HCL Technologies · Client: Kaiser Permanente USA',
    description:
      'An enterprise healthcare application that consolidates provider (doctor) information from multiple Kaiser Permanente USA systems into a single source of truth — profiles, specialties, practice locations, appointment availability, scheduling, and insurance data. I built Core Java and Spring Boot services, Spring Integration flows that consume Kafka and IBM MQ messages from source systems, and RESTful APIs and SOAP web services on Oracle and Cassandra, plus React screens for provider management.',
    tech: ['Core Java', 'J2EE', 'Spring Boot', 'Spring Integration', 'Kafka', 'IBM MQ', 'Oracle', 'Cassandra', 'OpenShift', 'React'],
    liveUrl: null,
    features: [
      'Centralized master record consolidating provider data from multiple Kaiser Permanente USA source applications',
      'Provider profiles with specialties, practice locations, and contact details',
      'Appointment availability, scheduling, and available time-slot management',
      'Insurance-related data tied to each provider',
      'Fast, accurate provider search to support appointment booking',
      'Event-driven integration that publishes provider changes to downstream systems in near real time',
      'Reusable, responsive React components for provider-management screens',
    ],
    stackUsage: [
      {
        tech: 'Core Java / J2EE',
        detail:
          'Business logic for provider data, scheduling, time slots, and insurance using collections, streams, and multithreaded batch processing, with JMS and JDBC for messaging and data access.',
      },
      {
        tech: 'Spring Boot',
        detail:
          'Layered services exposing RESTful APIs and SOAP web services (Spring Web Services) to exchange provider data with integrated applications.',
      },
      {
        tech: 'Spring Integration',
        detail:
          'Message channels, transformers, routers, and error channels that ingest, validate, and normalize provider records from each source system.',
      },
      {
        tech: 'Kafka / IBM MQ',
        detail:
          'Consumed provider updates from legacy systems over IBM MQ and published normalized change events to Kafka topics for downstream consumers.',
      },
      {
        tech: 'Oracle / Cassandra',
        detail:
          'Oracle for the relational provider master with transactional integrity; Cassandra for high-volume appointment availability and time-slot reads.',
      },
      {
        tech: 'OpenShift / AWS',
        detail:
          'Containerized services deployed to OpenShift (Kubernetes) and AWS through Jenkins CI/CD pipelines with SonarQube quality gates.',
      },
      {
        tech: 'Splunk / Dynatrace',
        detail: 'Production monitoring, log analysis, and performance tracing to triage incidents and support releases.',
      },
      {
        tech: 'React.js',
        detail:
          'Responsive, reusable components for provider profiles, specialties, locations, and appointment availability.',
      },
    ],
    challenges: [
      {
        problem:
          'Provider data arrived from many source applications in inconsistent formats, causing duplicates and mismatches.',
        solution:
          'Built Spring Integration flows that transform, validate, and de-duplicate inbound MQ and Kafka messages into a single normalized provider master, with error channels routing bad records for review.',
      },
      {
        problem: 'Guaranteeing data accuracy and code quality across integrated healthcare applications.',
        solution:
          'Covered services with JUnit and Mockito unit tests plus API and integration tests, and enforced SonarQube quality gates in the CI/CD pipeline before every release.',
      },
      {
        problem: 'Data ranged from strictly relational master records to high-volume availability and time-slot lookups.',
        solution:
          'Kept the provider master in Oracle for transactional integrity and modeled availability in Cassandra, partitioned by provider and date, for fast, scalable reads.',
      },
      {
        problem: 'Production issues had to be found and fixed quickly across many integrated services.',
        solution:
          'Used Splunk log searches and Dynatrace traces to pinpoint failures and slow calls, and wrote Unix shell scripts to automate log collection, batch reruns, and release checks.',
      },
      {
        problem: 'Provider search had to stay fast as data volume grew.',
        solution:
          'Tuned Oracle SQL and indexes, paginated API results, and returned lean DTOs to keep search and appointment booking responsive.',
      },
    ],
  },
  {
    title: 'Food Ordering & Delivery Platform',
    slug: 'food-ordering-platform',
    context: 'Personal Project',
    description:
      'A full-stack, e-commerce-style food ordering platform with three role-based dashboards — Users browse menus, place orders, and track delivery; Admins manage menus, restaurants, and orders; Super Admins oversee the entire platform and manage admins and users. React dashboards consume a Java Spring Boot REST API secured with Spring Security and JWT, and Kafka order events drive near-real-time delivery tracking.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Kafka', 'MongoDB', 'React'],
    liveUrl: null,
    features: [
      'Three role-based dashboards — User, Admin, and Super Admin',
      'Users browse menus, add to cart, checkout, and track orders',
      'Admins manage menus, restaurants, and incoming orders',
      'Super Admins oversee the whole platform and manage admins and users',
      'Spring Security with JWT authentication and role-based access control (RBAC)',
      'Cart, checkout, and full order-lifecycle management with live status updates',
    ],
    stackUsage: [
      {
        tech: 'Java / Spring Boot',
        detail:
          'REST controllers and service layers for menus, restaurants, carts, orders, and users, with Bean Validation and centralized exception handling.',
      },
      {
        tech: 'Spring Security',
        detail: 'Stateless JWT authentication filter and role-based method security enforcing the three access levels on every endpoint.',
      },
      {
        tech: 'Kafka',
        detail:
          'Order-status events (placed, preparing, dispatched, delivered) published to Kafka topics and consumed to push live tracking updates.',
      },
      {
        tech: 'MongoDB',
        detail:
          'NoSQL documents through Spring Data MongoDB for menus, restaurants, and orders — order items embedded as nested documents.',
      },
      {
        tech: 'JUnit / Mockito',
        detail: 'Unit tests for pricing, cart, and order-state rules, plus MockMvc tests for secured endpoints.',
      },
      {
        tech: 'React.js',
        detail: 'Separate role-based dashboards (user / admin / super admin) with protected routes and a cart/checkout flow.',
      },
    ],
    challenges: [
      {
        problem: 'Three distinct permission levels had to be enforced securely without leaking data across roles.',
        solution:
          'Centralized authorization in Spring Security with a JWT filter and role-based method security, plus protected routes on the frontend for each dashboard.',
      },
      {
        problem: 'Cart totals and prices could be tampered with from the client.',
        solution:
          'Re-validated cart contents and recalculated pricing in the Spring Boot service layer before creating an order, with JUnit tests covering the pricing rules.',
      },
      {
        problem: 'Orders move through many states (placed, preparing, out for delivery, delivered).',
        solution:
          'Modeled the lifecycle as a Java enum state machine with guarded transitions and published each change as a Kafka event so users see status updates in near real time.',
      },
    ],
  },
  {
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    context: 'Personal Project',
    description:
      'A full-stack, role-based e-commerce platform split into dedicated apps — a customer storefront, an admin dashboard, and a super-admin console — all powered by a shared Java Spring Boot REST API. Customers browse products, manage a cart, and check out; admins manage products, categories, and orders; super admins oversee the whole platform and manage admins and users. Secured with Spring Security, JWT, and role-based access control, and deployed as Docker containers on Kubernetes.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MongoDB', 'Kubernetes', 'React'],
    liveUrl: null,
    features: [
      'Separate apps for Customer, Admin, and Super Admin — each a focused React frontend',
      'Product catalog with categories, search, and product detail pages',
      'Shopping cart, checkout, and order management',
      'Admin tools to manage products, categories, inventory, and orders',
      'Super Admin console to oversee the platform and manage admins and users',
      'Spring Security JWT authentication with role-based access control across all apps',
    ],
    stackUsage: [
      {
        tech: 'Java / Spring Boot',
        detail:
          'A single Spring Boot REST API serving products, carts, orders, and users, organized into controller, service, and repository layers and documented with Swagger / OpenAPI.',
      },
      {
        tech: 'Spring Security',
        detail: 'Stateless JWT authentication and per-role authorization shared across the customer, admin, and super-admin apps.',
      },
      {
        tech: 'MongoDB',
        detail: 'NoSQL product, category, cart, order, and user documents through Spring Data MongoDB repositories.',
      },
      {
        tech: 'Docker / Kubernetes',
        detail:
          'Containerized the API and frontends with Docker and deployed them to Kubernetes with health checks and environment-based configuration.',
      },
      {
        tech: 'JUnit / Mockito',
        detail: 'Service-layer unit tests and MockMvc API tests covering cart, checkout, and role-based access rules.',
      },
      {
        tech: 'React.js',
        detail:
          'Three independent React frontends (customer storefront, admin, and super admin) sharing UI patterns and consuming one API.',
      },
    ],
    challenges: [
      {
        problem: 'Three separate frontends had to stay in sync with one backend contract.',
        solution:
          'Centralized business logic and validation in the Spring Boot API and published one REST contract with Swagger / OpenAPI so every app consumed the same endpoints.',
      },
      {
        problem: 'Different roles needed very different capabilities without exposing privileged actions.',
        solution:
          'Enforced role-based access control with Spring Security and JWT, and split the UIs so each role only ships the screens it needs.',
      },
      {
        problem: 'Cart and order integrity had to hold across sessions and users.',
        solution:
          'Validated cart contents and recomputed totals server-side in the Spring Boot service layer before placing an order, backed by clear order states and unit tests.',
      },
    ],
  },
  {
    title: 'Payment Ledger & Expense Tracker',
    slug: 'payment-ledger',
    context: 'Personal Project',
    description:
      'A payment ledger application to record and track all expenses and transactions with categorized reporting and summaries. A React dashboard runs on a Java Spring Boot REST API with a relational data model for accurate, ACID-compliant financial records — Spring Data JPA and PostgreSQL handle transactional integrity, while JUnit tests and SonarQube quality gates guard every change.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'JUnit', 'SonarQube', 'React'],
    liveUrl: 'https://account-expenses.onrender.com/',
    features: [
      'Record income and expense transactions with categories',
      'Categorized reporting, summaries, and running balances',
      'Dashboard with charts and breakdowns of spending',
      'Filter and search transactions by date, category, and amount',
    ],
    stackUsage: [
      {
        tech: 'Java / Spring Boot',
        detail:
          'REST APIs for transactions plus aggregation endpoints that power the reports, with transactional service methods guarding every write.',
      },
      {
        tech: 'Spring Data JPA',
        detail:
          'Hibernate entities and repositories for accounts, categories, and transactions, with custom queries for filtering and reporting.',
      },
      {
        tech: 'PostgreSQL',
        detail: 'Relational, ACID-compliant storage with SQL aggregation for accurate financial reporting.',
      },
      {
        tech: 'JUnit / SonarQube',
        detail:
          'JUnit and Mockito tests for balance and reporting logic, with SonarQube quality gates on coverage, bugs, and code smells in CI.',
      },
      {
        tech: 'React.js',
        detail: 'Dashboards, transaction forms, and charts for visualizing expenses and summaries.',
      },
    ],
    challenges: [
      {
        problem: 'Financial records must stay accurate — no lost updates or rounding errors.',
        solution:
          'Wrapped writes in Spring @Transactional boundaries and used Java BigDecimal mapped to PostgreSQL NUMERIC columns instead of floating-point types to avoid rounding drift.',
      },
      {
        problem: 'Reports required grouping and summarizing large numbers of transactions.',
        solution:
          'Used SQL aggregation (GROUP BY and window functions) through Spring Data JPA native queries, with indexed columns to keep reporting fast.',
      },
      {
        problem: 'Related records (accounts, categories, transactions) had to stay consistent.',
        solution:
          'Modeled JPA entity relationships on a normalized schema with foreign keys, so data integrity is guaranteed at the database level.',
      },
    ],
  },
]

export const timeline = [
  {
    date: '03/2022 — 12/2024',
    title: 'Java Full Stack Developer',
    org: 'HCL Technologies (Client: Kaiser Permanente USA)',
    description:
      'Developed and maintained Common Provider Master, an enterprise healthcare application for Kaiser Permanente USA, using Core Java, J2EE, Spring Boot, and Spring Integration. Built and integrated RESTful APIs and SOAP web services, connected source systems through Kafka and IBM MQ, and worked with Oracle and Cassandra. Wrote JUnit and Mockito tests against SonarQube quality gates, supported application testing, deployments, and production releases on OpenShift and AWS with Splunk and Dynatrace monitoring, and collaborated with cross-functional teams in Agile/Scrum.',
  },
  {
    date: '01/2025 — 08/2026',
    title: 'M.S. in Computer Information Systems',
    org: 'Wilmington University, Delaware, USA',
    description:
      'Master of Science in Computer Information Systems — deepening expertise in software engineering, system design, and modern full-stack development.',
  },
]

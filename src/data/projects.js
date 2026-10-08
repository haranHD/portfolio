import {
  Gavel,
  Sprout,
  Scale,
  Layers,
  ShoppingCart,
  Video,
  ScanFace,
} from "lucide-react";

export const PROJECTS = [
  {
    id: "ecourt-tracker",
    icon: Gavel,
    category: "Automation & Backend Engineering",
    name: "eCourt Automation Tracker",
    short:
      "Automated case tracker and monitoring pipeline that autonomously queries public court portals, captures hearing records, and persists structured case histories.",
    problem:
      "Legal professionals and businesses track dozens of pending hearings across public court portals manually. Frequent portal changes, manual captcha steps, and lack of push updates result in missed dates and hundreds of wasted hours.",
    solution:
      "Engineered an automated browser automation pipeline using Playwright and .NET 8. The engine queries court databases using Case CNR numbers, extracts hearing schedules, captures verifiable portal screenshots, and indexes records into PostgreSQL via a clean REST API.",
    tech: [".NET 8", "Playwright", "PostgreSQL", "REST API", "Docker", "Swagger"],
    features: [
      "Automated CNR case status lookup",
      "Hearing history extraction & diffing",
      "Portal screenshot capture & archival",
      "Documented RESTful API endpoints",
      "Defensive scraper architecture with retry logic",
      "Automated scheduled background workers",
    ],
    architecture: [
      "Automation Engine (Playwright)",
      ".NET 8 Controller Layer",
      "Business Logic & Parser",
      "PostgreSQL Data Store",
    ],
    challenges: [
      {
        t: "Dynamic DOM changes on public portals",
        d: "Government portals frequently alter HTML structures without notice. Addressed this by implementing resilient multi-attribute selector strategies and centralized DOM adapters with automated failure alerts.",
      },
      {
        t: "Session handling & rate resilience",
        d: "Prevented portal throttling by introducing randomized back-off intervals, session reuse, and decoupled background workers that queue requests gracefully.",
      },
    ],
    results:
      "Replaced tedious manual daily portal lookups with automated background updates, reducing lookup time by 90% and maintaining an audit-ready timeline for all monitored cases.",
    github: "https://github.com/haranHD/eCourt",
    demo: null,
  },
  {
    id: "ai-farming",
    icon: Sprout,
    category: "Web Application & AI Solutions",
    name: "AI Farming Platform",
    short:
      "Full-stack digital farming platform combining an intelligent AI advisory chatbot, weather telemetry, direct farmer-to-buyer marketplace, and voice interaction.",
    problem:
      "Agricultural producers and smallholder farmers lack accessible, real-time diagnostic tools for crop health, localized weather alerts, and direct marketplaces free of unnecessary intermediaries.",
    solution:
      "Developed a modern web application featuring an AI-driven agricultural advisory system, integration with hyper-local weather APIs, an agricultural produce marketplace, and voice query interaction designed for easy mobile accessibility.",
    tech: ["React", "Node.js", "Flask", "MongoDB", "AI/ML Integration", "Weather API", "Tailwind CSS"],
    features: [
      "AI-powered crop health & pest advisor",
      "Localized weather forecasting & farming tips",
      "Direct produce marketplace & listings",
      "Voice-assisted query interface",
      "Secure user authentication & profiles",
      "Mobile-first responsive dashboard",
    ],
    architecture: [
      "React Responsive Client",
      "Node.js & Flask API Services",
      "AI Model Inference Gateway",
      "MongoDB Document Storage",
    ],
    challenges: [
      {
        t: "Variable connectivity & audio processing",
        d: "Designed the frontend for fast loading over constrained 3G/4G connections and optimized voice input compression to ensure swift responses from the AI advisory model.",
      },
      {
        t: "Marketplace data structuring",
        d: "Organized fluctuating crop pricing and seasonal categories using MongoDB indexing to ensure fast search and regional filtering.",
      },
    ],
    results:
      "Delivered an accessible, intuitive platform empowering farmers with instant advisory answers and a direct marketplace to showcase their produce.",
    github: "https://github.com/haranHD/S8_AI-Farming",
    demo: null,
  },
  {
    id: "weight-scale",
    icon: Scale,
    category: "System Integration & Industrial Software",
    name: "Industrial Weight Scale Integration",
    short:
      "Hardware-to-database integration middleware receiving, validating, and converting raw industrial weighing equipment TCP streams into business ERP records.",
    problem:
      "Industrial manufacturing scales transmit weight readings over raw TCP sockets in proprietary hardware formats. Factories were manually copying weight indicators into accounting software, causing data entry mistakes and inventory discrepancies.",
    solution:
      "Engineered a dedicated backend middleware service with a high-throughput TCP socket listener. It parses incoming byte streams, validates weight stability and product tolerances, converts data to clean JSON, and synchronizes with the business database. Created a hardware mock emulator to validate all scenarios before field deployment.",
    tech: [".NET", "C#", "TCP Sockets", "REST API", "JSON", "PostgreSQL", "Mock Server"],
    features: [
      "High-reliability TCP socket listener",
      "Byte stream fragmentation handling",
      "Tolerance and tare weight validation",
      "Hardware mock simulator for CI/CD",
      "Automated database record insertion",
      "Real-time operator error logging",
    ],
    architecture: [
      "Industrial Weighing Scale",
      "TCP Communication Layer",
      "Parser & Business Rule Engine",
      "Enterprise Database / ERP",
    ],
    challenges: [
      {
        t: "Hardware unavailability during initial build",
        d: "Engineered a configurable TCP hardware emulator capable of broadcasting synthetic weight packets with jitter, dropped packets, and tare variations, allowing 100% test coverage before factory installation.",
      },
      {
        t: "TCP stream fragmentation",
        d: "Raw socket streams can arrive in partial chunks or concatenated bursts. Implemented circular byte buffering with strict framing delimiters to guarantee zero data loss.",
      },
    ],
    results:
      "Successfully replaced error-prone manual scale logging with automated real-time database recording, eliminating operator discrepancies and speeding up factory dispatch.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "client-mgmt",
    icon: Layers,
    category: "Business Application Development",
    name: "Client Management System",
    short:
      "Centralized business platform for managing enterprise clients, sensitive documents, user roles, and operation dashboards with granular access control.",
    problem:
      "Client accounts, critical agreements, and multi-team workflows were scattered across emails and shared spreadsheets, creating security compliance risks and zero audit visibility.",
    solution:
      "Built a secure enterprise web application with role-based access control (RBAC), client record management, document indexing, and an operational dashboard driven by an ASP.NET Core REST API and PostgreSQL.",
    tech: ["React", "ASP.NET Core", "PostgreSQL", "JWT Authentication", "REST API", "Tailwind CSS"],
    features: [
      "Granular role-based access control (RBAC)",
      "Client profile and engagement lifecycle",
      "Secure document metadata & file management",
      "Operational KPI dashboard",
      "Audit trail & activity logging",
      "Comprehensive REST API contracts",
    ],
    architecture: [
      "React Single-Page Client",
      "ASP.NET Core API Controllers",
      "Domain Business Services",
      "PostgreSQL Relational DB",
    ],
    challenges: [
      {
        t: "Multi-tier authorization enforcement",
        d: "Different departments required strictly partitioned visibility into the same client dossier. Enforced claims-based security at the API gateway layer rather than relying purely on client-side UI guards.",
      },
      {
        t: "Document indexing and performance",
        d: "Designed normalized schema with relational indexing to support instant filtering across thousands of active client records and attached files.",
      },
    ],
    results:
      "Successfully replaced disparate spreadsheets with a unified system, giving managers instant visibility into client status and enforcing strict data compliance.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    category: "Full-Stack Web Application",
    name: "E-Commerce Application",
    short:
      "Complete Java Spring Boot commerce platform featuring inventory tracking, Spring Security authentication, shopping cart workflows, and relational order management.",
    problem:
      "Businesses need robust, cost-effective digital storefronts that handle product catalogs, secure customer logins, and order persistence without incurring recurring SaaS fees.",
    solution:
      "Architected a layered full-stack commerce application with Java, Spring Boot, and MySQL. Implemented Spring Security for authentication, JPA/Hibernate for relational persistence, and full order processing pipelines.",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "JPA / Hibernate", "Thymeleaf / React"],
    features: [
      "Categorized product catalog & search",
      "Secure user authentication & sessions",
      "Persistent cart & checkout workflow",
      "Admin inventory management & stock tracking",
      "Relational order history & invoice records",
      "Clean layered architecture (Controller/Service/Repo)",
    ],
    architecture: [
      "Storefront User Interface",
      "Spring Security & Controller Layer",
      "Spring Boot Service Layer",
      "MySQL Relational Database",
    ],
    challenges: [
      {
        t: "Concurrent order checkout integrity",
        d: "Prevented race conditions and inventory overselling during simultaneous purchases by enforcing database transactions with appropriate isolation levels and optimistic locking.",
      },
      {
        t: "Optimized relational fetching",
        d: "Tuned JPA entity mappings and fetch strategies (FetchType.LAZY + join fetch queries) to eliminate N+1 queries during catalog browsing.",
      },
    ],
    results:
      "Delivered a dependable, scalable commerce application ready for deployment, covering the complete commercial lifecycle from catalog browsing to fulfilled orders.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "remote-support",
    icon: Video,
    category: "Real-Time Application",
    name: "Real-Time Remote Support System",
    short:
      "Browser-native real-time support platform leveraging SignalR and WebRTC for instant peer-to-peer screen sharing and troubleshooting with zero client installations.",
    problem:
      "Traditional remote IT support forces non-technical clients to install heavy executable software, raising security flags and complicating quick assistance.",
    solution:
      "Developed a web-based remote support application utilizing SignalR for real-time connection signaling and WebRTC for direct browser-to-browser screen sharing and technical messaging.",
    tech: ["React", "SignalR", "WebRTC", "JavaScript", "ASP.NET Core"],
    features: [
      "Direct browser-to-browser screen sharing",
      "SignalR low-latency handshake signaling",
      "Real-time technical messaging stream",
      "Session initiation with one-time room tokens",
      "Graceful disconnect & cleanup handling",
    ],
    architecture: [
      "Client Browser (Support Requester)",
      "SignalR Hub (Signaling Server)",
      "WebRTC P2P Data & Media Channel",
      "Technician Diagnostic Dashboard",
    ],
    challenges: [
      {
        t: "WebRTC peer connection negotiation",
        d: "ICE candidate exchange and SDP offer/answer handshakes can fail over complex corporate firewalls. Built reliable fallback signaling and connection lifecycle management in SignalR.",
      },
      {
        t: "Clean connection termination",
        d: "Ensured media streams, audio contexts, and session tokens are promptly garbage-collected upon window close or network drop to prevent phantom sessions.",
      },
    ],
    results:
      "Achieved sub-5-second session connection times directly within standard web browsers without requiring users to download or configure any third-party binaries.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "biometric-attendance",
    icon: ScanFace,
    category: "AI & Biometric Application",
    name: "Face Biometric Attendance System",
    short:
      "Computer-vision attendance verification system pairing a responsive React interface with a FastAPI facial recognition service for frictionless verification.",
    problem:
      "Card punch systems are susceptible to proxy attendance and hardware wear. Traditional biometric fingerprint scanners require constant sanitization and dedicated hardware.",
    solution:
      "Engineered an automated face biometric attendance pipeline. A React webcam component captures user frames and passes them to a FastAPI microservice running facial recognition algorithms, logging verified attendance records instantly into the database.",
    tech: ["React", "FastAPI", "Python", "OpenCV", "Face Recognition", "Database"],
    features: [
      "One-time employee facial enrollment",
      "Sub-second facial match & identification",
      "Real-time attendance logging & timestamps",
      "Admin attendance reports & user management",
      "Quality threshold validation to prevent false matches",
    ],
    architecture: [
      "React Webcam Frontend",
      "FastAPI Processing Worker",
      "Facial Recognition Vector Matcher",
      "Attendance Database",
    ],
    challenges: [
      {
        t: "Lighting and perspective variations",
        d: "Variations in office lighting created false negatives during early tests. Refined the enrollment process to capture multiple reference angles and normalized frame contrast before vector extraction.",
      },
      {
        t: "Low-latency inference",
        d: "Optimized frame resolution and offloaded facial encoding to asynchronous Python workers, ensuring the React UI remains fluid during recognition.",
      },
    ],
    results:
      "Built a working, touchless attendance verification solution that completes check-ins in under two seconds per employee.",
    github: "https://github.com/haranHD",
    demo: null,
  },
];

import { Layers, ScanFace, Scale, Video, Gavel, ShoppingCart } from "lucide-react";

export const PROJECTS = [
  {
    id: "client-mgmt",
    icon: Layers,
    category: "Business Management Software",
    name: "Client Management System",
    short:
      "A centralized platform to manage clients, documents, workflows and business operations through a modern web interface.",
    problem:
      "Client records, documents and day-to-day workflow were scattered across spreadsheets and manual processes, making it hard to track status or enforce who could see what.",
    solution:
      "A single web platform centralizing client data and documents behind role-based access, with a dashboard giving an at-a-glance view of active work and a REST API backing the whole system.",
    tech: ["React", ".NET / ASP.NET Core", "PostgreSQL", "JWT", "REST API"],
    features: [
      "Client management", "Authentication", "Role-based access control",
      "Document management", "Dashboard", "REST APIs", "Database integration",
    ],
    architecture: ["Frontend", "API Layer", "Business Logic", "Database"],
    challenges: [
      { t: "Access control granularity", d: "Different roles needed different visibility into the same client records. Solved with a permission layer enforced at the API level, not just hidden in the UI." },
      { t: "Document handling at scale", d: "Storing and retrieving documents reliably without bloating the database — resolved by separating file storage from relational data and referencing it by ID." },
    ],
    results: "A working platform that replaced manual, spreadsheet-based client tracking with a structured system with proper access control and a real audit trail.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "biometric-attendance",
    icon: ScanFace,
    category: "Biometric / AI Application",
    name: "Face Biometric Attendance System",
    short:
      "A biometric attendance system combining a modern React interface with a backend service for face-based identification and attendance tracking.",
    problem:
      "Manual attendance tracking is slow and easy to falsify. A reliable, low-friction way to verify presence was needed without dedicated hardware.",
    solution:
      "A React frontend captures a face via webcam and sends it to a FastAPI backend running face recognition, which matches it against registered users and logs attendance in real time.",
    tech: ["React", "Vite", "FastAPI", "Face Recognition", "Database"],
    features: [
      "Face registration", "Face recognition", "Attendance tracking",
      "Admin / user roles", "API integration", "Real-time status",
    ],
    architecture: ["Frontend", "API Layer", "Face Recognition Service", "Database"],
    challenges: [
      { t: "Recognition accuracy", d: "Lighting and angle variation caused false negatives during testing. Addressed by tuning the matching threshold and requiring a clear registration capture." },
      { t: "Latency", d: "Kept the recognition request lightweight and asynchronous so the UI stays responsive while a match is processed." },
    ],
    results: "A functioning end-to-end prototype: register a face once, then get verified attendance in seconds without manual entry.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "weight-scale",
    icon: Scale,
    category: "System Integration / Industrial Software",
    name: "Industrial Weight Scale Integration",
    short: "A software integration layer for receiving and processing weight data from industrial weighing equipment.",
    problem:
      "Industrial weight scales communicate over raw TCP in a vendor-specific format. That data needed to reach a business application reliably, in real time, without manual re-entry.",
    solution:
      "A backend TCP listener receives raw weight readings, parses and validates them per product type, converts them to structured JSON, and forwards them into the business application's database — with a mock server built to simulate the scale during development.",
    tech: [".NET", "C#", "TCP", "JSON", "REST APIs", "Database"],
    features: [
      "TCP communication", "Weight data processing", "JSON messaging",
      "Device simulation", "Automatic data transmission", "Product-specific validation",
    ],
    architecture: ["Weight Scale", "TCP Communication", "Backend Service", "Data Processing", "Business Application", "Database"],
    challenges: [
      { t: "No physical hardware during development", d: "Built a TCP mock server that replayed realistic scale readings, so the integration could be developed and tested before the real device was available." },
      { t: "Malformed or partial readings", d: "Raw TCP streams can arrive fragmented. Added buffering and validation so incomplete packets don't corrupt a reading." },
    ],
    results: "A tested integration path from physical scale to business database, validated end-to-end against the mock server ahead of hardware deployment.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "remote-support",
    icon: Video,
    category: "Real-Time Application",
    name: "Real-Time Remote Support System",
    short: "A real-time remote support prototype using modern browser communication technologies.",
    problem: "Supporting a user remotely usually means installing third-party software. A lighter, browser-based path for real-time support was worth exploring.",
    solution: "SignalR handles signaling between the user and support developer, which negotiates a direct WebRTC connection for real-time communication once the session is established.",
    tech: ["React", "SignalR", "WebRTC", "JavaScript"],
    features: ["Real-time communication", "Screen sharing", "Connection management", "Signaling", "Remote support workflow"],
    architecture: ["User", "SignalR Signaling", "WebRTC", "Support Developer"],
    challenges: [
      { t: "Connection negotiation", d: "WebRTC needs a signaling channel to exchange connection details before a direct link forms. SignalR handled that handshake reliably." },
      { t: "Session state", d: "Tracking who is connected to whom, and cleaning up gracefully when either side disconnects, needed explicit session management on the backend." },
    ],
    results: "A working prototype demonstrating a full signaling-to-peer-connection flow for browser-based remote support.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "ecourt-tracker",
    icon: Gavel,
    category: "Automation / Backend",
    name: "eCourt Automation Tracker",
    short: "An automated tracker that retrieves and stores case data from a public court records portal.",
    problem: "Checking case status manually on a public portal is repetitive and easy to forget. That lookup needed to be automated and recorded over time.",
    solution: "A Playwright-driven automation script logs into the portal, retrieves case data and screenshots, and stores structured results through a documented REST API.",
    tech: [".NET", "Playwright", "PostgreSQL", "REST API", "Swagger"],
    features: ["Automated browser interaction", "Data retrieval", "Screenshot automation", "API backend", "Database storage"],
    architecture: ["Automation Script", "API Layer", "Database"],
    challenges: [
      { t: "Fragile page structure", d: "Public portals change markup without notice. Built selectors defensively and logged failures instead of crashing silently." },
    ],
    results: "A backend service that keeps case data current automatically instead of relying on manual portal checks.",
    github: "https://github.com/haranHD",
    demo: null,
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    category: "Full-Stack Web Application",
    name: "E-Commerce Application",
    short: "A server-rendered e-commerce application with product management and authentication.",
    problem: "A straightforward exercise in building a complete commerce flow — product catalog, persistence and user accounts — end to end on the JVM stack.",
    solution: "Spring Boot serves a Thymeleaf-rendered storefront and admin views backed by MySQL, with JPA handling persistence and Spring Security handling authentication.",
    tech: ["Java", "Spring Boot", "MySQL", "JPA", "Thymeleaf"],
    features: ["Product management", "CRUD operations", "Database integration", "Authentication", "Server-side rendering"],
    architecture: ["Frontend (Thymeleaf)", "Spring Boot", "Database"],
    challenges: [
      { t: "Entity relationships", d: "Modeling products, categories and orders correctly in JPA took a few iterations to avoid circular fetch issues." },
    ],
    results: "A complete, working storefront covering the full CRUD and auth lifecycle on a classic layered Java stack.",
    github: "https://github.com/haranHD",
    demo: null,
  },
];

import {
  Globe,
  AppWindow,
  Binary,
  Building2,
  Database,
  Network,
  Cpu,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive, high-performance websites and landing pages engineered with clean code, fast load times, and search-engine friendly structure.",
    tech: ["React", "Tailwind CSS", "Vite", "Responsive Design", "SEO"],
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    desc: "Interactive, full-stack web applications tailored to specific business logic, customer workflows, and operational requirements with smooth user experiences.",
    tech: ["React", "Node.js", "Java", "State Management", "Full-Stack"],
  },
  {
    icon: Binary,
    title: "REST API Development",
    desc: "Secure, well-documented, and scalable RESTful API endpoints and microservices built with strict data validation, predictable contracts, and token authentication.",
    tech: ["Spring Boot", "ASP.NET Core", "Express.js", "JWT", "Swagger / OpenAPI"],
  },
  {
    icon: Building2,
    title: "Business Application Development",
    desc: "Internal business systems, custom client portals, admin dashboards, and inventory platforms designed to streamline company operations and enforce role permissions.",
    tech: ["ERP / Dashboards", "Role-Based Access (RBAC)", "PostgreSQL", "MySQL", "Audit Logs"],
  },
  {
    icon: Database,
    title: "Database Integration",
    desc: "Relational and document database schema design, migration architecture, query optimization, connection pooling, and reliable persistence pipelines.",
    tech: ["MySQL", "MongoDB", "PostgreSQL", "JPA / Hibernate", "Entity Framework"],
  },
  {
    icon: Network,
    title: "System Integration",
    desc: "Connecting disparate third-party services, payment gateways, messaging protocols (TCP sockets / WebSockets), and external APIs into a cohesive software ecosystem.",
    tech: ["TCP Sockets", "WebSockets", "SignalR", "Payment Gateways", "Third-Party APIs"],
  },
  {
    icon: Cpu,
    title: "Automation Solutions",
    desc: "Automating repetitive data entry, scraping public web portals, scheduled reporting tasks, and background job pipelines that eliminate human error.",
    tech: ["Playwright", "Browser Automation", "Background Jobs", "Data Extraction", "Task Schedulers"],
  },
];

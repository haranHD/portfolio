import { MonitorSmartphone, Radio, Server, Database, Cpu, ShieldCheck, Globe } from "lucide-react";

export const LAYERS = [
  {
    id: "frontend",
    label: "Frontend",
    desc: "Interfaces built with React — responsive, accessible, and fast to use.",
    tech: ["React", "Vite", "Tailwind CSS"],
    icon: MonitorSmartphone,
  },
  {
    id: "api",
    label: "API Layer",
    desc: "REST, WebSocket and SignalR endpoints connecting client to server.",
    tech: ["REST", "WebSocket", "SignalR"],
    icon: Radio,
  },
  {
    id: "backend",
    label: "Backend",
    desc: "Business logic and services, in whichever stack fits the job.",
    tech: ["Spring Boot", "ASP.NET Core", "Node.js"],
    icon: Server,
  },
  {
    id: "database",
    label: "Database",
    desc: "Structured, reliable storage designed around how the data is used.",
    tech: ["PostgreSQL", "MySQL", "MongoDB"],
    icon: Database,
  },
  {
    id: "infra",
    label: "Infrastructure",
    desc: "Containers, servers and deployment pipelines that keep it running.",
    tech: ["Docker", "Linux", "Cloud"],
    icon: Cpu,
  },
];

export const INTEGRATIONS = [
  { label: "Authentication", icon: ShieldCheck },
  { label: "Real-Time", icon: Radio },
  { label: "External APIs", icon: Globe },
  { label: "Hardware", icon: Cpu },
];

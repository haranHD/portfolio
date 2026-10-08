export const PRIMARY_SKILLS = [
  { name: "Java", category: "Backend", desc: "Object-oriented backend services & enterprise architectures" },
  { name: "Spring Boot", category: "Backend", desc: "REST APIs, Spring Security, JPA/Hibernate & microservices" },
  { name: "React", category: "Frontend", desc: "Interactive modern SPAs, hooks, Tailwind UI & state flow" },
  { name: "Node.js", category: "Backend", desc: "Asynchronous runtime, Express.js APIs & middleware" },
  { name: "MongoDB", category: "Database", desc: "Flexible document data models, aggregation pipelines" },
  { name: "MySQL", category: "Database", desc: "Relational database modeling, indexing, ACID transactions" },
];

export const SKILL_GROUPS = {
  Frontend: [
    { name: "React", primary: true },
    { name: "JavaScript (ES6+)", primary: false },
    { name: "Tailwind CSS", primary: false },
    { name: "Vite", primary: false },
    { name: "HTML5 / CSS3", primary: false },
    { name: "Responsive UI", primary: false },
  ],
  Backend: [
    { name: "Java", primary: true },
    { name: "Spring Boot", primary: true },
    { name: "Node.js", primary: true },
    { name: "Express.js", primary: false },
    { name: "ASP.NET Core / .NET", primary: false },
    { name: "Python / FastAPI", primary: false },
  ],
  Database: [
    { name: "MySQL", primary: true },
    { name: "MongoDB", primary: true },
    { name: "PostgreSQL", primary: false },
    { name: "JPA / Hibernate", primary: false },
    { name: "Entity Framework Core", primary: false },
  ],
  "API & Integration": [
    { name: "RESTful APIs", primary: true },
    { name: "WebSocket & SignalR", primary: false },
    { name: "TCP Socket Protocols", primary: false },
    { name: "Third-Party & Payment APIs", primary: false },
    { name: "JWT Authentication", primary: false },
    { name: "Swagger / OpenAPI", primary: false },
  ],
  "Tools & Deployment": [
    { name: "Git & GitHub", primary: false },
    { name: "Docker", primary: false },
    { name: "Postman", primary: false },
    { name: "Linux / Bash", primary: false },
    { name: "Playwright Automation", primary: false },
    { name: "CI/CD & Cloud Basics", primary: false },
  ],
};

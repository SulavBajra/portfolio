import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Examination Seat Planning System",
    description:
      "Automated seat allocation system that ensures fair distribution of students, limits programs per room, and prevents adjacent same-subject seating.",
    tech: ["Spring Boot", "PostgreSQL", "Tailwind CSS", "Vanilla JS"],
    github: "https://github.com/SulavBajra/exam-seat-planner",
  },
  {
    title: "Finance Tracker",
    description:
      "A web application for tracking personal finances, including income, expenses, and budgeting.",
    tech: ["Java", "JSP", "Servlet", "Mysql", "Tomcat"],
    github: "https://github.com/SulavBajra/Finance-Tracker",
  },
  {
    title: "Job Portal",
    description:
      "A web application for job seekers to find and apply for jobs, and for employers to post job openings and manage applications. Handled Role based authentication and authorization.",
    tech: ["Laravel", "Mysql"],
    github: "https://github.com/SulavBajra/job-platform",
  },
];

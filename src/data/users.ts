export interface User {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  email: string;
  github?: string;
  linkedin?: string;
  skills: string[];
  projects: Project[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    bio: "Passionate full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. I love building scalable web applications and contributing to open-source projects.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    email: "sarah.johnson@example.com",
    github: "sarah-johnson",
    linkedin: "sarah-johnson-dev",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL"],
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management and payment processing.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        link: "https://github.com/sarah-johnson/ecommerce-platform"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, built using React and Socket.io.",
        technologies: ["React", "Socket.io", "Express.js", "PostgreSQL"],
        link: "https://github.com/sarah-johnson/task-manager"
      }
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Frontend Specialist",
    bio: "Frontend enthusiast specializing in modern React applications and user experience design. I focus on creating beautiful, accessible, and performant web interfaces.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    email: "michael.chen@example.com",
    github: "michael-chen",
    linkedin: "michael-chen-frontend",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Figma"],
    projects: [
      {
        id: 3,
        title: "Design System Library",
        description: "A comprehensive React component library with TypeScript support and extensive documentation.",
        technologies: ["React", "TypeScript", "Storybook", "Rollup"],
        link: "https://github.com/michael-chen/design-system"
      },
      {
        id: 4,
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing modern web design principles and smooth animations.",
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
        link: "https://github.com/michael-chen/portfolio"
      }
    ]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "DevOps Engineer",
    bio: "DevOps engineer with expertise in cloud infrastructure, CI/CD pipelines, and container orchestration. I help teams deploy and scale applications efficiently.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    email: "emily.rodriguez@example.com",
    github: "emily-rodriguez",
    linkedin: "emily-rodriguez-devops",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Python"],
    projects: [
      {
        id: 5,
        title: "Microservices Infrastructure",
        description: "A scalable microservices architecture deployed on Kubernetes with automated CI/CD pipelines.",
        technologies: ["Kubernetes", "Docker", "AWS", "Terraform"],
        link: "https://github.com/emily-rodriguez/microservices-k8s"
      },
      {
        id: 6,
        title: "Monitoring Dashboard",
        description: "A comprehensive monitoring solution for cloud applications with custom metrics and alerting.",
        technologies: ["Grafana", "Prometheus", "Python", "Docker"],
        link: "https://github.com/emily-rodriguez/monitoring-stack"
      }
    ]
  }
];
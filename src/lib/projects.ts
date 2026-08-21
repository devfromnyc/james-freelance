import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "stock-market",
    title: "Stock Market App",
    slug: "stock-market",
    description: "Real-time stock tracking with AI-powered predictions and portfolio management.",
    longDescription:
      "A comprehensive stock market application that provides real-time price tracking, AI-powered predictions, and portfolio management tools. Built with modern web technologies and integrated with financial data APIs for accurate, up-to-date market information.",
    techStack: ["React", "Next.js", "TypeScript", "Python", "TailwindCSS", "AI/ML"],
    features: [
      "Real-time stock price tracking",
      "AI-powered price predictions",
      "Portfolio management dashboard",
      "Market trend analysis",
      "Watchlist functionality",
    ],
    githubUrl: "https://github.com/devfromnyc/stock-market-app",
    screenshots: ["/images/projects/stock-market-1.png"],
    icon: "folder-chart",
    featured: true,
  },
  {
    id: "family-meal-planner",
    title: "Family Meal Planner",
    slug: "family-meal-planner",
    description: "AI-powered meal planning for families with smart grocery list generation.",
    longDescription:
      "A shared household meal planner that uses Gemini AI to draft toddler-friendly meals based on family preferences. Features weekly planning, recipe library, ratings system, and automatic grocery list aggregation.",
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Gemini AI"],
    features: [
      "AI-generated meal suggestions",
      "Weekly meal planning grid",
      "Recipe library with favorites",
      "Smart grocery list aggregation",
      "Family preference settings",
    ],
    githubUrl: "https://github.com/devfromnyc/family-meal-planner",
    liveUrl: "https://family-meal-planner-hazel-beta.vercel.app",
    screenshots: ["/images/projects/meal-planner-1.png"],
    icon: "folder-star",
    featured: true,
  },
  {
    id: "bucket-list",
    title: "Bucket List",
    slug: "bucket-list",
    description: "Goal tracking application to manage and achieve your life aspirations.",
    longDescription:
      "A beautiful goal tracking application that helps users organize, plan, and achieve their bucket list items. Features progress tracking, category organization, and milestone celebrations.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
    features: [
      "Goal categorization",
      "Progress tracking",
      "Milestone celebrations",
      "Photo memories",
      "Sharing capabilities",
    ],
    githubUrl: "https://github.com/devfromnyc/bucket-list",
    screenshots: ["/images/projects/bucket-list-1.png"],
    icon: "folder-star",
    featured: true,
  },
  {
    id: "ecommerce-dashboard",
    title: "Ecommerce Dashboard",
    slug: "ecommerce-dashboard",
    description: "Comprehensive analytics dashboard for Shopify store management.",
    longDescription:
      "A powerful analytics and management dashboard for Shopify stores. Provides real-time sales data, inventory management, customer insights, and AI-powered recommendations for store optimization.",
    techStack: ["React", "Next.js", "TypeScript", "Shopify API", "TailwindCSS"],
    features: [
      "Real-time sales analytics",
      "Inventory management",
      "Customer insights",
      "AI recommendations",
      "Multi-store support",
    ],
    githubUrl: "https://github.com/devfromnyc/ecommerce-dashboard",
    screenshots: ["/images/projects/ecommerce-1.png"],
    icon: "folder-code",
    featured: false,
  },
  {
    id: "ai-workflow-builder",
    title: "AI Workflow Builder",
    slug: "ai-workflow-builder",
    description: "Visual tool for creating and managing AI-powered business automations.",
    longDescription:
      "A drag-and-drop workflow builder that enables businesses to create AI-powered automations without coding. Connect various AI services, APIs, and data sources to build intelligent workflows.",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI", "TailwindCSS"],
    features: [
      "Visual workflow editor",
      "AI service integrations",
      "Custom trigger conditions",
      "Real-time monitoring",
      "Template library",
    ],
    githubUrl: "https://github.com/devfromnyc/ai-workflow-builder",
    screenshots: ["/images/projects/workflow-1.png"],
    icon: "folder-code",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

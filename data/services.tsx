import { 
  Target, 
  Search, 
  Code2, 
  Video, 
  Cpu,
  Rocket,
  Server,
  Link,
  Bot,
  LucideIcon
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  className: string;
  color: string;
  details: string[];
}

export const services: Service[] = [
  {
    slug: "predictive-intelligence",
    title: "Predictive Intelligence",
    description: "Deployment of custom analytical models that forecast market shifts with 99% accuracy. Data that builds empires.",
    longDescription: "We don't guess; we calculate. Our predictive intelligence engines ingest millions of data points—from social sentiment to macroeconomic indicators—to forecast market trends before they happen. This isn't just analytics; it's a time machine for your business strategy.",
    icon: Cpu,
    className: "md:col-span-2",
    color: "text-blue-500",
    details: [
       "Real-time Sentiment Analysis",
       "Competitor Move Prediction",
       "Trend Forecasting Algorithms",
       "Customer Behavior Modeling"
    ]
  },
  {
    slug: "steel-saas-stacks",
    title: "Steel SaaS Stacks",
    description: "Enterprise-grade cloud architectures engineered for total uptime and infinite scalability.",
    longDescription: "Build on bedrock. our Steel SaaS Stacks are designed for mission-critical applications where failure is not an option. We leverage serverless architectures, edge computing, and multi-region redundancy to ensure your platform is as unstoppable as your ambition.",
    icon: Server,
    className: "md:col-span-1",
    color: "text-[#00FFC2]",
    details: [
       "99.99% Uptime Guarantee",
       "Auto-Scaling Infrastructure",
       "Multi-Region Redundancy",
       "Bank-Grade Security Protocols"
    ]
  },
  {
    slug: "elite-engineering",
    title: "Elite Engineering",
    description: "Zero-latency full-stack codebases. We don't build features; we build structural advantages.",
    longDescription: "Code is leverage. Our engineering team writes clean, efficient, and modular code that scales effortlessly. We prioritize performance optimization at the kernel level, ensuring your application runs faster, smoother, and cheaper than the competition.",
    icon: Code2,
    className: "md:col-span-1",
    color: "text-blue-400",
    details: [
       "Full-Stack Optimization",
       "Microservices Architecture",
       "Legacy System Modernization",
       "High-Performance API Design"
    ]
  },
  {
    slug: "rapid-deployment",
    title: "Rapid Deployment",
    description: "Launch market-ready versions in weeks, not months. Tactical speed meets architectural integrity.",
    longDescription: "Speed wins. Our Rapid Deployment framework compresses traditional development cycles by 70% without sacrificing quality. We use pre-validated modules and CI/CD pipelines to get your product into the hands of users while your competitors are still drafting requirements.",
    icon: Rocket,
    className: "md:col-span-1",
    color: "text-slate-300",
    details: [
       "MVP in 4 Weeks",
       "Automated CI/CD Pipelines",
       "Containerized Environments",
       "Rapid Prototyping"
    ]
  },
  {
    slug: "market-mastery",
    title: "Market Mastery",
    description: "Campaign orchestration that hits the target every single time. ROI isn't an accident; it's a blueprint.",
    longDescription: "Dominate the noise. We combine psychological triggers with algorithmic targeting to create campaigns that are impossible to ignore. From paid acquisition to viral loops, we engineer growth mechanisms that compound over time.",
    icon: Target,
    className: "md:col-span-2",
    color: "text-[#00FFC2]",
    details: [
       "Algorithmic Ad Targeting",
       "Conversion Rate Optimization",
       "Viral Loop Engineering",
       "Cross-Channel Orchestration"
    ]
  },
  {
    slug: "dominance-assets",
    title: "Dominance Assets",
    description: "High-precision video and visual assets designed to command attention in crowded digital spaces.",
    longDescription: "Visuals that convert. Our creative studio produces high-fidelity assets—3D renders, motion graphics, and cinematic video—that elevate your brand perception instantly. We don't just make things look good; we make them perform.",
    icon: Video,
    className: "md:col-span-2",
    color: "text-blue-600",
    details: [
       "3D Motion Graphics",
       "Cinematic Brand Films",
       "Interactive WebGL Experiences",
       "High-Fidelity UI/UX Design"
    ]
  },
  {
    slug: "search-authority",
    title: "Search Authority",
    description: "Surgical SEO strategies that place your brand at the absolute peak of intent. Own the narrative.",
    longDescription: "Be the answer. We reverse-engineer search algorithms to place your brand at the top of high-intent queries. Our strategy goes beyond keywords; we build topical authority and domain trust that secures your position for the long haul.",
    icon: Search,
    className: "md:col-span-1",
    color: "text-slate-100",
    details: [
       "Semantic Core Mapping",
       "Technical SEO Audits",
       "Authority Link Building",
       "Zero-Click Search Strategy"
    ]
  },
  {
    slug: "ai-automation-agents",
    title: "AI Agent Systems",
    description: "Autonomous AI workflows that replace manual labor with 24/7 intelligent digital workers.",
    longDescription: "Scale without headcount. We deploy autonomous AI agents that handle customer support, lead qualification, and complex data entry tasks. These aren't chatbots; they are digital employees that work 24/7 with zero error rate.",
    icon: Bot,
    className: "md:col-span-1",
    color: "text-[#00FFC2]",
    details: [
       "Customer Support Autopilots",
       "Intelligent Document Processing",
       "Sales Outreach Automation",
       "Workflow Orchestration"
    ]
  }
];

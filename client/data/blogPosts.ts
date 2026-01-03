export interface BlogPost {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const blogPosts: Record<string, BlogPost> = {
  blocrate: {
    slug: "blocrate",
    title: "BlocRate — Privacy‑Preserving Credit Infrastructure",
    company: "BlocRate",
    period: "2025",
    description: "Building a privacy-preserving global credit router focused on trust, privacy, and access.",
    sections: [
      {
        title: "What I Did",
        content: [
          "Designed and architected a privacy-preserving credit infrastructure system that enables global credit routing while maintaining user privacy.",
          "Built core backend systems for credit scoring and risk assessment using privacy-preserving techniques.",
          "Developed APIs for seamless integration with financial institutions and credit bureaus.",
        ],
      },
      {
        title: "How I Did It",
        content: [
          "Implemented zero-knowledge proof protocols to enable credit verification without exposing sensitive user data.",
          "Used modern cryptographic techniques including homomorphic encryption for secure computations.",
          "Built scalable microservices architecture using TypeScript, Node.js, and Express.",
          "Designed RESTful APIs with proper authentication and rate limiting mechanisms.",
        ],
      },
      {
        title: "What I Worked On",
        content: [
          "Credit scoring algorithms and risk assessment models",
          "Privacy-preserving data aggregation systems",
          "API gateway and service orchestration",
          "Database design for handling encrypted credit data",
          "Integration with external credit bureaus and financial APIs",
        ],
      },
    ],
  },
  benefi: {
    slug: "benefi",
    title: "Benefi",
    company: "Benefi",
    period: "2022 – Present",
    description: "Software engineer at a US-based company building financial infrastructure.",
    sections: [
      {
        title: "What I Did",
        content: [
          "Developed end-to-end payment systems integrating with Stripe and other payment processors.",
          "Built full cryptocurrency transaction flows including real-time swapping of crypto assets into stablecoins.",
          "Designed and implemented scalable backend systems for financial infrastructure.",
        ],
      },
      {
        title: "How I Did It",
        content: [
          "Integrated Stripe payment APIs to handle card payments, subscriptions, and webhooks.",
          "Built cryptocurrency exchange integrations using WebSocket connections for real-time price feeds.",
          "Implemented atomic swap mechanisms for secure crypto-to-stablecoin conversions.",
          "Created robust error handling and retry mechanisms for financial transactions.",
          "Used event-driven architecture with message queues for reliable transaction processing.",
        ],
      },
      {
        title: "What I Worked On",
        content: [
          "Payment processing systems and Stripe integrations",
          "Cryptocurrency transaction pipelines",
          "Real-time price aggregation and swap execution",
          "Financial API design and implementation",
          "Transaction monitoring and reconciliation systems",
          "Scalable backend infrastructure for high-volume transactions",
        ],
      },
    ],
  },
};


import type { SiteBlueprint } from "@/lib/content/schema";

export const siteContent: SiteBlueprint = {
  positioning: {
    primary: "Staff Full-Stack Engineer",
    secondary: "AI-capable product engineer",
    tone: "calm, credible, modern, direct",
    audience: ["recruiters", "hiring managers", "senior engineers", "engineering leaders"],
  },
  home: {
    hero: {
      eyebrow: "Staff-Leaning Full-Stack Engineer",
      headline: "I build product-grade software for messy, real workflows and use AI only where it earns its place.",
      subheadline:
        "Staff-leaning full-stack engineer shipping across interfaces, backend systems, and AI-enabled workflows with a bias toward clear scope, durable architecture, and actual usability.",
      supportingLine:
        "Based in San Jose, California. Strongest when product judgment, system design, and hands-on delivery all need to hold up at the same time.",
      primaryCta: { label: "View Flagship Work", href: "/projects/localllm" },
      secondaryCta: { label: "See Resume", href: "/resume" },
      terminal: {
        label: "portfolio.sh",
        introLine: "Ask a direct question. The terminal answers first, then points you to the right work.",
        promptPlaceholder: "try: what have you built with local llms",
        helpText: "Router first. AI only steps in when the site content needs synthesis.",
        exampleCommands: [
          "show AI projects",
          "what have you built with local llms",
          "how do you work",
          "show finance work",
          "resume",
          "what roles are you looking for",
        ],
        initialResponse: {
          message: "I can summarize relevant work, answer from the portfolio content, and get you to the right page without making you hunt for it.",
          suggestions: ["show AI projects", "how do you work", "resume"],
        },
      },
    },
    credibilityStrip: {
      title: "What I bring",
      items: [
        "Full-stack ownership from UI to backend workflows",
        "Product-focused engineering, not feature churn",
        "AI integration grounded in real systems",
        "Strong preference for scoped, shippable solutions",
      ],
    },
    selectedWork: {
      title: "Selected Work",
      intro:
        "A small set of projects that show product judgment, technical range, and how I make ambiguous software feel concrete and usable.",
      projects: [
        {
          name: "localLLM",
          summary:
            "A self-hosted local AI node for Open WebUI and Ollama, built around operator docs, model routing, and deployment workflows.",
          tags: ["AI Systems", "Full-Stack", "Local Infrastructure"],
        },
        {
          name: "Debt Crusher",
          summary:
            "A local-first debt payoff workspace with explainable recommendation logic, cash planning, and decision support for real financial tradeoffs.",
          tags: ["Finance", "Product Engineering", "Local-First"],
        },
        {
          name: "WealthPilot",
          summary:
            "A portfolio analysis app combining deterministic scoring with PM-style AI memo generation for more structured investment workflows.",
          tags: ["AI Integration", "Finance", "Full-Stack"],
        },
        {
          name: "Price Pin",
          summary:
            "A map-first product availability app focused on nearby inventory, price confidence, and community-driven reporting.",
          tags: ["Location Systems", "Product UX", "Full-Stack"],
        },
      ],
      cta: { label: "See All Projects", href: "/projects" },
    },
    strengths: {
      title: "How I Work",
      intro:
        "My best work happens when engineering is closely tied to product judgment, workflow design, and disciplined scope.",
      items: [
        {
          title: "Full-Stack Delivery",
          body:
            "I am comfortable owning product behavior end to end, from interface and information architecture to backend workflows, data handling, and release readiness.",
        },
        {
          title: "Product-Minded Systems",
          body:
            "I care about what the user is actually trying to get done. I prefer systems that reduce friction, surface the right decisions, and stay legible as they grow.",
        },
        {
          title: "Pragmatic AI",
          body:
            "I treat AI as a capability inside real software, not as a headline. The real work is usually in workflow design, routing, guardrails, and making the output genuinely usable.",
        },
        {
          title: "Scope Control",
          body:
            "I prefer strong boundaries, incremental progress, and clear tradeoffs over speculative architecture and avoidable complexity.",
        },
      ],
    },
    caseStudyPreview: {
      title: "Case Studies",
      intro:
        "The interesting part is rarely just what got built. It is the problem framing, the tradeoffs, and the decisions that shaped the outcome.",
      items: [
        {
          title: "localLLM",
          body:
            "A local AI system shaped around deployment reality, operator usability, model access, and keeping the stack narrow enough to stay practical.",
        },
        {
          title: "Debt Crusher",
          body:
            "A finance tool built around explainability and user trust, where recommendation quality matters as much as the interface delivering it.",
        },
      ],
      cta: { label: "Read Case Studies", href: "/case-studies" },
    },
    aboutPreview: {
      title: "About",
      copy:
        "I like building software that feels useful, understandable, and grounded in how people actually work. I am especially drawn to products where engineering judgment matters as much as implementation speed.",
      cta: { label: "Read More", href: "/about" },
    },
    contactCta: {
      title: "Open to product and platform work with real depth",
      copy:
        "I am interested in Staff-leaning full-stack roles where product ownership, system design, and pragmatic AI all matter in the same conversation.",
      cta: { label: "Start a Conversation", href: "/contact" },
    },
  },
  about: {
    intro: {
      title: "About Me",
      body:
        "I am Bhavya Dalwadi, a full-stack engineer based in San Jose, California. I build product-focused software across AI workflows, finance tools, self-hosted systems, and interactive web applications.\n\nMy strongest work tends to sit where product thinking and engineering execution need to stay tightly connected. I care about software that feels clear to users, defensible to engineers, and practical to operate once it leaves the prototype stage.",
    },
    howIWork: {
      title: "How I Work",
      body:
        "I do my best work when I can own meaningful parts of a product end to end. That usually starts with getting the fundamentals right: what the user is trying to do, where the workflow breaks, what the system should optimize for, and what tradeoffs are actually worth making.\n\nI prefer incremental, production-safe progress over broad rewrites. I like strong boundaries, clear responsibilities, and user-facing behavior that does not need a long explanation to make sense.",
    },
    technicalFocus: {
      title: "Technical Focus",
      intro: "The stack changes from project to project. The throughline does not: practical product engineering with clear system behavior.",
      areas: [
        {
          title: "Frontend and UX",
          body:
            "Designing interfaces that feel clear, fast, and deliberate, especially when workflow quality matters more than visual noise.",
        },
        {
          title: "Backend and Application Logic",
          body:
            "Designing the application logic, state transitions, decision systems, and supporting services that make product behavior reliable.",
        },
        {
          title: "AI-Enabled Systems",
          body:
            "Integrating LLMs and AI workflows into real products with attention to routing, output quality, user trust, and operational reality.",
        },
        {
          title: "Local-First and Self-Hosted Tools",
          body:
            "Building systems that give users more control over their data, environment, and workflows without making the product harder to live with.",
        },
      ],
    },
    whatILookFor: {
      title: "What I Look For",
      body:
        "I am most interested in roles where full-stack ownership, product judgment, and system design all matter. The best fit problems usually involve ambiguous workflows, real user needs, and enough room to make thoughtful technical tradeoffs instead of just shipping tickets.\n\nI am especially drawn to teams building product-grade tools, decision-support applications, AI-assisted workflows, and systems where reliability and clarity matter as much as raw velocity.",
    },
    personalNote: {
      title: "Beyond the Resume",
      body:
        "Outside the usual portfolio framing, I am consistently drawn to local AI, home systems, finance workflows, and interactive tools. I like software that solves real problems and respects how people actually operate day to day.",
    },
  },
  projects: {
    intro: {
      title: "Projects",
      body:
        "These are the projects that best reflect how I think: clear product framing, disciplined scope, and systems built to hold up beyond the first demo.",
    },
    featured: [
      {
        name: "localLLM",
        oneLiner:
          "Self-hosted AI node for Open WebUI and Ollama, shaped around operator usability, model routing, and deployment reality.",
        whyItMatters: "Shows how I turn AI capability into a usable system instead of a thin integration demo.",
        links: [
          { label: "Repo", href: "#" },
          { label: "Case Study", href: "/case-studies" },
        ],
      },
      {
        name: "Debt Crusher",
        oneLiner:
          "Local-first debt planning workspace with explainable recommendations and user-controlled decision flows.",
        whyItMatters: "Shows product judgment, trust-centered UX, and decision-support thinking in a high-consequence domain.",
        links: [
          { label: "Repo", href: "#" },
          { label: "Case Study", href: "/case-studies" },
        ],
      },
      {
        name: "WealthPilot",
        oneLiner:
          "Portfolio analysis tool combining structured scoring with AI-assisted PM-style memos.",
        whyItMatters: "Shows how AI can support decision quality without replacing underlying analytical structure.",
        links: [{ label: "Repo", href: "#" }],
      },
      {
        name: "Price Pin",
        oneLiner:
          "Map-first product availability app built around nearby inventory, price confidence, and community reporting.",
        whyItMatters: "Shows geo-aware product design and the ability to shape messy multi-input workflows into something usable.",
        links: [{ label: "Repo", href: "#" }],
      },
      {
        name: "Kadi Tiri",
        oneLiner:
          "Multiplayer trick-taking game with bidding, partner selection, trick play, and server-owned room state.",
        whyItMatters: "Shows real-time state handling, game logic clarity, and interactive systems design under live constraints.",
        links: [{ label: "Repo", href: "#" }],
      },
      {
        name: "HA Home",
        oneLiner:
          "Home Assistant dashboard suite with custom Lovelace cards for room intelligence and energy visibility.",
        whyItMatters: "Shows systems thinking, automation judgment, and practical interest in operator-friendly home tooling.",
        links: [{ label: "Repo", href: "#" }],
      },
    ],
    archive: {
      title: "Earlier Work",
      body:
        "Earlier work shaped the foundation: backend fundamentals, analytical tooling, and early web application builds. It is not the center of the portfolio now, but it is part of how I learned to ship across different stacks.",
      items: [
        {
          title: "Backend and language foundations",
          body: "Earlier work across Java, PHP, and Python built the habits around application structure, business logic, and debugging that still show up in my current work.",
          stack: ["Java", "PHP", "Python"],
        },
        {
          title: "Analytical and technical coursework projects",
          body: "MATLAB and other analytical projects sharpened how I think about systems, constraints, and translating problem statements into working models.",
          stack: ["MATLAB", "Analytical Tooling"],
        },
        {
          title: "Early frontend builds",
          body: "Frontend work before the current portfolio phase helped build the instinct for usability, interaction flow, and clarity in the final product surface.",
          stack: ["Frontend", "Interaction Design"],
        }
      ],
    },
  },
  caseStudies: {
    intro: {
      title: "Case Studies",
      body:
        "These projects are the clearest examples of how I approach product engineering: define the real problem, keep scope honest, make strong tradeoffs, and build toward usable outcomes.",
    },
    entries: [
      {
        project: "localLLM",
        problem:
          "Local AI tooling often looks promising in demos but falls apart under operator friction, unclear setup, and weak deployment guidance.",
        role:
          "Owned the product framing, implementation direction, operator workflow shape, and deployment-oriented structure.",
        technicalApproach:
          "Built the system around self-hosted model workflows, Open WebUI compatibility, operator documentation, and routing decisions that keep the setup practical instead of sprawling.",
        challenges: "Balancing flexibility with simplicity, especially in a space that quickly drifts into platform sprawl.",
        outcome:
          "A more usable and grounded local AI system that reflects real deployment and day-to-day workflow needs.",
      },
      {
        project: "Debt Crusher",
        problem:
          "Debt tools often overwhelm users with spreadsheets, generic calculators, or opaque recommendations.",
        role:
          "Owned the workflow design, product behavior, recommendation framing, and overall application direction.",
        technicalApproach:
          "Built a local-first planning workspace with explainable recommendation logic, explicit user control, and flows designed around real financial decisions.",
        challenges: "Making recommendations useful without making them feel arbitrary or overly algorithmic.",
        outcome:
          "A product that is more actionable, understandable, and trustworthy for day-to-day decision-making.",
      },
      {
        project: "WealthPilot",
        problem:
          "Portfolio tools often split into either raw data dashboards or shallow AI commentary with little structure.",
        role:
          "Owned the product framing and the blend between deterministic analysis and AI-assisted memo generation.",
        technicalApproach:
          "Combined selector-first workflows, scoring logic, and AI output in a way that preserves user trust and analytical structure.",
        outcome:
          "A sharper model for how AI can support decision workflows without replacing the underlying logic.",
        optional: true,
      },
    ],
  },
  resume: {
    intro: {
      title: "Resume",
      body: "For the full background, selected work, and role fit, use the structured summary below or download the PDF.",
    },
    snapshot: {
      title: "Snapshot",
      items: [
        "Staff-leaning Full-Stack Engineer",
        "Product-focused builder with strong system judgment",
        "Experience spanning AI workflows, finance products, self-hosted systems, and interactive applications",
        "Based in San Jose, California",
      ],
    },
    highlights: {
      title: "Highlights",
      body:
        "I work best on products where engineering ownership includes system design, workflow clarity, and practical delivery. The strongest fit is where product thinking and application engineering need to move together.",
    },
    primaryCta: { label: "Download PDF Resume", href: "/resume/bhavya-dalwadi-resume.pdf" },
    secondaryCta: { label: "Start a Conversation", href: "/contact" },
  },
  contact: {
    intro: {
      title: "Contact",
      body:
        "I am open to full-stack engineering opportunities where product ownership, system design, and pragmatic AI all matter in the same role.",
    },
    methods: {
      title: "Reach Out",
      entries: [
        {
          label: "Start here",
          value: "Use the contact form",
          href: "#contact-form",
          note: "Best for role conversations and direct outreach.",
        },
        {
          label: "Resume",
          value: "View the structured summary or download the PDF",
          href: "/resume",
          note: "Best for role fit, experience framing, and background.",
        },
        {
          label: "Projects",
          value: "Review implementation work and product thinking",
          href: "/projects",
          note: "Best for seeing how I actually build and scope software.",
        }
      ],
    },
    closing: {
      title: "Best fit",
      body:
        "The strongest fit is with teams building real products with meaningful workflows, thoughtful engineering tradeoffs, and room for full-stack ownership instead of narrow ticket execution.",
    },
  },
  writing: {
    intro: {
      title: "Writing",
      body:
        "Notes on product engineering, AI workflows, system decisions, and building software that stays grounded in real use.",
    },
    topics: {
      title: "Suggested topic areas",
      items: [
        "AI integration in real products",
        "Local-first and self-hosted workflows",
        "Product-minded full-stack engineering",
        "Engineering tradeoffs and scope control",
      ],
    },
  },
};

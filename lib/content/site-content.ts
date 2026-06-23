import type { SiteBlueprint } from "@/lib/content/schema";

export const siteContent: SiteBlueprint = {
  positioning: {
    primary: "Senior Full-Stack Engineer",
    secondary: "AI-capable product engineer",
    tone: "calm, credible, modern, direct",
    audience: ["recruiters", "hiring managers", "senior engineers", "engineering leaders"],
  },
  home: {
    hero: {
      eyebrow: "Senior Full-Stack Engineer",
      headline: "Product-grade software for messy workflows. AI where it helps. Clear systems where it counts.",
      subheadline:
        "I work across interface, backend, and workflow layers with a bias toward durable architecture, restrained scope, and software people can actually operate.",
      supportingLine:
        "San Jose, CA. Best fit for Senior and Staff-level product and platform roles where system design, full-stack delivery, and engineering judgment all matter.",
      primaryCta: { label: "View Flagship Work", href: "/projects/localllm" },
      secondaryCta: { label: "See Resume", href: "/resume" },
      terminal: {
        label: "portfolio.sh",
        introLine: "Ask a direct question. The terminal answers first, then points you to the right work.",
        promptPlaceholder: "try: how many years of experience do you have",
        helpText: "Router first. AI only steps in when the site content needs synthesis.",
        exampleCommands: [
          "how many years of experience do you have",
          "what is your current role",
          "show AI projects",
          "how do you work",
          "what roles are you looking for",
          "show finance work",
          "education",
          "where are you based",
          "resume",
        ],
        initialResponse: {
          message: "Ask about experience, current role, projects, AI work, resume, or what kind of roles I am targeting.",
          suggestions: [
            "how many years of experience do you have",
            "what is your current role",
            "show AI projects",
            "how do you work",
            "what roles are you looking for",
            "show finance work",
            "education",
            "where are you based",
            "resume",
          ],
        },
      },
      matcher: {
        label: "Role Fit Matcher",
        introLine: "Pick the lens that matches the role. I’ll surface the strongest proof fast.",
        defaultRoleId: "staff-full-stack",
        roles: [
          {
            id: "staff-full-stack",
            label: "Senior Full-Stack",
            summary:
              "Strong fit for roles that need product judgment, system design, and hands-on delivery to work together. The throughline is turning ambiguous workflows into usable software with clear scope and durable architecture.",
            proofPoints: [
              "Owned product framing and operator workflow shape for localLLM, not just implementation details.",
              "Ships across interface, backend, and deployment concerns instead of staying in one layer.",
              "Prefers scoped, explainable systems that stay legible as they grow."
            ],
            links: [
              { label: "View flagship work", href: "/projects/localllm" },
              { label: "View all projects", href: "/#projects" },
              { label: "See resume", href: "/resume" }
            ]
          },
          {
            id: "ai-product-engineer",
            label: "AI Product Engineer",
            summary:
              "Best fit for teams using AI inside real products rather than as a headline feature. The work consistently emphasizes routing, output quality, operator usability, and practical system boundaries.",
            proofPoints: [
              "Built localLLM around model access, operator workflows, and deployment reality.",
              "WealthPilot blends deterministic analysis with AI memo generation instead of relying on vague chat output.",
              "Treats AI as one capability inside a product, with guardrails and workflow design doing the real work."
            ],
            links: [
              { label: "Explore AI projects", href: "/#projects" },
              { label: "Read localLLM", href: "/projects/localllm" },
              { label: "Open resume", href: "/resume" }
            ]
          },
          {
            id: "platform-systems",
            label: "Platform / Systems",
            summary:
              "Strong match for platform-leaning roles where reliability, workflow clarity, and system behavior matter as much as code volume. The portfolio shows repeated attention to operator needs and practical infrastructure choices.",
            proofPoints: [
              "localLLM focused on deployment guidance, model routing, and operator confidence.",
              "Built local and self-hosted workflows without turning them into sprawling internal platforms.",
              "Comfortable shaping backend logic and system behavior around real operational constraints."
            ],
            links: [
              { label: "See localLLM", href: "/projects/localllm" },
              { label: "About how I work", href: "/resume" },
              { label: "Review resume", href: "/resume" }
            ]
          },
          {
            id: "product-minded-engineer",
            label: "Product-Minded Engineer",
            summary:
              "Best fit for teams that need engineering judgment tied closely to user workflows and product decisions. The work consistently pushes toward clarity, trust, and software that feels understandable without extra explanation.",
            proofPoints: [
              "Debt Crusher centers explainability and explicit user control in a sensitive finance workflow.",
              "Price Pin emphasizes confidence signals and nearby decision-making instead of feature sprawl.",
              "Strong preference for reducing friction and surfacing the right decisions for the user."
            ],
            links: [
              { label: "Browse projects", href: "/#projects" },
              { label: "View projects", href: "/#projects" },
              { label: "Contact Bhavya", href: "/#contact" }
            ]
          },
          {
            id: "finance-decision-tools",
            label: "Finance / Decision Tools",
            summary:
              "Useful fit for product teams building finance, analysis, or decision-support tools where trust and structure matter. The finance work here leans toward explainable logic, deliberate workflow design, and practical guidance over noise.",
            proofPoints: [
              "Debt Crusher turns debt planning into an explainable local-first workflow.",
              "WealthPilot combines structured scoring with AI-assisted synthesis for investment analysis.",
              "Focus stays on decision quality and user confidence, not just dashboards or automation."
            ],
            links: [
              { label: "See all projects", href: "/#projects" },
              { label: "View projects", href: "/#projects" },
              { label: "See resume", href: "/resume" }
            ]
          }
        ]
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
      cta: { label: "See All Projects", href: "/#projects" },
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
        "I care less about feature tours and more about the decisions underneath them: what had to stay simple, what had to be durable, and what would actually hold up in use.",
      items: [
        {
          title: "localLLM",
          body:
            "A local AI node shaped around deployment reality: model routing, operator ergonomics, and just enough infrastructure to stay useful without turning into platform sprawl.",
        },
        {
          title: "Debt Crusher",
          body:
            "A decision tool for debt payoff planning where trust is part of the product, so the ranking logic, explanations, and user controls had to feel as solid as the UI.",
        },
      ],
      cta: { label: "Read Case Studies", href: "/case-studies" },
    },
    aboutPreview: {
      title: "About",
      copy:
        "I like building software that feels useful, understandable, and grounded in how people actually work. I am especially drawn to products where engineering judgment matters as much as implementation speed.",
      cta: { label: "Read More", href: "/resume" },
    },
    contactCta: {
      title: "Open to product and platform work with real depth",
      copy:
        "I am interested in Senior and Staff-level full-stack roles where product ownership, system design, and pragmatic AI all matter in the same conversation.",
      cta: { label: "Start a Conversation", href: "/#contact" },
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
      title: "Outside Work",
      items: [
        "Local AI and self-hosted model workflows",
        "Home automation and operator-friendly tooling",
        "Finance and decision-support products",
        "Interactive and game systems",
      ],
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
          { label: "GitHub", href: "https://github.com/bhavyadalwadi" },
        ],
      },
      {
        name: "Debt Crusher",
        oneLiner:
          "Local-first debt planning workspace with explainable recommendations and user-controlled decision flows.",
        whyItMatters: "Shows product judgment, trust-centered UX, and decision-support thinking in a high-consequence domain.",
        links: [
          { label: "GitHub", href: "https://github.com/bhavyadalwadi" },
        ],
      },
      {
        name: "WealthPilot",
        oneLiner:
          "Portfolio analysis tool combining structured scoring with AI-assisted PM-style memos.",
        whyItMatters: "Shows how AI can support decision quality without replacing underlying analytical structure.",
        links: [{ label: "GitHub", href: "https://github.com/bhavyadalwadi" }],
      },
      {
        name: "Price Pin",
        oneLiner:
          "Map-first product availability app built around nearby inventory, price confidence, and community reporting.",
        whyItMatters: "Shows geo-aware product design and the ability to shape messy multi-input workflows into something usable.",
        links: [{ label: "GitHub", href: "https://github.com/bhavyadalwadi" }],
      },
      {
        name: "Kadi Tiri",
        oneLiner:
          "Multiplayer trick-taking game with bidding, partner selection, trick play, and server-owned room state.",
        whyItMatters: "Shows real-time state handling, game logic clarity, and interactive systems design under live constraints.",
        links: [{ label: "GitHub", href: "https://github.com/bhavyadalwadi" }],
      },
      {
        name: "HA Home",
        oneLiner:
          "Home Assistant dashboard suite with custom Lovelace cards for room intelligence and energy visibility.",
        whyItMatters: "Shows systems thinking, automation judgment, and practical interest in operator-friendly home tooling.",
        links: [{ label: "GitHub", href: "https://github.com/bhavyadalwadi" }],
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
        "Senior Full-Stack Engineer",
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
    secondaryCta: { label: "Start a Conversation", href: "/#contact" },
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
          label: "LinkedIn",
          value: "Message directly on LinkedIn",
          href: "https://www.linkedin.com/in/bhavyadalwadi/",
          note: "Best for direct outreach and quick replies.",
        },
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
  ui: {
    navigation: {
      ariaLabel: "Primary",
      homeAriaLabel: "Bhavya Dalwadi home",
      brandName: "Bhavya Dalwadi",
      brandPrimary: "Senior Engineer",
      brandSecondary: "San Jose, CA",
      links: [
        { href: "/resume", label: "Resume" },
      ],
      writingLink: { href: "/writing", label: "Writing" },
    },
    homePage: {
      flagshipEyebrow: "Flagship Case Study",
      flagshipStandoutLabel: "Why It Stands Out",
      flagshipStatus: "Shipped thinking, not demo polish",
      flagshipOwnershipLabel: "What I Owned",
      flagshipOutcomeLabel: "Outcome",
      flagshipPrimaryLinkLabel: "Read the full case study",
      flagshipSecondaryLinkLabel: "Browse all projects",
      flagshipProofPointsLabel: "Proof Points",
      flagshipNote: "This project is the clearest example of how I shape AI into an operator-friendly product instead of a vague capability layer.",
      selectedWorkEyebrow: "Selected Work",
      featuredProjectLabel: "Featured Project",
      selectedWorkTagsAriaSuffix: "tags",
      approachEyebrow: "Approach",
      caseStudiesEyebrow: "Case Studies",
      aboutEyebrow: "About",
      contactEyebrow: "Open to Roles",
    },
    aboutPage: {
      eyebrow: "About",
    },
    projectsPage: {
      eyebrow: "Projects",
      featuredProjectLabel: "Featured Project",
      whyItMattersLabel: "Why it matters",
      archiveEyebrow: "Archive",
      stackAriaSuffix: "stack",
    },
    caseStudiesPage: {
      eyebrow: "Case Studies",
      caseStudyLabel: "Case Study",
      optionalCaseStudyLabel: "Optional Case Study",
      problemLabel: "Problem",
      roleLabel: "Role and ownership",
      technicalApproachLabel: "Technical approach",
      challengesLabel: "Challenges",
      outcomeLabel: "Outcome",
    },
    resumePage: {
      eyebrow: "Resume",
      viewModeAriaLabel: "Resume view mode",
      resumeTabLabel: "Resume",
      jsonTabLabel: "JSON",
      skillsLabel: "Skills",
      primarySkillsLabel: "Primary",
      aiSkillsLabel: "AI",
      platformSkillsLabel: "Platform",
      targetDirectionLabel: "Target Direction",
      experienceLabel: "Experience",
      leadershipSignalsLabel: "Leadership Signals",
      educationLabel: "Education",
      structuredResumeLabel: "Structured Resume Data",
      structuredResumeNote: "Same resume content, exposed in a machine-friendly form for LLM and tooling workflows.",
      copyJsonLabel: "Copy JSON",
      copiedJsonLabel: "Copied",
      downloadJsonLabel: "Download JSON",
      machineReadableNote: "The page is driven from a structured resume data model. If the PDF is unavailable, use Contact and I will share the latest copy directly.",
      presentLabel: "Present",
      downloadFileName: "bhavya-dalwadi-resume.json",
    },
    contactPage: {
      eyebrow: "Contact",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        sendLabel: "Send message",
        sendingLabel: "Sending...",
        successMessage: "Thanks. Your message has been received.",
        serviceUnavailableMessage: "Submission service unavailable. Please try again shortly.",
        sourcePageDefault: "/",
      },
      validation: {
        name: "Name must be between 1 and 80 characters.",
        email: "Email must be valid.",
        message: "Message must be between 20 and 2000 characters.",
        subject: "Subject must be 120 characters or fewer.",
      },
    },
    projectDetailPage: {
      eyebrow: "Case Study Detail",
      problemLabel: "Problem",
      contributionLabel: "Contribution",
      outcomesLabel: "Outcomes",
      notFoundTitle: "Project not found",
      notFoundDescription: "This case study is unavailable or has been unpublished.",
    },
    projectCards: {
      featuredCaseStudyLabel: "Featured Case Study",
      featuredProjectLabel: "Featured Project",
      projectNoteLabel: "Project Note",
      projectTagsAriaLabel: "Project tags",
      mediaUnavailableLabel: "Media preview unavailable",
      outcomeLabel: "Outcome",
      readCaseStudyLabel: "Read case study",
      openDetailsLabel: "Open details",
    },
    terminal: {
      responseLabel: "response",
      inputAriaLabel: "Ask the portfolio terminal",
      pendingLabel: "Resolving…",
      fetchErrorMessage: "The terminal could not resolve that right now. You can still ask about projects, resume, about, contact, or case studies.",
      sourceLabels: {
        rule: "router",
        ai: "ai fallback",
        fallback: "fallback",
      },
      commands: {
        showAiProjects: "show AI projects",
        showFinanceWork: "show finance work",
        whatRoles: "what roles are you looking for",
        whereBased: "where are you based",
        howDoYouWork: "how do you work",
        resume: "resume",
        contact: "contact",
        localLlmQuestion: "what have you built with local llms",
        localLlmCaseStudy: "localLLM case study",
        debtCrusherCaseStudy: "Debt Crusher case study",
        caseStudies: "case studies",
      },
      links: {
        openProjects: "Open Projects",
        openCaseStudies: "Open Case Studies",
        viewProjectList: "View Project List",
        openResume: "Open Resume",
        openContact: "Open Contact",
        openAbout: "Open About",
      },
      messages: {
        empty: "Ask about projects, AI work, finance work, case studies, resume, contact, location, or how I work.",
        help: "You can ask about projects, AI work, finance work, case studies, resume, contact, location, or how I work.",
        location: "I am based in San Jose, California, and I build across full-stack product systems, AI workflows, and practical software.",
        skillsTemplate: "My technical focus spans {focus}. The throughline is practical product engineering with clear workflow and system ownership.",
        localFirst: "I am especially drawn to local-first and self-hosted tools that preserve user control without sacrificing usability.",
        fallback: "I can help with projects, AI work, finance work, resume, case studies, contact, location, and how I work, all from the portfolio itself.",
      },
    },
  },
};

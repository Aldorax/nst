export const services = [
  {
    slug: "development",
    name: "Website development",
    short: "Build something exceptional.",
    intro:
      "Expressive websites and dependable applications. The creative ambition and the engineering to make it real.",
    color: "#c3f85c",
    visual: "auvra",
    outputs: [
      "Marketing websites and landing pages",
      "Web applications and product interfaces",
      "CMS, e-commerce, and content systems",
      "Performance, accessibility, and search foundations",
    ],
    approach:
      "We turn the design into a responsive, maintainable experience. Motion, content, and interaction are built together, with performance considered from the first prototype.",
    steps: [
      "Map the content, integrations, and technical requirements.",
      "Build the core experience and review working versions together.",
      "Test across devices, refine, and hand over the tools to maintain it.",
    ],
    project: "auvra",
  },
  {
    slug: "branding",
    name: "Branding & identity",
    short: "Make your difference visible.",
    intro:
      "A clear position, a distinctive identity, and a system that stays recognisable wherever your business shows up.",
    color: "#6550ff",
    visual: "kandela",
    outputs: [
      "Positioning and brand strategy",
      "Visual identity and logo systems",
      "Art direction, typography, and colour",
      "Guidelines, templates, and launch assets",
    ],
    approach:
      "We start with what makes your business worth choosing. Then we explore how that difference should look, sound, and move, building an identity your team can actually use.",
    steps: [
      "Find the audience, ambition, and point of difference.",
      "Explore creative directions and refine the chosen identity.",
      "Build a coherent system and the assets for your launch.",
    ],
    project: "kandela",
  },
  {
    slug: "ui-ux",
    name: "UI / UX design",
    short: "Complexity, made intuitive.",
    intro:
      "Thoughtful journeys and interfaces that help people move forward. From the first flow to the smallest interaction.",
    color: "#278aff",
    visual: "vaultx",
    outputs: [
      "User journeys and information architecture",
      "Wireframes and interactive prototypes",
      "Product interfaces and responsive systems",
      "Component libraries and developer handoff",
    ],
    approach:
      "We bring structure to complicated products. We examine the essential journeys, prototype the decisions that matter, and create interfaces where hierarchy does the heavy lifting.",
    steps: [
      "Understand the users, tasks, and existing friction.",
      "Prototype the key flows and review the experience.",
      "Refine the interface and document a consistent design system.",
    ],
    project: "vaultx",
  },
  {
    slug: "motion",
    name: "Motion & video",
    short: "Give your ideas momentum.",
    intro:
      "Brand animation, product films, and explainers that make people stop, understand, and remember.",
    color: "#ff6b26",
    visual: "motion-capability",
    outputs: [
      "Brand animation and motion systems",
      "Product films and launch videos",
      "Explainers and animated storytelling",
      "Social and campaign adaptations",
    ],
    approach:
      "We treat motion as part of the message. A clear concept, purposeful pacing, and a visual language that belongs to your brand—adapted for the places it needs to live.",
    steps: [
      "Define the message, audience, and formats.",
      "Develop the storyboard, visual direction, and animation.",
      "Refine timing, sound direction, and the final delivery formats.",
    ],
    project: "kandela",
  },
  {
    slug: "writing",
    name: "Copy & technical writing",
    short: "The right words open doors.",
    intro:
      "A clear voice for your business and useful information for your customers. Brand storytelling meets technical clarity.",
    color: "#ff5fab",
    visual: "connecticut",
    outputs: [
      "Website copy and conversion journeys",
      "Brand voice and messaging systems",
      "Developer documentation and tutorials",
      "Product explainers and technical content",
    ],
    approach:
      "We work out what people need to know, what they need to feel, and what they should do next. Then we turn complicated ideas into writing that earns its place on the page.",
    steps: [
      "Understand the product, audience, and source material.",
      "Shape the messaging, structure, and first drafts.",
      "Review for accuracy, voice, and a clear next step.",
    ],
    project: "connecticut",
  },
] as const;

export { projects, type ProjectSlug } from "./work-data";

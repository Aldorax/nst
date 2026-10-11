export const services = [
  {
    slug: "development",
    name: "Website development",
    short: "Build something exceptional.",
    intro:
      "Expressive websites and dependable applications. The creative ambition and the engineering to make it real.",
    color: "#c3f85c",
    visual: "orbit",
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
    project: "orbit",
  },
  {
    slug: "branding",
    name: "Branding & identity",
    short: "Make your difference visible.",
    intro:
      "A clear position, a distinctive identity, and a system that stays recognisable wherever your business shows up.",
    color: "#6550ff",
    visual: "pulse",
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
    project: "pulse",
  },
  {
    slug: "ui-ux",
    name: "UI / UX design",
    short: "Complexity, made intuitive.",
    intro:
      "Thoughtful journeys and interfaces that help people move forward. From the first flow to the smallest interaction.",
    color: "#278aff",
    visual: "atlas",
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
    project: "atlas",
  },
  {
    slug: "motion",
    name: "Motion & video",
    short: "Give your ideas momentum.",
    intro:
      "Brand animation, product films, and explainers that make people stop, understand, and remember.",
    color: "#ff6b26",
    visual: "pulse",
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
    project: "pulse",
  },
  {
    slug: "writing",
    name: "Copy & technical writing",
    short: "The right words open doors.",
    intro:
      "A clear voice for your business and useful information for your customers. Brand storytelling meets technical clarity.",
    color: "#ff5fab",
    visual: "fieldnotes",
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
    project: "fieldnotes",
  },
] as const;

export const projects = [
  {
    slug: "orbit",
    title: "Orbit",
    discipline: "Branding / Development",
    line: "A new financial language.",
    color: "#c3f85c",
    category: "digital",
    services: ["Branding & identity", "UI / UX design", "Website development"],
    brief:
      "Make everyday finance feel clearer, more approachable, and full of possibility.",
    approach:
      "A sharp monochrome interface paired with an electric lime identity. The visual system connects product UI, physical card concepts, and a confident brand voice.",
    detail:
      "The interface puts the next useful action ahead of visual noise. The identity uses a circular motif as a flexible frame for movement and navigation.",
    outputs: [
      "Identity exploration",
      "Product dashboard concept",
      "Card design studies",
      "Responsive digital direction",
    ],
    type: "Space Grotesk / confident and clear",
    principle: "Clarity with energy.",
    note: "Illustrative interface and card concepts. No financial product or live service is offered.",
  },
  {
    slug: "form",
    title: "Form & Field",
    discipline: "Art direction / E-commerce / Copy",
    line: "Made to stay.",
    color: "#d8c7aa",
    category: "brand",
    services: [
      "Branding & identity",
      "Website development",
      "Copy & technical writing",
    ],
    brief:
      "Give thoughtfully made furniture a digital presence with the same care as the objects themselves.",
    approach:
      "Natural materials, quiet photography, and an editorial rhythm. The concept pairs a shopping experience with a brand story that lets the product lead.",
    detail:
      "Short copy and generous imagery make room for craftsmanship. A simple hierarchy connects the collection, material details, and product information.",
    outputs: [
      "Art direction and material studies",
      "Editorial storefront concept",
      "Collection messaging",
      "Responsive shopping direction",
    ],
    type: "Grotesque / editorial serif contrast",
    principle: "Space is part of the story.",
    note: "A self-initiated furniture brand concept using generated product photography.",
  },
  {
    slug: "pulse",
    title: "Pulse",
    discipline: "Identity / Motion / Campaign",
    line: "Feel everything.",
    color: "#ff6b26",
    category: "motion",
    services: [
      "Branding & identity",
      "Motion & video",
      "Copy & technical writing",
    ],
    brief: "Translate the energy of sound into an identity you can feel.",
    approach:
      "Oversized typography, saturated orange, acid lime, and a rhythmic visual language. The identity expands into campaign artwork, ticket concepts, and animated graphic studies.",
    detail:
      "The motion studies use repetition, scale, and timing to echo sound. The system stays recognisable across static artwork and moving compositions.",
    outputs: [
      "Visual identity exploration",
      "Animated graphic study",
      "Campaign and ticket concepts",
      "Product art direction",
    ],
    type: "Bold grotesque / rhythm and impact",
    principle: "The identity should move.",
    note: "A self-initiated audio brand concept. The animation is a visual study, with no audio or commissioned film attached.",
  },
  {
    slug: "atlas",
    title: "Atlas",
    discipline: "UI / UX / Product design",
    line: "Room for the work that matters.",
    color: "#278aff",
    category: "digital",
    services: ["UI / UX design", "Website development"],
    brief:
      "Make a busy project workspace feel organised without making it feel empty.",
    approach:
      "A modular product interface with clear priorities, a strong type hierarchy, and restrained use of colour. The concept explores how a team can see the next action at a glance.",
    detail:
      "A compact navigation system gives way to a spacious canvas. Repeated components make the interface predictable, while blue acts as a signal for meaningful actions.",
    outputs: [
      "Product interface concept",
      "Task and overview flows",
      "Responsive dashboard study",
      "Component and interaction direction",
    ],
    type: "Space Grotesk / useful hierarchy",
    principle: "Structure creates breathing room.",
    note: "Illustrative product design with sample tasks. It is not a functioning project management application.",
  },
  {
    slug: "fieldnotes",
    title: "Fieldnotes",
    discipline: "Copy / Documentation / Brand voice",
    line: "Good ideas. Clearly explained.",
    color: "#ff5fab",
    category: "words",
    services: [
      "Copy & technical writing",
      "Branding & identity",
      "UI / UX design",
    ],
    brief:
      "Make a technical product feel understandable from its first headline to its first integration.",
    approach:
      "A messaging and documentation concept that connects brand voice with practical guidance. Short, useful sentences sit alongside a structured developer experience.",
    detail:
      "The writing moves from what the product does to why it matters, then gives readers a clear next step. Documentation separates the explanation from the example so each can be scanned.",
    outputs: [
      "Homepage messaging study",
      "Brand voice principles",
      "Sample developer documentation",
      "Content hierarchy and navigation",
    ],
    type: "Editorial grotesque / readable monospace",
    principle: "Useful is a tone of voice.",
    note: "Sample writing and illustrative code for a fictional product. The examples are not an integration with a real API.",
  },
] as const;
export type ProjectSlug = (typeof projects)[number]["slug"];

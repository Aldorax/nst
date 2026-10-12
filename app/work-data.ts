import media from './work-media.json';
export type WorkImage = {
    src: string;
    width: number;
    height: number;
    caption: string;
};
export type WorkProject = {
    slug: string;
    title: string;
    discipline: string;
    line: string;
    color: string;
    category: 'design' | 'website' | 'product' | 'editorial';
    services: string[];
    label: string;
    summary: string;
    focus: string[];
    images: WorkImage[];
    source?: string;
    sourceLabel?: string;
    credit?: string;
};
const image = (key: keyof typeof media, caption: string): WorkImage => ({ ...media[key], caption });
const dribbble = 'https://dribbble.com/shots/';
export const projects: WorkProject[] = [
    {
        slug: 'pay4me', title: 'Pay4Me', discipline: 'Fintech / Website redesign', line: 'A clearer route to international education payments.', color: '#c3f85c', category: 'design', label: 'Website redesign', services: ['UI / UX design'],
        summary: 'A landing page redesign that brings student payments into focus. A human opening, clearly grouped services, and a guided introduction to the app create a more approachable digital experience.',
        focus: ['Student-first visual direction', 'Payment service hierarchy', 'Mobile onboarding presentation'], images: [image('pay4me', 'Pay4Me landing page redesign: hero, services, onboarding, and supporting content.')], source: dribbble + '25424972-Landing-Page-Redesign-Pay4me-app', sourceLabel: 'View the design on Dribbble', credit: 'Published as Octavian ✦ Designer. Independent redesign study.'
    },
    {
        slug: 'vaultx', title: 'VaultX', discipline: 'Web3 / Product & website design', line: 'Digital assets. A sharper interface.', color: '#b8a8ff', category: 'product', label: 'Design study', services: ['UI / UX design'],
        summary: 'A monochrome digital asset experience, from the wallet overview to the supporting website. Familiar financial patterns give a complex product a clear visual structure.',
        focus: ['Asset overview and action hierarchy', 'Mobile wallet presentation', 'Website feature storytelling'], images: [image('vaultx', 'VaultX wallet interface presented on a concrete display.'), image('vaultx-page', 'Full VaultX website design, from product introduction to feature sections.')], source: dribbble + '21813833-VaultX-Crypto-Wallet', sourceLabel: 'View the design on Dribbble', credit: 'Published as Octavian ✦ Designer. Product design study.'
    },
    {
        slug: 'auvra', title: 'AuvraAI', discipline: 'AI / Website', line: 'A connected home for customer conversations.', color: '#ff9966', category: 'website', label: 'Live website', services: ['Website development'],
        summary: 'A website introducing AI agents for inbound and outbound customer conversations. Editorial typography, interactive product previews, and a restrained dark palette give the platform a distinctive digital presence.', focus: ['AI product storytelling', 'Interactive workspace previews', 'Connected website structure'], images: [image('auvra', 'AuvraAI public website homepage.')], source: 'https://www.auvra.co/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'kandela', title: 'Kandela Finance', discipline: 'Finance / Digital design', line: 'A brighter perspective on personal finance.', color: '#7845ff', category: 'design', label: 'Design study', services: ['UI / UX design'],
        summary: 'A vivid finance landing page built around expressive illustration, a strong central message, and a direct waitlist journey. Violet brings the composition together while graphic elements give it character.', focus: ['Illustration-led art direction', 'Colour and typography', 'Waitlist landing page'], images: [image('kandela', 'Kandela Finance landing page in violet with financial illustrations.')]
    },
    {
        slug: 'heather', title: 'Heather, In Context', discipline: 'Editorial / Website', line: 'Room for ideas. Space for the reader.', color: '#99acff', category: 'editorial', label: 'Live website', services: ['Website development'],
        summary: 'An independent publication about technology, culture, and work. The website gives long-form writing a considered home, with a cover story, subject navigation, and an editorial archive.', focus: ['Publication hierarchy', 'Reading and discovery', 'Writer portfolio'], images: [image('heather', 'Heather, In Context publication homepage.')], source: 'https://heatherincontext.vercel.app/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'jamb', title: 'JAMB', discipline: 'Education / Website redesign', line: 'Essential information, easier to find.', color: '#78dca0', category: 'design', label: 'Website redesign', services: ['UI / UX design'],
        summary: 'An independent redesign of the JAMB website. Key student services lead the experience, supported by clearer information grouping, news, resources, and a more consistent visual hierarchy.', focus: ['Student service navigation', 'Public information structure', 'Education website hierarchy'], images: [image('jamb', 'Full JAMB website redesign with student services, resources, and news.')], source: dribbble + '21583259-Landing-Page-JAMB-Redesign', sourceLabel: 'View the design on Dribbble', credit: 'Published as Octavian ✦ Designer. Independent redesign; not an official JAMB website.'
    },
    {
        slug: 'efosa', title: 'Efosa', discipline: 'Commerce / Discovery design', line: 'Local businesses, brought into view.', color: '#ff9399', category: 'design', label: 'Design study', services: ['UI / UX design'], summary: 'A local business discovery page with a friendly visual language. Categories, popular tags, and listing previews help connect browsing with a useful next action.', focus: ['Local business discovery', 'Category navigation', 'Listing presentation'], images: [image('efosa', 'Efosa local business finder landing page and category navigation.')], source: dribbble + '21195087-E-commerce-Local-Store-finder', sourceLabel: 'View the design on Dribbble', credit: 'Published design by Octavian ✦ Designer.'
    },
    {
        slug: 'web3-wallet', title: 'Web3 Wallet', discipline: 'Web3 / Mobile interface', line: 'One flow. Two distinct atmospheres.', color: '#ff745d', category: 'product', label: 'Interface study', services: ['UI / UX design'], summary: 'A wallet connection flow explored in light and dark themes. A sculptural opening gives way to practical wallet selection, search, and connection states.', focus: ['Light and dark theme systems', 'Wallet selection flow', 'Mobile interface hierarchy'], images: [image('wallet-dark', 'Dark wallet connection interface with wallet selection and search.'), image('wallet-light', 'Light theme of the same wallet connection flow.')]
    },
    {
        slug: 'connecticut', title: 'Connecticut Developers', discipline: 'Documentation / Interface design', line: 'Technical information, thoughtfully organised.', color: '#90c8ff', category: 'editorial', label: 'Interface study', services: ['UI / UX design'], summary: 'A developer documentation interface with a clear three-column structure. Navigation, the main article, and an on-page contents list keep technical information easy to locate.', focus: ['Documentation navigation', 'Article readability', 'Developer information architecture'], images: [image('connecticut', 'Developer documentation interface with sidebar, article, and table of contents.')]
    },
    {
        slug: 'pleasant-place', title: 'Pleasant Place', discipline: 'Healthcare / Website redesign', line: 'A calmer first impression.', color: '#8ed5bf', category: 'design', label: 'Website redesign', services: ['UI / UX design'], summary: 'A psychiatry website redesign with a welcoming image-led opening, gentle colour, and a clear appointment action. The composition balances clinical information with an approachable tone.', focus: ['Healthcare visual direction', 'Welcoming photography', 'Appointment hierarchy'], images: [image('pleasant-place', 'Pleasant Place Psychiatry website redesign presentation.')]
    },
    {
        slug: 'winamp', title: 'Winamp', discipline: 'Music / Interface design', line: 'A listening experience with colour and rhythm.', color: '#ffa577', category: 'product', label: 'Interface study', services: ['UI / UX design'], summary: 'A music interface study with expressive artwork and a structured listening workspace. The navigation, track table, and persistent player work together around the current album.', focus: ['Music library structure', 'Artwork-led visual direction', 'Persistent playback controls'], images: [image('winamp', 'Winamp music interface study showing an album, track list, and audio controls.')]
    },
    {
        slug: 'aldorax', title: 'The Aldorax', discipline: 'Personal brand / Website', line: 'A bold presence for a systems builder.', color: '#f3663d', category: 'website', label: 'Live website', services: ['Website development'], summary: 'Emmanuel Appah’s personal website brings projects, engineering notes, books, and experience into one expressive presence. Oversized typography and a vivid red opening set the tone.', focus: ['Personal brand presentation', 'Project and journal archive', 'Editorial website system'], images: [image('aldorax', 'Emmanuel Appah personal website, with oversized typography on a red background.')], source: 'https://thealdorax.vercel.app/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'goodie', title: 'Commissioner of Stories', discipline: 'Writer portfolio / Website', line: 'A thoughtful home for a storyteller.', color: '#e8bc82', category: 'editorial', label: 'Live website', services: ['Website development'], summary: 'A portfolio for Goodness Adeniyi Orishe, connecting writing, strategy, community, and teaching. A warm editorial presentation introduces the person behind the practice and the ways to work together.', focus: ['Writer and strategist portfolio', 'Service discovery', 'Personal storytelling'], images: [image('goodie', 'Commissioner of Stories website for Goodness Adeniyi Orishe.')], source: 'https://goodie-port.vercel.app/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'repute', title: 'Repute', discipline: 'SaaS / Website', line: 'Feedback becomes a product story.', color: '#b2c8ff', category: 'website', label: 'Live website', services: ['Website development'], summary: 'A product website for customer feedback and reputation management. Interactive workspace previews make the service tangible, while structured feature sections explain the product’s workflows.', focus: ['SaaS product communication', 'Interactive dashboard presentation', 'Feature and pricing structure'], images: [image('repute', 'Repute homepage with customer feedback product preview.')], source: 'https://repute-aldo.vercel.app/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'safeentry', title: 'SafeEntry', discipline: 'Events / Web application', line: 'A simple invitation to something good.', color: '#d9b4ff', category: 'website', label: 'Live web application', services: ['Website development'], summary: 'An event discovery and hosting application. The public experience centres on searching for events and a straightforward route into hosting.', focus: ['Event discovery', 'Public application interface', 'Hosting entry point'], images: [image('safeentry', 'SafeEntry public event discovery page.')], source: 'https://safeentry-civic.vercel.app/', sourceLabel: 'Visit the application'
    },
    {
        slug: 'scrolls', title: 'TheScrolls', discipline: 'Publishing / Website', line: 'A vivid entrance to a world of stories.', color: '#d6f850', category: 'website', label: 'Live website', services: ['Website development'], summary: 'A fiction publishing website with a cinematic opening and routes into genres, reading, and writing. Large type and vivid artwork establish an immersive visual world.', focus: ['Story discovery', 'Immersive visual direction', 'Publishing platform introduction'], images: [image('scrolls', 'TheScrolls public homepage with illustrated hero artwork.')], source: 'https://thescrolls-broi.vercel.app/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'tadlab', title: 'The Africa Disruptions Lab', discipline: 'Research / Website', line: 'Research with a public-facing presence.', color: '#9edcb4', category: 'website', label: 'Website in development', services: ['Website development'], summary: 'A research platform presenting work on social, economic, political, and technological change across Africa. The website connects research, projects, events, and editorial content.', focus: ['Research communication', 'Project and editorial navigation', 'Image-led introduction'], images: [image('tadlab', 'The Africa Disruptions Lab public website preview.')], source: 'https://www.theafricandisruptionslab.com/', sourceLabel: 'Visit the website'
    },
    {
        slug: 'hireus', title: 'Hireus NG', discipline: 'Services marketplace / UX design', line: 'Making professional services easier to discover.', color: '#80baff', category: 'product', label: 'Published UX case study', services: ['UI / UX design'], summary: 'A published UX case study for a professional and artisan hiring platform. It follows the problem, early user conversations, competitive analysis, and the design direction for connecting people with services.', focus: ['Service discovery', 'User-centred design process', 'Marketplace experience'], images: [image('hireus', 'Hireus NG mobile interface design: onboarding, account entry, and service discovery.')], source: dribbble + '21238277-Case-Study-Hiring-Platform', sourceLabel: 'Read the original case study', credit: 'Published case study by Octavian ✦ Designer.'
    },
    {
        slug: 'homies-delight', title: 'Homies Delight', discipline: 'Food delivery / Web application', line: 'A digital home for food delivery.', color: '#ff9865', category: 'website', label: 'Web application', services: ['Website development'], summary: 'A food delivery web application. The linked deployment currently opens on its account sign-in screen; the application can be explored through the original website.', focus: ['Food delivery application', 'Account entry experience'], images: [], source: 'https://homiesdelight.vercel.app/', sourceLabel: 'Visit the application'
    }
];
export type ProjectSlug = string;

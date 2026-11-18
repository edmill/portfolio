export const EMAIL = 'edmill@outlook.com';

export const asset = (p: string) => import.meta.env.BASE_URL + p;

export interface GalleryItem { image: string; caption: string }
export interface App {
  title: string; kind: string; blurb: string; image: string; pos?: string;
  inDev?: boolean; isNew?: boolean; gallery?: GalleryItem[]; href?: string; cta?: string;
}

export const apps: App[] = [
  { title: '3D Shopify Shop', kind: 'Shopify', blurb: 'A Shopify store with a 3D drawer builder: pick your toolbox, confirm the drawer size, then place holders and colors in 3D with live pricing.', image: 'apps/shop.png', gallery: [
    { image: 'apps/shop.png', caption: 'Storefront: the shop, with attitude' },
    { image: 'apps/shop-drawer.png', caption: 'Choose your drawer: pick your cabinet, color and drawer, then confirm measurements' },
    { image: 'apps/drawer-builder.png', caption: 'Add your tools: place holders in 3D with live pricing' },
    { image: 'apps/shop-overhead.png', caption: 'Overhead view: arrange, duplicate and fine-tune the layout' },
  ], href: 'https://craftedby.ai/shop', cta: 'Build a drawer' },
  { title: 'Facial Performance Studio', kind: 'Tool', blurb: 'Import a rigged 3D character, map its 52 facial controls, and drive a lip-synced performance from audio or your webcam. A pro animation tool, designed and built with AI.', image: 'apps/fps.png', inDev: true, isNew: true },
  { title: 'Jackpot Slots', kind: 'Game', image: 'apps/slots.png', pos: 'center', blurb: 'A browser slot machine with spinning reels, payouts and arcade polish.', href: 'https://edmill.github.io/slots/', cta: 'Play' },
  { title: 'Invaders', kind: 'Game', image: 'apps/invaders.png', pos: 'center', blurb: 'A take on the arcade classic, built end to end with AI-assisted development.', href: 'https://craftedby.ai/experiments/invaders', cta: 'Play' },
];

export const offers = [
  { num: '01', title: 'I design AI features people actually use', body: 'I’ve taken AI from first concept to launch, like Copilot in SQL Server Management Studio. I focus on making AI helpful, predictable and easy to trust.', stat: '9M+', statLabel: 'monthly users reached by Copilot in SSMS' },
  { num: '02', title: 'I prototype in real, working code', body: 'Instead of static mockups, I build working prototypes with AI agents, so your team can click, test and decide faster.', stat: '30+', statLabel: 'apps designed and built since 2025' },
  { num: '03', title: 'I make complex tools and apps feel simple', body: '15+ years designing enterprise software at Microsoft: data tools, admin portals and dashboards. I turn complicated workflows into clear ones.', stat: '3×', statLabel: '“Delight the Customer” award winner' },
];

export const projects = [
  { meta: 'Microsoft · 2022–25', title: 'Copilot in SQL Server Management Studio', description: 'Natural language to SQL, query optimization and error prevention, without disrupting expert workflows.', image: 'ssms.jpg', metrics: [{ value: '9M+', label: 'monthly users' }, { value: '73%', label: 'adoption' }, { value: '35%', label: 'time saved' }] },
  { meta: 'Microsoft Fabric · 2022–25', title: 'Data Activator', description: 'End-to-end creation of real-time triggers and actions on streaming enterprise data.', image: 'drawn.png', metrics: [{ value: '60%', label: 'faster insights' }, { value: '80%+', label: 'preview adoption' }, { value: '1', label: 'US patent' }] },
  { meta: 'Microsoft · 2020–22', title: 'Viva Insights', description: 'A “Discover, Try and Buy” flow for premium wellbeing features across Microsoft 365.', image: 'viva.png', metrics: [{ value: '+25%', label: 'enterprise adoption' }] },
  { meta: 'Microsoft Ignite', title: 'Security & Compliance VR', description: 'Designed and built a live VR experience for visualizing security threats.', image: 'vr1.png', metrics: [{ value: '800+', label: 'live demos' }] },
];

export const roles = [
  { years: '2025 — Now', role: 'Creative Lead & Design Technologist', company: 'Crafted By · Greater Seattle', points: ['Designing and building products with a fleet of AI agents: 3D commerce, creative tools and games.', 'Exploring new creative workflows, generative systems and intelligent tools.'] },
  { years: '2022 — 2025', role: 'Principal Product Designer', company: 'Microsoft · SSMS & Data Activator', points: ['Led AI integration design for SQL Server Management Studio, bringing Copilot to 9M+ monthly active users.', 'Led design of the Data Activator creation experience, a 0→1 product. Awarded a US patent for ingesting time-series data.'] },
  { years: '2020 — 2022', role: 'Principal Product Designer', company: 'Microsoft · Viva Insights', points: ['Led user-driven design strategy for Viva Insights across Microsoft 365.', 'Designed “Discover, Try and Buy” for Workplace Analytics, lifting enterprise adoption 25%.'] },
  { years: '2015 — 2020', role: 'Senior Design Developer', company: 'Microsoft · Office 365 Admin', points: ['Led UX design and development for the Office 365 Admin portal and analytics dashboards.', 'Drove design system cohesion with Fluent across Microsoft information architecture solutions.'] },
  { years: '2012 — 2014', role: 'UX Designer & Developer', company: 'Microsoft · Volume Licensing', points: ['Led UX for the next-generation Volume Licensing platform, optimizing licensing workflows and completion rates.', 'Received three consecutive “Delight the Customer” awards.'] },
  { years: '2011 — 2012', role: 'Senior UX Designer', company: 'Microsoft · MSIT', points: ['Built interactive prototypes for the next-generation licensing platform.'] },
  { years: '2010 — 2011', role: 'UX Designer', company: 'Pharmacy OneSource (Wolters Kluwer)', points: ['Designed interfaces for complex pharmacy management workflows in healthcare.'] },
  { years: '2006 — 2010', role: 'SDET / Technical Lead', company: 'Microsoft', points: ['Led test automation and QA frameworks for enterprise software. Where I learned to think like an engineer.'] },
];

export interface CaseStudy {
  short: string; kicker: string; title: string; summary: string;
  metrics: { value: string; label: string }[];
  facts: { label: string; value: string }[];
  problem: string;
  challenges: { t: string; d: string }[];
  did: { t: string; d: string }[];
  screens: { src: string; caption: string }[];
  outcome: string[];
  quote?: string; quoteBy?: string;
}

export const cases: CaseStudy[] = [
  { short: 'Copilot in SSMS', kicker: 'AI integration · Microsoft · 2023–25', title: 'Bringing Copilot to SQL Server Management Studio', summary: 'Bringing AI assistance to 9M+ database professionals, woven into the workflows they already trust instead of bolted on top.',
    metrics: [{ value: '9M+', label: 'Monthly active users' }, { value: '73%', label: 'Adoption among eligible users' }, { value: '35%', label: 'Less time writing routine queries' }, { value: '94%', label: 'AI-generated queries run successfully' }],
    facts: [{ label: 'My role', value: 'Principal Product Designer, sole UX designer' }, { label: 'Team', value: '9 people: me, 6 engineers, 2 PMs' }, { label: 'Timeline', value: '18 months · Nov 2023 – May 2025' }],
    problem: 'SSMS is a mature, feature-dense tool that database pros rely on daily. Adding AI risked breaking familiar workflows, adding cognitive load, and asking experts to trust suggestions in production environments.',
    challenges: [{ t: 'Expert users, low tolerance', d: 'DBAs and developers need accuracy and won’t accept AI that guesses.' }, { t: 'A crowded interface', d: 'AI had to fit in without overwhelming an already feature-rich app.' }, { t: 'Enterprise scale', d: 'It had to perform for 9M+ monthly users without slowing SSMS down.' }],
    did: [{ t: 'Research with 15 database pros.', d: 'Interviews and roundtables showed users spend 40% of their time debugging and optimizing, and want to know why AI suggests something.' }, { t: 'Context-aware by design.', d: 'Suggestions use the schema, query history and current workspace, so they feel like an expert colleague, not a generic chatbot.' }, { t: 'Progressive disclosure.', d: 'AI enters through discoverable entry points inside existing flows instead of a new mode.' }, { t: 'Explain, then act.', d: 'Natural language to SQL, query optimization and proactive error prevention, each with reasoning users can check.' }],
    screens: [{ src: 'ssms.jpg', caption: 'Copilot inside SSMS: contextual query help, natural language to SQL and optimization suggestions.' }],
    outcome: ['73% of eligible users actively using AI features within 6 months of launch', '35% reduction in routine query writing time', '4.2/5 average satisfaction in post-integration surveys'],
    quote: 'The real power would be within SSMS, with access to table definitions, SPs, etc. I could see this saving me hours of dev time.', quoteBy: 'Database developer, enterprise customer feedback' },
  { short: 'Data Activator', kicker: '0→1 product · Microsoft Fabric · 2022–23', title: 'Data Activator: real-time data monitoring for everyone', summary: 'A brand-new product category: letting business analysts monitor live data and trigger actions without writing code. Built from zero to enterprise preview.',
    metrics: [{ value: '60%', label: 'Faster time to insight' }, { value: '80%+', label: 'Adoption among preview customers' }, { value: '1', label: 'US patent awarded' }, { value: '0→1', label: 'New product category' }],
    facts: [{ label: 'My role', value: 'Principal Product Designer, end-to-end creation experience' }, { label: 'Team', value: '20 people: 4 designers, GM, 12 engineers, 3 PMs' }, { label: 'Timeline', value: '9 months · May 2022 – Jan 2023' }],
    problem: 'Enterprise teams needed to know the moment their data crossed a threshold, but monitoring tools required SQL or code. The goal was to make real-time data workflows powerful enough for enterprises and simple enough for analysts.',
    challenges: [{ t: 'No playbook', d: 'A 0→1 product meant defining the category, the vision and the mental model from scratch.' }, { t: 'Non-technical users', d: 'Analysts needed sophisticated monitoring without SQL or coding.' }, { t: 'Real-time stakes', d: 'Business-critical alerts demanded low latency and reliable notifications.' }],
    did: [{ t: 'Aligned leadership early.', d: 'Ran design workshops with VP, GM, PM, engineering, UX and research to set the product vision.' }, { t: 'Sketched the mental model.', d: 'Explored how users think about objects, properties and conditions before committing to UI.' }, { t: 'Designed a 9-step creation flow.', d: 'From viewing live event data to defining objects, setting detection rules and configuring notifications.' }, { t: 'Tested with private preview customers.', d: 'Iterated on the visual builder, action configuration and alert customization.' }],
    screens: [{ src: 'sketchy.png', caption: 'Early exploration: sketching data relationships and monitoring workflows.' }, { src: 'e2e.png', caption: 'The end-to-end creation flow, from live event data to notifications.' }],
    outcome: ['Awarded a US patent for “Techniques for ingesting time-series data”', 'More than 80% adoption among private preview enterprise customers', '60% reduction in time to insight for business analysts', 'Influenced time-series data visualization across the Fluent design system'] },
];

export interface Service {
  slug: string; title: string; about: string[];
  features: { title: string; text: string }[];
  typesTitle: string; types: string; keyTitle: string; key: string;
  checks: string[]; faqs: { q: string; a: string }[];
}

const faqs = [
  { q: 'What services do you offer?', a: 'Space planning, material selection, lighting, furniture and full project delivery.' },
  { q: 'What is your design process?', a: 'Brief, concept, detailed design, build supervision and handover.' },
  { q: 'Can I create custom design?', a: 'Yes. Every project is tailored to your space, budget and goals.' },
];

const checks = [
  'We provide high quality design services.',
  'Flexible with any structure of the building',
  'Project on time and latest design.',
  'Commitment to customer service',
  'We bring your vision to life.',
  'Experienced, time-served engineers',
];

const features = [
  { title: 'Space Optimization', text: 'Through the best smart space optimization interior design.' },
  { title: 'Flexible Layouts', text: 'Through the best smart space optimization interior design.' },
];

export const SERVICES: Service[] = [
  {
    slug: 'commercial-interior-design',
    title: 'Commercial Interior Design',
    about: [
      'Commercial interior design is constantly evolving, with new trends emerging to meet the changing needs and preferences of businesses and their customers. One of the most significant trends in recent years is biophilic design, which brings natural elements like plants, wood, and stone into the space.',
      'A growing demand for adaptable layouts can accommodate changing needs. This might include modular movable partitions. Sustainability is also a key trend in commercial interior design.',
    ],
    features,
    typesTitle: 'Types of Commercial Spaces',
    types: 'We bring characteristics of the natural world into built spaces, such as water, greenery, and natural light, or elements like wood and stone. These design approaches improve health and wellbeing, including reduced heart rate variability and decreased blood pressure.',
    keyTitle: 'Key Elements of Interior Design',
    key: 'Several key elements are essential to successful commercial interior design. These include space planning, lighting design, material selection, furniture and fixtures, color and texture, technology integration, and acoustics.',
    checks,
    faqs,
  },
  {
    slug: 'residential-interior-design',
    title: 'Residential Interior Design',
    about: [
      'Residential design shapes how a home feels and works every day. We balance comfort, storage and light so each room fits the way you live.',
      'From a single room to a full home, we plan layouts, finishes and furniture as one connected design.',
    ],
    features,
    typesTitle: 'Types of Residential Spaces',
    types: 'Apartments, villas, townhouses and holiday homes each need a different approach to space, light and materials.',
    keyTitle: 'Key Elements of Home Design',
    key: 'Layout, lighting, storage, materials, colour and furniture work together to make a home calm and practical.',
    checks,
    faqs,
  },
];
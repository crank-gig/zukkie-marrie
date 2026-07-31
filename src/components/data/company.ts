import {
  ActivityIcon,
  AwardIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  BuildingIcon,
  Building2Icon,
  ClipboardListIcon,
  ClockIcon,
  CpuIcon,
  DropletIcon,
  FileTextIcon,
  FlagIcon,
  GemIcon,
  HandshakeIcon,
  HardHatIcon,
  HeartIcon,
  HeartPulseIcon,
  HomeIcon,
  LandmarkIcon,
  LayersIcon,
  LeafIcon,
  LightbulbIcon,
  MapPinIcon,
  MonitorIcon,
  MountainIcon,
  PencilRulerIcon,
  RecycleIcon,
  RouteIcon,
  ScaleIcon,
  SettingsIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  SproutIcon,
  SunIcon,
  TargetIcon,
  TrendingUpIcon,
  TrophyIcon,
  TruckIcon,
  UserCheckIcon,
  UsersIcon,
  WrenchIcon,
  ZapIcon,
  CalculatorIcon,
  EyeIcon,
  CalendarIcon,
  FuelIcon,
  CircleDotIcon,
  ConstructionIcon,
} from 'lucide-react';
import type {
  Capability,
  CompanyFact,
  CoreValue,
  Discipline,
  EquipmentItem,
  GalleryImage,
  HseGroup,
  NavItem,
  OfficeLocation,
  ServiceCategory,
  StatItem,
  TimelineMilestone,
} from '../../types';

export const COMPANY = {
  name: 'ZUKKIE-MARIE LIMITED',
  tagline: 'Building Excellence. Delivering Sustainable Solutions.',
  documentTitle: 'Corporate Company Profile',
  documentDate: 'July 2026',
  email: 'zukkiemarieltdoriginal@yahoo.com',
  telephone: '07071147444',
  website: '',
  logo: 'https://cdn.magicpatterns.com/patterns/generated-images/52a6a2bc-f08a-4fa1-af98-ea0f408942f6.jpg',
  sectors: ['Engineering', 'Construction', 'Infrastructure', 'Property & Real Estate Development'],
};

export const IMAGES = {
  hero: 'https://cdn.magicpatterns.com/patterns/generated-images/f03ce8dd-85fe-4ad6-afb3-39a79703f64f.jpg',
  estate: 'https://cdn.magicpatterns.com/patterns/generated-images/8bc07bd7-3f94-470c-954c-d808d25d8548.jpg',
  interior: 'https://cdn.magicpatterns.com/patterns/generated-images/138df979-3617-48d8-9a5b-22c06a746d7e.jpg',
  certificate: 'https://cdn.magicpatterns.com/patterns/generated-images/d7842d47-8e2a-4944-8b68-a52fb5c8d5be.jpg',
  solar: 'https://cdn.magicpatterns.com/patterns/generated-images/46b15df5-ad15-46ca-b595-30c7dd012b73.jpg',
  blueprint: 'https://cdn.magicpatterns.com/patterns/generated-images/04722b12-aa76-4821-8e4d-6b897b47828a.jpg',
  civil: 'https://cdn.magicpatterns.com/patterns/generated-images/d2c2f7ee-d8fb-484c-9b8b-3327b9f9875f.jpg',
  fleet: 'https://cdn.magicpatterns.com/patterns/generated-images/863c7e1d-5773-470f-aa94-8b615aea6871.jpg',
  villa: 'https://cdn.magicpatterns.com/patterns/generated-images/d5637e8b-be00-4fdc-9cd1-10859cf6794a.jpg',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Company' },
  { id: 'vision', label: 'Vision & Values' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Leadership' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'governance', label: 'Governance' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_STATS: StatItem[] = [
  { value: 1997, label: 'Incorporated', suffix: '' },
  { value: 30, suffix: '+', label: 'Years of engineering leadership' },
  { value: 3, label: 'Offices across Nigeria' },
  { value: 5, prefix: '', suffix: ',000', label: 'Housing units in delivery' },
];

export const COMPANY_FACTS: CompanyFact[] = [
  { label: 'Company Name', value: 'ZUKKIE-MARIE LIMITED', icon: Building2Icon },
  { label: 'RC Number', value: 'RC.319516', icon: FileTextIcon },
  { label: 'Year of Incorporation', value: '1997', icon: CalendarIcon },
  {
    label: 'Nature of Business',
    value: 'Construction, Engineering, Property Development, Geological Services, Renewable Energy',
    icon: BriefcaseIcon,
  },
  { label: 'Legal Status', value: 'Limited Liability Company', icon: ScaleIcon },
  {
    label: 'Areas of Operation',
    value: 'Nationwide (Nigeria), with expansion plans across West Africa',
    icon: MapPinIcon,
  },
];

export const OFFICES: OfficeLocation[] = [
  {
    id: 'benin',
    name: 'Benin City Office',
    city: 'Benin City, Edo State',
    address: 'No. 1 Edonwonyi Street, By Ojo Road, Off Adolor College Road, Ugbowo, Benin City, Edo State.',
    isHeadquarters: true,
  },
  {
    id: 'lagos',
    name: 'Lagos Office',
    city: 'Lagos State',
    address: 'Plot 27, Private Area, Lekki Gardens Phase 2 Estate, Off Lekki-Epe Expressway, Lagos State.',
    isHeadquarters: false,
  },
  {
    id: 'akwa-ibom',
    name: 'Akwa Ibom Office',
    city: 'Eket, Akwa Ibom State',
    address: '22 Isong Udoito Street, Eket, Akwa Ibom State.',
    isHeadquarters: false,
  },
];

export const VISION =
  'To solve housing challenges affecting civil servants by providing affordable, quality, and sustainable housing developments across Nigeria.';

export const MISSION =
  'To remove accommodation stress from civil servants through innovative construction, engineering excellence, and responsible project delivery.';

export const CORE_VALUES: CoreValue[] = [
  { label: 'Integrity', icon: HandshakeIcon, description: 'Honest dealing on every contract and commitment.' },
  { label: 'Innovation', icon: LightbulbIcon, description: 'Modern methods, materials and technology.' },
  { label: 'Excellence', icon: AwardIcon, description: 'Best-in-class execution as the standard.' },
  { label: 'Accountability', icon: UserCheckIcon, description: 'Clear ownership and transparent reporting.' },
  { label: 'Sustainability', icon: LeafIcon, description: 'Environmentally responsible development.' },
  { label: 'Quality', icon: GemIcon, description: 'Rigorous quality management end to end.' },
  { label: 'Safety', icon: HardHatIcon, description: 'A zero-harm philosophy on every site.' },
  { label: 'Professionalism', icon: BriefcaseIcon, description: 'Qualified, certified, disciplined teams.' },
  { label: 'Customer Focus', icon: HeartIcon, description: 'Client outcomes drive our decisions.' },
  { label: 'Teamwork', icon: UsersIcon, description: 'Multidisciplinary collaboration by design.' },
];

export const HISTORY_INTRO =
  "ZUKKIE-MARIE LIMITED was established to address Nigeria's critical housing deficit and deliver world-class infrastructure that transforms communities. What began as a focused construction enterprise has grown into a diversified engineering and development company.";

export const MILESTONES: TimelineMilestone[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: 'Established with a clear vision to deliver quality housing and world-class infrastructure across Nigeria.',
  },
  {
    id: 'expansion',
    title: 'Regional Expansion',
    description: 'Expanded operations from Edo State to establish a presence in Lagos and Akwa Ibom States.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Growth',
    description: 'Built a track record of successfully delivered projects across multiple sectors.',
  },
  {
    id: 'partnerships',
    title: 'Strategic Partnerships',
    description: 'Developed partnerships with government agencies and private sector organisations.',
  },
  {
    id: 'capability',
    title: 'Capability Investment',
    description: 'Invested in modern equipment, technology, and human capital development.',
  },
  {
    id: 'excellence',
    title: 'Sustained Excellence',
    description: 'Maintained an unblemished record of project delivery and client satisfaction.',
  },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'construction',
    title: 'Construction & Building',
    description:
      'Residential, commercial, institutional and industrial building projects, delivered turnkey from foundation to finishing.',
    icon: HardHatIcon,
    part: 1,
  },
  {
    id: 'civil',
    title: 'Civil Engineering & Highways',
    description:
      'Design and construction of roads, highways, bridges, drainage systems and related civil infrastructure.',
    icon: RouteIcon,
    part: 1,
  },
  {
    id: 'water',
    title: 'Water Supply & Borehole Drilling',
    description:
      'Potable water provision through borehole drilling, treatment systems and distribution networks.',
    icon: DropletIcon,
    part: 1,
  },
  {
    id: 'property',
    title: 'Property & Housing Development',
    description:
      "Development of affordable housing estates and residential complexes addressing Nigeria's housing deficit.",
    icon: HomeIcon,
    part: 1,
  },
  {
    id: 'agriculture',
    title: 'Agricultural Projects',
    description: 'Farm infrastructure development, irrigation systems, storage facilities and processing plants.',
    icon: SproutIcon,
    part: 2,
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Consultancy',
    description:
      'Geological surveys, geotechnical engineering, hydrogeological studies and environmental assessments.',
    icon: FuelIcon,
    part: 2,
  },
  {
    id: 'renewable',
    title: 'Renewable Energy',
    description: 'Solar and wind energy installations and hybrid power solutions for all applications.',
    icon: SunIcon,
    part: 2,
  },
  {
    id: 'geology',
    title: 'Geology & Geotechnical Engineering',
    description:
      'Development of geological, geotechnical and hydrogeological investigation programme design, assessment and site supervision of geothermal energy projects.',
    icon: MountainIcon,
    part: 2,
  },
];

export const FEATURED_PLAN = {
  eyebrow: 'Featured Business Plan',
  title: 'Civil Servants Housing Project',
  location: 'Cross River State, Nigeria',
  date: 'July 2026',
  summary:
    'A landmark affordable housing programme designed to remove accommodation stress from civil servants, delivered under a structured business plan with government and private sector partners.',
  stats: [
    { value: 275, prefix: '₦', suffix: 'B', label: 'Total project cost' },
    { value: 5, suffix: ',000', label: 'Housing units planned' },
    { value: 2026, label: 'Programme commencement', prefix: 'July ' },
  ] as StatItem[],
  highlights: [
    'Affordable, quality and sustainable housing for civil servants',
    'Turnkey delivery from land preparation to final handover',
    'Supporting infrastructure: roads, drainage, water and power',
    'Structured financing and transparent cost management',
  ],
};

export const GALLERY: GalleryImage[] = [
  {
    id: 'certificate',
    src: 'https://res.cloudinary.com/derzcse6f/image/upload/v1785425490/Screenshot_2026-07-30_160803_rwywgk.png',
    alt: 'Certificate of Incorporation issued by the Corporate Affairs Commission, Federal Republic of Nigeria',
    caption: 'Certificate of Incorporation — RC.319516, Corporate Affairs Commission (1997)',
    tall: true,
  },
  { id: 'estate', src: IMAGES.estate, alt: 'Completed housing estate with paved access road', caption: 'Delivered housing estate — Phase 1 handover' },
  { id: 'villa', src: IMAGES.villa, alt: 'Architectural render of a modern bungalow villa', caption: 'Civil servants housing — typical unit render' },
  { id: 'interior', src: IMAGES.interior, alt: 'Interior render of an open-plan living and dining space', caption: 'Interior fit-out standard' },
  { id: 'blueprint', src: IMAGES.blueprint, alt: 'Architectural elevations and floor plan drawing', caption: 'Elevations and floor plan — 2-bedroom unit' },
  { id: 'civil', src: IMAGES.civil, alt: 'Workers tying steel reinforcement for a concrete foundation', caption: 'Civil works — reinforcement and foundations' },
  { id: 'solar', src: IMAGES.solar, alt: 'Technician installing rooftop solar panels', caption: 'Renewable energy — rooftop solar installation' },
  { id: 'fleet', src: IMAGES.fleet, alt: 'Tipper truck and tractor on a rural site road', caption: 'Plant and transport fleet' },
];

export const DISCIPLINES: Discipline[] = [
  { label: 'Civil Engineering', icon: ConstructionIcon },
  { label: 'Structural Engineering', icon: LayersIcon },
  { label: 'Mechanical Engineering', icon: SettingsIcon },
  { label: 'Electrical Engineering', icon: ZapIcon },
  { label: 'Architecture', icon: PencilRulerIcon },
  { label: 'Quantity Surveying', icon: CalculatorIcon },
  { label: 'Environmental Engineering', icon: LeafIcon },
  { label: 'Project Planning', icon: ClipboardListIcon },
  { label: 'Construction Supervision', icon: UserCheckIcon },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Technical Expertise',
    description: 'A multidisciplinary team of engineers, architects, quantity surveyors and project managers.',
    icon: UsersIcon,
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality management systems meeting international standards.',
    icon: GemIcon,
  },
  {
    title: 'Project Management Excellence',
    description: 'Proven methodologies delivering on time, within budget and to the highest standards.',
    icon: ClipboardListIcon,
  },
  {
    title: 'Safety Culture',
    description: 'Zero-harm philosophy with comprehensive HSE management systems.',
    icon: HardHatIcon,
  },
  {
    title: 'Sustainability Commitment',
    description: 'Environmentally responsible practices and sustainable material sourcing.',
    icon: LeafIcon,
  },
  {
    title: 'Client Satisfaction',
    description: 'A track record of exceeding expectations through transparent, responsive service.',
    icon: HeartIcon,
  },
  {
    title: 'Financial Stability',
    description: 'Sound financial management ensuring continuity on large-scale projects.',
    icon: TrendingUpIcon,
  },
  {
    title: 'Strategic Locations',
    description: 'Presence in Edo, Lagos and Akwa Ibom States for nationwide coverage.',
    icon: MapPinIcon,
  },
];

export const EQUIPMENT: EquipmentItem[] = [
  { label: 'Excavators & Bulldozers', icon: TruckIcon },
  { label: 'Mobile & Tower Cranes', icon: BuildingIcon },
  { label: 'Concrete Mixers & Batching Plants', icon: CircleDotIcon },
  { label: 'Dump Trucks & Loaders', icon: TruckIcon },
  { label: 'Survey Equipment', icon: MapPinIcon },
  { label: 'Generators & Welding Machines', icon: ZapIcon },
  { label: 'Engineering Software', icon: MonitorIcon },
  { label: 'Transport Fleet', icon: TruckIcon },
];

export const EQUIPMENT_FOOTNOTE =
  'Also includes scaffolding & formwork systems, piling rigs, drilling equipment, and full project-management tooling (Primavera P6, MS Project, AutoCAD, Revit, STAAD.Pro, ETABS).';

export const QAQC_INTRO =
  'ZUKKIE-MARIE LIMITED operates a comprehensive Quality Management System aligned with international best practices and the Nigerian Building Code. Our QA/QC framework ensures:';

export const QAQC_POINTS: string[] = [
  'Material testing and certification before use on all projects',
  'Regular inspections at every stage of construction',
  'Third-party quality audits and compliance verification',
  'Detailed documentation and traceability of all works',
  'Non-conformance reporting and corrective action procedures',
  'Continuous improvement through lessons learned and feedback',
];

export const QAQC_CALLOUT = {
  eyebrow: 'Committed to',
  title: 'International Standards',
  body:
    'Every project is benchmarked against the Nigerian Building Code and recognised international construction quality standards — from material sourcing to final handover.',
};

export const HSE_INTRO =
  'We believe all incidents are preventable. Our zero-harm philosophy guides every decision, from project planning to daily site operations.';

export const HSE_GROUPS: HseGroup[] = [
  {
    title: 'HSE Policy',
    icon: FileTextIcon,
    points: [
      { label: 'Comply with health, safety & environmental legislation', icon: BadgeCheckIcon },
      { label: 'Conduct regular risk assessments and controls', icon: ShieldAlertIcon },
    ],
  },
  {
    title: 'Safety Management',
    icon: ShieldCheckIcon,
    points: [
      { label: 'Site inductions, toolbox talks & safety briefings', icon: ClipboardListIcon },
      { label: 'Emergency response planning and drills', icon: ActivityIcon },
    ],
  },
  {
    title: 'Environmental Management',
    icon: LeafIcon,
    points: [
      { label: 'Impact assessments and biodiversity protection', icon: LeafIcon },
      { label: 'Waste minimisation, segregation & disposal', icon: RecycleIcon },
    ],
  },
  {
    title: 'Health & Welfare',
    icon: HeartPulseIcon,
    points: [
      { label: 'Occupational health monitoring & medical surveillance', icon: HeartPulseIcon },
      { label: 'On-site welfare facilities & wellbeing support', icon: UsersIcon },
    ],
  },
];

export const ORG_DEPARTMENTS: Discipline[] = [
  { label: 'Engineering & Technical', icon: SettingsIcon },
  { label: 'Projects & Operations', icon: ClipboardListIcon },
  { label: 'Finance & Accounts', icon: LandmarkIcon },
  { label: 'Procurement & Supply', icon: TruckIcon },
  { label: 'HR & Administration', icon: UsersIcon },
  { label: 'Legal & Compliance', icon: ScaleIcon },
  { label: 'Health, Safety & Environment', icon: ShieldCheckIcon },
];

export const WHY_CHOOSE_US: Discipline[] = [
  { label: 'Experienced & qualified professionals', icon: UsersIcon },
  { label: 'Proven track record of successful delivery', icon: TrophyIcon },
  { label: 'Quality services meeting global standards', icon: AwardIcon },
  { label: 'Timely delivery & cost efficiency', icon: ClockIcon },
  { label: 'Innovative solutions & technology', icon: LightbulbIcon },
  { label: 'Financial transparency & accountability', icon: LandmarkIcon },
  { label: 'Strong, embedded safety culture', icon: HardHatIcon },
  { label: 'Sustainable & environmentally responsible', icon: LeafIcon },
  { label: 'Client-centred approach & regular reporting', icon: HeartIcon },
  { label: 'Commitment to national development', icon: FlagIcon },
];

export const VISION_MISSION_ICONS = { vision: EyeIcon, mission: TargetIcon };

export const CONTACT_INTERESTS: string[] = [
  'Housing & property development',
  'Construction & building works',
  'Civil engineering & infrastructure',
  'Renewable energy',
  'Oil, gas & geotechnical consultancy',
  'Partnership or investment',
];

export const SUPPORT_ICONS = { wrench: WrenchIcon, cpu: CpuIcon };

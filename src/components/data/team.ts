import type { TeamMember } from '../../types';

/**
 * Leadership profiles transcribed from the corporate profile document.
 * Photography is unavailable, so each card falls back to a monogram avatar.
 */
export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Obianuju Azukaeg Nnoli',
    role: 'Chief Executive Officer',
    initials: 'ON',
    origin: 'Oraifite, Ekwusigo LGA, Anambra State',
    isPrincipal: true,
    summary:
      'An accomplished business executive with extensive leadership experience across oil and gas, research, agriculture, infrastructure development and business consulting.',
    bio: [
      'Obianuju Azukaeg Nnoli is the Chief Executive Officer (CEO) of the company. She hails from Oraifite in Ekwusigo Local Government Area of Anambra State, Nigeria.',
      'She received her primary education at Community Primary School, Onitsha, and later obtained her secondary and tertiary education at Lagos State University. She also holds a Diploma in DevOps Engineering from a Canadian institution and a Diploma in Nursing from USD College, USA.',
      'Mrs. Nnoli is an accomplished business executive with extensive leadership experience, having successfully managed several companies across different sectors. She has vast expertise in oil and gas, research, agriculture, infrastructure development, and business consulting, bringing strategic leadership and innovation to every project.',
      'Beyond her corporate achievements, she is a researcher, leadership speaker, and advocate for the empowerment of women and girls. She is a member of the Nigerian Small Scale Association and serves as a director of the Lizzy-Martin Foundation Nigeria. She is also a motivational speaker, gospel songwriter, and singer.',
      'Known for her integrity, diligence, and commitment to excellence, Mrs. Nnoli is passionate about driving sustainable development through quality housing, construction, and infrastructure projects that create lasting value for communities.',
    ],
    credentials: [
      'Lagos State University — secondary & tertiary education',
      'Diploma in DevOps Engineering (Canada)',
      'Diploma in Nursing, USD College, USA',
    ],
    memberships: ['Nigerian Small Scale Association', 'Director, Lizzy-Martin Foundation Nigeria'],
    image: "https://res.cloudinary.com/derzcse6f/image/upload/v1785589864/Screenshot_2026-08-01_133235_elnlxd.png"
  },
  {
    id: 'operations',
    name: 'Amaeshi Martins Ibe',
    role: 'Head of Operations',
    initials: 'AI',
    origin: 'Imo State',
    summary:
      'A highly experienced engineering professional with a strong background in project management and operations.',
    bio: [
      'Amaeshi Martins Ibe serves as the Head of Operations of the company. He is an indigene of Imo State, Nigeria, and is a highly experienced engineering professional with a strong background in project management and operations.',
      'He holds a Bachelor of Science (B.Sc.) in Mechanical Engineering and a Diploma in Theology, combining technical expertise with sound leadership and ethical values.',
      'Mr. Ibe has successfully managed and supervised several major engineering and infrastructure projects. He served as Project Manager at Apex Nig Ltd, where he oversaw the refurbishment of mechanical workshops and scupper drains for the Mobil FSO Yoho project. He also worked as Project Manager/Engineer at Jopkan Services Ltd, leading the fabrication, installation, and security upgrade of watchtowers for Mobil Producing Nigeria (MPN) onshore and offshore facilities.',
      "With his wealth of experience in engineering, construction, project execution, and operational management, Mr. Ibe plays a key role in ensuring the successful delivery of the company's civil servant housing, construction, and infrastructure development projects.",
    ],
    credentials: ['B.Sc. Mechanical Engineering', 'Diploma in Theology'],
    image: 'https://res.cloudinary.com/derzcse6f/image/upload/v1785597548/Screenshot_2026-08-01_161822_hezu7n.png'
  },
  {
    id: 'building',
    name: 'Okeke Joseph Obumneme',
    role: 'Head of Building Projects',
    initials: 'OO',
    origin: 'Nnewi North LGA, Anambra State',
    summary:
      'A seasoned building professional with a solid foundation in construction and project management.',
    bio: [
      'Okeke Joseph Obumneme serves as the Head of Building Projects of the company. He is from Nnewi North Local Government Area of Anambra State, Nigeria, and is a seasoned building professional with a solid foundation in construction and project management.',
      'He holds a Bachelor\u2019s Degree in Building Technology, equipping him with the technical knowledge and practical expertise required for the planning, supervision, and execution of building projects.',
      "As the Head of Building Projects, Mr. Obumneme is responsible for overseeing the company's building operations, ensuring that all projects are executed in accordance with approved specifications, quality standards, safety regulations, and project timelines. His dedication to excellence, professionalism, and efficient project delivery contributes significantly to the successful implementation of the company's civil servant housing, construction, and infrastructure development projects.",
      'Mr. Obumneme is married and is committed to delivering durable, high-quality developments that meet the needs of clients and stakeholders.',
    ],
    credentials: ["Bachelor's Degree in Building Technology"],
    image: 'https://res.cloudinary.com/derzcse6f/image/upload/v1785513697/Screenshot_2026-07-31_165331_p5a1wu.png'
  },
  {
    id: 'welding',
    name: 'Dr. Onyejekwe',
    role: 'Head of Engineering & Welding Services',
    initials: 'DO',
    origin: 'Imo State',
    summary:
      'An engineering professional with over three decades of experience in the electrical and electronics engineering sector.',
    bio: [
      'Dr. Onyejekwe serves as the Head of Engineering and Welding Services. He is an indigene of Imo State, Nigeria, and is an engineering professional with over three decades of experience in the electrical and electronics engineering sector.',
      'He holds a Bachelor of Engineering (B.Eng.), Master of Science (M.Sc.), and Doctor of Philosophy (Ph.D.) in Electrical/Electronics Engineering, reflecting his strong academic foundation and technical expertise.',
      'With over 30 years of professional experience, Dr. Onyejekwe has built an outstanding career in electrical and electronics engineering, providing leadership in engineering design, project execution, technical supervision, and quality assurance.',
      'As the Head of Engineering and Welding Services, he oversees the company\u2019s engineering, electrical, and welding operations, ensuring that all projects are executed in accordance with industry standards, safety regulations, and engineering best practices.',
      "Dr. Onyejekwe is married and is widely recognized for his professionalism, technical excellence, and commitment to delivering innovative, reliable, and sustainable engineering solutions that support the company's civil servant housing, construction, and infrastructure development projects.",
    ],
    credentials: [
      'B.Eng. Electrical/Electronics Engineering',
      'M.Sc. Electrical/Electronics Engineering',
      'Ph.D. Electrical/Electronics Engineering',
      '30+ years of professional experience',
    ],
    image: 'https://res.cloudinary.com/derzcse6f/image/upload/v1784575665/kingsley_onyejekwe_pqu5lh.jpg'
  },
  {
    id: 'finance',
    name: 'Dr. Amadi Justice Anwumere',
    role: 'Head of Finance & Budget Planning',
    initials: 'AA',
    origin: 'Rivers State',
    summary:
      'A seasoned finance professional with extensive expertise in financial management, budgeting and strategic planning.',
    bio: [
      'Dr. Amadi Justice Anwumere serves as the Head of Finance and Budget Planning of the company. He is an indigene of Rivers State, Nigeria, and is a seasoned finance professional with extensive expertise in financial management, budgeting, and strategic planning.',
      'He holds a Doctor of Philosophy (Ph.D.) in Accounting, providing him with a strong academic and professional foundation in financial administration, corporate governance, and fiscal management.',
      'With over 10 years of professional experience, Dr. Anwumere has built a distinguished career in accounting and financial management.',
      "As the Head of Finance and Budget Planning, he is responsible for overseeing the company's financial planning, budgeting, cost control, financial reporting, and resource allocation. He plays a critical role in ensuring financial transparency, accountability, and the efficient utilisation of resources to support the successful execution of the company's civil servant housing, construction, and infrastructure development projects.",
      'Dr. Anwumere is recognized for his analytical skills, strategic financial leadership, and commitment to maintaining the highest standards of professionalism and financial integrity.',
    ],
    credentials: ['Ph.D. Accounting', '10+ years of professional experience'],
    image: 'https://res.cloudinary.com/derzcse6f/image/upload/v1784574904/amadi_justice_vk89sl.jpg'
  },
  {
    id: 'qaqc',
    name: 'Engr. Amarachi Elizabeth Okereke',
    role: 'Head of Quality Assurance & Quality Control (QA/QC)',
    initials: 'AO',
    summary:
      'A dedicated and results-driven engineering professional with a strong background in the oil and gas industry, quality management and project operations.',
    bio: [
      'P. Engr. Amarachi Elizabeth Okereke serves as the Head of Quality Assurance and Quality Control (QA/QC) of the company. She is a dedicated and results-driven engineering professional with a strong background in the oil and gas industry, quality management, and project operations.',
      'She holds a Bachelor of Engineering (B.Eng.) in Petroleum Engineering from Rivers State University. Her academic training, coupled with practical industry experience, has equipped her with the technical expertise and leadership skills required to ensure the highest standards of quality, safety, and operational excellence.',
      "Engr. Okereke has gained valuable professional experience through her roles with leading organizations in Nigeria's petroleum sector. She completed an industrial internship at Saipem Operational Base, Port Harcourt, where she participated in industrial painting and anti-corrosion operations, ensuring compliance with client specifications and safety procedures. She also worked as a Production Engineer at Weafri Well Services Company Ltd, where she managed documentation, recorded technical meetings, and supervised tank and meter calibration processes.",
      'As an Officer-in-Charge at the NUPRC for the BOGT Terminal (SPDC), Bonny, Rivers State, and Brass Terminal (NAOC), Bayelsa State, she monitored terminal operations, supervised laboratory quality control activities, prepared production reports, assisted in crude export certification, and ensured full compliance with the Petroleum Industry Act (PIA) and Health, Safety, and Environment (HSE) regulations.',
      'Her core competencies include problem-solving, critical thinking, project management, quality assurance, regulatory compliance, effective communication, and teamwork. She is committed to delivering quality-driven solutions that support the successful execution of the company\u2019s civil servant housing, construction, and infrastructure development projects.',
      'Engr. Okereke is a Student Member (Pupil Engineer) of the Council for the Regulation of Engineering in Nigeria (COREN), a Graduate Member of the Nigerian Society of Engineers (NSE), and a Professional Member of the Society of Petroleum Engineers (SPE). She is also actively involved in volunteering and professional development initiatives, reflecting her passion for continuous learning, leadership, and service.',
    ],
    credentials: ['B.Eng. Petroleum Engineering, Rivers State University'],
    memberships: [
      'Student Member (Pupil Engineer), COREN',
      'Graduate Member, Nigerian Society of Engineers (NSE)',
      'Professional Member, Society of Petroleum Engineers (SPE)',
    ],
    image: 'https://res.cloudinary.com/derzcse6f/image/upload/v1784575129/amarachi_elizabeth_jmokbw.jpg',
  },
  {
    id: 'it',
    name: 'Engr. Chinedu Nwachukwu',
    role: 'Head of Engineering / I.T',
    initials: 'CN',
    summary:
      'A highly accomplished engineering professional, strategic problem solver, and systems architect with over a decade of multidisciplinary experience spanning engineering, manufacturing, the public sector and financial services.',
    bio: [
      'Engr. Chinedu Nwachukwu is a highly accomplished engineering professional, strategic problem solver, and systems architect with over a decade of multidisciplinary experience spanning engineering, manufacturing, the public sector, and financial services. Renowned for delivering innovative, sustainable, and high-impact solutions, he possesses a proven ability to transform complex technical and operational challenges into efficient, practical, and long-lasting outcomes.',
      'He began his career in Mechanical and Manufacturing Engineering, where he specialised in the design of engineering components, manufacturing processes, and product development. Through his expertise in advanced manufacturing, he successfully led the development of products from concept to commercial production, overseeing the successful launch of more than 300 products.',
      'His transition into the public sector further strengthened his expertise in stakeholder engagement, organisational transformation, strategic planning, and financial analysis, enabling him to lead multidisciplinary projects and improve organisational performance. He currently serves within the United Kingdom\u2019s financial services sector, where he leads the redesign of business processes, technology systems, compliance frameworks, and operational architecture.',
      'He has also played a significant role in a major banking integration programme and architecture governance, ensuring operational excellence and regulatory compliance.',
      "As Head of Engineering, he provides strategic leadership for the company's engineering operations, overseeing the planning, design, implementation, and quality delivery of engineering solutions for civil servant housing, construction, and infrastructure development projects. His expertise ensures that projects are delivered efficiently, safely, cost-effectively, and in accordance with international engineering standards.",
      'He aims to strengthen the company\u2019s engineering design, systems architecture, project management, digital transformation, manufacturing innovation, data analytics, process optimisation, organisational design, and strategic leadership. He is widely recognised for his analytical mindset, commitment to excellence, and ability to deliver innovative engineering solutions that create lasting value and drive sustainable development.',
    ],
    credentials: [
      'Mechanical & Manufacturing Engineering background',
      '300+ products launched to commercial production',
      'Systems architecture & digital transformation leadership',
    ],
    certifications: [
      'Agile Certified Professional — Agile Project and Delivery Management',
      'Professional Banker Certificate — Chartered Banker Institute',
      'Google Data Analytics Professional Certificate — Coursera',
      'Python for Data Analysis — CodeClan',
      'Project Management — International Business Management Institute, Berlin, Germany',
      'Digital Manufacturing & Design — Coursera',
      'Emotional and Social Intelligence — Coursera',
      'Diploma in Leadership Development — Covenant University',
    ],
    image: 'https://res.cloudinary.com/derzcse6f/image/upload/v1785597701/Screenshot_2026-08-01_162109_ykkrp0.png',
  },
];

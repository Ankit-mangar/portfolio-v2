import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TSocialLink,
} from '../types';

import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  thinkitive,
  roche,
  threejs,
  springboot,
  aws,
  angular,
  nextjs,
  materialUi,
  bootstrap,
  backend,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'blog',
    title: 'Blog',
  },
  {
    id: 'music',
    title: 'Music',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Material UI',
    icon: materialUi,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Roche',
    icon: roche,
    iconBg: '#E6DEDD',
    date: 'Oct 2024 - Present',
    points: [
      'Created clear and comprehensive API documentation with user-friendly communication of technical concepts, maintaining accurate and organized specifications for development teams.',
      'Handled challenging cross-browser compatibility issues and optimized high-traffic websites, implementing performance testing, debugging, and common component libraries.',
      'Managed source code using GitHub, and GitLab for version control, responsible for bug fixes, feature enhancements, and continuous improvements throughout the development lifecycle.',
      'Proficient in client communication and conducting technical interviews, troubleshooting complex issues with strong management skills and fostering collaborative team environments.',
    ],
  },
  {
    title: 'Full Stack Developer',
    companyName: 'Thinkitive Technologies Pvt. Ltd.',
    icon: thinkitive,
    iconBg: '#383E56',
    date: 'July 2021 - Oct 2024',
    points: [
      'Led full lifecycle software development for Project Management and Healthcare domains using Agile methodology, managing project estimation, scheduling, and successfully leading a dynamic team of 6 members.',
      'Developed responsive single-page applications using React.js, Angular, Redux, NgRx, Tanstack, TypeScript, and modern UI frameworks (Bootstrap, Material UI, Angular Material) with ES6+ standards.',
      'Built scalable backend systems using Java Spring Boot, implementing RESTful APIs, CRUD operations, and microservices architecture with Gateway and Feign Client for distributed systems.',
      'Established clear development standards and procedures for both frontend and backend, ensuring code quality through Test-Driven Development (TDD) and comprehensive code reviews.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'NodMd',
    description:
      "Nod is a telehealth platform designed by specialists to treat patients wherever they are. We bring specialist treatment to critical access hospitals, skilled nursing facilities, post-acute rehab centers, and even directly to the patient's home.",
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'twilio',
        color: 'blue-text-gradient',
      },
      {
        name: 'payment gateway',
        color: 'green-text-gradient',
      },
    ],
    sourceCodeLink: 'https://www.nodmd.com/',
  },
  {
    name: 'Wazo',
    description:
      'WAZO technology provides a platform for the landlord, owner and tenants to map and manage their properties. WAZO is a platform that helps to manage Real Estate portfolios. Allows users to store and access all required documents related to Building, Apartments, Tenants also Billing information. It also allows us to create Leases for Tenants and manage properties accordingly.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    sourceCodeLink: 'https://wazotechnology.com/en/home',
  },
  {
    name: 'Restore',
    description:
      'Restore is a healthcare project focused on therapy services, aimed at aiding individuals in their recovery from injuries or surgeries. Restore offer personalized rehabilitation programs delivered by expert therapists, accessible at hospitals, rehabilitation centers, or even at home. Through teletherapy solutions and a network of skilled professionals, Restore facilitates seamless healing journeys, promoting independence and improved quality of life.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'mui',
        color: 'pink-text-gradient',
      },
    ],
    sourceCodeLink: 'https://anewhealthcare-provider.production-insights.restoreskills.com/',
  },
  {
    name: 'Mind Clinic',
    description:
      'MindClinic offers accessible mental health support through personalized counseling and therapy sessions. Mind Clinic connects individuals with licensed professionals for tailored care, fostering emotional resilience and well-being.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'zoom integration',
        color: 'pink-text-gradient',
      },
    ],
    sourceCodeLink: 'https://emr.mind.clinic/',
  },
  {
    name: 'Navify Clinical Hub',
    description:
      'Large-scale clinical platform used by oncology teams to access consolidated patient data and support critical decision-making workflows.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'NX',
        color: 'pink-text-gradient',
      },
      {
        name: 'module federation',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
    ],
    sourceCodeLink: '',
  },
];

const socialLinks: TSocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'http://www.linkedin.com/in/ankit-thapa',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Ankit-mangar/',
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=%2B918617015319&text=Hello+Ankit',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Craazyyyyy',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ankit_mangar',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@ankit.thapa10121998',
  },
];

export { services, technologies, experiences, testimonials, projects, socialLinks };

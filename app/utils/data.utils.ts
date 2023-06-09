// istanbul ignore file
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { ExperienceInterface, ProjectInterface } from '../interfaces/project.interface';

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'Sitemate',
    content: {
      position: 'Fullstack Engineer',
      period: 'June 2023 - Present',
      items: [
        'Responsible for the development of third party API integrations.',
        'Deliver high quality production code to arrange the company’s needs.',
        'Collaborate with product managers and designers to create seamless no-code experiences for company’s users.',
      ],
    },
  },
  {
    title: 'Pearlii',
    content: {
      position: 'Software Developer',
      period: 'March 2021 - March 2023',
      items: [
        'Refactored 65% of the mobile app source code to implement code quality standards and normalize processes.',
        'Reduced mobile app load speed by 28% using state management strategies and reactive programming.',
        'Implemented a new website with the latest technology and reach a top performance score of 95+ measured by Lighthouse.',
        'Engineered a server-less back-end that provides an API and background processes (cronjobs, queue, notifications) to multiple apps to be consumed on demand.',
      ],
    },
  },
  {
    title: 'UGG Australia',
    content: {
      position: 'Full Stack Developer',
      period: 'January 2020 - February 2021',
      items: [
        `Research and analyze the company's core business to transform its operational processes into a web app that covers its needs.`,
        'Engineered a wholesale e-commerce platform that reduced the operational cost of the company by 23%.',
        'Integrated third-party providers into the company platform to standardize processes such as orders, shipping and accounting.',
      ],
    },
  },
  {
    title: 'AppLivio',
    content: {
      position: 'Fullstack Developer',
      period: 'March 2020 - November 2020',
      items: [
        'Developed a web app to communicate patients and doctors through a booked video call.',
        'Implemented a serverless back-end using AWS services such as Chime SDK, DynamoDB and Amplify.',
        'Architected the web app using React and Redux to manage the state of the app.',
      ],
    },
  },
  // {
  //   title: 'OL Software',
  //   content: {
  //     position: 'Fullstack Developer',
  //     period: 'September 2019 - December 2019',
  //     items: [
  //       'Refactored the source code of the company’s latest product to improve the performance of the app.',
  //       'Implemented new features to the company’s product to improve the user experience.',
  //       'Perform consulting services to the company’s clients to improve their products.',
  //     ],
  //   },
  // },
  {
    title: 'Rebus',
    content: {
      position: 'Fullstack Developer',
      period: 'June 2017 - September 2019',
      items: [
        'Develop, upgrade and maintain multi-tenant software for multiple clients in different industries.',
        'Engineered a solution that automatically creates an agenda for users to meet with their customers, the algorithm prioritizes customers based on location and sales potential.',
        'Lead a team of 4 developers and managed to deliver, communicate and maintain reliable software.',
      ],
    },
  },
  {
    title: 'ParkeApp',
    content: {
      position: 'CTO & Co-Founder',
      period: 'November 2016 — May 2019',
      items: [
        'Engineered a minimal viable product',
        'Get our first 100 clients',
        'Start an acceleration and consolidation process with the main government funding entity in Colombia.',
      ],
    },
  },
];

export const FEATURED_PROJECTS_DATA: ProjectInterface[] = [
  {
    name: 'Wholesale E-commerce',
    type: 'Website platform',
    description:
      'After spend a few weeks learning from a manufacturing business inside their warehouse I proposed and co-created a wholesale e-commerce platforms.',
    tech: ['React', 'MaterialUI', 'NodeJS', 'Firebase', 'GCP'],
    image: '/featured/wholesale.webp',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'Portfolio',
    type: 'Website',
    description:
      'This is the first iteration of my personal website. Here I will post about my experience, future projects and articles about tech.',
    tech: ['React', 'TailwindCSS', 'NextJS', 'CMS', 'AWS'],
    image: '/featured/portfolio.webp',
    links: {
      github: 'https://github.com/jhonny9550/portfolio-v1',
      demo: '/',
    },
  },
  {
    name: 'PetPlant',
    type: 'IoT System + Mobile App',
    description:
      'An IoT project  that transforms the Tamagotchi concept into a real experience. You can add your personal plant to the app and check its water level, sun light level and customize its appearance.',
    tech: ['Arduino', 'Angular', 'Ionic', 'NodeJS', 'Firebase'],
    image: '/featured/petplant.webp',
    links: {
      github: 'https://github.com/jhonny9550/PetPlant',
      demo: '',
    },
  },
];

export const PROJECTS_DATA: Omit<ProjectInterface, 'image'>[] = [
  {
    name: 'Minigrep',
    type: 'CLI',
    description:
      'A very simple implementation of the basic functionality of the grep command-line tool using Rust.',
    links: { demo: '', github: 'https://github.com/jhonny9550/minigrep' },
    tech: ['Rust'],
  },
  {
    name: 'Bingo Game',
    type: 'Web App',
    description: 'A bingo game that you can play with your friends.',
    links: { demo: '', github: 'https://github.com/jhonny9550/bingo-game' },
    tech: ['React', 'TailwindCSS', 'Vite', 'AWS'],
  },
];

export const TECH_STACK_DATA: string[] = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Angular',
  'NodeJS',
  'NextJS',
];

export const SOCIAL_MEDIA_DATA: { icon: IconType; link: string; label: string }[] = [
  {
    link: 'https://www.linkedin.com/in/jhonny9550/',
    icon: FaLinkedin,
    label: 'Linkedin',
  },
  {
    link: 'https://twitter.com/jhotinez',
    icon: FaTwitter,
    label: 'Twitter',
  },
  {
    link: 'https://www.github.com/jhonny9550/',
    icon: FaGithub,
    label: 'Github',
  },
  {
    link: 'https://stackoverflow.com/users/7296576/jhonny-mart%c3%adnez',
    icon: FaStackOverflow,
    label: 'StackOverflow',
  },
];

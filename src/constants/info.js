import Capgemini from '../assets/Capgemini_logo.svg';
import Itronix from '../assets/Itronix_logo.svg';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import SaaS from '../assets/SaaS.jpg';
import Vite from '../assets/Vite.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import Open_Weather from '../assets/Open_Weather.png';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/tailwindcss.svg';
//import jwt from '../assets/jwt.svg';
//import socketio from '../assets/socketio.svg';
//import oauth from '../assets/oauth.svg';
//import chat from '../assets/chat.svg';
import SaaS_Landing from '../assets/SaaS_Landing.svg';
//import blogging from '../assets/blogging.svg';
import Forecast from '../assets/Weather.svg';
import javascript from '../assets/javascript.png';
import git from '../assets/git.png';
import youtube from '../assets/youtube.svg';
import rapid from '../assets/rapidapi.svg';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';

import typescript from '../assets/typescript.png';

import aws from '../assets/aws.svg';
import postman from '../assets/postman.svg';

import docker from '../assets/docker.png';
import github from '../assets/github.png';

import nextjs from '../assets/nextjs.svg';
import redis from '../assets/redis.svg';
import graphql from '../assets/graphql.svg';
import zustand from '../assets/zustand.png';
import python from '../assets/python.png';

import nest from '../assets/nest.svg';

import postgres from '../assets/postgres.png';
import vscode from '../assets/vscode.svg';
import notion from '../assets/notion.svg';
// import tailwind from "../assets/t"

export const Itronix_Info = [
  {
    key: 1,
    text: "Successfully completed 4 projects, including the company's main website",
  },
  {
    key: 3,
    text: 'Collaborated closely with team members to ensure project delivery within expected timelines',
  },
  {
    key: 4,
    text: 'Contributed to the development of new features and functionalities',
  },
  {
    key: 5,
    text: 'Implemented responsive design principles, ensuring optimal user experiences across various devices and screen sizes.',
  },
  {
    key: 6,

    text: 'Engaged in code reviews, providing constructive feedback and adhering to best practices to maintain code quality and consistency.',
  },
  {
    key: 7,

    text: 'Participated in user testing and feedback sessions, refining features based on user input and contributing to a user-centric development approach.',
  },
  {
    key: 8,
    text: 'Gained valuable hands-on experience with relevant technologies and received positive feedback for my work and learning ability.',
  },
];

export const Capgemini_Info = [
  {
    key: 0,
    text: "Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript, React.js and Node.js",
  },
  {
    key: 1,
    text: 'Worked with REST APIs to retrieve and display data from databases',
  },
  {
    key: 2,
    text: 'Conducted code reviews and contributed to establishing coding standards for React projects, ensuring high-quality code and adherence to best practices.',
  },
  {
    key: 3,
    text: 'Improved website performance and speed through optimization techniques by 55% by implementing optimization techniques like lazy loading',
  },
  {
    key: 4,
    text: 'Successfully navigated through different project categories, demonstrating adaptability and a deep understanding of unique industry requirements. Projects ranged from Ed-Tech, E-Commerce, healthcare and Service Marketplace] showcasing versatility and a broad skill set',
  },
  {
    key: 5,
    text: 'Worked closely with cross-functional teams, including back-end developers, QA engineers and Devops Engineer',
  },
  {
    key: 6,
    text: 'Troubleshot and fixed bugs and issues in the front-end to ensure smooth operation of the applications.',
  },
  {
    key: 7,
    text: 'Established a reputation for delivering projects on time and within budget, leading to high levels of client satisfaction and positive testimonials',
  },
];

export const experiences = [
  {
    id: '1',
    company: 'Capgemini India Pvt Ltd',
    logo: Capgemini,
    location: 'Pune, Maharashtra, India',
    role: 'Front end Developer',
    duration: 'MARCH 2022 - JULY 2024',
    description: Capgemini_Info,
  },
  {
    id: '2',
    company: 'Itronix Solutions',
    logo: Itronix,
    location: 'Mohali, Punjab, India',
    role: 'Front End Developer Intern',
    duration: 'OCTOBER 2021 - MARCH 2022',
    description: Itronix_Info,
  },
];

export const projects = [
  {
    id: '1',
    name: 'SaaS Landing Page',
    coverImage: SaaS_Landing,
    workedOn: ['Website'],
    description: [
      'Built a SaaS Landing Page for Xora AI Video Editing Tool.',
      'Used JavaScript for core interactivity and functionality.',
      'Developed with React.js to create a dynamic, component-based UI.',
      'Styled with Tailwind CSS for responsive, mobile-first design.',
      'Implemented SaaS model with sections for features, pricing, and CTAs.',
      'Used Vite.js for fast development and build process.',
      'Managed code with Git and pushed to GitHub for version control and collaboration.',
    ],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: SaaS,
        name: 'SaaS',
      },
      {
        logo: tailwind,
        name: 'Tailwind CSS',
      },
      {
        logo: Vite,
        name: 'Vite.js',
      },
      {
        logo: git,
        name: 'Git',
      },
    ],
    link: 'https://saas-landing-vs.netlify.app/',
  },
  {
    id: '2',
    name: 'Weather Forecast',
    coverImage: Forecast,
    description: [
      'The website offers a structured, modular interface with a clean and simple layout for easy navigation.',
      'Fetched real-time weather data dynamically while handling API requests efficiently.',
      'Enabled users to search for weather details of any city with an optimized search bar for better usability.',
      'Showcased temperature, humidity, wind speed, and weather conditions in a well-organized format.',
      'Ensured smooth API calls, quick updates, and implemented error handling for invalid or failed requests.',
    ],
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: node,
        name: 'Node.js',
      },
      {
        logo: Open_Weather,
        name: 'Open Weather API',
      },
      {
        logo: git,
        name: 'Git',
      },
    ],
    link: 'https://vs-openweather.netlify.app/',
  },
  {
    id: '3',
    name: 'Youtube Clone',
    description: [
      'Users can watch videos with smooth and responsive playback, offering a user experience similar to the original YouTube platform.',
      'The clone includes a robust search functionality, allowing users to discover and explore a vast library of videos based on keywords, categories, and user preferences.',
      'Tailwind CSS is utilized to create a responsive and visually appealing design, ensuring the application is optimized for various screen sizes and devices.',
    ],
    coverImage: youtube,
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: redux,
        name: 'Redux',
      },
      {
        logo: tailwind,
        name: 'Tailwind CSS',
      },
      {
        logo: git,
        name: 'Git',
      },
      {
        logo: rapid,
        name: 'Rapid API',
      },
    ],
    link: 'https://vs-youtube-clone.netlify.app/',
  },
];

export const frontend = [
  {
    logo: html,
    name: 'HTML',
  },
  {
    logo: css,
    name: 'CSS',
  },
  {
    logo: javascript,
    name: 'Javascript',
  },
  {
    logo: typescript,
    name: 'Typescript',
  },
  {
    logo: react,
    name: 'React.js',
  },
  {
    logo: nextjs,
    name: 'Next.js',
  },
  {
    logo: react,
    name: 'React Native',
  },
  {
    logo: redux,
    name: 'Redux',
  },
  {
    logo: zustand,
    name: 'Zustand',
  },
  {
    logo: tailwind,
    name: 'Tailwind CSS',
  },
];
export const backend = [
  {
    logo: node,
    name: 'Node.js',
  },
  {
    logo: express,
    name: 'Express.js',
  },
  {
    logo: nest,
    name: 'Nest.js',
  },
  {
    logo: graphql,
    name: 'GraphQL',
  },
  {
    logo: mongodb,
    name: 'MongoDB',
  },
  {
    logo: postgres,
    name: 'PostgreSQL',
  },
  {
    logo: aws,
    name: 'AWS',
  },
  {
    logo: redis,
    name: 'Redis',
  },
  {
    logo: docker,
    name: 'Docker',
  },
];
export const other = [
  {
    logo: java,
    name: 'Java',
  },
  {
    logo: python,
    name: 'Python',
  },
  {
    logo: git,
    name: 'Git',
  },
  {
    logo: github,
    name: 'Github',
  },
  {
    logo: postman,
    name: 'Postman',
  },
  {
    logo: vscode,
    name: 'VS Code',
  },
  {
    logo: notion,
    name: 'Notion',
  },
];

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  tindog,
  Khelad,
  Letflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "JavaScript Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: " HTML5",
    company_name: "Udemy",
    icon: html,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "During the course, I learned how to create a website from scratch. I got acquainted with the basic structure of HTML in detail. I learned how to structure the page and make the right logic.",
    ],
  },
  {
    title: " CSS3",
    company_name: "Udemy",
    icon: css,
    iconBg: "#E6DEDD",
    date: "September 2022 - November 2022",
    points: [
      "I studied the basics of CSS. I became acquainted with modern web page designs. I learned how to debug applications on all devices. During the course, I learned Bootstrap 5, Styled Components, and Tailwind CSS.",
    ],
  },
  {
    title: "JavaScript",
    company_name: "Academy of digital industries",
    icon: javascript,
    iconBg: "#383E56",
    date: "December 2022 - February 2023",
    points: [
      "I thoroughly studied JavaScript and gained a deep understanding of developing asynchronous code. I gained valuable experience in the relationship between back-end and front-end development. I learned effective strategies for overcoming obstacles that may arise during application development. Additionally, I acquired the knowledge of creating abstractions and developing optimal higher-order components.",
    ],
  },
  {
    title: "React.js",
    company_name: "Academy of digital industries",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "During the course, I mastered the basics of React at a high level. I deeply studied all the required React Hooks and their meanings. I also became acquainted with and learned ideal design patterns. With the help of the course, I can create effective UI/UX platforms. I have gained experience in problem-solving and minimizing all expected threats that could reduce application performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "tindog",
    description:
      "A web-based platform that allows users to search for a soul mate for their pets.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap5",
        color: "pink-text-gradient",
      },
    ],
    image: tindog,
    source_code_link: "https://github.com/tatojakhua/tindog",
  },
  {
    name: "Khelad",
    description:
      "The web application provides users with the convenience of online shopping from the comfort of their homes.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Khelad,
    source_code_link: "https://github.com/tatojakhua/khelad",
  },
  {
    name: "Letflix",
    description:
      "The platform features IMDB's top 100 movies and its trailers.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScrpit",
        color: "green-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
    ],
    image: Letflix,
    source_code_link: "https://github.com/tatojakhua/Letflix",
  },
];

export { services, technologies, experiences, testimonials, projects };

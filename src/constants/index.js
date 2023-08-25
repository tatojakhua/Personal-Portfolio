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
  Khelad,
  Letflix,
  Floyfy,
  toko,
  gio,
  giviko,
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
      "Tato is an exceptionally motivated and hardworking individual who possesses a keen eye for detail. He loves digging deep into new technolgies.",
    name: "Tornike Lomidze",
    designation: "Senior Developer",
    company: "Crystal",
    image: toko,
  },
  {
    testimonial:
      "I was Tato's mentor when Tato was starting to learn programming, so I know he has good basics in javascript, understands the basic principles of how modern web apps work, and gained little experience using React.   One of Tato's standout qualities is his unwavering work ethic and genuine enthusiasm for his craft. He consistently goes above and beyond, seeking a deeper comprehension of complex topics and never settling for basic solutions. Looking ahead, I believe Tato's future plans are well-defined and progressing in the right direction. Focusing on honing his skills in algorithms, design patterns, and tackling medium to complex UI assemblies will undoubtedly contribute to his growth as a developer.",
    name: "Giorgi Dzirkvelishvili",
    designation: "Software engineer",
    company: "EPAM",
    image: gio,
  },
  {
    testimonial:
      "I have started this journey with Tato from the very beginning and witnessing his progress fills me with immense pride. Tato's dedication and tireless work ethic makes him one of the most hardworking individuals I have ever encountered. His genuine passion for programming and insatiable thirst for learning is truly exceptional qualities. This is just the beginning of Tato's remarkable path, and I have no doubt that he will achieve great success as a developer. The future holds limitless opportunities for growth and accomplishment.",
    name: "Giviko Tokhadze",
    designation: "React Junior Developer",
    company: "Frelancer",
    image: giviko,
  },
];

const projects = [
  {
    name: "Floyfy",
    description:
      "User-friendly web platform to adjust music elements in tracks for a personalized listening experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Floyfy,
    source_code_link: "https://github.com/tatojakhua/FloyFy",
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
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
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
        name: "React",
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

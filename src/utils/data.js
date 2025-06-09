import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import frontend_icon from "../assets/html.png";
import backend_icon from "../assets/java.png";
import tools from "../assets/tools.png";
import soft_skill from "../assets/soft_skill.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend_icon,

    skills: [
      { skill: "HTML", percentage: "90%" },
      { skill: "CSS", percentage: "80%" },
      { skill: "React JS", percentage: "80%" },
      { skill: "Bootstrap", percentage: "70%" },
      { skill: "Vue.js", percentage: "70%" },
      { skill: "Tailwind CSS", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backend_icon,

    skills: [
      { skill: "PHP", percentage: "60%" },
      { skill: "TypeScript", percentage: "40%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "C#", percentage: "50%" },
      { skill: "Laravel", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,

    skills: [
      { skill: "Git $ GitHub", percentage: "50%" },
      { skill: "Visual Studio Code", percentage: "90%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: soft_skill,

    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collabaration", percentage: "80%" },
    ],
  },
];

export const PROFILE_DATA = {
  name: "Sam Nang",
  tagline:
    "A frontend developer. With a Bachelor's degree in Computer Science from the University of Science and Technology.",
  jobtitle: "Front-End Developer",
  location: "Cambodia",
  yearOfExperience: 2,
  skills: ["React JS", "Vue.js", "JavaScript", "Tailwind CSS"],
  email: "samnangheang6@gmail.com",
  phone: "096 26 29 446 || 071 49 08 851",
  website: "",
};

// export const SKILLS = [
//     {
//         id: "01",
//         icon: IoLogoJavascript,

//         title: "Java Script",
//         comment: `With over 3 years of experience, JavaScript is my primary programming language for developing interactive and dynamic web applications. I have a strong command of modern ES6+ features, enabling me to write clean and efficient code. I use JavaScript extensively in both front-end and back-end development to create seamless user experiences.`,

//     },
//     {
//         id: "02",
//         icon: IoLogoHtml5,

//         title: "HTML",
//         comment: `HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantics, ensuring my web applications are well- structured and accessible`,

//     },
//     {
//         id: "03",
//         icon: FaCss3,

//         title: "CSS",
//         comment: `Adept in CSS, I create responsive and visually engaging designs for web applications. My expertise includes CSS Grid, Flexbox, and animations to enhance user interfaces while ensuring cross-browser compatibility.`,

//     },
//     {
//         id: "04",
//         icon: FaReact,

//         title: "React JS",
//         comment: `With extensive experience in React.js, I specialize in building modular and reusable components to create dynamic user interfaces. I’m proficient in managing state using hooks and context, integrating APIs, and optimizing performance for single-page applications (SPAs).`,

//     },
//     {
//         id: "05",
//         icon: RiTailwindCssFill,

//         title: "Tailwind Css",
//         comment: `I utilize Tailwind CSS to streamline the styling process for my web applications. Its utility-first approach allows me to create responsive and visually appealing designs efficiently, ensuring consistency across projects.

// `,

//     },
//     {
//         id: "06",
//         icon: FaPhp,

//         title: "PHP",
//         comment: `I have experience using PHP for back-end development, including creating dynamic websites and integrating databases. I’ve utilized PHP in several projects to build server-side logic and manage user authentication.`,

//     },
//     {
//         id: "08",
//         icon: SiTypescript,

//         title: "TypeScript",
//         comment: `I’ve recently started using TypeScript to bring static typing to my JavaScript projects. This helps me write more reliable code by catching potential errors early and improving the maintainability of large-scale applications.`,

//     },
//     {
//         id: "09",
//         icon: FaLaravel,

//         title: "Laravel",
//         comment: `I have a medium level of experience with Laravel, enabling me to build scalable and secure web applications efficiently. I have worked on designing RESTful APIs, implementing user authentication, and managing database migrations. While I’m not an expert, I am confident in using Laravel for developing robust back-end solutions and am eager to further enhance my skills with this framework.`,

//     },
//     {
//         id: "07",
//         icon: RiNextjsFill,

//         title: "Next js",
//         comment: ` Recently started working with Next.js to build modern, server-rendered React applications. I’m exploring its capabilities for static site generation (SSG) and server-side rendering (SSR), focusing on improving website performance and scalability.`,

//     },
// ];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "France AJ Group",
    position: "Data Entry",
    duration: "2022-2023",
    description:
      "Started my career at France AJ Group as a Data Entry Specialist, where I managed and maintained company databases with precision. Focused on accurately inputting, organizing, and verifying data while supporting administrative operations. This role honed my attention to detail and introduced me to foundational workflows in the tech industry.",
  },
  {
    id: "02",
    company: "France AJ Group",
    position: "Web Developer",
    duration: "2022-2023",
    description:
      "Promoted to Web Developer, where I transitioned into building and maintaining responsive websites. Leveraged HTML, CSS, and JavaScript to create accessible and well-structured web solutions. Worked closely with the design and development teams to ensure seamless user experiences and meet project objectives.",
  },
  {
    id: "03",
    company: "France AJ Group",
    position: "Front-end Developer",
    duration: "2023-Now",
    description:
      "Currently serving as a Front-end Developer, specializing in crafting engaging and visually appealing user interfaces using React.js. Focused on implementing modern front-end technologies and ensuring high performance, accessibility, and responsiveness. Collaborate with cross-functional teams to deliver innovative solutions that align with business goals.",
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm Samnang Heang, a frontend developer. With a Bachelor's degree in Computer Science from the University of Science and Technology, I've had the opportunity to work on a variety of projects, ranging from e-commerce platforms to dashboards. My passion lies in creating engaging web applications that enhance user experiences through thoughtful design and efficient code.",
  background:
    "I am proficient in a range of technologies, including HTML, CSS, PHP, Laravel, JavaScript, Tailwind CSS, React JS, Vue.js and others , alongside my expertise in React and Vue.js. I prioritize adhering to best practices in software development, ensuring that my applications are not only responsive and scalable but also maintainable and user-friendly.",
  interests:
    "Outside of development, I love exploring new places, capturing moments through photography, and learning new skills. Reading is a cherished pastime for me.",
  careerGoals:
    "As I look to the future, I'm committed to continually refining my skills, exploring the latest technologies, and contributing to impactful projects that enhance users' lives. Whether collaborating with innovative teams or embarking on new ventures, I’m excited about the journey ahead and the difference I can make through technology.",

  state: {
    yearOfExperience: "2+",
    numberOfProjects: "10+",
    certificationsEarned: 2,
  },
};

import img from "../assets/profile.jpg";

export const PROJECT = [
  {
    key: 1,
    title: "Noted Apllication",
    imageSrc: img,
    description:
      "This is a Full-stack project made with completed Vue.Js. TypeScript, C#(.net core API) and Tailwind CSS. I'm also experienced in using version control systems like Git and working with",
    languages: [
      "Vue JS",
      "Tailwind CSS",
      ".Net core API",
      "SQL Server",
      "TypeScript",
    ],
    demo: "https://notes-application-amber.vercel.app",
    source: "gethub",
    category: "Fullstack",
  },
  {
    key: 2,
    title: "Doctor Appointment",
    imageSrc: img,
    description:
      "This is a project made with complete , CSS, and Node.js. I'm also experienced in using version control systems like Git and working with",
    languages: [
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "MongoDB",
      "Stripe and Razorpay",
    ],
    demo: "https://www.facebook.com",
    source: "gethub",
    category: "Fullstack",
  },
  {
    key: 3,
    title: "Book Store",
    imageSrc: img,
    description:
      "This is a project made with complete React Js. CSS, and Node.js. I'm also experienced in using version control systems like Git and working with",
    languages: ["Java", "PHP", "JS"],
    demo: "https://www.facebook.com",
    source: "gethub",
    category: "Frontend",
  },

  {
    key: 4,
    title: "E-Learning",
    imageSrc: img,
    description:
      "This is a project made with complete React Js. CSS, and Node.js. I'm also experienced in using version control systems like Git and working with",
    languages: ["Java", "PHP", "JS"],
    demo: "https://www.facebook.com",
    source: "gethub",
    category: "Frontend",
  },
  {
    key: 5,
    title: "Spotify Clone",
    imageSrc: img,
    description:
      "This is a project made with complete React Js. CSS, and Node.js. I'm also experienced in using version control systems like Git and working with",
    languages: ["Java", "PHP", "JS"],
    demo: "https://www.facebook.com",
    source: "gethub",
    category: "Frontend",
  },
  {
    key: 6,
    title: "Blog Website",
    imageSrc: img,
    description:
      "This is a project made with complete React Js. CSS, and Node.js. I'm also experienced in using version control systems like Git and working with",
    languages: ["Java", "PHP", "JS"],
    demo: "https://www.facebook.com",
    source: "gethub",
    category: "Frontend",
  },
  {
    key: 7,
    title: "Blog App with Admin Dashboard",
    imageSrc: img,
    description:
      "This is a Full-stack project made with completed Vue.Js. TypeScript, C#(.net core API) and Tailwind CSS. I'm also experienced in using version control systems like Git and working with",
    languages: [
      "Vue JS",
      "Tailwind CSS",
      ".Net core API",
      "SQL Server",
      "TypeScript",
    ],
    demo: "https://blog-frontend-sigma-ten.vercel.app",
    source: "gethub",
    category: "Fullstack",
  },
];

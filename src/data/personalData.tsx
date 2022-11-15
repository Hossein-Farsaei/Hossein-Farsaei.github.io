import { IworkExperience } from "../interfaces/IworkExperience";
import ICertificate from "../interfaces/ICertificate";
import { MdPageview } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiAngular,
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJinja,
  SiJquery,
  SiKotlin,
  SiLeaflet,
  SiMysql,
  SiPostgresql,
  SiPowerbi,
  SiPython,
  SiReact,
  SiTableau,
  SiTypescript,
} from "react-icons/si";
import {
  FaBitbucket,
  FaDownload,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export const ProfileInfo: JSX.Element = (
  <>
    <p>
      I'm an innovative front-end web developer with experience in building and
      maintaining interactive responsive web applications, and I'm also familiar
      with back-end web development, especially Python programming.
    </p>
    <p>
      I am proficient in HTML, CSS, JS, plus, modern libraries and frameworks
      like ReactJS and TypeScript. Seeking position as a front-end web developer
      where my learned skills be further developed and utilized while learning
      new skills. I am always interested in a challenge and enjoy working
      collaboratively while can also run with projects on my own.
    </p>
  </>
);

export const workExperience: IworkExperience[] = [
  {
    title: "Freelance Web Developer",
    company: "-",
    start: "Aug 2022",
    end: "Present",
    icons: [],
    description:
      "I am now working as a freelance web developer and currently working on a sales website and warehouse management web application.",
  },
  {
    title: "Front-End Developer and Software Engineer",
    company: "Kwantis (Italy)",
    start: "Jan 2020",
    end: "Aug 2022",
    icons: [],
    description:
      "As a part of software developer team, I worked with different frameworks and libraries like React, Typescript, Jinja, Leaflet and Chart.js in order to provide customers with responsive and interactive web applications. Moreover, I worked with different dashboard platforms as Tableau, Power Bi, and QlikView for creating dashboards for different customers. I Also had the chance to work with Python and experience more about Backend side of developing and gain a view of full stack developing.",
  },
  {
    title: "Freelance Web Developer",
    company: " - ",
    start: "May 2016",
    end: "Dec 2019",
    icons: [],
    description:
      "Contribute to several different projects to develop web applications as stat-up projects or short time projects which were focused on developing. Working on different project with different people was a great chance for learning adoption with different work situations and becoming familiar with different frameworks like React and Typescript.",
  },
  {
    title: "Front-End Developer",
    company: "Mozando Company, Tehran (Iran)",
    start: "Jun 2015",
    end: "May 2016",
    icons: [],
    description:
      "Mozando was an online Marketplace which followed eBay business model and has been active in Iran for more than a year. I was responsible to provide web pages with HTML5, CSS3, JavaScript and JQuery.",
  },
  {
    title: "Web Designer",
    company: "Municipalities organization, Tehran (Iran)",
    start: "Mar 2014",
    end: "Jun 2015",
    icons: [],
    description:
      "I was responsible for Designing the managing the portal. It was a good experience about working with pure HTML CSS JavaScript and JQuery, improving my basic skills, and self-improved in time managing, knowledge sharing, and team working.",
  },
];

export const education: ICertificate[] = [
  {
    level: "MS",
    title: "Computer Science and Engineering",
    producer: "Politecnico di Milano, Como",
    start: "2017",
    end: "2020",
    additionalData: "Completed 95 credits towards a MS",
    icons: [],
  },
  {
    level: "BS",
    title: "Information Technology",
    producer: "Payame Noor University, Tehran",
    start: "2010",
    end: "2014",
    icons: [],
  },
];

export const skills = [
  {
    title: "HTML5",
    icon: <SiHtml5 />,
    knowledge: 100,
  },
  { title: "CSS", icon: <SiCss3 />, knowledge: 97 },
  { title: "Bootstrap", icon: <SiBootstrap />, knowledge: 96 },
  { title: "JavaScript", icon: <SiJavascript />, knowledge: 98 },
  { title: "TypeScript", icon: <SiTypescript />, knowledge: 95 },
  { title: "JQuery", icon: <SiJquery />, knowledge: 85 },
  { title: "ReactJs", icon: <SiReact />, knowledge: 92 },
  { title: "Angular", icon: <SiAngular />, knowledge: 60 },
  { title: "Python", icon: <SiPython />, knowledge: 75 },
  { title: "Kotlin", icon: <SiKotlin />, knowledge: 70 },
  { title: "PostgreSQL", icon: <SiPostgresql />, knowledge: 88 },
  { title: "Power Bi", icon: <SiPowerbi />, knowledge: 85 },
  { title: "Tableau", icon: <SiTableau />, knowledge: 80 },
  { title: "QlikView", icon: <MdPageview />, knowledge: 85 },
  { title: "Photoshop", icon: <SiAdobephotoshop />, knowledge: 92 },
];

export const languages: { title: string; level: number; levelTitle: string }[] =
  [
    { title: "English", level: 66.6, levelTitle: "B2" },
    { title: "Persian", level: 100, levelTitle: "Native" },
    { title: "Italian", level: 17, levelTitle: "A1" },
  ];

export const certificates: ICertificate[] = [
  {
    title: "MCSE: Cloud Platform and Infrastructure",
    producer: "Microsoft (License F812-6587)",
    start: "26/09/2016  ",
    end: "",
    icons: [],
  },
  {
    title: "MCSE: Server Infrastructure",
    producer: "Prometric Test Center (License F023-2992)",
    start: "08/10/2014  ",
    end: "",
    icons: [],
  },
];

export const tuterials: ICertificate[] = [
  {
    title: "React: ",
    producer: "",
    start: "Developing",
    end: "",
    icons: [<SiReact/>],
    additionalData: <>I am working on this tuterial in my free time and I hope I will be able to publish it soon.</>  //if you are interested, you can check some of mini project which are covered <a href="/miniProjects" rel="noreferrer" target={"_blank"}><span style={{color: "blue"}}>here</span></a> </>
  },
  {
    title: "Adobe Photoshop",
    producer: <a href="https://www.udemy.com/course/photoshop-tutorial-easy-and-fun/" rel="noreferrer" target={"_blank"}>Photoshop Tutorial, Easy and Fun!</a>,
    start: "Published",
    end: "2019  ",
    icons: [<SiAdobephotoshop/>],
    additionalData: "Its a free course which is provided by me and one of my friends. you can check the course by clicking on the name of course."
  },
]

export const contacts: {
  preTitle: string;
  title: string;
  icon: JSX.Element;
  value: string[];
  url: string;
}[] = [
  {
    preTitle: "Download my",
    title: "Resume",
    value: ["Curriculum vitae"],
    url: "/CV.pdf",
    icon: <FaDownload />,
  },
  {
    preTitle: "Drop me an",
    title: "E-mail",
    value: ["hossein.farsaei01@gmail.com"],
    url: "mailto:hossein.farsaei01@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    preTitle: "Send me message on",
    title: "WhatsApp",
    value: ["+98 9122172241", "+39 3319016908"],
    url: "https://wa.me/989122172241",
    icon: <FaWhatsapp />,
  },
  {
    preTitle: "Send me message on",
    title: "Telegram",
    value: ["+98 9122172241", "+39 3319016908"],
    url: "https://telegram.me/hossein_farsaei",
    icon: <FaTelegram />,
  },
  {
    preTitle: "Check my",
    title: "Linkedin",
    value: ["hossein-farsaei"],
    url: "https://www.linkedin.com/in/hossein-farsaei",
    icon: <FaLinkedin />,
  },
  {
    preTitle: "Check my",
    title: "Bitbucket",
    value: ["h_farsaei"],
    url: "https://bitbucket.org/h_farsaei/mini-tutorial-projects/src/main/",
    icon: <FaBitbucket />,
  },
  {
    preTitle: "Follow me on ",
    title: "Instagram",
    value: ["hossein_farsaei"],
    url: "https://instagram.com/hossein_farsaei",
    icon: <FaInstagram />,
  },
  {
    preTitle: "Follow me on ",
    title: "Twitter",
    value: ["Ho3inF"],
    url: "https://twitter.com/Ho3inF",
    icon: <FaTwitter />,
  },
];

export const projects = [
  {
    owner: "Kwantis",
    name: "RTO",
    role: "Frontend Developer",
    teamSize: 5,
    domain: "Web Development",
    technologyIcons: [
      { text: "JavaScript", icon: <SiJavascript /> },
      { text: "JQuery", icon: <SiJquery /> },
      { text: "Jinja", icon: <SiJinja /> },
      { text: "Python", icon: <SiPython /> },
      { text: "Leaflet", icon: <SiLeaflet /> },
    ],
    description: (
      <>
        <p>
          The goal of this project was to provide a map-based interactive web
          application for the customer to view and manage their activities
          around the world in real time.
        </p>
        <p>
          I have provided the frontend with an interactive map based on Leaflet
          library with the require filters and elements according customer
          request.
        </p>
      </>
    ),
  },

  {
    owner: "Kwantis",
    name: "Lookahead",
    role: "Frontend Developer",
    teamSize: 6,
    domain: "web Development",
    technologyIcons: [
      { text: "React", icon: <SiReact /> },
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "C#", icon: <SiCsharp /> },
    ],
    description: (
      <>
        <p>
          It was a project based on React to improve current web application and
          add some tabs and accordions containing Timeline, tables, and charts.
        </p>
        <p>
          As a Front-end developer, I have worked with chart.js,
          Timeline-calendar, and interact.js libraries to create new components
          for charts and timeline, and provide project with frontend requested
          by client.
        </p>
      </>
    ),
  },
  {
    owner: "Kwantis",
    name: "GHG Dashboard",
    role: "Dashboard Developer",
    teamSize: 2,
    domain: "Dashboard Creation",
    technologyIcons: [
      { text: "PostgreSql", icon: <SiPostgresql /> },
      { text: "PowerBi", icon: <SiPowerbi /> },
    ],
    description: (
      <>
        <p>
          That was a project aimed to provide customer with list of dashboards
          based on their requirements on Power Bi.
        </p>
      </>
    ),
  },
  {
    owner: "Kwantis",
    name: "Dashboard improvement",
    role: "Dashboard Developer",
    teamSize: 3,
    domain: "Dashboard Creation",
    technologyIcons: [
      { text: "QlickView", icon: <MdPageview /> },
      { text: "Tableau", icon: <SiTableau /> },
    ],
    description: (
      <>
        <p>
          We improve company's QlikView dashboard and provide it with new tabs,
          filters, charts, and tables to present GHG data inside our dashboard
          for customers.
        </p>
        <p>
          The other part of project was to rebuild all the parts in QlikView
          according to the Tableau capabilities and move the dashboards to
          Tableau as the new company's platform for dashboards.
        </p>
      </>
    ),
  },

  {
    owner: "Thesis",
    name: "MEP Web App",
    role: "Developer",
    teamSize: 1,
    domain: "Web Development",
    technologyIcons: [
      { text: "JavaScript", icon: <SiJavascript /> },
      { text: "Kotlin", icon: <SiKotlin /> },
      { text: "MySql", icon: <SiMysql /> },
    ],
    description: (
      <>
        <p>
          My Thesis project contain a part to develop a web application based on
          Leaflet map in order to provide paths for people with disabilities and
          also a part to present the obstacles are exist on the city for
          municipalities in order to manage them. It had multiple access levels
          with different views and menus based on user privilege.
        </p>
      </>
    ),
  },
];

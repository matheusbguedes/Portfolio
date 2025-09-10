import { Icons } from "@/components/icons";
import { HomeIcon, Star } from "lucide-react";

const now = new Date();
const age = now.getFullYear() - 2004;

export const DATA = {
  name: "Matheus Borges",
  initials: "MB",
  url: "https://github.com/matheusbguedes/Portfolio.git",
  location: "São Paulo, SP",
  locationLink: "https://maps.app.goo.gl/TxSWum4TebBA3g9a7",
  description: "Software Engineer. I love building things and helping people.",
  summary:
    `Hey thats me, Matheus Borges. I'm a software engineer with a passion for building things and helping people. I'm currently working as a software engineer at UOL Edtech. I am just ${age} years old and I'm from Brazil. I'm a huge fan of technology and I'm always looking for new ways to improve my skills and knowledge.`,
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "JavaScript", image: "https://www.svgrepo.com/show/349419/javascript.svg" },
    { name: "TypeScript", image: "https://www.svgrepo.com/show/349540/typescript.svg" },
    { name: "Node.js", image: "https://www.svgrepo.com/show/452075/node-js.svg" },
    { name: "Fastify", image: "https://www.svgrepo.com/show/306030/fastify.svg" },
    { name: "Nest.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "Vue.js", image: "https://www.svgrepo.com/show/303494/vue-9-logo.svg" },
    { name: "Nuxt.js", image: "https://www.svgrepo.com/show/373940/nuxt.svg" },
    { name: "React", image: "https://www.svgrepo.com/show/452092/react.svg" },
    { name: "Next.js", image: "https://www.svgrepo.com/show/369457/nextjs.svg" },
    { name: "Vite", image: "https://www.svgrepo.com/show/374167/vite.svg" },
    { name: "Angular", image: "https://www.svgrepo.com/show/353396/angular-icon.svg" },
    { name: "Flutter", image: "https://www.svgrepo.com/show/353751/flutter.svg" },
    { name: "Java", image: "https://www.svgrepo.com/show/452234/java.svg" },
    { name: "Spring Boot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Ruby on Rails", image: "https://www.svgrepo.com/show/452095/ruby.svg" },
    { name: "Python", image: "https://www.svgrepo.com/show/452091/python.svg" },
    { name: "Docker", image: "https://www.svgrepo.com/show/448221/docker.svg" },
    { name: "PostgreSQL", image: "https://www.svgrepo.com/show/354200/postgresql.svg" },
    { name: "Oracle", image: "https://www.svgrepo.com/show/354152/oracle.svg" },
    { name: "MySQL", image: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
    { name: "Redis", image: "https://www.svgrepo.com/show/303460/redis-logo.svg" },
    { name: "MongoDB", image: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { name: "AWS", image: "https://www.svgrepo.com/show/448266/aws.svg" },
  ],  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/featured", icon: Star, label: "Featured" },
  ],
  contact: {
    email: "matheusborgescode@gmail.com",
    tel: "+5511957943978",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/matheusbguedes",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matheus-borges-guedes/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "UOL Edtech",
      href: "",
      badges: [],
      location: "São Paulo, SP",
      title: "Software Engineer",
      logoUrl: "/uoledtech_logo.jpg",
      start: "March 2025",
      end: "Now",
      description:
        "I worked in a large multidisciplinary team, always focused on scalability and code quality, developing features for the LXM application. I used technologies such as Vue.js, NuxtJS, NestJS, Typescript, Flutter, Ruby on Rails, Docker, MongoDB, Redis, and several others.",
    },
    {
      company: "Ferve Música",
      href: "",
      badges: [],
      location: "São Paulo, SP",
      title: "Fullstack Developer",
      logoUrl: "/ferve_musica_logo.jpeg",
      start: "May 2024",
      end: "February 2025",
      description:
        "I developed several features using React Native, Node.js, and Java Spring Boot. I participated in deployments and had the opportunity to learn more about AWS. In this experience, besides web applications, I also gained experience with mobile and television development. We worked with agile methodologies such as Scrum and Kanban, conducting detailed follow-ups and plannings.",
    },
    {
      company: "Integrade",
      href: "",
      badges: [],
      location: "São Paulo, SP",
      title: "Fullstack Developer",
      logoUrl: "/integrade_logo.png",
      start: "July 2023",
      end: "May 2024",
      description:
        "I developed all the necessary functionalities for the company, including creating an application in Flutter and a REST API in Express.js. Additionally, I developed a webApp using Next.js, TypeScript, and we built an API with Spring Boot, utilizing databases such as Oracle and PostgreSQL, applying SOLID and TDD techniques. I also participated in deployments, both for the application on the Google Play Store and with Docker for other applications. I used Git and Gitflow for project versioning. In addition to development activities, I participated in alignment meetings, managing the team, and assigning tasks to other developers.",
    },
    {
      company: "Corre.",
      href: "",
      badges: ["Volunteer"],
      location: "São Paulo, SP",
      title: "Mobile Developer",
      logoUrl: "/corresocial_logo.jpeg",
      start: "June 2023",
      end: "November 2023",
      description:
        "I developed features for a React Native application, using Git and Gitflow for project versioning. I participated in deployments to the Apple App Store and Google Play Store. I utilized Firebase as the database. Additionally, I made small implementations on the webApp using technologies such as Next.js, TypeScript, Styled Components, and other libraries.",
    },
  ],
  education: [
    {
      school: "University Cruzeiro do Sul",
      href: "https://www.cruzeirodosul.edu.br/",
      degree: "System analysis and development",
      logoUrl: "/universidadecruzeirodosul_logo.jpeg",
      start: "2023",
      end: "2024",
    },
    {
      school: "São Paulo Technical School",
      href: "https://etecsp.cps.sp.gov.br/",
      degree: "System development",
      logoUrl: "/etec_logo.jpg",
      start: "2020",
      end: "2022",
    },
  ],
  featured: [
    {
      id: 4,
      title: "Hackathon PagBank",
      description:
        "I participated in PagBank's first hackathon open to students, with the theme 'BANK OF THE FUTURE'. We developed an application with artificial intelligence - a financial assistant that thoroughly studied your financial life, providing insights for better management, and an app with open finance that integrated with other banks. After 28 hours of challenge, we emerged as winners. It was an incredible and transformative experience.",
      image: "/featured_4.jpg",
      date: "11/10/2024",
    },
    {
      id: 3,
      title: "Meetup NodeJs Brazil community",
      description:
        "I participated in a meetup of the NodeJs Brazil community. It was very interesting to be able to participate since Node is one of the technologies I am most engaged with. It also strengthened the sense of community and I was able to learn many things from the day's talks.",
      image: "/featured_3.jpg",
      date: "11/05/2024",
    },
    {
      id: 2,
      title: "Microsoft Reactor Event",
      description:
        "I participated in a Microsoft Reactor Event, where I learned about the The impact of the Community in the Technology, from open source to networking. And I met some great people, who makes the community even better.",
      image: "/featured_2.jpg",
      date: "08/01/2024",
    },
    {
      id: 1,
      title: "School Resource Management Software Development",
      description:
        "In high school, I had the opportunity as a course conclusion work to participate in a fair where my team and I presented a scheduling software for school resources such as notebooks or rooms. It was an incredible experience and I learned a lot from it, being one of the first major projects I participated in. To this day, the school continues to use our software, which demonstrates the practical impact and effectiveness of our initial project.",
      image: "/featured_1.jpg",
      date: "11/05/2022",
    },
  ],
} as const;

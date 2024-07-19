import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, Notebook } from "lucide-react";

export const DATA = {
  name: "Matheus Borges",
  initials: "MB",
  url: "https://dillion.io",
  location: "São Paulo, SP",
  locationLink: "https://maps.app.goo.gl/TxSWum4TebBA3g9a7",
  description:
    "Fullstack Developer. I love building things and helping people.",
  summary: "This summary is empty.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Javascript",
    "Node.js",
    "Typescript",
    "React",
    "React Native",
    "Next.js",
    "Java",
    "Spring Boot",
    "Flutter",
    "Git & Github",
    "Docker",
    "Postgres",
    "Oracle",
    "MySQL",
    "Redis",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/courses", icon: Notebook, label: "Courses" },
  ],
  contact: {
    email: "matheusborgescode@gmail.com",
    tel: "+5511957943978",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Borgeta-code",
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
      company: "Weplay Music TV",
      href: "https://atomic.finance",
      badges: [],
      location: "São Paulo, SP",
      title: "Fullstack Developer",
      logoUrl: "/weplay_music_tv_logo.jpeg",
      start: "May 2024",
      end: "Now",
      description:
        "I developed several features using React Native, Node.js, and Java Spring Boot. I participated in deployments and had the opportunity to learn more about AWS. In this experience, besides web applications, I also gained experience with mobile and television development. We worked with agile methodologies such as Scrum and Kanban, conducting detailed follow-ups and plannings.",
    },
    {
      company: "Informaker",
      badges: ["Freelance"],
      href: "https://shopify.com",
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/informaker_logo.png",
      start: "March 2024",
      end: "Now",
      description:
        "I developed features for a webApp using React, TypeScript, Styled Components, Prisma, and a MySQL database. Additionally, I conducted analysis and bug fixes for this software.",
    },
    {
      company: "Integrade",
      href: "https://nvidia.com/",
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
      href: "https://corre.social/",
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
  projects: [
    {
      title: "Sphere",
      href: "",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Designed and developed a social network, here you can post, like, comment and make friends.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Shadcn UI",
        "Fastify",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Borgeta-code/Sphere",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Agenda",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Corre.",
      href: "https://corre.social/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://corre.social/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  courses: [
    {
      title: "Figma for Devs",
      dates: "July, 2024",
      organization: "Ada Tech",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEJ9in0-PezNg/company-logo_200_200/0/1659466659059/letscodebr_logo?e=1729123200&v=beta&t=OeMVBpue5r-iW2Mf1_4DDeRf_B8CfPeke3KA6R-GnTk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://ada.tech/certificado?code=2a5b99f5-afbe-a59f-cee6-36b577c7f73a",
        },
      ],
    },
    {
      title: "Git and Version Control",
      dates: "July, 2024",
      organization: "Ada Tech",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEJ9in0-PezNg/company-logo_200_200/0/1659466659059/letscodebr_logo?e=1729123200&v=beta&t=OeMVBpue5r-iW2Mf1_4DDeRf_B8CfPeke3KA6R-GnTk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://ada.tech/certificado?code=43629d73-50ac-83b4-5848-4c49eab4278a",
        },
      ],
    },
    {
      title: "NLW Journey - Nodejs",
      dates: "July, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/a4bfe4d3-9684-47f7-b9ad-a68a91de6405",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Borgeta-code/Journey-nodejs",
        },
      ],
    },
    {
      title: "NLW Journey - Java",
      dates: "July, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/e12b0875-a259-41b1-9617-428cea3be3c6",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Borgeta-code/Journey-java",
        },
      ],
    },
    {
      title: "NLW Journey - React Native",
      dates: "July, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/66b2022a-dcea-4cb7-bd01-fbdaf55537a5",
        },
      ],
    },
    {
      title: "NLW Journey - React",
      dates: "July, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/d2eaca3a-5ca6-44b7-845a-e0f84797bc36",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Borgeta-code/Journey-react",
        },
      ],
    },
    {
      title: "NLW Unite - Nodejs",
      dates: "April, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/70880bd2-a03c-45d8-b681-6cce860bcc2d",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Borgeta-code/Unite-nodejs",
        },
      ],
    },
    {
      title: "NLW Unite - React Native",
      dates: "April, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/453079a0-4147-40c0-8e48-e1083bd4a3a1",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Borgeta-code/Unite-react-native",
        },
      ],
    },
    {
      title: "NLW expert - Java",
      dates: "February, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/c733e8e0-724b-4fb9-8434-b79c438106a9",
        },
      ],
    },
    {
      title: "NLW expert - Nodejs",
      dates: "February, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/d529602a-8128-457d-9e11-703aa325b5be",
        },
      ],
    },
    {
      title: "NLW expert - React",
      dates: "February, 2024",
      organization: "Rocketseat",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1729123200&v=beta&t=SFF5EtAs70eSJ3BiAi5Pn9lszDc49-WLAC_k4ggGSKk",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://app.rocketseat.com.br/certificates/e02dc012-8790-4bb7-b491-190974b0fcac",
        },
      ],
    },
    {
      title: "No-Code Data Analysis",
      dates: "October, 2023",
      organization: "University Cruzeiro do Sul",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGnGKxwGfo6Yg/company-logo_200_200/0/1701438994298/universidadecruzeirodosul_logo?e=1729123200&v=beta&t=n_wbQ49KyykzwcA19rJLTlUGyAsyEXD0_OPnXYSlPj0",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1ymEvmUTmN1uaQbc-JdZ4ynp2pqVjJ0Ve/view",
        },
      ],
    },
    {
      title: "Design Thinking",
      dates: "April, 2023",
      organization: "FIAP",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFGUHRJ26bFDw/company-logo_200_200/0/1631312349936?e=1729123200&v=beta&t=TzTpPSioQXRLIpQo8aoWH6PEOekeBZgxUk8szXFVE9U",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/83552/df9bfcc7ba378c1eeae1dd75657d33ae/certificado.png",
        },
      ],
    },
    {
      title: "DevOps & Agile Culture",
      dates: "March, 2023",
      organization: "FIAP",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFGUHRJ26bFDw/company-logo_200_200/0/1631312349936?e=1729123200&v=beta&t=TzTpPSioQXRLIpQo8aoWH6PEOekeBZgxUk8szXFVE9U",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/80960/e2675f63eba17c5f24b177aea4b75fff/certificado.png",
        },
      ],
    },
    {
      title: "Leadership Communication",
      dates: "November, 2022",
      organization: "FIAP",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFGUHRJ26bFDw/company-logo_200_200/0/1631312349936?e=1729123200&v=beta&t=TzTpPSioQXRLIpQo8aoWH6PEOekeBZgxUk8szXFVE9U",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/72584/cb1bb97caaa3d64b335a24ffc8afce5a/certificado.png",
        },
      ],
    },
    {
      title: "IT infrastructure management",
      dates: "November, 2022",
      organization: "FIAP",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFGUHRJ26bFDw/company-logo_200_200/0/1631312349936?e=1729123200&v=beta&t=TzTpPSioQXRLIpQo8aoWH6PEOekeBZgxUk8szXFVE9U",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/72752/212886bfec50b998fb930a224eea4a2b/certificado.png",
        },
      ],
    },
    {
      title: "User Experience",
      dates: "August, 2022",
      organization: "FIAP",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFGUHRJ26bFDw/company-logo_200_200/0/1631312349936?e=1729123200&v=beta&t=TzTpPSioQXRLIpQo8aoWH6PEOekeBZgxUk8szXFVE9U",
      links: [
        {
          title: "Certificate",
          icon: <Icons.badgeCheck className="h-4 w-4" />,
          href: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/60259/2473c7bca74c6dd7b26a82541a35c7ef/certificado.png",
        },
      ],
    },
  ],
} as const;

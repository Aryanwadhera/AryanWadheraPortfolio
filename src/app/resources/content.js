import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aryan",
  lastName: "Wadhera",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter - Coming Soon</>,
  description: (
    <>
      Coming Soon
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aryanwadhera",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aryanwadhera",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Aryan@wadheras.com",
    icon: "email",
    link: "mailto:aryan@wadheras.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Aryan, a Freelance Software Engineer, I craft intuitive
      <br /> user experiences. After client project, I build my own shit.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/aryanwadhera",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Aryan Wadhera, a high school student and founder of Moonlit Company Enterprises, a software development company. I’m passionate about technology and coding, and I’ve worked as a social media manager for Nekter Juice Bar, helping with marketing strategies. I’m dedicated, detail-oriented, and always eager to learn and grow. Thanks for reading!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Hack Club",
        timeframe: "Jan 2025 - Present",
        role: "Co-Host at Scrapyard Irvine",
        achievements: [
          <>
            Scrapyard is a global hackathon running in Location TBD and 100+ other cities by high schoolers (like Counterspell) with a "scrappy" theme of stupid inventions! It's organized by Hack Club, a 501(c)(3) nonprofit that supports a global community of 48k high school makers.
          </>,
          <>
            Leading the organization of Scrapyard's Irvine chapter, part of a worldwide network of student-led hackathons focused on fostering creativity and innovation in high school students.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/ScrapyardIrvine1.png",
            alt: "Event Image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ScrapyardIrvine2.png",
            alt: "Partner Event Image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Nekter Juice Bar",
        timeframe: "Jul 2024 - Present",
        role: "Team Member",
        achievements: [],
        images: [
          {
            src: "/images/projects/project-01/NekterJuiceBar1.jpg",
            alt: "Store Photo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Impact Code",
        timeframe: "Oct 2023 - Present",
        role: "Chief Operating Officer - ex CEO",
        achievements: [
          <>
          Impact Code is a charitable entity aimed at enlightening the emerging generation about the evolution and application of AI, additionally granting coding skills and prospects. Our purpose is to embolden and inform, eradicating obstacles by offering universally accessible coding education, regardless of individual circumstances.
        </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/ImpactCode1.png",
            alt: "Website Photo",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ImpactCode2.png",
            alt: "Website Photo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Moonlit Company Enterprises",
        timeframe: "Oct 2021 - Nov 2023",
        role: "Chief Executive Officer & Founder",
        achievements: [
          <>
          Moonlit is a multifaceted development firm that stands out for its diverse portfolio. It not only owns a range of companies, such as MyID, The Connect Apps, Blank Card, and Moon Media, but also offers a variety of in-house products like Moonlit Accounts, Moonlit Billing, and Moonlit SAFE. Additionally, Moonlit provides comprehensive services through Moonlit Development and Moonlit App Maintenance. With a primary focus on development, Moonlit seamlessly integrates its own products and services into its impressive repertoire.
        </>,
        ],
        images: [],
      },
      {
        company: "Future Business Leaders of America, Inc. (FBLA)",
        timeframe: "Mar 2022 - Oct 2023",
        role: "Software Engineer",
        achievements: [
          <>
          Future Business Leaders of America is the largest business career & technical student organization in the world.
        </>,
          <>
          Future Business Leaders of America is has a branch in Eleanor Roosevelt High School and I am a part of it. I am a software engineer and I am responsible for developing and maintaining the database for the organization.
        </>
        ],
        images: [],
      },
      {
        company: "Nekter Juice Bar",
        timeframe: "Jun 2020 - Apr 2023",
        role: "Social Media Manager & Team Member",
        achievements: [],
        images: [
          {
            src: "/images/projects/project-01/NekterJuiceBarA.jpg",
            alt: "Store Photo",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/NekterJuiceBarSD.png",
            alt: "Store Photo",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Arnold O Beckman High School",
        description: <>Would leave in a sec if i could.</>,
      },
      {
        name: "Eastvale Stem Academy - Eleanor Roosevelt High School",
        description: <>My favorite High School which if i could would go back to for my senior year. -My Computer Science Teacher hated me because i ignored his authority lollll.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Firebase + more.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

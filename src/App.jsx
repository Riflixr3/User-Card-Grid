import profile from "./assets/profile.jpg";
import UserGrid from "./components/UserGrid";

function App() {
  const users = [
    {
      id: 1,
      name: "Maya Chen",
      role: "Full Stack Developer",
      bio: "I build fast and accessible web applications for the modern web.",
      image: profile,
      status: "online",
      socials: {
        github: "https://github.com/mayachen",
        twitter: "https://x.com/mayachen",
        website: "https://mayachen.dev",
      },
    },
    {
      id: 2,
      name: "Alex Smith",
      role: "Backend Developer",
      bio: "I design reliable systems and APIs that scale with product demand.",
      image: profile,
      status: "busy",
      socials: {
        github: "https://github.com/alexsmith",
        twitter: "https://x.com/alexsmith",
        website: "https://alexsmith.dev",
      },
    },
    {
      id: 3,
      name: "Sarah Lee",
      role: "UI Designer",
      bio: "I craft elegant interfaces that balance strong aesthetics with usability.",
      image: profile,
      status: "offline",
      socials: {
        github: "https://github.com/sarahlee",
        twitter: "https://x.com/sarahlee",
        website: "https://sarahlee.design",
      },
    },
    {
      id: 4,
      name: "Ethan Williams",
      role: "Frontend Developer",
      bio: "I create responsive interfaces and interactive experiences with React.",
      image: profile,
      status: "online",
      socials: {
        github: "https://github.com/ethanwilliams",
        twitter: "https://x.com/ethanwilliams",
        website: "https://ethanwilliams.dev",
      },
    },
    {
      id: 5,
      name: "Olivia Brown",
      role: "Product Designer",
      bio: "I turn complex product ideas into simple and intuitive user experiences.",
      image: profile,
      status: "busy",
      socials: {
        github: "https://github.com/oliviabrown",
        twitter: "https://x.com/oliviabrown",
        website: "https://oliviabrown.design",
      },
    },
    {
      id: 6,
      name: "Noah Wilson",
      role: "DevOps Engineer",
      bio: "I automate infrastructure and build reliable deployment pipelines.",
      image: profile,
      status: "online",
      socials: {
        github: "https://github.com/noahwilson",
        twitter: "https://x.com/noahwilson",
        website: "https://noahwilson.dev",
      },
    },
    {
      id: 7,
      name: "Emma Davis",
      role: "Mobile Developer",
      bio: "I build smooth mobile applications focused on performance and usability.",
      image: profile,
      status: "offline",
      socials: {
        github: "https://github.com/emmadavis",
        twitter: "https://x.com/emmadavis",
        website: "https://emmadavis.dev",
      },
    },
    {
      id: 8,
      name: "Daniel Kim",
      role: "Software Engineer",
      bio: "I solve challenging engineering problems with simple and maintainable code.",
      image: profile,
      status: "busy",
      socials: {
        github: "https://github.com/danielkim",
        twitter: "https://x.com/danielkim",
        website: "https://danielkim.dev",
      },
    },
    {
      id: 9,
      name: "Ava Thompson",
      role: "Product Manager",
      bio: "I connect engineering, design, and users to build useful products.",
      image: profile,
      status: "online",
      socials: {
        github: "https://github.com/avathompson",
        twitter: "https://x.com/avathompson",
        website: "https://avathompson.dev",
      },
    },
    {
      id: 10,
      name: "Liam Carter",
      role: "Database Engineer",
      bio: "I design efficient data systems that remain reliable as applications grow.",
      image: profile,
      status: "offline",
      socials: {
        github: "https://github.com/liamcarter",
        twitter: "https://x.com/liamcarter",
        website: "https://liamcarter.dev",
      },
    },
  ];

  return (
    <div className="flex items-center justify-center font-inter min-h-screen bg-slate-200 px-4 py-8">
      <UserGrid users={users} />
    </div>
  );
}

export default App;

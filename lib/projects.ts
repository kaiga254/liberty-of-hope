export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  upcoming: "Upcoming",
};

export type Project = {
  id: string;
  title: string;
  cardTitle?: string;
  category: string;
  date: string;
  location: string;
  status: ProjectStatus;
  image: string;
  summary: string;
  description: string;
  details: string;
  goals: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Thika Elders Medical Camp 2024",
    cardTitle: "Thika Medical Camp 2024",
    category: "Health",
    date: "March 15, 2024",
    location: "Makongeni, Thika",
    status: "completed",
    image: "/images/medical-camp.png",
    summary:
      "Served over 200 seniors with free medical checkups, vision screening, and diabetes management education.",
    description:
      "A comprehensive medical checkup camp providing free screenings, medicine, vision screening, and diabetes management education for over 200 seniors.",
    details:
      "Our annual medical camp addressed the glaring health gaps faced by elders in Thika. Many seniors lack access to basic healthcare due to mobility issues and financial constraints. During this camp, we partnered with local doctors, nurses, and ophthalmologists to offer comprehensive health assessments. Beyond just checkups, we distributed essential medications and provided educational workshops on managing chronic conditions like diabetes and hypertension.",
    goals: [
      "Screen over 200 elders for eye defects",
      "Provide free essential medicine",
      "Offer education on diabetes dietary management",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Grandparents' Social Day",
    category: "Community",
    date: "Ongoing (Monthly)",
    location: "Liberty Hub",
    status: "ongoing",
    image: "/images/community-gathering.jpg",
    summary:
      "A monthly gathering bringing together 50+ seniors for tea, games, and storytelling sessions to combat loneliness.",
    description:
      "A monthly gathering bringing together seniors for tea, games, and storytelling sessions to combat loneliness and isolation.",
    details:
      "Loneliness is one of the silent killers among the elderly. Grandparents' Social Day is our ongoing initiative to provide a safe, warm, and engaging environment where elders can connect. Through board games, traditional storytelling, and shared meals, we breathe life and joy back into their routines. It also serves as a platform for them to share their vast wisdom with younger volunteers.",
    goals: [
      "Foster community and belonging",
      "Reduce isolation and depression rates",
      "Provide nutritional support through shared meals",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Home Hygiene Drive",
    category: "Dignity",
    date: "February 2024",
    location: "Kiganjo Estate",
    status: "completed",
    image: "/images/hero-community.png",
    summary:
      "Renovated living spaces and provided bedding and hygiene kits for 15 vulnerable elders living in squalid conditions.",
    description:
      "Renovated living spaces and provided bedding and hygiene kits for vulnerable elders living in squalid conditions.",
    details:
      "Dignity begins at home. Our Home Hygiene Drive targeted elders living in extremely poor conditions, often without basic sanitation or comfortable bedding. Our team of volunteers spent the month deep-cleaning homes, repairing leaking roofs, and replacing tattered mattresses with new, comfortable ones. We also distributed hygiene kits containing soap, sanitizers, adult diapers, and fresh clothing.",
    goals: [
      "Deep clean and sanitize 15 homes",
      "Distribute sanitary kits and proper bedding",
      "Improve overall living standards",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Urban Farming Initiative",
    category: "Nutrition",
    date: "Upcoming",
    location: "Community Gardens",
    status: "upcoming",
    image: "/images/elder-portrait.png",
    summary:
      "Launching a program to teach and equip seniors with vertical sack gardens for sustainable vegetables.",
    description:
      "Launching a program to teach and equip seniors with vertical sack gardens for sustainable vegetables.",
    details:
      "Nutrition is a critical aspect of elder care. The Urban Farming Initiative empowers seniors to grow their own fresh, organic produce right in their backyards, regardless of space constraints. Using vertical sack farming techniques, elders can cultivate leafy greens, tomatoes, and herbs with minimal physical strain. This not only supplements their diet but also provides therapeutic agricultural engagement.",
    goals: [
      "Install 50 vertical sack gardens",
      "Provide seeds and organic fertilizers",
      "Conduct specialized training for elders",
    ],
    featured: true,
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(limit = 4) {
  return projects.filter((project) => project.featured).slice(0, limit);
}

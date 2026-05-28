export type ImpactIconName = "heart" | "users" | "smile";
export type StatIconName = "users" | "stethoscope" | "handHeart" | "mapPin";
export type ActionIconName = "heart" | "users" | "handshake";

export const impactHighlights = [
  {
    title: "Healthcare Access",
    description:
      "Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.",
    icon: "heart",
    colorClass: "bg-teal-100 text-primary",
    image: "/images/medical-camp.png",
  },
  {
    title: "Timeless Connection",
    description:
      "Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for elders to share stories, play games, and build lasting friendships that enrich their golden years.",
    icon: "users",
    colorClass: "bg-violet-100 text-violet-600",
    image: "/images/community-gathering.jpg",
  },
  {
    title: "Restored Dignity",
    description:
      "Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers ensure every elder feels respected and cared for.",
    icon: "smile",
    colorClass: "bg-amber-100 text-accent",
    image: "/images/restoring-dignity.jpg",
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  icon: ImpactIconName;
  colorClass: string;
  image: string;
}>;

export const impactStats = [
  {
    label: "Elders Reached",
    value: 500,
    suffix: "+",
    icon: "users",
    color: "text-teal-400",
  },
  {
    label: "Medical Camps",
    value: 12,
    suffix: "+",
    icon: "stethoscope",
    color: "text-emerald-400",
  },
  {
    label: "Active Volunteers",
    value: 20,
    suffix: "+",
    icon: "handHeart",
    color: "text-amber-400",
  },
  {
    label: "Counties Reached",
    value: 2,
    suffix: "+",
    icon: "mapPin",
    color: "text-rose-400",
  },
] as const satisfies ReadonlyArray<{
  label: string;
  value: number;
  suffix: string;
  icon: StatIconName;
  color: string;
}>;

export const visionBannerActions = [
  {
    title: "Donate",
    description:
      "Your gift directly supports healthcare, food, and shelter for vulnerable elders.",
    icon: "heart",
    href: "/donate",
    color: "bg-rose-500 hover:bg-rose-600 shadow-rose-500/30",
  },
  {
    title: "Volunteer",
    description:
      "Join our team of compassionate volunteers making a difference every day.",
    icon: "users",
    href: "/contact",
    color: "bg-primary hover:bg-teal-800 shadow-teal-500/30",
  },
  {
    title: "Partner",
    description:
      "Collaborate with us to scale our impact and reach more elders in need.",
    icon: "handshake",
    href: "/contact",
    color: "bg-accent hover:bg-amber-600 shadow-amber-500/30",
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  icon: ActionIconName;
  href: string;
  color: string;
}>;

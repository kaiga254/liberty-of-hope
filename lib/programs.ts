export type ProgramIconName =
  | "stethoscope"
  | "brain"
  | "apple"
  | "heartHandshake"
  | "megaphone";

export const carePillars = [
  {
    title: "Health & Wellness",
    description:
      "Organizing medical camps, geriatric screenings, and partnerships with local hospitals for accessible healthcare.",
    programDescription:
      "Access to healthcare is a fundamental right. We organize medical camps, geriatric screenings, and partner with local hospitals to ensure our elders receive the care they need.",
    outcome: "200+ elders screened in our latest medical camp",
    icon: "stethoscope",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Mental Health & Connection",
    description:
      "Combating isolation through peer support groups, social gatherings, and community visits for mental wellness.",
    programDescription:
      "Loneliness is a silent crisis. We combat isolation through peer support groups, social outings, and community visits to keep our elders connected and mentally sharp.",
    outcome: "Weekly social meetups reducing loneliness by 70%",
    icon: "brain",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Nutrition & Lifestyle",
    description:
      "Providing food baskets, nutritional education, and supporting sustainable kitchen gardens for healthy aging.",
    programDescription:
      "Good nutrition is the foundation of healthy aging. We provide food baskets, nutritional education, and support for sustainable kitchen gardens.",
    outcome: "50+ elders receiving monthly food baskets",
    icon: "apple",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Dignity & Personal Care",
    description:
      "Restoring self-esteem through personal grooming, hygiene supplies, and home cleanliness for dignified living.",
    programDescription:
      "We restore self-esteem by assisting with personal grooming, hygiene supplies, and home cleanliness, ensuring every elder lives with dignity.",
    outcome: "15 homes renovated in our latest hygiene drive",
    icon: "heartHandshake",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Advocacy & Outreach",
    description:
      "Advocating for elder-friendly policies and conducting home visits to identify and support the most vulnerable.",
    programDescription:
      "We are the voice for the voiceless. We advocate for policies that protect the rights of the aged and conduct home visits to identify those most in need.",
    outcome: "Partnered with 2 county governments for policy change",
    icon: "megaphone",
    gradient: "from-amber-500 to-orange-600",
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  programDescription: string;
  outcome: string;
  icon: ProgramIconName;
  gradient: string;
}>;

export type CarePillar = (typeof carePillars)[number];

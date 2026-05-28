export const testimonials = [
  {
    quote:
      "Before Liberty of Hope came into my life, I spent most days alone. Now I have friends, regular health checkups, and I feel like I matter again.",
    name: "Mama Wanjiku",
    role: "Beneficiary, Thika",
    image: "/images/elder-portrait.png",
  },
  {
    quote:
      "Volunteering with Liberty of Hope changed my perspective on aging. Every elder has a story worth hearing and a life worth celebrating.",
    name: "James Mwangi",
    role: "Youth Volunteer",
    image: "/images/hero-community.png",
  },
  {
    quote:
      "The medical camp was a blessing. I got my eyes checked for the first time in years and received free medication. God bless this organization.",
    name: "Mzee Kamau",
    role: "Beneficiary, Kiganjo",
    image: "/images/medical-camp.png",
  },
] as const;

export const partners = [
  { name: "Keyplest Foods", logo: "/images/logos/keyplest-foods.png" },
  { name: "Uhai Kenya NGO", logo: "/images/logos/uhai-kenya-ngo.png" },
  { name: "Sunveat", logo: "/images/logos/sunveat.png" },
  { name: "CFI", logo: "/images/logos/cfi.png" },
  { name: "Amara Realty", logo: "/images/logos/amara-realty.png" },
  {
    name: "Thika Nursing Home Hospital",
    logo: "/images/logos/thika-nursing-home-hospital.png",
  },
  { name: "Milestone Institute", logo: "/images/logos/milestone-institute.png" },
  { name: "MICOP-CBO", logo: "/images/logos/micop-cbo.png" },
  { name: "Community Partner", logo: "/images/logos/partner-logo-09.png" },
  { name: "HAMAT", logo: "/images/logos/hamat.png" },
  {
    name: "Lions SightFirst Eye Hospital",
    logo: "/images/logos/lions-sightfirst-eye-hospital.png",
  },
  { name: "Thika Institute", logo: "/images/logos/thika-institute.png" },
  {
    name: "Rotary Club of Thika",
    logo: "/images/logos/rotary-club-of-thika.png",
  },
  { name: "MAC Dental", logo: "/images/logos/mac-dental.png" },
  { name: "Sugoon", logo: "/images/logos/sugoon.png" },
  { name: "Kenya Red Cross", logo: "/images/logos/kenya-red-cross.png" },
  {
    name: "Mount Kenya University",
    logo: "/images/logos/mount-kenya-university.png",
  },
  {
    name: "Capwell Industries",
    logo: "/images/logos/capwell-industries.png",
  },
] as const;

export type Partner = (typeof partners)[number];

export const partnerRows = [
  partners.filter((_, index) => index % 2 === 0),
  partners.filter((_, index) => index % 2 === 1),
];

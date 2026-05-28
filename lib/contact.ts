export const contactInfo = {
  email: {
    label: "info@libertyofhope.org",
    href: "mailto:info@libertyofhope.org",
  },
  phone: {
    label: "+254 700 123 456",
    href: "tel:+254700123456",
  },
  address: {
    line1: "Thika Town, Near Main Market",
    line2: "Kiambu County, Kenya",
  },
  officeHours: [
    "Monday - Friday: 8:00 AM - 5:00 PM",
    "Saturday: 9:00 AM - 1:00 PM",
  ],
} as const;

export const defaultMapQuery =
  `${contactInfo.address.line1}, ${contactInfo.address.line2}`;

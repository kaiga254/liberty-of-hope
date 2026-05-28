export type SocialIconName = "facebook" | "twitter" | "instagram" | "youtube";

export const logoSrc = "/images/logo/liberty-of-hope-logo.png";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { icon: "facebook", href: "#", label: "Facebook" },
  { icon: "twitter", href: "#", label: "Twitter" },
  { icon: "instagram", href: "#", label: "Instagram" },
  { icon: "youtube", href: "#", label: "YouTube" },
] as const satisfies ReadonlyArray<{
  icon: SocialIconName;
  href: string;
  label: string;
}>;

export const siteConfig = {
  name: "CODXR",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codxr.com",
  description:
    "CODXR builds modern websites, web applications, e-commerce experiences, and digital growth solutions.",
  email: "hello@codxr.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Tools", href: "/tools" },
];

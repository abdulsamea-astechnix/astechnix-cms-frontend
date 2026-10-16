export interface NavItem {
  label: string;
  path: string;
}

export interface NavGroup {
  label: string;
  path: string;
  children?: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "Services",
    path: "/services",
    children: [
      {
        label: "Endpoint Management",
        path: "/services/endpoint-management",
      },
      {
        label: "Endpoint Security",
        path: "/services/endpoint-security",
      },
      {
        label: "Vulnerability Management",
        path: "/services/vulnerability-management",
      },
      {
        label: "IT Helpdesk & Support",
        path: "/services/helpdesk-support",
      },
    ],
  },
  {
    label: "Engagement",
    path: "/engagement",
    children: [
      {
        label: "Pricing & Contracts",
        path: "/engagement/pricing-and-contracts",
      },
    ],
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Company",
    path: "/company",
    children: [
      { label: "About", path: "/company/about" },
      { label: "Case Studies", path: "/company/case-studies" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export const footerServices: NavItem[] = [
  {
    label: "Endpoint Management",
    path: "/services/endpoint-management",
  },
  {
    label: "Endpoint Security",
    path: "/services/endpoint-security",
  },
  {
    label: "Vulnerability Management",
    path: "/services/vulnerability-management",
  },
  {
    label: "IT Helpdesk & Support",
    path: "/services/helpdesk-support",
  },
];

export const footerEngagement: NavItem[] = [
  { label: "Pricing & Contracts", path: "/engagement/pricing-and-contracts" },
];

export const footerCompany: NavItem[] = [
  { label: "About", path: "/company/about" },
  { label: "Case Studies", path: "/company/case-studies" },
  { label: "Contact", path: "/contact" },
];

export const footerBlog: NavItem[] = [
  { label: "All Articles", path: "/blog" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy", path: "/privacy" },
  { label: "Cookies", path: "/cookies" },
  { label: "Terms", path: "/terms" },
];

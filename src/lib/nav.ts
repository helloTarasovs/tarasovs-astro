// Main menu, same items and URLs as the live WordPress "Primary" menu.
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Website Design', href: '/services/website-design-services/' },
      {
        label: 'Website Development',
        href: '/services/website-development/',
        children: [{ label: 'Framer Design & Development', href: '/services/framer-development/' }],
      },
      { label: 'E-Commerce Website Design', href: '/services/e-commerce/' },
      { label: 'SEO Services', href: '/services/seo-services/' },
      { label: 'GEO AI Search Optimization', href: '/services/geo-ai-search-optimization/' },
      {
        label: 'Dispensary SEO',
        href: '/dispensary-seo-new-york/',
        children: [
          { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization/' },
          { label: 'Dutchie Pro Migration SEO', href: '/dutchie-pro-migration-seo/' },
          { label: 'Dutchie Menu SEO', href: '/dutchie-menu-seo/' },
          { label: 'Dispensary NYC', href: '/dispensary-seo-nyc/' },
          { label: 'Local SEO for NYC', href: '/local-seo-manhattan-brooklyn/' },
        ],
      },
      { label: 'Responsive Web Design', href: '/services/responsive-web-design/' },
      { label: 'UI/UX Design Services', href: '/services/ui-ux-design/' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/category/insights/' },
  { label: 'Contacts', href: '/contact-us/' },
];

export const CONTACT = {
  email: 'hello@tarasovs.me',
  phone: '+40 748 708 694',
  phoneHref: 'tel:+40748708694',
  mapsUrl: 'https://maps.app.goo.gl/DzNNtXVr1unRUaDn9',
};

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tarasovs-digital-agency/' },
  { label: 'Facebook', href: 'https://www.facebook.com/tarasovs.web/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tarasovs.me/' },
];

export const LEGAL = [
  { label: 'Privacy & Cookie Policy', href: '/privacy-cookie-policy-tarasovs-digital-agency/' },
  { label: 'Terms of Service', href: '/terms-of-service-tarasovs-digital-agency/' },
];

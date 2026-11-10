export const siteConfig = {
  companyName: 'REGULUS',
  tagline: 'Technology That Moves Business Forward.',
  businessType: 'Software Development & Business Technology Solutions',
  shortDescription:
    'Software development and business technology solutions tailored around your operations.',
  // Replace with your live domain when deploying
  siteUrl: 'https://example.com',
  // Editable placeholders — update when official contact details are ready
  contact: {
    emailPlaceholder: '[Business Email — Configure in siteConfig.js]',
    phonePlaceholder: '[Contact Phone — Configure in siteConfig.js]',
    addressPlaceholder: '[Office Location — Configure in siteConfig.js]',
    hoursPlaceholder: '[Business Hours — Configure in siteConfig.js]',
    // Optional: set real values below when available; keep null to render safe placeholders
    email: null,
    phone: null,
    address: null,
  },
  // Replace null hrefs with live profile URLs when official accounts are active
  socialChannels: [
    { name: 'LinkedIn', status: 'Channel pending setup', href: null },
    { name: 'GitHub', status: 'Channel pending setup', href: null },
    { name: 'X / Twitter', status: 'Channel pending setup', href: null },
  ],
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Industries', to: '/industries' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Contact', to: '/contact' },
  ],
  footerServices: [
    { label: 'Customized ERP Development', to: '/services#customized-erp' },
    { label: 'Custom Software Development', to: '/services#custom-software' },
    { label: 'Website Design & Development', to: '/services#website-development' },
    { label: 'Business Process Automation', to: '/services#process-automation' },
  ],
};

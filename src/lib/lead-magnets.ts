// Lead magnet offers shared by several pages (props for src/components/LeadMagnet.astro).
// LEAD_INLINE: the block inside the page (service page JSON: {"type": "leadMagnet", "offer": "dispensary-audit"}).
// LEAD_SLIDES: the slide-in (service page JSON: "leadSlide": "dispensary-audit"). On phones it jumps to the inline block,
// so a page with the slide also needs the inline block in a section with id "free-audit".

// Dispensary pages: service pages + /dispensary-visibility/. Not on /dutchie-pro-migration-seo/ (email campaign landing page).
const dispensaryAudit = {
  storageKey: 'lm-dispensary-audit',
  eyebrow: 'Free Audit',
  submitLabel: 'Get My Free Audit',
  nextLabel: 'Start My Free Audit',
  successText: "Thanks! We've received your request and will email you your audit.",
  subject: 'Lead magnet: free dispensary visibility audit',
  leadSource: 'dispensary-audit',
};

export const LEAD_INLINE = {
  'dispensary-audit': {
    ...dispensaryAudit,
    id: 'lm-dispensary-inline',
    title: 'Get a Free Dispensary Visibility Audit',
    text: "Send us your website and we'll check how your dispensary shows up in Google and ChatGPT, and what to fix first. You'll get a short audit by email.",
  },
} as const;

export const LEAD_SLIDES = {
  'dispensary-audit': {
    ...dispensaryAudit,
    id: 'lm-dispensary-slide',
    title: 'Free visibility audit for your dispensary',
    text: "Send us your website and we'll check how your dispensary shows up in Google and ChatGPT, and what to fix first. You'll get a short audit by email.",
    scroll: 50,
    delay: 40,
    exitIntent: true,
    jumpHref: '#free-audit',
    jumpLabel: 'Get My Free Audit',
  },
} as const;

export type LeadOfferName = keyof typeof LEAD_SLIDES;

// Content for /services/ai-video-production/. Edit copy, services and projects here.
// Project statuses mirror films.tarasovs.me (checked 2026-11-11): only "Promo of Framer website" is Commissioned.

export const FILMS_URL = 'https://films.tarasovs.me/';

export type ServiceId = 'website_hero' | 'product_video' | 'brand_film' | 'launch_video' | 'social_video' | 'motion_identity';

export interface Project {
  id: string; // project_id in analytics
  title: string;
  url: string;
  poster: string; // /images/video/<slug>.webp
  width: number;
  height: number;
  alt: string;
  format: string;
  use: string;
  status: 'Self-initiated' | 'Commissioned';
}

const P = (slug: string, p: Omit<Project, 'id' | 'url' | 'poster'> & { vertical?: boolean }): Project => ({
  id: slug.replaceAll('-', '_'),
  url: `https://films.tarasovs.me/projects/${slug}`,
  poster: `/images/video/${slug}.${slug === 'meridian' ? 'jpg' : 'webp'}`,
  ...p,
});

export const PROJECTS: Record<string, Project> = {
  florist: P('florist-website-hero-banner', { title: 'Florist website hero banner', format: 'Website hero video', use: 'Atmospheric video for the first screen of a website.', width: 1200, height: 675, alt: 'Frame from the Florist website hero banner video', status: 'Self-initiated' }),
  meridian: P('meridian', { title: 'Meridian', format: 'Product film', use: 'Product presentation for a premium wireless product.', width: 1200, height: 675, alt: 'Wireless earbud floating against a soft studio background, frame from the Meridian product film', status: 'Self-initiated' }),
  centra: P('centra-datacore', { title: 'Centra DataCore', format: 'Launch film', use: 'Visual presentation for a product launch.', width: 1200, height: 675, alt: 'Frame from the Centra DataCore launch film', status: 'Self-initiated' }),
  northline: P('northline-cold-brew', { title: 'Northline Cold Brew', format: 'Vertical UGC-style video', use: 'AI-generated UGC-style vertical product content.', width: 720, height: 1280, alt: 'Frame from the Northline Cold Brew vertical video', status: 'Self-initiated' }),
  slake: P('slake', { title: 'Slake', format: 'Product / social video', use: 'Product video adapted for social placements.', width: 1200, height: 675, alt: 'Frame from the Slake vertical video', status: 'Self-initiated' }),
  sweetBloom: P('sweet-bloom-coffee-roasters', { title: 'Sweet Bloom Coffee Roasters', format: 'Motion identity', use: 'Motion identity study for social placements.', width: 1200, height: 675, alt: 'Frame from the Sweet Bloom Coffee Roasters motion identity', status: 'Self-initiated' }),
  framerPromo: P('promo-of-framer-website', { title: 'Promo of Framer website', format: 'Promotional video', use: 'Launch promo for a website.', width: 1200, height: 675, alt: 'Frame from the Promo of Framer website vertical video', status: 'Commissioned' }),
};

// Selected work: three horizontal films, then three vertical (reels-style) videos with 9:16 posters.
const vertical = (p: Project, poster: string): Project => ({ ...p, poster, width: 720, height: 1280 });
export const WORK_HORIZONTAL = [PROJECTS.florist, PROJECTS.meridian, PROJECTS.centra];
export const WORK_VERTICAL = [
  PROJECTS.northline,
  vertical(PROJECTS.slake, '/images/video/slake-v.webp'),
  vertical(PROJECTS.framerPromo, '/images/video/promo-of-framer-website-v.webp'),
];

export interface VideoService {
  id: string; // anchor
  serviceId: ServiceId;
  title: string;
  text: string;
  for: string[];
  outputs: string; // deliverables, shown in a collapsible block
  details?: string; // extra scope notes, same block
  examples: Project[];
  exampleLabel?: string;
  cta: string;
}

export const SERVICES: VideoService[] = [
  {
    id: 'hero-videos',
    serviceId: 'website_hero',
    title: 'Website hero videos &amp; seamless loops',
    text: 'Custom video for the opening screen of your website. We plan the composition around your headline, mobile crop and loop point, then prepare the files for a clear, responsive presentation.',
    for: ['The first screen of a corporate, product or portfolio website.', 'Atmospheric background video.', 'A seamless loop in a website section or on a landing page.', 'The visual side of scroll-driven storytelling, when it is part of the project.'],
    outputs: 'Possible deliverables: a horizontal loop, a mobile crop, a static poster and web-optimised files. Building it into Framer, Webflow or WordPress can be quoted separately or included in a combined website project.',
    examples: [PROJECTS.florist],
    cta: 'Discuss a website video',
  },
  {
    id: 'product-videos',
    serviceId: 'product_video',
    title: 'Product video production',
    text: 'Product-led films for launches, product pages and campaigns. We develop the visual direction around your product references, then build and edit the scenes for the placements you need.',
    for: ['Presenting a physical product or a digital solution.', 'Showing materials, details, packaging and the visual character of a brand.', 'A product page, launch, presentation or ad placement.'],
    outputs: 'Possible deliverables: a main film, agreed cut-downs, horizontal or vertical versions and posters. We check shape, logos and packaging against your references and tell you up front if a scene needs extra finishing.',
    examples: [PROJECTS.meridian, PROJECTS.slake, PROJECTS.centra],
    cta: 'Discuss a product video',
  },
  {
    id: 'brand-films',
    serviceId: 'brand_film',
    title: 'Brand films',
    text: 'Films that express the character of a brand through imagery, rhythm and sound. We shape a concept around your audience and message, then develop a consistent visual world for the film.',
    for: ['A brand image film or a brand refresh.', 'Conveying mood, aesthetics and positioning.', 'A campaign, a presentation or a standalone brand project.'],
    outputs: 'Possible deliverables: a concept, a visual direction and an agreed film with adaptations. Length and complexity are set once we have your brief.',
    examples: [],
    cta: 'Discuss a brand film',
  },
  {
    id: 'launch-videos',
    serviceId: 'launch_video',
    title: 'Launch &amp; promotional videos',
    text: 'Video for the moment something new goes live: a product, a website or a campaign. We create the main visual sequence and the supporting versions needed for your launch channels.',
    for: ['Launching a website, product, service or campaign.', 'A short teaser or promo.', 'An opening sequence for a presentation.', 'Short supporting versions for announcements.'],
    outputs: 'Possible deliverables: a main launch version, short announcements, titles and agreed adaptations.',
    examples: [PROJECTS.centra, PROJECTS.framerPromo],
    cta: 'Plan a launch video',
  },
  {
    id: 'social-videos',
    serviceId: 'social_video',
    title: 'Social &amp; vertical videos',
    text: 'Short-form video planned for the feed, from vertical product clips to AI-generated UGC-style concepts. We build the framing, opening and captions around how the audience will watch.',
    for: ['Reels, Shorts and vertical ads.', 'Short product and branded videos.', 'Vertical adaptations of a main film.', 'AI-generated UGC-style video with a character or presenter, when agreed in the brief.'],
    outputs: 'Possible deliverables: 9:16, 4:5 or 1:1 versions with agreed hooks, titles, subtitles and variants. The number of versions and any voice-over depend on the scope. UGC-style videos are AI-generated concepts, not testimonials from real customers. We make the creative; we do not run ad accounts or guarantee ad results.',
    examples: [PROJECTS.northline, PROJECTS.slake, PROJECTS.sweetBloom],
    cta: 'Discuss social video content',
  },
  {
    id: 'motion-identity',
    serviceId: 'motion_identity',
    title: 'Motion identity &amp; logo animation',
    text: 'Motion that gives a brand a recognisable way to move. We create logo animations, short idents and reusable motion elements that can work across websites, films and social content.',
    for: ['Logo animation.', 'Short intros, outros and idents.', 'Branded titles, transitions and repeatable elements.', 'A consistent motion language for digital channels.'],
    outputs: 'Possible deliverables: agreed video files and a set of motion elements. Transparent backgrounds, Lottie, Rive and source files can be added when the project needs them; we agree the technical format with you at the start.',
    examples: [PROJECTS.sweetBloom],
    exampleLabel: 'Example (self-initiated motion identity study)',
    cta: 'Discuss motion for your brand',
  },
];

export const INCLUDED = [
  { title: 'Creative direction', text: 'The task, the audience, the concept, the treatment and a scene plan.' },
  { title: 'Visual development', text: 'References, look frames, characters, lighting and style.' },
  { title: 'AI-assisted production', text: 'Creating and selecting material, and checking that scenes stay consistent.' },
  { title: 'Editing & finishing', text: 'Edit, rhythm, colour grading, titles and a final check.' },
  { title: 'Sound', text: 'Sound, a music direction, agreed voice-over and a mix when needed.' },
  { title: 'Delivery & adaptation', text: 'A main master and the agreed versions for each placement.' },
];

export const INCLUDED_NOTE = 'The proposal defines the film length, number of shots, formats, revision stages and delivery files before production begins.';
export const INCLUDED_FORMATS = 'We agree formats for each placement: 16:9, 9:16, 4:5 or 1:1, in 1080p or 4K, as MP4 or WebM, with posters, subtitles, seamless loops and web optimisation where they are needed.';

export const PROCESS = [
  { title: 'Brief & scope', text: 'We define the task, the audience, where the video will be used, the materials, the deadline and the budget range. Then we shape the scope of the order.' },
  { title: 'Concept & visual direction', text: 'We agree the idea, the references and the key frames before main production.' },
  { title: 'Production & edit', text: 'We create the scenes, select the material and assemble the edit.' },
  { title: 'Review & finishing', text: 'We apply revisions within the agreed stages, then finish colour, sound and titles.' },
  { title: 'Delivery', text: 'We hand over the agreed final versions and, if included in the order, instructions for use on the web.' },
];
export const PROCESS_NOTE = 'The schedule depends on the number of scenes, the complexity of the product or character, concept approval and the number of versions. We confirm the delivery plan after reviewing the brief.';

export const FAQ = [
  { q: 'What types of video can I commission?', a: 'We create website hero loops, product films, brand films, launch videos, social content and motion identity. A project can focus on one format or combine several placements around the same concept.' },
  { q: 'Can I order video without a website project?', a: 'Yes. Video production is available as a standalone service or as part of a website project.' },
  { q: 'What do you need to start?', a: 'A short brief, where the video will be used, your target launch date and any relevant brand or product references. We can help define the direction if you do not have a finished concept.' },
  { q: 'Can you work from product photos and brand guidelines?', a: 'Yes. Product images, packaging artwork and brand guidelines help establish the visual direction. We review the materials and the required product detail before confirming the production approach.' },
  { q: 'Can I get horizontal and vertical versions?', a: 'Yes. The required aspect ratios and the number of versions are agreed in the proposal. Some placements need a different edit or composition rather than a simple crop.' },
  { q: 'Do you create AI-generated UGC-style videos?', a: 'Yes, for suitable briefs. These are AI-generated concepts featuring a character or presenter, rather than recordings of a real customer’s experience. The format and production approach are agreed before work starts.' },
  { q: 'How much does AI video production cost?', a: 'The quote depends on the concept, film length, number of scenes, product or character requirements, sound and delivery formats. Send a short brief and we will propose a scope for the work.' },
  { q: 'How long does a project take?', a: 'The schedule depends on the scope and review stages. We confirm the delivery plan after reviewing the brief and source materials.' },
  { q: 'Can you add the video to our website?', a: 'Website integration can be scoped alongside production, including responsive presentation, poster images and delivery files for the chosen platform.' },
  { q: 'Do you work with agencies?', a: 'Yes. We can contribute video production to an agency-led project. Responsibilities, communication and any white-label requirements are agreed at the start.' },
];

export const FORM_SERVICES: { value: string; label: string }[] = [
  { value: 'not_sure', label: 'Not sure yet' },
  { value: 'website_hero', label: 'Website hero videos & loops' },
  { value: 'product_video', label: 'Product video production' },
  { value: 'brand_film', label: 'Brand films' },
  { value: 'launch_video', label: 'Launch & promotional videos' },
  { value: 'social_video', label: 'Social & vertical videos' },
  { value: 'motion_identity', label: 'Motion identity & logo animation' },
];

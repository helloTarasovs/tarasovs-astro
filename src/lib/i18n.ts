// Languages and EN <-> UA page pairs. Used by Base (lang, hreflang, og:locale), Header (switcher)
// and astro.config.mjs (sitemap alternates), so keep this file free of Vite-only APIs.
export type Lang = 'en' | 'uk';

export const LANGS: Record<Lang, { prefix: string; ogLocale: string; label: string; name: string }> = {
  en: { prefix: '/', ogLocale: 'en_US', label: 'EN', name: 'English' },
  uk: { prefix: '/ua/', ogLocale: 'uk_UA', label: 'UA', name: 'Українська' },
};

// Ukrainian pages live under /ua/, language code is uk.
export const PAIRS: Record<Lang, string>[] = [
  { uk: '/ua/', en: '/' },
  { uk: '/ua/stvorennia-saitiv/', en: '/services/website-development/' },
  { uk: '/ua/prosuvannia-saitiv/', en: '/services/seo-services/' },
  { uk: '/ua/ai-vydymist/', en: '/services/geo-ai-search-optimization/' },
  { uk: '/ua/kontakty/', en: '/contact-us/' },
  { uk: '/ua/polityka-konfidentsiinosti/', en: '/privacy-cookie-policy-tarasovs-digital-agency/' },
];

export const langFromPath = (path: string): Lang => (path === '/ua/' || path.startsWith('/ua/') ? 'uk' : 'en');

// Both sides of the pair for `path`, only when both pages are built (`exists` tells which).
export function pairFor(path: string, exists: (path: string) => boolean): Record<Lang, string> | undefined {
  const pair = PAIRS.find((p) => p.en === path || p.uk === path);
  return pair && exists(pair.en) && exists(pair.uk) ? pair : undefined;
}

// hreflang set for a paired page: en, uk, and x-default pointing to English. Paths, not absolute URLs.
export function alternatesFor(path: string, exists: (path: string) => boolean) {
  const pair = pairFor(path, exists);
  if (!pair) return [];
  return [
    { hreflang: 'en', path: pair.en },
    { hreflang: 'uk', path: pair.uk },
    { hreflang: 'x-default', path: pair.en },
  ];
}

// Language switcher target: the paired page, else the other language's home.
export function switchHref(path: string, exists: (path: string) => boolean): string {
  const from = langFromPath(path);
  const to: Lang = from === 'en' ? 'uk' : 'en';
  return pairFor(path, exists)?.[to] ?? LANGS[to].prefix;
}

// Portfolio grid (home): filter, live status, category names. Project titles stay as published.
export const PORTFOLIO_UI: Record<Lang, { label: string; filterBy: string; all: string; status?: string; categories: Record<string, string> }> = {
  en: { label: 'Filter projects by category', filterBy: 'Filter by', all: 'All', categories: {} },
  uk: {
    label: 'Фільтр проєктів за категорією',
    filterBy: 'Фільтр:',
    all: 'Усі',
    status: 'Показано проєктів: {n}',
    categories: { 'seo-and-ai-visibility': 'SEO і AI-видимість' },
  },
};

// Contact form (components/ContactForm.astro). EN keeps the component's own defaults.
export const FORM_UI = {
  uk: {
    name: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    email: 'Емейл',
    emailPlaceholder: 'Ваш робочий емейл',
    message: 'Повідомлення',
    required: "(обов'язково)",
    consent: ['Надсилаючи форму, я погоджуюся з', 'умовами використання (англ.)', 'і', 'політикою конфіденційності'],
    privacyHref: '/ua/polityka-konfidentsiinosti/',
    sending: 'Надсилаємо…',
    success: 'Дякуємо! Повідомлення надіслано.',
    error: 'Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть на hello@tarasovs.me.',
  },
};

// Footer copy. EN = the live footer; UA follows it, with the UA audience line from /ua/kontakty/.
// Legal pages exist in English only, hence the "(англ.)" mark.
export const FOOTER_UI: Record<Lang, {
  tagline: string; office: string; city: string; directions: string; mapsHint: string; call: string;
  general: string; audience: string; follow: string; newTab: string; ctaText: string; cta: string;
  legal: Record<string, { label: string; href?: string; hreflang?: string }>; cookieSettings: string;
}> = {
  en: {
    tagline: 'Disrupting the ordinary in brand &amp; digital design.',
    office: 'Office',
    city: 'Timisoara, Romania',
    directions: 'Get directions',
    mapsHint: ' (Google Maps, opens in a new tab)',
    call: 'Call',
    general: 'General questions',
    audience: 'Remote-first agency serving <strong>New York and US clients</strong>',
    follow: 'Follow us',
    newTab: ' (opens in a new tab)',
    ctaText: 'Want a no-obligation to-hire estimate?',
    cta: 'Get a quote',
    legal: {},
    cookieSettings: 'Cookie settings',
  },
  uk: {
    tagline: 'Виходимо за межі звичного в бренд- і digital-дизайні.',
    office: 'Офіс',
    city: 'Тімішоара, Румунія',
    directions: 'Прокласти маршрут',
    mapsHint: ' (Google Maps, відкривається в новій вкладці)',
    call: 'Телефони',
    general: 'Загальні питання',
    audience: 'Працюємо дистанційно з бізнесом <strong>з усієї України</strong>',
    follow: 'Ми в соцмережах',
    newTab: ' (відкривається в новій вкладці)',
    ctaText: "Хочете оцінку проєкту без зобов'язань?",
    cta: 'Отримати оцінку',
    legal: {
      '/privacy-cookie-policy-tarasovs-digital-agency/': { label: 'Політика конфіденційності та cookie', href: '/ua/polityka-konfidentsiinosti/' },
      '/terms-of-service-tarasovs-digital-agency/': { label: 'Умови використання (англ.)', hreflang: 'en' },
    },
    cookieSettings: 'Налаштування cookie',
  },
};

// Analytics consent banner (components/Analytics.astro). The privacy policy exists in English only.
export const CONSENT_UI: Record<Lang, { title: string; text: string; policy: string; policyHref?: string; reject: string; accept: string }> = {
  en: {
    title: 'Analytics cookies',
    text: 'Google Analytics counts visits without cookies until you accept. Analytics cookies and Microsoft Clarity load only if you agree.',
    policy: 'Privacy policy',
    reject: 'Reject',
    accept: 'Accept analytics',
  },
  uk: {
    title: 'Аналітичні cookie',
    text: 'Поки ви не погодитесь, Google Analytics рахує відвідування без cookie. Аналітичні cookie і Microsoft Clarity вмикаються лише з вашої згоди.',
    policy: 'Політика конфіденційності',
    policyHref: '/ua/polityka-konfidentsiinosti/',
    reject: 'Відхилити',
    accept: 'Прийняти аналітику',
  },
};

// Interface strings in the shared header, layout and footer chrome.
export const UI: Record<Lang, Record<string, string>> = {
  en: { skip: 'Skip to content', nav: 'Main', menu: 'Menu', darkTheme: 'Dark theme', language: 'Language', cta: 'Get Started', breadcrumb: 'Breadcrumb', submenu: 'submenu' },
  uk: { skip: 'Перейти до вмісту', nav: 'Головне меню', menu: 'Меню', darkTheme: 'Темна тема', language: 'Мова', cta: 'Обговорити проєкт', breadcrumb: 'Навігаційний ланцюжок', submenu: 'підменю' },
};

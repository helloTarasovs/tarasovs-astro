// Starting packages for /services/ai-video-production/ (EN) and /ua/ai-video-produktsiia/ (UK).
// One source for the cards, the "Package" select in VideoInquiryForm and the values sent with an inquiry.
// Prices are starting prices in USD per project, not a quote. Names and prices sent to the form come from here by id.
import type { ServiceId } from './ai-video';

export type PackageId = 'website_hero' | 'product_video' | 'social_launch_kit';

export interface VideoPackage {
  id: PackageId;
  serviceId: ServiceId; // the video service this package belongs to (form "Service" value)
  name: string; // always English: it is what the inbox receives as package_name
  startingPrice: number;
  currency: 'USD';
}

export const PACKAGES: VideoPackage[] = [
  { id: 'website_hero', serviceId: 'website_hero', name: 'Website Hero', startingPrice: 350, currency: 'USD' },
  { id: 'product_video', serviceId: 'product_video', name: 'Product Video', startingPrice: 650, currency: 'USD' },
  { id: 'social_launch_kit', serviceId: 'social_video', name: 'Social Launch Kit', startingPrice: 950, currency: 'USD' },
];

export const CUSTOM_PACKAGE = { id: 'custom', name: 'Custom project' } as const;

export interface PackageCopy {
  tag?: string; // neutral caption, never "Most popular"
  description: string;
  included: string[];
  scopeNote: string;
  cta: string;
}

export interface PackagesUi {
  nav: string; eyebrow: string; title: string; intro: string; priceNote: string;
  from: string; perProject: string; includedLabel: string;
  notesTitle: string; notes: string; notesExtra: string;
  customTitle: string; customText: string; customCta: string; customLabel: string;
  formLabel: string; notSure: string; announce: string; // announce: "{name}" and "{price}" tokens
}

export interface PackagesCopy {
  ui: PackagesUi;
  items: Record<PackageId, PackageCopy>;
}

export const PACKAGES_EN: PackagesCopy = {
  ui: {
    nav: 'Packages',
    eyebrow: 'PROJECT PACKAGES',
    title: 'AI video packages for websites, products and social',
    intro: 'Choose a starting scope for your project. Each package includes one agreed creative direction, AI-assisted production, editing and delivery files for the selected placements.',
    priceNote: 'Starting prices in USD, per project. We confirm the final scope, quote and schedule after reviewing your brief and source materials.',
    from: 'From', perProject: 'USD per project', includedLabel: 'Included',
    notesTitle: 'Production notes',
    notes: 'We agree the visual direction and key frames before animation. A revision round is one consolidated set of feedback within the approved direction. New concepts, extra scenes, additional languages and website integration are scoped separately.',
    notesExtra: 'Corrections needed to meet the agreed brief are handled as part of delivery.',
    customTitle: 'Need a different scope?',
    customText: 'For brand films, agency projects, character-led videos or ongoing production, tell us what you need and we will prepare a tailored proposal.',
    customCta: 'Discuss a custom project',
    customLabel: 'Custom project',
    formLabel: 'Package', notSure: 'Not sure yet',
    announce: 'Selected package: {name}, from {price}. Please fill in the project inquiry form below.',
  },
  items: {
    website_hero: {
      description: 'A short, seamless loop designed around your website headline, layout and mobile crop.',
      included: [
        'One 6-10 second seamless loop',
        'One scene and one creative direction',
        'Desktop web version',
        'Mobile crop using the same animation',
        'One static poster image',
        'One consolidated revision round',
      ],
      scopeNote: 'Website integration and a separate mobile composition can be quoted alongside production.',
      cta: 'Discuss a website video',
    },
    product_video: {
      tag: 'For product launches',
      description: 'A focused product film for a product page, launch or social placement.',
      included: [
        'One 10-15 second product video',
        'One product and one creative direction',
        'Up to three shots',
        'Music and simple on-screen text',
        'Two agreed aspect ratios',
        'Two consolidated revision rounds',
      ],
      scopeNote: 'We review product detail, packaging and movement requirements before confirming the production approach.',
      cta: 'Discuss a product video',
    },
    social_launch_kit: {
      description: 'A product-led social video with alternative openings for creative testing.',
      included: [
        'One 15-20 second main video',
        'Two alternative opening edits',
        'Three vertical 9:16 video versions in total',
        'One product and one shared creative direction',
        'Music and simple on-screen text',
        'Three cover images',
        'Two consolidated revision rounds',
      ],
      scopeNote: 'All versions share the agreed scenes and main edit. Separate concepts, voiceovers and additional formats can be quoted separately.',
      cta: 'Plan a social video kit',
    },
  },
};

export const PACKAGES_UK: PackagesCopy = {
  ui: {
    nav: 'Пакети',
    eyebrow: 'ПАКЕТИ ПРОЄКТІВ',
    title: 'AI-відеопакети для сайтів, продуктів і соцмереж',
    intro: 'Оберіть стартовий обсяг для вашого проєкту. Кожен пакет містить один погоджений креативний напрям, AI-виробництво, монтаж і файли для вибраних розміщень.',
    priceNote: 'Стартові ціни в USD за проєкт. Остаточний обсяг, пропозицію й графік підтверджуємо після перегляду брифу та матеріалів.',
    from: 'Від', perProject: 'USD за проєкт', includedLabel: 'Що входить',
    notesTitle: 'Умови виробництва',
    notes: 'Візуальний напрям і ключові кадри погоджуємо до анімації. Раунд правок це один зведений набір коментарів у межах затвердженого напряму. Нові концепції, додаткові сцени, інші мови та інтеграція в сайт оцінюються окремо.',
    notesExtra: 'Виправлення, потрібні для відповідності погодженому брифу, входять у передачу робіт.',
    customTitle: 'Потрібен інший обсяг?',
    customText: 'Для бренд-фільмів, агентських проєктів, відео з персонажем або постійного виробництва напишіть, що вам потрібно, і ми підготуємо індивідуальну пропозицію.',
    customCta: 'Обговорити індивідуальний проєкт',
    customLabel: 'Індивідуальний проєкт',
    formLabel: 'Пакет', notSure: 'Ще не визначився',
    announce: 'Вибрано пакет: {name}, від {price}. Заповніть форму запиту нижче.',
  },
  items: {
    website_hero: {
      description: 'Короткий безшовний цикл, побудований навколо заголовка, макета й мобільного кадрування вашого сайту.',
      included: [
        'Один безшовний цикл на 6-10 секунд',
        'Одна сцена й один креативний напрям',
        'Версія для десктопа',
        'Мобільний кроп із тієї самої анімації',
        'Одна статична обкладинка',
        'Один зведений раунд правок',
      ],
      scopeNote: 'Інтеграцію в сайт і окрему композицію для телефона можна оцінити разом із виробництвом.',
      cta: 'Обговорити відео для сайту',
    },
    product_video: {
      tag: 'Для запуску продукту',
      description: 'Сфокусований продуктовий ролик для сторінки товару, запуску чи соцмереж.',
      included: [
        'Одне продуктове відео на 10-15 секунд',
        'Один продукт і один креативний напрям',
        'До трьох планів',
        'Музика й прості титри',
        'Два погоджені співвідношення сторін',
        'Два зведені раунди правок',
      ],
      scopeNote: 'Перед підтвердженням підходу до виробництва ми перевіряємо деталі продукту, упаковку й вимоги до руху.',
      cta: 'Обговорити продуктове відео',
    },
    social_launch_kit: {
      description: 'Продуктове відео для соцмереж з альтернативними початками для тестування креативів.',
      included: [
        'Один основний ролик на 15-20 секунд',
        'Два монтажі з альтернативним початком',
        'Разом три вертикальні версії 9:16',
        'Один продукт і один спільний креативний напрям',
        'Музика й прості титри',
        'Три обкладинки',
        'Два зведені раунди правок',
      ],
      scopeNote: 'Усі версії мають спільні погоджені сцени й основний монтаж. Окремі концепції, озвучення та додаткові формати оцінюються окремо.',
      cta: 'Спланувати набір відео для соцмереж',
    },
  },
};

export const formatPrice = (p: VideoPackage) => `$${p.startingPrice}`;

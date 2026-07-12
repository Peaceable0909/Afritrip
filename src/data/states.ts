export interface StateChip {
  value: string;
  label: string;
}

export interface StateHighlight {
  name: string;
  img: string;
  href?: string;
}

export interface MapLabel {
  name: string;
  x: number;
  y: number;
  color: string;
}

export interface StateInfo {
  slug: string;
  name: string;
  scriptName: string;
  tagline: string;
  heroImg: string;
  chips: StateChip[];
  fact: string;
  mapImg: string;
  mapLabels: MapLabel[];
  highlights: StateHighlight[];
  doodle: [string, string, string];
}

export const states: StateInfo[] = [
  {
    slug: 'lagos',
    name: 'Lagos',
    scriptName: 'Lagos',
    tagline: "Where energy meets endless possibilities. Experience Africa's most dynamic city.",
    heroImg: '/img/cinematic/hero-lagos.jpg',
    chips: [
      { value: '20M+', label: 'Population' },
      { value: 'Yoruba + English', label: 'Languages' },
      { value: 'Nov – Feb', label: 'Best time' },
      { value: '25 – 32°C', label: 'Weather' },
    ],
    fact:
      'Lagos is one of the fastest growing cities in the world and the entertainment capital of Africa — every spot here is curated with real prices and safety notes.',
    mapImg: '/img/cinematic/lagos-map.jpg',
    mapLabels: [
      { name: 'Lekki', x: 78, y: 28, color: 'var(--danfo)' },
      { name: 'Ikoyi', x: 40, y: 46, color: 'var(--neon-green)' },
      { name: 'Victoria Island', x: 22, y: 62, color: 'var(--neon-green)' },
      { name: 'Ajah', x: 74, y: 58, color: 'var(--neon-pink)' },
      { name: 'Badagry', x: 12, y: 80, color: 'var(--neon-teal)' },
      { name: 'Ikeja', x: 30, y: 16, color: 'var(--neon-pink)' },
    ],
    highlights: [
      { name: 'Lekki Conservation Centre', img: '/img/cinematic/spot-lekki.jpg', href: '/spots/lekki-conservation-centre/' },
      { name: 'Nike Art Gallery', img: '/img/cinematic/spot-nike.jpg', href: '/spots/nike-art-gallery/' },
      { name: 'Tarkwa Bay Beach', img: '/img/cinematic/spot-tarkwa.jpg', href: '/spots/tarkwa-bay/' },
      { name: 'Freedom Park', img: '/img/cinematic/spot-freedom.jpg', href: '/spots/freedom-park/' },
      { name: 'Boat Cruise · Lekki', img: '/img/cinematic/spot-boat.jpg', href: '/spots/tarkwa-bay/' },
    ],
    doodle: ['Live', 'Love', 'Lagos'],
  },
  {
    slug: 'abuja',
    name: 'Abuja',
    scriptName: 'Abuja',
    tagline: 'The heart of Nigeria. Planned, green and calm — where the whole country meets.',
    heroImg: '/img/cinematic/hero-abuja.jpg',
    chips: [
      { value: '4M+', label: 'Population' },
      { value: 'English + Hausa', label: 'Languages' },
      { value: 'Oct – Mar', label: 'Best time' },
      { value: '20 – 35°C', label: 'Weather' },
    ],
    fact:
      'Abuja was purpose-built from scratch in the 1980s and replaced Lagos as capital in 1991 — Zuma Rock, the giant monolith on its doorstep, appears on the ₦100 note.',
    mapImg: '/img/cinematic/map-abuja.jpg',
    mapLabels: [
      { name: 'Maitama', x: 32, y: 20, color: 'var(--danfo)' },
      { name: 'Wuse', x: 24, y: 44, color: 'var(--neon-pink)' },
      { name: 'Garki', x: 38, y: 68, color: 'var(--neon-green)' },
      { name: 'Jabi', x: 68, y: 34, color: 'var(--neon-teal)' },
      { name: 'Asokoro', x: 72, y: 62, color: 'var(--neon-pink)' },
      { name: 'Zuma Rock', x: 14, y: 78, color: 'var(--danfo)' },
    ],
    highlights: [
      { name: 'Zuma Rock', img: '/img/cinematic/hl-abuja-zuma.jpg' },
      { name: 'Jabi Lake', img: '/img/cinematic/hl-abuja-jabi.jpg' },
      { name: 'Gurara Falls', img: '/img/cinematic/hl-abuja-gurara.jpg' },
    ],
    doodle: ['Calm', 'Green', 'Abuja'],
  },
  {
    slug: 'calabar',
    name: 'Calabar',
    scriptName: 'Calabar',
    tagline: "Nigeria's coolest, greenest corner — carnival city with rainforest at its back.",
    heroImg: '/img/cinematic/hero-calabar.jpg',
    chips: [
      { value: '600K+', label: 'Population' },
      { value: 'Efik + English', label: 'Languages' },
      { value: 'Nov – Feb', label: 'Best time' },
      { value: '23 – 31°C', label: 'Weather' },
    ],
    fact:
      "Every December the Calabar Carnival takes over the city — often called Africa's biggest street party — and the Obudu cable car climbs 1,600 metres into the clouds nearby.",
    mapImg: '/img/cinematic/map-calabar.jpg',
    mapLabels: [
      { name: 'Marina', x: 22, y: 66, color: 'var(--danfo)' },
      { name: 'Duke Town', x: 38, y: 48, color: 'var(--neon-pink)' },
      { name: 'Tinapa', x: 30, y: 22, color: 'var(--neon-teal)' },
      { name: 'Obudu', x: 76, y: 18, color: 'var(--neon-green)' },
      { name: 'Kwa Falls', x: 68, y: 58, color: 'var(--neon-green)' },
    ],
    highlights: [
      { name: 'Obudu Mountain Resort', img: '/img/cinematic/hl-calabar-obudu.jpg' },
      { name: 'Kwa Falls', img: '/img/cinematic/hl-calabar-kwa.jpg' },
      { name: 'Calabar Carnival', img: '/img/cinematic/hl-calabar-carnival.jpg' },
    ],
    doodle: ['Come', 'Chill', 'Calabar'],
  },
  {
    slug: 'kano',
    name: 'Kano',
    scriptName: 'Kano',
    tagline: 'A thousand years of trade, walls and dye pits — the ancient north at full volume.',
    heroImg: '/img/cinematic/hero-kano.jpg',
    chips: [
      { value: '4M+', label: 'Population' },
      { value: 'Hausa + English', label: 'Languages' },
      { value: 'Nov – Feb', label: 'Best time' },
      { value: '15 – 38°C', label: 'Weather' },
    ],
    fact:
      'The Kofar Mata indigo dye pits have been in continuous use since 1498 — and during Durbar festivals, thousands of horsemen in full regalia parade to the Emir’s palace.',
    mapImg: '/img/cinematic/map-kano.jpg',
    mapLabels: [
      { name: 'Kofar Mata', x: 30, y: 30, color: 'var(--neon-teal)' },
      { name: 'Dala Hill', x: 20, y: 62, color: 'var(--danfo)' },
      { name: 'Kurmi Market', x: 52, y: 46, color: 'var(--neon-pink)' },
      { name: 'City Walls', x: 74, y: 24, color: 'var(--danfo)' },
      { name: 'Sabon Gari', x: 72, y: 68, color: 'var(--neon-green)' },
    ],
    highlights: [
      { name: 'Ancient Dye Pits', img: '/img/cinematic/hl-kano-dyepits.jpg' },
      { name: 'Kurmi Market', img: '/img/cinematic/hl-kano-kurmi.jpg' },
      { name: 'Durbar Festival', img: '/img/cinematic/hl-kano-durbar.jpg' },
    ],
    doodle: ['Old', 'Gold', 'Kano'],
  },
  {
    slug: 'osun',
    name: 'Osun',
    scriptName: 'Osun',
    tagline: 'Sacred groves, living shrines and the cradle of Yoruba civilisation.',
    heroImg: '/img/cinematic/hero-osun.jpg',
    chips: [
      { value: '5M+', label: 'Population' },
      { value: 'Yoruba + English', label: 'Languages' },
      { value: 'Nov – Mar', label: 'Best time' },
      { value: '22 – 33°C', label: 'Weather' },
    ],
    fact:
      'The Osun-Osogbo Sacred Grove is a UNESCO World Heritage Site, and Ile-Ife is revered as the cradle of Yoruba civilisation — its bronze heads stunned the art world.',
    mapImg: '/img/cinematic/map-osun.jpg',
    mapLabels: [
      { name: 'Osogbo', x: 34, y: 28, color: 'var(--danfo)' },
      { name: 'Sacred Grove', x: 52, y: 52, color: 'var(--neon-green)' },
      { name: 'Ile-Ife', x: 26, y: 74, color: 'var(--neon-pink)' },
      { name: 'Erin-Ijesha', x: 76, y: 36, color: 'var(--neon-teal)' },
      { name: 'Ede', x: 70, y: 72, color: 'var(--neon-pink)' },
    ],
    highlights: [
      { name: 'Osun Sacred Grove', img: '/img/cinematic/hl-osun-grove.jpg' },
      { name: 'Ile-Ife Palace & Museum', img: '/img/cinematic/hl-osun-ife.jpg' },
      { name: 'Erin-Ijesha Waterfall', img: '/img/cinematic/hl-osun-erin.jpg' },
    ],
    doodle: ['Spirit', 'Of', 'Osun'],
  },
];

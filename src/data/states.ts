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
  altName?: string;
  tagline: string;
  heroImg: string;
  moods: string[];
  mapPos: { x: number; y: number };
  chips: StateChip[];
  fact: string;
  /** Google Maps embed: what to search for, the centre point (lat,lng) and the zoom level */
  map: { query: string; ll: string; zoom: number };
  mapLabels: MapLabel[];
  highlights: StateHighlight[];
  doodle: [string, string, string];
}

export const states: StateInfo[] = [
  {
    slug: 'lagos',
    map: { query: 'Lagos, Nigeria', ll: '6.5244,3.3792', zoom: 10 },
    altName: 'Èkó',
    moods: ['party', 'food', 'relax', 'adventure'],
    mapPos: { x: 18, y: 76 },
    name: 'Lagos',
    scriptName: 'Lagos',
    tagline: "Where energy meets endless possibilities. Experience Africa's most dynamic city.",
    heroImg: '/img/photos/hero-lagos.jpg',
    chips: [
      { value: '20M+', label: 'Population' },
      { value: 'Yoruba + English', label: 'Languages' },
      { value: 'Nov – Feb', label: 'Best time' },
      { value: '25 – 32°C', label: 'Weather' },
    ],
    fact:
      'Lagos is one of the fastest growing cities in the world and the entertainment capital of Africa — every spot here is curated with real prices and safety notes.',
    mapLabels: [
      { name: 'Lekki', x: 78, y: 28, color: 'var(--danfo)' },
      { name: 'Ikoyi', x: 40, y: 46, color: 'var(--neon-green)' },
      { name: 'Victoria Island', x: 22, y: 62, color: 'var(--neon-green)' },
      { name: 'Ajah', x: 74, y: 58, color: 'var(--neon-pink)' },
      { name: 'Badagry', x: 12, y: 80, color: 'var(--neon-teal)' },
      { name: 'Ikeja', x: 30, y: 16, color: 'var(--neon-pink)' },
    ],
    highlights: [
      { name: 'Lekki Conservation Centre', img: '/img/photos/lekki-conservation-centre-1.jpg', href: '/spots/lekki-conservation-centre/' },
      { name: 'Nike Art Gallery', img: '/img/photos/nike-art-gallery-1.jpg', href: '/spots/nike-art-gallery/' },
      { name: 'Tarkwa Bay Beach', img: '/img/photos/tarkwa-bay-1.jpg', href: '/spots/tarkwa-bay/' },
      { name: 'Freedom Park', img: '/img/photos/freedom-park-1.jpg', href: '/spots/freedom-park/' },
      { name: 'Boat Cruise · Lekki', img: '/img/photos/boat-lagoon.jpg', href: '/spots/tarkwa-bay/' },
    ],
    doodle: ['Live', 'Love', 'Lagos'],
  },
  {
    slug: 'abuja',
    map: { query: 'Abuja, Nigeria', ll: '9.0579,7.4951', zoom: 11 },
    moods: ['relax', 'nature', 'history'],
    mapPos: { x: 47, y: 46 },
    name: 'Abuja',
    scriptName: 'Abuja',
    tagline: 'The heart of Nigeria. Planned, green and calm — where the whole country meets.',
    heroImg: '/img/photos/hero-abuja.jpg',
    chips: [
      { value: '4M+', label: 'Population' },
      { value: 'English + Hausa', label: 'Languages' },
      { value: 'Oct – Mar', label: 'Best time' },
      { value: '20 – 35°C', label: 'Weather' },
    ],
    fact:
      'Abuja was purpose-built from scratch in the 1980s and replaced Lagos as capital in 1991 — Zuma Rock, the giant monolith on its doorstep, appears on the ₦100 note.',
    mapLabels: [
      { name: 'Maitama', x: 32, y: 20, color: 'var(--danfo)' },
      { name: 'Wuse', x: 24, y: 44, color: 'var(--neon-pink)' },
      { name: 'Garki', x: 38, y: 68, color: 'var(--neon-green)' },
      { name: 'Jabi', x: 68, y: 34, color: 'var(--neon-teal)' },
      { name: 'Asokoro', x: 72, y: 62, color: 'var(--neon-pink)' },
      { name: 'Zuma Rock', x: 14, y: 78, color: 'var(--danfo)' },
    ],
    highlights: [
      { name: 'Zuma Rock', img: '/img/photos/zuma-rock-1.jpg', href: '/spots/zuma-rock/' },
      { name: 'Jabi Lake', img: '/img/photos/jabi-lake-park-1.jpg', href: '/spots/jabi-lake-park/' },
      { name: 'Gurara Falls', img: '/img/photos/hl-abuja-gurara.jpg' },
    ],
    doodle: ['Calm', 'Green', 'Abuja'],
  },
  {
    slug: 'calabar',
    map: { query: 'Calabar, Nigeria', ll: '4.9517,8.3220', zoom: 11 },
    altName: 'Canaan City',
    moods: ['nature', 'party', 'food', 'adventure'],
    mapPos: { x: 66, y: 82 },
    name: 'Calabar',
    scriptName: 'Calabar',
    tagline: "Nigeria's coolest, greenest corner — carnival city with rainforest at its back.",
    heroImg: '/img/photos/hero-calabar.jpg',
    chips: [
      { value: '600K+', label: 'Population' },
      { value: 'Efik + English', label: 'Languages' },
      { value: 'Nov – Feb', label: 'Best time' },
      { value: '23 – 31°C', label: 'Weather' },
    ],
    fact:
      "Every December the Calabar Carnival takes over the city — often called Africa's biggest street party — and the Obudu cable car climbs 1,600 metres into the clouds nearby.",
    mapLabels: [
      { name: 'Marina', x: 22, y: 66, color: 'var(--danfo)' },
      { name: 'Duke Town', x: 38, y: 48, color: 'var(--neon-pink)' },
      { name: 'Tinapa', x: 30, y: 22, color: 'var(--neon-teal)' },
      { name: 'Obudu', x: 76, y: 18, color: 'var(--neon-green)' },
      { name: 'Kwa Falls', x: 68, y: 58, color: 'var(--neon-green)' },
    ],
    highlights: [
      { name: 'Obudu Mountain Resort', img: '/img/photos/hl-calabar-obudu.jpg' },
      { name: 'Kwa Falls', img: '/img/photos/kwa-falls-1.jpg', href: '/spots/kwa-falls/' },
      { name: 'Calabar Carnival', img: '/img/photos/hl-calabar-carnival.jpg' },
    ],
    doodle: ['Come', 'Chill', 'Calabar'],
  },
  {
    slug: 'kano',
    map: { query: 'Kano, Nigeria', ll: '12.0022,8.5920', zoom: 11 },
    altName: 'Tumbin Giwa',
    moods: ['history', 'adventure', 'food'],
    mapPos: { x: 55, y: 16 },
    name: 'Kano',
    scriptName: 'Kano',
    tagline: 'A thousand years of trade, walls and dye pits — the ancient north at full volume.',
    heroImg: '/img/photos/hero-kano.jpg',
    chips: [
      { value: '4M+', label: 'Population' },
      { value: 'Hausa + English', label: 'Languages' },
      { value: 'Nov – Feb', label: 'Best time' },
      { value: '15 – 38°C', label: 'Weather' },
    ],
    fact:
      'The Kofar Mata indigo dye pits have been in continuous use since 1498 — and during Durbar festivals, thousands of horsemen in full regalia parade to the Emir’s palace.',
    mapLabels: [
      { name: 'Kofar Mata', x: 30, y: 30, color: 'var(--neon-teal)' },
      { name: 'Dala Hill', x: 20, y: 62, color: 'var(--danfo)' },
      { name: 'Kurmi Market', x: 52, y: 46, color: 'var(--neon-pink)' },
      { name: 'City Walls', x: 74, y: 24, color: 'var(--danfo)' },
      { name: 'Sabon Gari', x: 72, y: 68, color: 'var(--neon-green)' },
    ],
    highlights: [
      { name: 'Ancient Dye Pits', img: '/img/photos/kofar-mata-dye-pits-1.jpg', href: '/spots/kofar-mata-dye-pits/' },
      { name: 'Kurmi Market', img: '/img/photos/hl-kano-kurmi.jpg' },
      { name: 'Durbar Festival', img: '/img/photos/hl-kano-durbar.jpg' },
    ],
    doodle: ['Old', 'Gold', 'Kano'],
  },
  {
    slug: 'osun',
    map: { query: 'Osogbo, Osun State, Nigeria', ll: '7.7827,4.5418', zoom: 9 },
    altName: 'Ọ̀ṣun',
    moods: ['history', 'nature', 'relax'],
    mapPos: { x: 27, y: 64 },
    name: 'Osun',
    scriptName: 'Osun',
    tagline: 'Sacred groves, living shrines and the cradle of Yoruba civilisation.',
    heroImg: '/img/photos/hero-osun.jpg',
    chips: [
      { value: '5M+', label: 'Population' },
      { value: 'Yoruba + English', label: 'Languages' },
      { value: 'Nov – Mar', label: 'Best time' },
      { value: '22 – 33°C', label: 'Weather' },
    ],
    fact:
      'The Osun-Osogbo Sacred Grove is a UNESCO World Heritage Site, and Ile-Ife is revered as the cradle of Yoruba civilisation — its bronze heads stunned the art world.',
    mapLabels: [
      { name: 'Osogbo', x: 34, y: 28, color: 'var(--danfo)' },
      { name: 'Sacred Grove', x: 52, y: 52, color: 'var(--neon-green)' },
      { name: 'Ile-Ife', x: 26, y: 74, color: 'var(--neon-pink)' },
      { name: 'Erin-Ijesha', x: 76, y: 36, color: 'var(--neon-teal)' },
      { name: 'Ede', x: 70, y: 72, color: 'var(--neon-pink)' },
    ],
    highlights: [
      { name: 'Osun Sacred Grove', img: '/img/photos/osun-osogbo-sacred-grove-1.jpg', href: '/spots/osun-osogbo-sacred-grove/' },
      { name: 'Ile-Ife Palace & Museum', img: '/img/photos/hl-osun-ife.jpg' },
      { name: 'Erin-Ijesha Waterfall', img: '/img/photos/erin-ijesha-waterfalls-1.jpg', href: '/spots/erin-ijesha-waterfalls/' },
    ],
    doodle: ['Spirit', 'Of', 'Osun'],
  },
];

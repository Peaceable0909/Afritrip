export type Category = 'beach' | 'culture' | 'nightlife' | 'nature';
export type SafetyLevel = 'good' | 'caution' | 'avoid';

export interface Spot {
  slug: string;
  name: string;
  area: string;
  img: string;
  category: Category;
  moods: string[];
  blurb: string;
  description: string;
  price: string;
  priceNote: string;
  safetyDay: SafetyLevel;
  safetyNight: SafetyLevel;
  hours: string;
  bestTime: string;
  gettingThere: string;
  tips: string[];
}

export const categoryLabels: Record<Category, string> = {
  beach: 'Beach',
  culture: 'Culture',
  nightlife: 'Nightlife',
  nature: 'Nature',
};

export const safetyLabels: Record<SafetyLevel, { label: string; gloss: string }> = {
  good: { label: 'No wahala', gloss: 'relaxed — usual city sense applies' },
  caution: { label: 'Shine your eye', gloss: 'fine, but stay alert and go with company' },
  avoid: { label: 'No try am', gloss: 'skip it at this hour' },
};

export const spots: Spot[] = [
  {
    slug: 'nike-art-gallery',
    moods: ['history', 'relax'],
    img: '/img/cinematic/spot-nike.jpg',
    name: 'Nike Art Gallery',
    area: 'Lekki',
    category: 'culture',
    blurb:
      'Five floors of Nigerian art — the largest gallery in West Africa, and entry costs nothing.',
    description:
      'Chief Nike Davies-Okundaye’s gallery holds thousands of works: adire textiles, beadwork, paintings and sculpture stacked across five floors. If you are lucky, Mama Nike herself will walk you round. Nothing is behind glass, staff are welcoming, and there is no pressure to buy — though the shop downstairs is dangerous for your wallet in the best way.',
    price: 'Free entry',
    priceNote:
      'Entry is genuinely free — nobody at the gate should charge you. Artworks in the shop are priced fairly and haggling is expected.',
    safetyDay: 'good',
    safetyNight: 'caution',
    hours: 'Daily, roughly 10am – 6pm',
    bestTime: 'Weekday mornings — quiet enough to actually see the art.',
    gettingThere:
      'On the Lekki–Epe corridor, 2nd Roundabout area. Any ride-hailing app finds it; ask for “Nike Art Gallery, Lekki”.',
    tips: [
      'Ask the staff for a guided walk — it is free and transforms the visit.',
      'Photography is allowed; just ask before photographing people.',
      'Pair it with Lekki Conservation Centre — they are 15 minutes apart without traffic.',
    ],
  },
  {
    slug: 'lekki-conservation-centre',
    moods: ['nature', 'adventure'],
    img: '/img/cinematic/spot-lekki.jpg',
    name: 'Lekki Conservation Centre',
    area: 'Lekki',
    category: 'nature',
    blurb:
      'Rainforest boardwalk in the middle of Lagos, with the longest canopy walkway in Africa.',
    description:
      'A 78-hectare nature reserve run by the Nigerian Conservation Foundation. Raised wooden walkways take you over swamp and forest — expect monkeys, monitor lizards, peacocks and, if you have the nerve, the 401-metre canopy walkway strung above the treetops. It is the easiest “escape Lagos without leaving Lagos” trip there is.',
    price: '₦2,000 – ₦3,500 entry',
    priceNote:
      'Canopy walkway is a separate ticket on top of entry. Prices have climbed over the years — confirm at the gate and keep your receipt.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daily, 8:30am – 5pm (last canopy walk earlier)',
    bestTime: 'Before 10am — cooler, quieter, animals more active.',
    gettingThere:
      'Km 19, Lekki–Epe Expressway. Ride-hailing works fine; the gate is right on the expressway.',
    tips: [
      'Wear flat shoes — the canopy walkway is not a heels situation.',
      'The walkway sways. That is normal. Hold the netting and keep moving.',
      'Go early on weekends or expect a long queue for the canopy walk.',
    ],
  },
  {
    slug: 'tarkwa-bay',
    moods: ['relax', 'adventure', 'nature'],
    img: '/img/cinematic/spot-tarkwa.jpg',
    name: 'Tarkwa Bay Beach',
    area: 'Off Victoria Island (by boat)',
    category: 'beach',
    blurb:
      'Sheltered island beach you can only reach by boat — calm water, surf school, proper escape.',
    description:
      'Tarkwa Bay sits on an island across the harbour, which is exactly why it stays calmer than the mainland beaches. The bay is sheltered, so swimming is actually pleasant, and there is a long-running surf community that rents boards and teaches beginners. Locals cook fresh fish on the sand. The boat ride there — skimming past tankers and the harbour mouth — is half the fun.',
    price: '₦5,000 – ₦10,000 boat, return',
    priceNote:
      'Agree the FULL return price before you board and pay the balance only when they pick you back up. First quote to visitors is often double — haggle without shame.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daylight only — last boats back around 6pm',
    bestTime: 'Weekday daytime. Sundays get loud and crowded.',
    gettingThere:
      'Boats leave from the jetties around Victoria Island and Marina. Use a jetty with life jackets and insist on wearing one.',
    tips: [
      'Take cash in small notes — there are no ATMs on an island.',
      'Someone will offer to “watch your things” for a small fee. ₦500–₦1,000 is the going rate and it genuinely works.',
      'Do not miss the last boat back. Seriously.',
    ],
  },
  {
    slug: 'freedom-park',
    moods: ['history', 'party', 'food'],
    img: '/img/cinematic/spot-freedom.jpg',
    name: 'Freedom Park',
    area: 'Lagos Island',
    category: 'culture',
    blurb:
      'A colonial prison turned open-air arts park — live music, food court, and history underfoot.',
    description:
      'The old Broad Street Prison was remade into a memorial and leisure park, and it has become the cultural heart of Lagos Island: sculpture gardens, a small museum in the old cells, an amphitheatre that hosts live music most weekends, and a relaxed food court that stays lively into the night. It is one of the few places in Lagos where you can feel the city’s history and its present at the same table.',
    price: '₦500 – ₦2,000 entry',
    priceNote:
      'Gate fee is small; ticketed concerts and festival nights cost more. Food inside is fairly priced by Island standards.',
    safetyDay: 'good',
    safetyNight: 'good',
    hours: 'Daily, 10am – late (events run into the night)',
    bestTime: 'Friday or Saturday evening when there is live music on.',
    gettingThere:
      'Broad Street, Lagos Island. Ride-hailing straight to the gate is the easy move; the park itself is walled and secured.',
    tips: [
      'Check their social pages for the weekend line-up before you go.',
      'Inside the park is relaxed at night — arrange your ride home from the gate rather than wandering the Island late.',
      'The kalakuta-style live sessions are the real Lagos — stay for the second set.',
    ],
  },
  {
    slug: 'new-afrika-shrine',
    moods: ['party', 'history'],
    img: '/img/cinematic/spot-shrine.jpg',
    name: 'New Afrika Shrine',
    area: 'Ikeja',
    category: 'nightlife',
    blurb:
      'The Kuti family’s temple of Afrobeat. Femi and Made still play here — this is the pilgrimage.',
    description:
      'Rebuilt by Femi and Yeni Kuti after Fela’s original Shrine, this open-sided hall in Ikeja is the spiritual home of Afrobeat. Thursday and Sunday nights often have the Kutis themselves on stage; every October the Felabration festival takes over completely. It is loud, smoky, cheap, completely unpolished and absolutely unmissable — the opposite of an Island lounge, on purpose.',
    price: 'Free – ₦3,000 entry',
    priceNote:
      'Regular nights are often free or near-free; big performance nights and Felabration are ticketed. Drinks and suya inside are honestly cheap.',
    safetyDay: 'good',
    safetyNight: 'caution',
    hours: 'Evenings; live shows typically Thu & Sun, from ~9pm',
    bestTime: 'A night Femi or Made Kuti is billed — check before you go.',
    gettingThere:
      'NERDC Road, Agidingbi, Ikeja — mainland, so plan the trip. Take a ride-hailing car door-to-door at night.',
    tips: [
      'Inside the Shrine is family turf and well-marshalled; the surrounding streets late at night are where you shine your eye.',
      'Shows start late and end later. Do not plan an early morning after.',
      'Go with the flow — it is a dance hall, not a seated concert.',
    ],
  },
  {
    slug: 'terra-kulture',
    moods: ['food', 'history', 'relax'],
    img: '/img/cinematic/spot-terra.jpg',
    name: 'Terra Kulture',
    area: 'Victoria Island',
    category: 'culture',
    blurb:
      'Art gallery, bookshop, theatre and the best introduction to Nigerian food, in one building.',
    description:
      'Terra Kulture is where Victoria Island does culture: a serious art gallery, a Nigerian-language bookshop, a theatre that stages some of the country’s best productions, and a restaurant that serves proper Nigerian dishes in a setting gentle enough for first-timers. If someone has one afternoon in Lagos and wants to understand the place, you bring them here.',
    price: 'Free entry · theatre from ~₦5,000',
    priceNote:
      'Walking into the gallery and bookshop is free. Theatre tickets and the restaurant are mid-range for the Island — a full meal runs ₦5,000–₦15,000.',
    safetyDay: 'good',
    safetyNight: 'good',
    hours: 'Daily, ~9am – 9pm; theatre shows mostly weekends',
    bestTime: 'Saturday — gallery in the afternoon, a play in the evening.',
    gettingThere:
      'Tiamiyu Savage Street, Victoria Island. Every driver knows it.',
    tips: [
      'Order the native rice or ofada — ask staff to calibrate the pepper to your level. Be honest about your level.',
      'Weekend plays sell out; book ahead on their site.',
      'The gift shop is one of the few non-tourist-trap souvenir stops in Lagos.',
    ],
  },
  {
    slug: 'elegushi-beach',
    moods: ['party'],
    img: '/img/cinematic/spot-elegushi.jpg',
    name: 'Elegushi Beach',
    area: 'Lekki',
    category: 'beach',
    blurb:
      'Lagos’s party beach — loudspeakers, suya smoke, horses on the sand, and a crowd till late.',
    description:
      'Elegushi is not a quiet beach and does not pretend to be. It is where Lagos comes to flex: beach houses blasting Afrobeats, grilled fish and suya everywhere, horse rides on the sand, and on weekend nights it turns into an open-air party. The Atlantic here has a strong undertow — treat the water as scenery, not a swimming pool.',
    price: '₦2,000 – ₦3,000 gate',
    priceNote:
      'The gate fee is only the beginning — chairs, tables and canopies are charged separately by beach boys. Agree every price before you sit down, and count your change.',
    safetyDay: 'good',
    safetyNight: 'caution',
    hours: 'Daily, day into late night on weekends',
    bestTime: 'Saturday late afternoon into the evening.',
    gettingThere:
      'Off Remi Olowude Way, Lekki Phase 1 axis. Ride-hailing to the gate; expect traffic on Friday and Saturday evenings.',
    tips: [
      'Swimming is genuinely dangerous here — strong currents, no reliable lifeguards. Stay shallow.',
      'Keep your phone zipped away when the crowd thickens.',
      'The fresh fish shacks at the far end beat the front-row spots on price and taste.',
    ],
  },
  {
    slug: 'bature-brewery',
    moods: ['party', 'food', 'relax'],
    img: '/img/cinematic/spot-bature.jpg',
    name: 'Bature Brewery',
    area: 'Victoria Island',
    category: 'nightlife',
    blurb:
      'Nigeria’s craft-beer taproom — garden seating, DJs on weekends, zero dress-code stress.',
    description:
      'Lagos’s home-grown craft brewery pours its own range — Black Gold stout, Shakara lager and rotating experiments — in a relaxed taproom and beer garden on Victoria Island. It draws an easy mix of locals, returnees and expats; weekends add DJs and food pop-ups. If big-club Lagos nightlife feels like too much, this is the soft landing.',
    price: 'No gate · beers ₦3,000 – ₦5,000',
    priceNote:
      'No entry fee on regular nights; special events are ticketed. Craft beer prices are Island prices — that is just how VI is.',
    safetyDay: 'good',
    safetyNight: 'good',
    hours: 'Afternoon till late; liveliest Fri & Sat',
    bestTime: 'Friday evening — busy but not crushed.',
    gettingThere:
      'On Sinari Daranijo Street, Victoria Island. Short, safe ride-hailing hop from anywhere on the Island.',
    tips: [
      'Try the flight (tasting board) before committing to a pint.',
      'It is one of the easiest places in Lagos to go alone and leave with friends.',
      'Card and transfer accepted — one of the few places you barely need cash.',
    ],
  },
];

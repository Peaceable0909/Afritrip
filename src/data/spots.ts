export type Category = 'beach' | 'culture' | 'nightlife' | 'nature' | 'food';
export type SafetyLevel = 'good' | 'caution' | 'avoid';
export type StateSlug = 'lagos' | 'abuja' | 'calabar' | 'kano' | 'osun';

export const stateLabels: Record<StateSlug, string> = {
  lagos: 'Lagos',
  abuja: 'Abuja',
  calabar: 'Calabar',
  kano: 'Kano',
  osun: 'Osun',
};

export interface SpotMap {
  /** Pin verified on Google Maps; falls back to a name search when absent. */
  coords?: [number, number];
  query: string;
}

export function mapsUrl(map: SpotMap): string {
  const q = map.coords ? `${map.coords[0]},${map.coords[1]}` : encodeURIComponent(map.query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export interface Spot {
  slug: string;
  state: StateSlug;
  map: SpotMap;
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
  food: 'Food',
};

export const safetyLabels: Record<SafetyLevel, { label: string; gloss: string }> = {
  good: { label: 'No wahala', gloss: 'relaxed — usual city sense applies' },
  caution: { label: 'Shine your eye', gloss: 'fine, but stay alert and go with company' },
  avoid: { label: 'No try am', gloss: 'skip it at this hour' },
};

export const spots: Spot[] = [
  {
    slug: 'nike-art-gallery',
    state: 'lagos',
    map: { coords: [6.4315071, 3.4818389], query: 'Nike Art Gallery Lekki' },
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
      'Off Elegushi Beach Road in the Ikate area of Lekki — close to Elegushi Beach and the Lekki Arts & Crafts Market. Any ride-hailing app finds it; ask for “Nike Art Gallery, Lekki”.',
    tips: [
      'Ask the staff for a guided walk — it is free and transforms the visit.',
      'Photography is allowed; just ask before photographing people.',
      'Pair it with the Lekki Arts & Crafts Market nearby. Lekki Conservation Centre is about 6 km further out — allow 15 to 40 minutes depending on traffic.',
    ],
  },
  {
    slug: 'lekki-conservation-centre',
    state: 'lagos',
    map: { coords: [6.4415182, 3.535771], query: 'Lekki Conservation Centre' },
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
    state: 'lagos',
    map: { coords: [6.400566, 3.3955927], query: 'Tarkwa Bay Beach Lagos' },
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
    state: 'lagos',
    map: { coords: [6.4488993, 3.3965146], query: 'Freedom Park Lagos' },
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
    state: 'lagos',
    map: { coords: [6.6229285, 3.3569425], query: 'New Afrika Shrine Ikeja' },
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
    state: 'lagos',
    map: { coords: [6.4251323, 3.4268301], query: 'Terra Kulture Victoria Island' },
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
    state: 'lagos',
    map: { query: 'Elegushi Royal Beach Lekki Lagos' },
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
      'Google Maps lists “Elegushi Royal Beach” (the public beach, off Road 3, Lekki Phase 1) and a separate “Elegushi Private Beach” on the Lekki–Epe Expressway — pick the one you mean before you set off. Expect traffic on Friday and Saturday evenings.',
    tips: [
      'Swimming is genuinely dangerous here — strong currents, no reliable lifeguards. Stay shallow.',
      'Keep your phone zipped away when the crowd thickens.',
      'The fresh fish shacks at the far end beat the front-row spots on price and taste.',
    ],
  },
  {
    slug: 'bature-brewery',
    state: 'lagos',
    map: { coords: [6.4332814, 3.4339323], query: 'Bature Brewery Lagos' },
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
  {
    slug: 'national-museum-lagos',
    state: 'lagos',
    map: { coords: [6.4442681, 3.4036542], query: 'National Museum Lagos' },
    moods: ['history', 'relax'],
    img: '/img/cinematic/city-lagos.jpg',
    name: 'National Museum Lagos',
    area: 'Onikan Road, Ikoyi',
    category: 'culture',
    blurb:
      'Nok terracotta, Benin and Ife bronzes and a crash course in 2,000 years of Nigerian art.',
    description:
      'The National Museum in Onikan is the quickest way to understand how old Nigerian civilisation really is. Galleries hold Nok terracotta figures, Ife and Benin-style bronzes, royal regalia, masks and colonial-era history. It is not a glossy modern museum — some rooms are dusty and labels vary — but the objects are the real thing, and the building is quiet enough to think in. It sits a short ride from Freedom Park, so the two pair well in one day.',
    price: 'Under ₦2,000 entry',
    priceNote:
      'Entry is a small fee for visitors; photo or camera permits can cost extra. Confirm at the desk and keep your ticket.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Opens 9am — check Google Maps for today’s hours before you go',
    bestTime: 'Weekday mornings, before the school trips arrive.',
    gettingThere:
      'On Onikan Road, about 1 km from Freedom Park. Ride-hailing to “National Museum Lagos”.',
    tips: [
      'Ask whether a guide is available — a short guided loop makes the objects make sense.',
      'Pair it with Freedom Park the same afternoon; they are a short ride apart.',
      'Carry small cash for the entry and camera permit — card readers are unreliable.',
    ],
  },
  {
    slug: 'lekki-arts-crafts-market',
    state: 'lagos',
    map: { query: 'Lekki Arts & Crafts Market Oba Elegushi St Lagos' },
    moods: ['history', 'food', 'relax'],
    img: '/img/cinematic/cat-events.jpg',
    name: 'Lekki Arts & Crafts Market',
    area: 'Oba Elegushi St, Lekki',
    category: 'culture',
    blurb:
      'Wood carvings, beads, adire, masks and bronzes — the best place in Lagos to buy souvenirs and haggle.',
    description:
      'A long run of stalls selling carved masks, drums, beadwork, leather goods, paintings and adire cloth. The traders are friendly but persistent, and every price is an opening offer. It is the easiest place in Lagos to take something genuinely Nigerian home — and to practise your bargaining face.',
    price: 'Free to enter · haggle everything',
    priceNote:
      'The first price quoted to visitors is often two to three times what locals pay. Counter at about half, walk away politely, and expect them to meet you in the middle.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Roughly 10am – 6pm (Google Maps shows it closing at 6pm)',
    bestTime: 'Weekday afternoons — fewer people, more patient traders.',
    gettingThere:
      'On Oba Elegushi Street in Lekki, near Elegushi Beach and Nike Art Gallery. Search “Lekki Arts & Crafts Market” on your ride app and agree the return trip before you leave.',
    tips: [
      'Bring small notes — giving ₦20,000 for a ₦3,000 item makes change and trust awkward.',
      'Check wooden pieces and bronzes for cracks before paying.',
      'Ask the trader to wrap larger pieces; many will do it free for a good sale.',
    ],
  },
  {
    slug: 'obalende-suya',
    state: 'lagos',
    map: { query: 'Obalende Suya Spot Ojo St Lagos' },
    moods: ['food', 'party'],
    img: '/img/cinematic/cat-food.jpg',
    name: 'Obalende Suya',
    area: 'Obalende, Lagos Island',
    category: 'food',
    blurb:
      'Lagos’s suya capital — spiced grilled beef, ram and chicken, sold from smoky roadside stalls.',
    description:
      'Obalende is where Lagos goes for suya: skewers dusted in yaji (spiced peanut powder), grilled over open flame, wrapped in newspaper and handed over with raw onion and tomato. It is a night-food ritual — go with people, eat standing, and watch how fast a good stall turns over. It is loud, smoky and cheap, and it is the real thing.',
    price: '₦2,000 – ₦6,000 per person',
    priceNote:
      'Suya is sold by the portion, so say the naira amount you want (“five hundred naira beef”). Prices vary by meat and stall; busy stalls move stock faster and taste better.',
    safetyDay: 'good',
    safetyNight: 'caution',
    hours: 'Evenings into the night, busiest after 7pm',
    bestTime: 'Around 8pm, when the grills are at full heat.',
    gettingThere:
      'Obalende, Lagos Island. Google Maps shows only a few small venues (for example “Obalende Suya Spot” on Ojo Street), so treat this as an area to explore. Take a ride-hailing car there and arrange the ride home before you start eating — do not wander the area late.',
    tips: [
      'Choose a stall with a queue and a hot grill, not one with meat sitting out.',
      'Say your pepper level honestly — “small pepper” is a good first answer.',
      'Keep your phone zipped and your bag in front of you when the crowd builds.',
    ],
  },
  {
    slug: 'badagry-point-of-no-return',
    state: 'lagos',
    map: { query: 'Point of No Return Badagry' },
    moods: ['history', 'nature'],
    img: '/img/cinematic/spot-boat.jpg',
    name: 'Badagry Heritage Trail',
    area: 'Badagry',
    category: 'culture',
    blurb:
      'The slave-trade memorial route: the Point of No Return, the Mobee museum and the first storey building in Nigeria.',
    description:
      'Badagry, west of Lagos near the Benin border, was a major port in the transatlantic slave trade. The heritage trail takes in the Point of No Return — the coastline where captives were shipped away — a slavery museum with chains and trade goods, and the First Storey Building in Nigeria, built in 1845. It is sombre and absorbing, and it works best as a full day trip with a local guide.',
    price: '₦5,000 – ₦25,000 by tour',
    priceNote:
      'Entry fees at each stop are small; the bigger cost is transport and a guide. Agree a total price for the day before you set out.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Roughly 9am – 5pm (Google Maps shows the museum and Point of No Return closing at 5pm)',
    bestTime: 'Weekday mornings, to beat both the road and the heat.',
    gettingThere:
      'About 60 km from Lagos Island on the Lagos–Badagry Expressway. Traffic decides the trip — allow 1.5 to 3 hours each way and go early.',
    tips: [
      'Hire a guide at the first stop; the stories behind the objects are the point.',
      'Take the boat to the Point of No Return only on a calm day and wear the life jacket.',
      'Pack water and a hat — much of the trail is open and sunny.',
    ],
  },
  {
    slug: 'zuma-rock',
    state: 'abuja',
    map: { coords: [9.125556, 7.228889], query: 'Zuma Rock Nigeria' },
    moods: ['nature', 'adventure', 'history'],
    img: '/img/cinematic/hl-abuja-zuma.jpg',
    name: 'Zuma Rock',
    area: 'Suleja axis, outside Abuja',
    category: 'nature',
    blurb:
      'The 725-metre monolith on the Abuja–Kaduna road — the “Gateway to Abuja” and a face on the ₦100 note.',
    description:
      'Zuma Rock rises abruptly from flat farmland on the road between Abuja and Suleja, a giant granite-and-gabbro monolith that is hard to look away from. Local tradition surrounds it with stories — including a face said to be seen in the rock — and it appears on the ₦100 note. Most visitors photograph it from the road or nearby village paths; climbing is risky and not formally managed.',
    price: 'Free to view · small local fees possible',
    priceNote:
      'Viewing from the road costs nothing. If a local asks for a small fee to approach or guide you, agree it up front.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daylight only',
    bestTime: 'Early morning or late afternoon for the best light and cooler air.',
    gettingThere:
      'On the Abuja–Kaduna road, roughly 45 – 60 minutes from central Abuja depending on traffic. Hire a car for the afternoon or use ride-hailing with a return arranged.',
    tips: [
      'Do not attempt to climb without a local guide — the rock is steep and unforgiving.',
      'Go in the dry season for clear skies and good photos.',
      'Stay on the main roads and head back before dark.',
    ],
  },
  {
    slug: 'jabi-lake-park',
    state: 'abuja',
    map: { coords: [9.0709435, 7.4147471], query: 'Jabi Lake Park Abuja' },
    moods: ['relax', 'nature', 'food'],
    img: '/img/cinematic/hl-abuja-jabi.jpg',
    name: 'Jabi Lake Park',
    area: 'Jabi, Abuja',
    category: 'nature',
    blurb:
      'Lakeside park in the middle of Abuja — boat rides, jogging paths and sundowners beside the water.',
    description:
      'Jabi Lake is Abuja’s easy outdoor spot: a waterfront park next to the Jabi Lake Mall, with walking and jogging paths, picnic spots, boat rides and a few lakeside eateries. It is calm, green and very Abuja — an easy afternoon in a city that moves slower than Lagos.',
    price: 'Park entry small · boats extra',
    priceNote:
      'Entry fees are modest and boat or activity rides are priced separately — ask the price per person and the length of the ride before you board.',
    safetyDay: 'good',
    safetyNight: 'caution',
    hours: 'Daytime into the evening',
    bestTime: 'Late afternoon for sunset over the water.',
    gettingThere:
      'In Jabi, close to the Jabi Lake Mall — easy by ride-hailing from Wuse, Maitama or Garki.',
    tips: [
      'Wear a life jacket on any boat and ask about the route first.',
      'Pair it with a meal at the mall next door.',
      'Weekend evenings are busy; weekday afternoons are peaceful.',
    ],
  },
  {
    slug: 'kwa-falls',
    state: 'calabar',
    map: { coords: [5.1425974, 8.5101399], query: 'Kwa Falls Calabar' },
    moods: ['nature', 'adventure', 'relax'],
    img: '/img/cinematic/hl-calabar-kwa.jpg',
    name: 'Kwa Falls',
    area: 'Akamkpa, near Calabar',
    category: 'nature',
    blurb:
      'A forest waterfall outside Calabar — cool water, green canopy and a proper escape from the city.',
    description:
      'Kwa Falls pours over rocks into a pool inside Cross River’s rainforest belt, a short drive from Calabar. The setting is the draw: dense forest, birdsong and a cool, shaded spot to swim or sit. The access road is rough in parts and the trail can be slippery, so go with someone who knows the way.',
    price: 'Small entry fee · guide extra',
    priceNote:
      'Expect a modest entry or maintenance fee and a small tip for a guide. Agree both before the trail starts.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daytime only',
    bestTime: 'Dry season (Nov – Feb) when the access roads are easier.',
    gettingThere:
      'Akamkpa side of Cross River State, about an hour from Calabar. Hire a car and driver for the half day rather than relying on ride-hailing.',
    tips: [
      'Wear shoes with grip — the rocks and trail are slick.',
      'Do not swim if the river is running fast after rain.',
      'Bring insect repellent and water.',
    ],
  },
  {
    slug: 'kofar-mata-dye-pits',
    state: 'kano',
    map: { coords: [12.0007108, 8.5259754], query: 'Kofar Mata Dye Pits Kano' },
    moods: ['history', 'adventure'],
    img: '/img/cinematic/hl-kano-dyepits.jpg',
    name: 'Kofar Mata Dye Pits',
    area: 'Kofar Mata, Kano',
    category: 'culture',
    blurb:
      'Indigo dye pits in use since 1498 — one of Africa’s oldest working craft sites.',
    description:
      'In the old city of Kano, dyers still lower cloth into deep indigo pits, beat it with mallets and hang it to dry in the sun. The pits have been in continuous use since 1498. The smell is strong and the setting is working-craft raw, not polished — but watching the cloth emerge in deep blue is why people come.',
    price: 'Small entry fee · tip the dyers',
    priceNote:
      'There is usually a small entry or viewing fee, and the dyers expect a tip if you take photos. Agree the fee first.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daytime — dyers work morning to mid-afternoon',
    bestTime: 'Morning, when the pits are busiest.',
    gettingThere:
      'In Kano’s old city, near Kofar Mata. Go with a local guide or driver rather than navigating the old-city lanes alone.',
    tips: [
      'Wear clothes you do not mind marking — indigo transfers.',
      'Ask before photographing the dyers.',
      'Buy a piece of cloth directly from the dyers if you can — it is the best souvenir in town.',
    ],
  },
  {
    slug: 'osun-osogbo-sacred-grove',
    state: 'osun',
    map: { coords: [7.7556674, 4.5522822], query: 'Osun-Osogbo Sacred Grove' },
    moods: ['history', 'nature', 'relax'],
    img: '/img/cinematic/hl-osun-grove.jpg',
    name: 'Osun-Osogbo Sacred Grove',
    area: 'Osogbo, Osun State',
    category: 'culture',
    blurb:
      'UNESCO-listed forest shrine to the river goddess Osun — sculptures, shrines and an August festival.',
    description:
      'A forest of shrines, sculptures and winding paths along the Osun River, still a living place of worship and a UNESCO World Heritage Site. The art here — figures by Susanne Wenger and the New Sacred Art movement — grows out of the trees. Every August the annual Osun-Osogbo Festival brings pilgrims and visitors in huge numbers.',
    price: '₦1,500 – ₦5,000 entry',
    priceNote:
      'Entry covers the grove; a local guide usually costs a small extra fee and is well worth it. Confirm both at the gate.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daily daytime hours — check before you go',
    bestTime: 'Weekday mornings, or August for the festival if you like crowds.',
    gettingThere:
      'Osogbo, around 4 hours or more by road from Lagos. Stay overnight in Osogbo or Ibadan rather than doing it as a day trip.',
    tips: [
      'Dress modestly and ask your guide how to behave at the shrines.',
      'Take the guide — the symbolism is lost without one.',
      'Ask before photographing worshippers or shrine objects.',
    ],
  },
  {
    slug: 'erin-ijesha-waterfalls',
    state: 'osun',
    map: { coords: [7.5651908, 4.9021896], query: 'Erin Ijesha Waterfall Osun' },
    moods: ['nature', 'adventure', 'relax'],
    img: '/img/cinematic/hl-osun-erin.jpg',
    name: 'Erin-Ijesha Waterfalls',
    area: 'Erin-Ijesha, Osun State',
    category: 'nature',
    blurb:
      'Olumirin Waterfalls — seven stepped cascades you can climb through, deep in Osun’s hills.',
    description:
      'Erin-Ijesha (also called Olumirin) is a waterfall in tiers: you climb stone steps beside the water and can reach several of its seven levels. The upper levels are quieter and more beautiful, and the cold water is a welcome break from the heat. The steps can be slippery and the climb is steep, so go with good shoes and an easy pace.',
    price: '₦1,500 – ₦3,000 entry',
    priceNote:
      'Entry is a small fee. A guide or helper on the steps may ask for a tip — keep small notes.',
    safetyDay: 'good',
    safetyNight: 'avoid',
    hours: 'Daytime only',
    bestTime: 'Rainy season (Jun – Oct) for the biggest flow; dry season for safer, drier steps.',
    gettingThere:
      'In Erin-Ijesha, Osun State, around 4 – 5 hours from Lagos. Combine with the Osogbo grove on a two-day trip.',
    tips: [
      'Wear shoes with grip — the steps are slippery.',
      'Bring a change of clothes and a waterproof bag for your phone.',
      'Do not climb after heavy rain.',
    ],
  },
];

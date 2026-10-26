# Image audit and replacement

Audited 26 October 2026. Every image on the site was checked, replaced, and re-checked in a browser.

## What was there

50 image files, all AI-generated: 49 in `public/img/cinematic/` (city cards, state heroes, spot photos,
category tiles, an "illustrated map" per state, a stylised portrait, a paint-splash and clouds texture)
plus `public/img/hero-portrait.png` and `public/scenes/yankari/bg.jpg`. None showed the real place named
on its card, and the footer admitted the hero and mood visuals were "artistic impressions". All were removed.

## What replaced them

86 photographs from Wikimedia Commons in `public/img/photos/`, resized to 1400 px (1920 px for heroes and
city cards) and recompressed. Each photo's alt text, author, licence and source page live in
`src/data/photos.json` and are shown on the site at `/credits/`.

| Where | Replacement |
|---|---|
| 18 spot pages (hero + gallery of 2 to 3 photos) | Photos of the real place (Zuma Rock, Kwa Falls, Kofar Mata dye pits, Osun-Osogbo grove, Erin-Ijesha, Lekki Conservation Centre, Nike Art Gallery, Tarkwa Bay, Freedom Park, New Afrika Shrine, Terra Kulture, Elegushi, National Museum, Lekki craft market, Badagry Point of No Return, Jabi Lake, suya) |
| Home hero | Sunset over the River Benue (replaces the AI portrait, splash and clouds composite) |
| 5 home city cards, 5 state heroes | Photos of Lagos, Abuja, Calabar, Kano and Osun |
| 7 state highlights | Gurara Falls, Obudu cable car, Calabar Carnival, Kano Durbar, Kurmi Market, Ile-Ife museum, Lagos Lagoon |
| 6 category tiles | Lekki Beach, Olumo Rock, Eyo festival, jollof rice, Transcorp Hilton Abuja, Third Mainland Bridge at night |
| 5 illustrated state maps | Embedded Google Maps for each state, plus links to its areas |
| 69 nightlife cards | Photographs of the neighbourhood the venue is in, labelled "Area photo" (venues with a full guide use the guide's photo) |
| `/prototype` background | The River Benue photograph |

## Rejected during checking

- "Lagos at Night": filed under *Night in Lagos, Portugal*, so not the right Lagos.
- Two Kofar Mata photos with a "©" photographer watermark, and one Osun photo with an email address on it.
- A night photo with a photographer watermark in its border.
- Two Badagry photos with heavy colour casts (one with a camera date stamp).
- A Calabar Carnival photo dominated by a sponsor's inflatable arch.
- A Garki "market" photo that actually showed a fire station, and a gloomy tilted Kubwa sunset.

## Not verified or not replaced

- **Bature Brewery**: no photograph of the taproom exists on Commons. Its page shows Victoria Island and
  says so on the page.
- **Obalende Suya**: the photos show suya being grilled in Nigeria, not Obalende specifically.
- **Terra Kulture**: the only reusable photos are a US Navy band performing on its stage, not the bookshop or restaurant.
- **Nightlife venues**: none of the 69 has a reusable photograph of its own. Cards show the area, and the
  "Google Maps" link opens the venue's own photos.
- **Kubwa / Apo / Garki / Surulere / Ikorodu area photos** are ordinary street scenes; better ones may exist.
- Wikimedia metadata was trusted for the place named in each file title and category, then checked by eye.
  Subject accuracy was not independently confirmed by anyone who knows each place.

## Licences

CC BY-SA 4.0: 76 photos. CC BY-SA 3.0: 2. CC BY-SA 2.0: 2. CC BY 4.0: 2. CC0: 2. Public domain: 2.
CC BY-SA requires attribution and that adapted copies stay under the same licence; resizing counts as
adapting, so the files in `public/img/photos/` are CC BY-SA too. Credits and licence links are on `/credits/`.

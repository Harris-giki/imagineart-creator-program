export interface Tile {
  img?: string
  video?: string
  handle: string
  name: string
  url: string
}

export interface Persona {
  num: string
  title: string
  body: string
  bg: string
}

export interface Expectation {
  k: string
  t: string
  d: string
}

export interface Pin {
  x: string
  y: string
  city: string
}

export interface FaqItem {
  q: string
  a: string
  linkText?: string
  linkHref?: string
  tallyId?: string
}

export const tiles: Tile[] = [
  { img: '/community-creations/cc-ghibliglimmers.jpeg', handle: '@ghibliglimmers', name: 'Ghibliglimmers', url: 'https://www.imagine.art/c/ghibliglimmers?asset=aurora-borealis_23599642-3849-45f2-af32-59cddd564490' },
  { img: '/community-creations/cc-nishitbariya.jpeg', handle: '@nishitbariya', name: 'aiartsensie_', url: 'https://www.imagine.art/c/nishitbariya?asset=saturn-infographic_b8cd17df-a690-41ee-8973-ee03631dd5cc' },
  { img: '/community-creations/cc-lucidai_x.jpeg', handle: '@lucidai_x', name: 'Lucidai_x', url: 'https://www.imagine.art/c/lucidai_x?asset=birds-in-blossoms_fe1fd8cd-cd3f-42c2-97e3-aabe8eff959b' },
  { video: '/community-creations/cc-cyborgdigitalart.mp4', handle: '@cyborgdigitalart', name: 'Cyborg digital art', url: 'https://www.imagine.art/c/cyborgdigitalart?asset=warrior-fire_2378d04f-888a-4975-b8d1-61aa737ccd06' },
  { img: '/community-creations/cc-chillvibesart.jpeg', handle: '@chillvibesart', name: 'Chillvibesart', url: 'https://www.imagine.art/c/chillvibesart?tab=my-assets&asset=neon-chameleon_3cb9899b-c859-449b-bd55-1d2da03e9e18' },
  { video: '/community-creations/cc-nishu_ai_art.mp4', handle: '@nishu_ai_art', name: 'Nishu_ai_art', url: 'https://www.imagine.art/community?asset=cozy-evening-escape_019d9115-5d94-77a2-b619-a0b661ec0c5e' },
  { video: '/community-creations/cc-anivaradigitalart.mp4', handle: '@anivaradigitalart', name: 'Anivara digitalart', url: 'https://www.imagine.art/c/anivaradigitalart?asset=starry-night-wait_923b6ea3-5862-4d07-9f9f-2b42ee2819e0' },
  { video: '/community-creations/cc-skytrancegirl.mp4', handle: '@skytrancegirl', name: '5925707452', url: 'https://www.imagine.art/c/skytrancegirl?asset=space-station_019e53f4-cc60-7ae1-9807-7b8e8320c029' },
  { img: '/community-creations/cc-aipromptsmith.jpeg', handle: '@aipromptsmith', name: 'Aipromptsmith', url: 'https://www.imagine.art/c/aipromptsmith?asset=urban-streetwear-style_ed0b6bd2-f692-49d1-89d5-e38351597d8a' },
  { img: '/community-creations/cc-renoirreborn.jpeg', handle: '@vinayakvispute', name: 'RenoirReborn', url: 'https://www.imagine.art/c/vinayakvispute?asset=cat-in-snow_865c1f54-8481-4dc1-a0c6-39ed40d8bd48' },
]

export const personas: Persona[] = [
  {
    num: "01",
    title: "Artists & Hobbyists",
    body: "Artists and enthusiasts exploring AI as a creative medium, turning ideas, sketches, and experiments into finished visuals, and pushing personal work toward a professional standard.",
    bg: "radial-gradient(130% 130% at 20% 15%,#FF85DD 0%,transparent 50%),radial-gradient(120% 120% at 85% 90%,#8A3FFC 0%,transparent 55%),linear-gradient(135deg,#2A1248,#0c0716)"
  },
  {
    num: "02",
    title: "Professional Designers",
    body: "Brand designers, art directors, and visual storytellers using AI in real client work, generating concepts, variations, and assets faster without compromising on quality or control.",
    bg: "radial-gradient(120% 120% at 25% 20%,#67E8F9 0%,transparent 52%),radial-gradient(120% 120% at 85% 85%,#2C7FB8 0%,transparent 55%),linear-gradient(135deg,#06343a,#04161a)"
  },
  {
    num: "03",
    title: "Content Creators",
    body: "Creators making images, video, and social content at volume, using AI to stay consistent, move quickly, and keep their feeds and channels growing.",
    bg: "radial-gradient(120% 130% at 20% 80%,#6EE7A8 0%,transparent 52%),radial-gradient(120% 120% at 80% 15%,#FFC27A 0%,transparent 52%),linear-gradient(135deg,#1d2410,#0a0d06)"
  }
]

export const expectations: Expectation[] = [
  {
    k: "01",
    t: "2 posts a month",
    d: "Share creative or professional work (statics, videos, prompting guides, case studies, or workflow demos) on IG, X, LinkedIn, or Reddit."
  },
  {
    k: "02",
    t: "5 community assets",
    d: "Publish 5 raw assets on ImagineArt Community each month so we can follow your creative process, not just the output."
  },
  {
    k: "03",
    t: "Tag & disclose",
    d: "Tag the official ImagineArt accounts, add your affiliate link in bio, and clearly disclose the partnership. Transparency builds trust."
  },
  {
    k: "04",
    t: "Submit the monthly form",
    d: "Drop your links in the month-end submission form and stay active on Discord so credits refill in an orderly fashion."
  }
]

export const pins: Pin[] = [
  { x: "24%", y: "34%", city: "New York" },
  { x: "31%", y: "74%", city: "São Paulo" },
  { x: "46%", y: "26%", city: "London" },
  { x: "50%", y: "30%", city: "Berlin" },
  { x: "50%", y: "58%", city: "Lagos" },
  { x: "63%", y: "43%", city: "Karachi" },
  { x: "64%", y: "49%", city: "Mumbai" },
  { x: "77%", y: "58%", city: "Jakarta" },
  { x: "86%", y: "34%", city: "Tokyo" },
  { x: "85%", y: "77%", city: "Sydney" }
]

export const faqData: FaqItem[] = [
  {
    q: "Who is the Creative Partner Program for?",
    a: "Professional creatives who make and share work publicly. That includes independent designers and art directors, agency and in-house brand teams, and ambitious students or hobbyists ready to move from experimentation into real execution."
  },
  {
    q: "What do I actually get?",
    a: "Premium access to ImagineArt, 20,000 starter credits, monthly refills up to 200,000 credits, a 15% revenue share, early feature access, co-marketing and event support, a weekly partner call with the ImagineArt team, and access to the affiliate and enterprise referral programs."
  },
  {
    q: "How do the monthly credits and bonuses work?",
    a: "Every active partner gets a 20,000 base refill. You earn performance bonuses across Instagram and TikTok, X, LinkedIn, and Reddit based on real reach, stacking up to a 200,000 monthly cap.",
    linkText: "Learn more →",
    linkHref: "https://imagineart.notion.site/Credits-Rewards-Guide-2f70152cd769808d958bfde1f401fd67"
  },
  {
    q: "What are the minimum requirements to stay active?",
    a: "Publish at least 2 ImagineArt-related posts and 5 community assets per month, tag the official accounts, keep your affiliate link in bio, stay present on Discord, and submit the month-end form. Bonuses are conditional and manually reviewed."
  },
  {
    q: "Can agencies or studios join, and can I refer them?",
    a: "Yes. Agencies, studios, production houses, and in-house teams of 10+ qualify as enterprise. Refer one through the referral form and you earn a bonus when they come on board."
  },
  {
    q: "Are there brand guidelines I should follow?",
    a: "Keep it sharp, precise, and sophisticated. Speak to professionals while staying welcoming to beginners. Highlight control, speed, and the all-in-one platform. Keep visuals minimal and high quality. You are a partner, not an employee. Represent that relationship accurately and disclose clearly. Brand assets are available here:",
    linkText: "Access Brand Assets →",
    linkHref: "https://drive.google.com/drive/folders/1tX_lOzcytN2_JvBnohjs-3VEsoJcVTWJ"
  },
  {
    q: "Can I organize an event with ImagineArt?",
    a: "Yes! We partner with creators to co-host workshops, live sessions, meetups, and brand activations. If you'd like to organize an event with ImagineArt, online or in-person, submit a proposal and the team will be in touch.",
    tallyId: "0Q6GR6",
    linkText: "Submit an Event Proposal →"
  },
  {
    q: "Is there an affiliate program I can join?",
    a: "Yes. As a Creator Partner you get access to ImagineArt's affiliate program on Impact. Earn 15% recurring commissions with a 30-day cookie window and preferred click attribution. Share your unique link with your audience and monetize your reach. For more info, please click this link:",
    linkText: "Join the Affiliate Program →",
    linkHref: "http://app.impact.com/campaign-campaign-info-v2/ImagineArt-Inc.brand"
  }
]

export interface Tile {
  bg: string
  h: string
  handle: string
  tool: string
  prompt: string
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
  {
    bg: "radial-gradient(130% 130% at 20% 15%,#FF85DD 0%,transparent 48%),radial-gradient(120% 120% at 85% 90%,#6929C4 0%,transparent 52%),linear-gradient(135deg,#2A1248,#0c0716)",
    h: "360px",
    handle: "@studionova",
    tool: "ImagineArt 1.5",
    prompt: "Neon-lit oracle, volumetric haze, cinematic rim light, editorial fashion grade."
  },
  {
    bg: "radial-gradient(120% 120% at 80% 20%,#FFC27A 0%,transparent 50%),radial-gradient(130% 120% at 15% 90%,#C0392B 0%,transparent 55%),linear-gradient(135deg,#3a1d12,#120a07)",
    h: "260px",
    handle: "@arielmakes",
    tool: "Seedance 2.0",
    prompt: "Vintage muscle car drifting through desert dust, golden hour, motion blur."
  },
  {
    bg: "radial-gradient(120% 120% at 25% 20%,#67E8F9 0%,transparent 50%),radial-gradient(120% 120% at 85% 85%,#FF7E9D 0%,transparent 52%),linear-gradient(135deg,#06343a,#04161a)",
    h: "420px",
    handle: "@here.creative",
    tool: "VideoCraft",
    prompt: "Poolside still life, chrome and coral, soft caustics, hyper-real product set."
  },
  {
    bg: "radial-gradient(120% 130% at 20% 80%,#6EE7A8 0%,transparent 52%),radial-gradient(120% 120% at 80% 15%,#A56EFF 0%,transparent 50%),linear-gradient(135deg,#0c2a1c,#06140d)",
    h: "300px",
    handle: "@neoforge",
    tool: "ImagineSketch",
    prompt: "Botanical creature concept, mossy macro detail, soft daylight, painterly finish."
  },
  {
    bg: "radial-gradient(130% 120% at 80% 25%,#A8C8FF 0%,transparent 48%),radial-gradient(130% 130% at 15% 90%,#8A3FFC 0%,transparent 52%),linear-gradient(135deg,#0e1430,#070a18)",
    h: "340px",
    handle: "@orpheu",
    tool: "ImagineArt 1.5",
    prompt: "Iridescent chrome portrait, studio gradient, sharp specular highlights."
  },
  {
    bg: "radial-gradient(120% 120% at 25% 20%,#FFD6A5 0%,transparent 50%),radial-gradient(120% 130% at 85% 90%,#FF85DD 0%,transparent 52%),linear-gradient(135deg,#3a2030,#150a12)",
    h: "280px",
    handle: "@verad",
    tool: "Upscale",
    prompt: "Editorial perfume campaign, warm peach backdrop, fresh citrus, crisp text label."
  },
  {
    bg: "radial-gradient(130% 130% at 20% 15%,#B388FF 0%,transparent 50%),radial-gradient(120% 120% at 85% 85%,#5A2EA6 0%,transparent 55%),linear-gradient(135deg,#1e1140,#0a0518)",
    h: "400px",
    handle: "@montag",
    tool: "VideoCraft",
    prompt: "Surreal floating architecture at dusk, violet fog, slow cinematic push-in."
  },
  {
    bg: "radial-gradient(120% 120% at 80% 20%,#7CF0D8 0%,transparent 50%),radial-gradient(120% 120% at 20% 90%,#2C7FB8 0%,transparent 55%),linear-gradient(135deg,#06212e,#03101a)",
    h: "300px",
    handle: "@lumenlab",
    tool: "ImagineArt 1.5",
    prompt: "Glacial abstract sculpture, teal subsurface glow, minimal studio composition."
  },
  {
    bg: "radial-gradient(120% 120% at 22% 18%,#FFB199 0%,transparent 50%),radial-gradient(120% 120% at 85% 88%,#7A3FFC 0%,transparent 54%),linear-gradient(135deg,#2a1330,#0c0612)",
    h: "330px",
    handle: "@kara.vfx",
    tool: "Seedance 2.0",
    prompt: "Mosaic-tiled portrait bathed in amber sun, intricate tessellation, regal pose."
  },
  {
    bg: "radial-gradient(120% 120% at 78% 22%,#9EE6FF 0%,transparent 50%),radial-gradient(120% 120% at 18% 88%,#6929C4 0%,transparent 54%),linear-gradient(135deg,#0b1430,#05091a)",
    h: "260px",
    handle: "@3rdunit",
    tool: "ImagineSketch",
    prompt: "Holographic UI dreamscape, electric blue grid, clean futurist render."
  },
  {
    bg: "radial-gradient(120% 120% at 25% 20%,#FFE08A 0%,transparent 50%),radial-gradient(120% 120% at 85% 85%,#FF6FA5 0%,transparent 54%),linear-gradient(135deg,#33201a,#130a08)",
    h: "380px",
    handle: "@flux.daily",
    tool: "ImagineArt 1.5",
    prompt: "Warm-lit ceramic still life, soft shadows, muted editorial palette."
  },
  {
    bg: "radial-gradient(120% 120% at 80% 20%,#C4A8FF 0%,transparent 50%),radial-gradient(120% 120% at 18% 90%,#4E2B78 0%,transparent 55%),linear-gradient(135deg,#170f30,#080513)",
    h: "300px",
    handle: "@atlas.studio",
    tool: "Lipsync Studio",
    prompt: "Cinematic character close-up, expressive lighting, lifelike skin texture."
  }
]

export const personas: Persona[] = [
  {
    num: "01",
    title: "Independent creative pros",
    body: "Brand designers, art directors, creative directors, and visual storytellers working solo or freelance. Pushing personal work to a professional standard.",
    bg: "radial-gradient(130% 130% at 20% 15%,#FF85DD 0%,transparent 50%),radial-gradient(120% 120% at 85% 90%,#8A3FFC 0%,transparent 55%),linear-gradient(135deg,#2A1248,#0c0716)"
  },
  {
    num: "02",
    title: "Agency & in-house teams",
    body: "Creative teams across design, advertising, film, fashion, gaming, and experiential. Speed, alignment, and quality at scale.",
    bg: "radial-gradient(120% 120% at 25% 20%,#67E8F9 0%,transparent 52%),radial-gradient(120% 120% at 85% 85%,#2C7FB8 0%,transparent 55%),linear-gradient(135deg,#06343a,#04161a)"
  },
  {
    num: "03",
    title: "Ambitious hobbyists & students",
    body: "Emerging creatives building portfolios, exploring professional workflows, and pushing beyond experimentation into real execution.",
    bg: "radial-gradient(120% 130% at 20% 80%,#6EE7A8 0%,transparent 52%),radial-gradient(120% 120% at 80% 15%,#FFC27A 0%,transparent 52%),linear-gradient(135deg,#1d2410,#0a0d06)"
  }
]

export const expectations: Expectation[] = [
  {
    k: "01",
    t: "2 posts a month",
    d: "Share creative or professional work — statics, videos, prompting guides, case studies, or workflow demos — on IG, X, LinkedIn, or Reddit."
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
    q: "Can agencies or studios join — and can I refer them?",
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
    a: "Yes! We partner with creators to co-host workshops, live sessions, meetups, and brand activations. If you'd like to organize an event with ImagineArt — online or in-person — submit a proposal and the team will be in touch.",
    tallyId: "0Q6GR6",
    linkText: "Submit an Event Proposal →"
  },
  {
    q: "Is there an affiliate program I can join?",
    a: "Yes. As a Creator Partner you get access to ImagineArt's affiliate program on Impact — earn 15% recurring commissions with a 30-day cookie window and preferred click attribution. Share your unique link with your audience and monetize your reach. For more info, please click this link:",
    linkText: "Join the Affiliate Program →",
    linkHref: "http://app.impact.com/campaign-campaign-info-v2/ImagineArt-Inc.brand"
  }
]

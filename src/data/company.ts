/**
 * Single source of truth for everything Business Guide Services publishes.
 * Sourced from the 2006-founded company profile. Update contact details here
 * and every button, link and schema block on the site follows.
 */

export const company = {
  name: 'Business Guide Services',
  shortName: 'BGS',
  tagline: 'Typing centre & documents clearing, Dubai',
  established: 2006,
  licenseNo: '579304',
  legalForm: 'Civil Company',
  authority: 'Department of Economy and Tourism (DET)',
  specialStatus: 'Registered Trademark Agent (Ministry of Economy)',
  hq: 'Dubai, United Arab Emirates',
} as const

export const contact = {
  email: 'dubaibgs2026@gmail.com',
  /** The single published line — answered on WhatsApp and by phone. */
  phone: '+971544761111',
  phoneDisplay: '+971 54 476 1111',
  /** One-line summary for inline sentences. Full week is in `officeHours`. */
  hours: 'Monday – Saturday, 8:00 – 18:00 · Sunday by appointment',
} as const

/** The office, written the way a visitor needs it to find the door. */
export const address = {
  lines: [
    'Office 235, Radiance One Business Center',
    'Riggat Al Buteen, Deira',
    'Dubai, United Arab Emirates',
  ],
  landmark: 'Beside Al Reem Tower',
  oneLine:
    'Office 235, Radiance One Business Center, Riggat Al Buteen, Deira, Dubai, United Arab Emirates',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Radiance+One+Business+Center+Riggat+Al+Buteen+Deira+Dubai',
} as const

/** Opening hours, day by day. Friday breaks for prayers and runs later. */
export const officeHours = [
  { days: 'Monday – Thursday', time: '8:00 – 18:00' },
  { days: 'Friday', time: '8:00 – 12:00 · 14:00 – 20:00' },
  { days: 'Saturday', time: '8:00 – 18:00' },
  { days: 'Sunday', time: 'By appointment only' },
] as const

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.phone.replace('+', '')}?text=${encodeURIComponent(message)}`

export const defaultWhatsappMessage =
  `Hello ${company.name}, I would like help with a UAE government transaction.`

/** Government portals and authorities the team files with day to day. */
export const authorities = [
  'GDRFA Dubai',
  'ICP / ICA',
  'MOHRE',
  'Dubai Economy — DET',
  'Dubai Courts',
  'Ministry of Economy',
  'Dubai Municipality',
  'Dubai Civil Defence',
  'Notary Public',
  'Ejari',
  'Emirates ID (ICP)',
  'DHA Medical Screening',
] as const

export type Service = {
  id: string
  index: string
  title: string
  arabic: string
  summary: string
  image: string
  items: Array<string>
}

export const services: Array<Service> = [
  {
    id: 'government',
    index: 'A',
    title: 'Government typing & transaction services',
    arabic: 'خدمات الطباعة والمعاملات الحكومية',
    summary:
      'The full spectrum of administrative filing across every major UAE portal and the Dubai Courts system — submitted, tracked and followed up until the approval is in your hands.',
    image: '/img/service-government.jpg',
    items: [
      'New employment and residence visas, renewals and cancellations (GDRFA & ICP)',
      'Golden Visa applications and long-term residence files',
      'MOHRE labour contracts, work permits and establishment cards',
      'DET trade licence registration, renewal and amendments',
      'Dubai Courts: legal memos, petitions and e-applications typed and filed',
      'Emirates ID, medical screening appointments and status enquiries',
      'Dubai Municipality and Civil Defence permits and approvals',
    ],
  },
  {
    id: 'trademark',
    index: 'B',
    title: 'Licensed trademark agent',
    arabic: 'وكيل علامات تجارية مسجل',
    summary:
      'A registered trademark agent with the Ministry of Economy. We protect the name you trade under before someone else registers it — then keep it protected.',
    image: '/img/service-trademark.jpg',
    items: [
      'Comprehensive trademark searches to confirm your brand is available',
      'End-to-end filing and prosecution with the Ministry of Economy',
      'Publication, opposition handling and certificate issuance',
      'Monitoring for potential infringement of your registered mark',
      'Renewals tracked and filed before the deadline lapses',
      'IP consulting for the wider UAE and GCC markets',
    ],
  },
  {
    id: 'setup',
    index: 'C',
    title: 'Business setup & documents clearing',
    arabic: 'تأسيس الشركات وتخليص المستندات',
    summary:
      'The legal foundation of your company, drafted and cleared correctly — from incorporation paperwork through to the documents you need in daily operation.',
    image: '/img/service-setup.jpg',
    items: [
      'Memorandum of Association and shareholder document drafting',
      'Powers of Attorney, undertakings and declarations',
      'Notary Public appointments arranged and attended',
      'Certified legal translation, Arabic ⇄ English',
      'Ejari registration for commercial tenancy contracts',
      'Document attestation and ongoing compliance paperwork',
    ],
  },
]

/** Concrete transactions people arrive asking for. */
export const transactions = [
  'Employment visa',
  'Visa renewal',
  'Golden Visa',
  'Family sponsorship',
  'Emirates ID',
  'Labour contract',
  'Work permit',
  'Trade licence',
  'Licence renewal',
  'Trademark filing',
  'MOA drafting',
  'Power of Attorney',
  'Ejari',
  'Legal translation',
  'Court memo typing',
  'Municipality permit',
  'Civil Defence approval',
  'Establishment card',
] as const

export const processSteps = [
  {
    step: '01',
    title: 'Tell us the transaction',
    body: 'Contact us on WhatsApp or call the office and one of our specialists takes it from there. Describe what you need in your own words — we will tell you which application it actually is.',
  },
  {
    step: '02',
    title: 'Document check first',
    body: 'We review your papers against the current requirements before anything is submitted. This is where rejections and fines are avoided.',
  },
  {
    step: '03',
    title: 'Typed, filed, tracked',
    body: 'Your application is typed accurately, submitted on the correct portal, and followed up with the authority until a decision is issued.',
  },
  {
    step: '04',
    title: 'Approval in your hands',
    body: 'You receive the approval, licence, permit or certificate. From there we can carry on with whatever the file leads to — the renewal, a related permit, or protecting the brand you trade under.',
  },
] as const

export const whyUs = [
  {
    heading: 'Established legacy',
    body: `Operating since ${company.established}, with deep-rooted knowledge of how Dubai's regulatory landscape has actually changed over two decades.`,
  },
  {
    heading: 'Civil Company professionalism',
    body: 'A partnership of qualified professionals, licensed by DET and dedicated strictly to service-based work.',
  },
  {
    heading: 'One-stop solution',
    body: 'Trade licences, court filings, immigration files and intellectual property handled under one roof, by one team.',
  },
  {
    heading: 'Precision & speed',
    body: 'A "right first time" approach built to eliminate re-submissions, delays and avoidable government fines.',
  },
] as const

export const values = [
  {
    name: 'Transparency',
    body: 'No hidden fees and no unexpected delays. You get a clear timeline for every government process before it starts.',
  },
  {
    name: 'Reliability',
    body: 'A stable partner clients return to year after year, for renewals that need to happen on schedule.',
  },
  {
    name: 'Agility',
    body: 'We adapt quickly to new UAE digital government platforms and legislative updates as they are announced.',
  },
] as const

export const companyDetails = [
  { label: 'Company name', value: company.name },
  { label: 'Licence no.', value: company.licenseNo },
  { label: 'Legal form', value: company.legalForm },
  { label: 'Year established', value: String(company.established) },
  { label: 'Head office', value: address.oneLine },
  { label: 'Landmark', value: address.landmark },
  { label: 'Licensing authority', value: company.authority },
  { label: 'Special status', value: company.specialStatus },
] as const

/** Sister ventures. External links are added once each site is live. */
export type GroupVenture = {
  id: string
  name: string
  sector: string
  blurb: string
  image: string
  url?: string
}

export const groupVentures: Array<GroupVenture> = [
  {
    id: 'auctions',
    name: 'Car Auctions',
    sector: 'Vehicle auctions & trading',
    blurb:
      'Buying and selling vehicles through UAE auction channels, including bidding support, valuation guidance and the transfer paperwork that follows a winning bid.',
    image: '/img/group-auctions.jpg',
  },
  {
    id: 'real-estate',
    name: 'Real Estate Consultancy',
    sector: 'Property advisory',
    blurb:
      'Advisory on buying, selling and leasing UAE property — with the Ejari registrations, tenancy contracts and title paperwork handled in-house.',
    image: '/img/group-realestate.jpg',
  },
]

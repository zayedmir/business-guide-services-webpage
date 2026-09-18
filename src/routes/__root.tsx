import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { address, company, contact } from '@/data/company'

import '../styles.css'

const siteName = 'Business Guide Services — Typing Centre & Documents Clearing, Dubai'
const siteDescription =
  'Dubai typing centre and documents clearing firm since 2006, based in Deira. UAE government transactions, visas, trade licences, trademark registration and business setup — handled right the first time.'

/** JSON-LD so search results show the licence, location and phone numbers. */
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: company.name,
  description: siteDescription,
  foundingDate: String(company.established),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office 235, Radiance One Business Center, Riggat Al Buteen, Deira',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  hasMap: address.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '14:00',
      closes: '20:00',
    },
  ],
  areaServed: 'United Arab Emirates',
  telephone: contact.phone,
  email: contact.email,
  knowsLanguage: ['en', 'ar'],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#0f2440' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_AE' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Archivo:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(localBusiness),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Without JS the reveal animations never run — keep content visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-paper-bright"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

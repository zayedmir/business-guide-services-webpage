import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { address, company, contact, officeHours } from '@/data/company'

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Logo variant="full" className="h-16 w-auto shrink-0" />
              <span className="font-display text-2xl leading-tight text-paper-bright">
                {company.name}
              </span>
            </div>
            <p className="mt-6 max-w-sm text-justify text-[0.95rem] leading-relaxed text-navy-300 hyphens-auto">
              A Dubai typing centre and documents clearing firm since {company.established}.
              Licensed by the {company.authority} and a registered trademark agent.
            </p>
            <p
              className="mt-5 text-justify font-arabic text-[0.95rem] leading-relaxed text-navy-300"
              dir="rtl"
              lang="ar"
            >
              خدمات تخليص المستندات والمعاملات الحكومية في دبي
            </p>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brass-soft">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a href="/#services" className="transition-colors hover:text-paper-bright">
                  Services
                </a>
              </li>
              <li>
                <a href="/#process" className="transition-colors hover:text-paper-bright">
                  How it works
                </a>
              </li>
              <li>
                <a href="/#firm" className="transition-colors hover:text-paper-bright">
                  The firm
                </a>
              </li>
              <li>
                <Link to="/group" className="transition-colors hover:text-paper-bright">
                  Group ventures
                </Link>
              </li>
              <li>
                <a href="/#contact" className="transition-colors hover:text-paper-bright">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brass-soft">
              Contact us
            </h3>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper-bright"
                >
                  <Phone className="h-4 w-4 text-brass-soft" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-paper-bright"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brass-soft" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 transition-colors hover:text-paper-bright"
                >
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-brass-soft" />
                  <span className="not-italic">
                    {address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="mt-1 block text-[0.85rem] text-navy-300/80">
                      {address.landmark}
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <h3 className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brass-soft">
              Office hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-[0.85rem] text-navy-300">
              {officeHours.map((slot) => (
                <div key={slot.days} className="flex flex-wrap justify-between gap-x-4">
                  <dt>{slot.days}</dt>
                  <dd className="text-paper-bright/85">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper-bright/12 pt-7 text-[0.78rem] text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {company.established}–{new Date().getFullYear()} {company.name} · Licence no.{' '}
            {company.licenseNo} · {company.legalForm}
          </p>
          <Link
            to="/group"
            className="inline-flex items-center gap-1.5 text-brass-soft transition-colors hover:text-paper-bright"
          >
            Explore our other ventures
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

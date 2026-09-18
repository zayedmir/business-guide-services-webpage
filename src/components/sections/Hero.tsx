import { MessageCircle, Phone, ArrowDown } from 'lucide-react'
import { company, contact, defaultWhatsappMessage, whatsappLink } from '@/data/company'
import { cdn } from '@/lib/img'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-32 pb-0 sm:pt-40">
      {/* Faint navy wash bleeding from the right edge behind the image column */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[42rem] w-[42rem] rounded-full bg-navy-100/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[84rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-10">
        <div className="pb-14 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 bg-brass" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-ink-soft">
              Licensed by DET · Est. {company.established}
            </span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.9rem,6.4vw,5.1rem)] leading-[0.95] tracking-[-0.02em] text-navy-900">
            UAE government
            <br />
            paperwork, done
            <br />
            <span className="relative inline-block">
              right the first time.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[6px] w-full bg-brass/35"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-justify text-[1.06rem] leading-relaxed text-ink-soft hyphens-auto">
            Business Guide Services has been typing, clearing and following up UAE government
            transactions from Dubai since {company.established} — visas, trade licences, labour
            contracts, court filings and trademarks. You explain the problem in your own words.
            We tell you exactly which application it is, what is missing, and how long it takes.
          </p>

          <p
            className="mt-5 max-w-xl text-justify font-arabic text-[1.02rem] leading-relaxed text-navy-800"
            dir="rtl"
            lang="ar"
          >
            نتولى إجراءاتكم الحكومية في دبي منذ عام ٢٠٠٦ — بدقة وشفافية ودون تأخير.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-all duration-300 hover:bg-ink hover:shadow-[0_14px_34px_-14px_rgba(7,19,36,0.6)]"
            >
              <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
              WhatsApp us
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2.5 border border-navy-900/30 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900/5"
            >
              <Phone className="h-4.5 w-4.5" strokeWidth={2} />
              {contact.phoneDisplay}
            </a>
          </div>

          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-ink-soft/80 transition-colors hover:text-navy-900"
          >
            <ArrowDown className="h-4 w-4" />
            See what we handle
          </a>
        </div>

        <div className="relative lg:pb-16">
          <figure className="relative">
            <img
              src={cdn('/img/hero-dubai.jpg', { w: 1280, h: 1180, q: 74 })}
              srcSet={`${cdn('/img/hero-dubai.jpg', { w: 760, h: 700, q: 70 })} 760w, ${cdn('/img/hero-dubai.jpg', { w: 1280, h: 1180, q: 74 })} 1280w`}
              sizes="(max-width: 1024px) 100vw, 44vw"
              alt="Dubai business district towers at blue hour"
              width={1280}
              height={1180}
              className="h-[24rem] w-full object-cover object-center sm:h-[32rem] lg:h-[38rem]"
              loading="eager"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

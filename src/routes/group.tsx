import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import {
  company,
  contact,
  groupVentures,
  whatsappLink,
} from '@/data/company'
import { cdn } from '@/lib/img'

export const Route = createFileRoute('/group')({
  component: GroupPage,
  head: () => ({
    meta: [
      { title: `Group ventures — ${company.name}` },
      {
        name: 'description',
        content:
          'Beyond document clearing: the Business Guide Services group also operates vehicle auctions and a real estate consultancy, serving clients across the UAE.',
      },
    ],
  }),
})

function GroupPage() {
  return (
    <>
      <section className="bg-navy-950 pt-36 pb-20 text-paper-bright sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-navy-300 transition-colors hover:text-paper-bright"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Business Guide Services
          </Link>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-brass" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-brass-soft">
              Related ventures
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[0.98] tracking-[-0.02em]">
            The wider group
          </h1>
          <p className="mt-7 max-w-2xl text-justify text-[1.05rem] leading-relaxed text-navy-300 hyphens-auto">
            Document clearing is the core of what we do — and it is where most clients start. Over
            the years the same relationships opened two adjacent businesses, both run with the same
            people and the same paperwork discipline.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <ul className="space-y-20 sm:space-y-24">
            {groupVentures.map((venture, i) => (
              <Reveal as="li" key={venture.id}>
                <article
                  className={`grid gap-9 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                  }`}
                >
                  <figure className="relative">
                    <img
                      src={cdn(venture.image, { w: 1000, h: 700, q: 72 })}
                      alt=""
                      width={1000}
                      height={700}
                      loading="lazy"
                      className="h-[18rem] w-full object-cover sm:h-[24rem]"
                    />
                    <figcaption className="absolute -bottom-4 left-5 bg-brass px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy-950">
                      {venture.sector}
                    </figcaption>
                  </figure>

                  <div>
                    <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-tight text-navy-900">
                      {venture.name}
                    </h2>
                    <p className="mt-5 text-justify text-[1rem] leading-relaxed text-ink-soft hyphens-auto">
                      {venture.blurb}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {venture.url ? (
                        <a
                          href={venture.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-colors hover:bg-ink"
                        >
                          Visit {venture.name}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      ) : (
                        <a
                          href={whatsappLink(
                            `Hello ${company.name}, I would like details about ${venture.name}.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-colors hover:bg-ink"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Enquire on WhatsApp
                        </a>
                      )}
                      <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-2.5 border border-navy-900/30 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900/5"
                      >
                        <Phone className="h-4 w-4" />
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-24 border border-navy-900/15 bg-paper-bright p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="font-display text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight text-navy-900">
                    Government services & documents clearing
                  </h2>
                  <p className="mt-4 max-w-2xl text-justify text-[0.98rem] leading-relaxed text-ink-soft hyphens-auto">
                    Visas, trade licences, labour contracts, court filings and trademark
                    registration — that work runs from the {company.name} office in {company.hq}.
                  </p>
                </div>
                <Link
                  to="/"
                  hash="services"
                  className="group inline-flex shrink-0 items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-colors hover:bg-ink"
                >
                  See our services
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import { Check, MessageCircle } from 'lucide-react'
import { Reveal } from '../Reveal'
import { services, transactions, whatsappLink } from '@/data/company'
import { cdn } from '@/lib/img'

export function Services() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="rule-brass" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-navy-900">
              Three desks,
              <br />
              one office
            </h2>
            <p className="max-w-2xl text-justify text-[1.02rem] leading-relaxed text-ink-soft hyphens-auto lg:pb-3">
              What began as a specialised typing centre in 2006 now operates as a business bridge
              and a registered trademark agent. Everything below is handled in-house — you never
              get sent to a second office to finish the job.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-24 sm:space-y-28">
          {services.map((service, i) => (
            <Reveal key={service.id} as="article">
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                }`}
              >
                <figure className="relative">
                  <img
                    src={cdn(service.image, { w: 900, h: 700, q: 72 })}
                    alt=""
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-[17rem] w-full object-cover sm:h-[23rem]"
                  />
                  <figcaption className="absolute -bottom-5 left-5 bg-navy-900 px-4 py-2.5 font-display text-[1.6rem] leading-none text-paper-bright">
                    {service.index}
                  </figcaption>
                </figure>

                <div className="lg:pt-2">
                  <h3 className="font-display text-[clamp(1.75rem,2.7vw,2.4rem)] leading-tight text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-arabic text-[0.98rem] text-navy-700/85" dir="rtl" lang="ar">
                    {service.arabic}
                  </p>
                  <p className="mt-5 text-justify text-[1rem] leading-relaxed text-ink-soft hyphens-auto">
                    {service.summary}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-brass"
                          strokeWidth={2.4}
                          aria-hidden="true"
                        />
                        <span className="text-ink-soft">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello Business Guide Services, I need help with: ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-b-2 border-navy-900/25 pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:border-brass"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask about{' '}
                    {service.index === 'B'
                      ? 'trademarks'
                      : service.index === 'C'
                        ? 'business setup'
                        : 'government services'}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Index of what people actually walk in asking for */}
        <Reveal>
          <div className="mt-28 border border-navy-900/15 bg-paper-bright p-7 sm:p-10">
            <h3 className="font-display text-[1.7rem] text-navy-900">
              Came here for one specific thing?
            </h3>
            <p className="mt-2 max-w-2xl text-justify text-[0.95rem] leading-relaxed text-ink-soft hyphens-auto">
              These are the transactions we are asked for most often. If yours is not listed,
              it almost certainly still falls inside one of the three desks above.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {transactions.map((item) => (
                <li
                  key={item}
                  className="border border-navy-900/18 px-3.5 py-2 text-[0.84rem] font-medium text-navy-800 transition-colors hover:border-brass hover:bg-brass/8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

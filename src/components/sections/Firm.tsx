import { FileDown } from 'lucide-react'
import { Reveal } from '../Reveal'
import { company, companyDetails, values } from '@/data/company'

export function Firm() {
  return (
    <section id="firm" className="border-y border-navy-900/12 bg-paper-bright py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="rule-brass" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-navy-900">
              The firm
            </h2>
            <p className="max-w-2xl text-justify text-[1.02rem] leading-relaxed text-ink-soft hyphens-auto lg:pb-3">
              A Civil Company licensed by the {company.authority}, operating from{' '}
              {company.hq} since {company.established}. We provide high-level administrative
              expertise to the UAE private sector, and we are a registered trademark agent with the
              Ministry of Economy.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="space-y-12">
            <Reveal>
              <div>
                <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brass">
                  Vision
                </h3>
                <p className="mt-4 text-justify font-display text-[clamp(1.35rem,2.1vw,1.75rem)] leading-[1.35] text-navy-900">
                  To be the benchmark for administrative excellence in the UAE — the most reliable
                  bridge between the private sector and government entities, so entrepreneurs can
                  focus entirely on growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brass">
                  Mission
                </h3>
                <p className="mt-4 text-justify text-[1rem] leading-relaxed text-ink-soft hyphens-auto">
                  To simplify UAE government procedures through expert document clearing and
                  strategic business support: removing bureaucratic hurdles, ensuring legal
                  compliance, safeguarding brand identities through trademark registration, and
                  delivering every transaction with transparency and precision.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brass">
                  Values
                </h3>
                <dl className="mt-5 grid gap-px bg-navy-900/12 sm:grid-cols-3">
                  {values.map((value) => (
                    <div key={value.name} className="bg-paper-bright p-5">
                      <dt className="font-display text-[1.3rem] text-navy-900">{value.name}</dt>
                      <dd className="mt-2 text-justify text-[0.88rem] leading-relaxed text-ink-soft hyphens-auto">
                        {value.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="bg-navy-950 p-7 text-paper-bright sm:p-9">
              <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brass-soft">
                Company information
              </h3>
              <dl className="mt-6 divide-y divide-paper-bright/15">
                {companyDetails.map((row) => (
                  <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-5">
                    <dt className="text-[0.8rem] uppercase tracking-[0.1em] text-navy-300">
                      {row.label}
                    </dt>
                    <dd className="text-[0.98rem] font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="/business-guide-services-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 border border-paper-bright/30 px-5 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-colors hover:border-brass-soft hover:text-brass-soft"
              >
                <FileDown className="h-4 w-4" />
                Download company profile
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

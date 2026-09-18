import { Reveal } from '../Reveal'
import { whyUs } from '@/data/company'
import { cdn } from '@/lib/img'

export function WhyUs() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="rule-brass" />
              <h2 className="mt-8 font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-navy-900">
                Why clients stay
                <br />
                for years
              </h2>
            </Reveal>

            <dl className="mt-12 divide-y divide-navy-900/12 border-t border-navy-900/12">
              {whyUs.map((item, i) => (
                <Reveal key={item.heading} delay={i * 70}>
                  <div className="group grid gap-2 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                    <span className="font-display text-[1.5rem] leading-none text-brass">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <dt className="font-display text-[1.45rem] leading-snug text-navy-900">
                        {item.heading}
                      </dt>
                      <dd className="mt-2 max-w-xl text-justify text-[0.97rem] leading-relaxed text-ink-soft hyphens-auto">
                        {item.body}
                      </dd>
                    </div>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <figure>
              <img
                src={cdn('/img/office-team.jpg', { w: 900, h: 1080, q: 72 })}
                alt="The Business Guide Services office in Dubai"
                width={900}
                height={1080}
                loading="lazy"
                className="h-[26rem] w-full object-cover sm:h-[34rem]"
              />
              <figcaption className="mt-4 flex items-start gap-3 text-[0.85rem] leading-relaxed text-ink-soft/85">
                <span aria-hidden="true" className="mt-2 h-[2px] w-8 shrink-0 bg-brass" />
                Two decades of files, renewals and court submissions — run out of one Dubai office,
                by the same team you speak to on the phone.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '../Reveal'
import { groupVentures } from '@/data/company'
import { cdn } from '@/lib/img'

export function GroupTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-navy-900/12 bg-paper-deep/45 py-20 sm:py-24">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brass">
                Beyond the typing centre
              </span>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.06] tracking-[-0.015em] text-navy-900">
                The same team, two
                <br />
                other ventures
              </h2>
              <p className="mt-5 max-w-lg text-justify text-[1rem] leading-relaxed text-ink-soft hyphens-auto">
                Clients who come to us for a trade licence often need a vehicle or a property next.
                Those sit with our sister operations — vehicle auctions and real estate consultancy —
                with the paperwork still handled here.
              </p>
              <Link
                to="/group"
                className="group mt-8 inline-flex items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-all duration-300 hover:bg-ink"
              >
                View our other ventures
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {groupVentures.map((venture) => (
                <li key={venture.id}>
                  <Link to="/group" className="group block">
                    <figure className="relative overflow-hidden">
                      <img
                        src={cdn(venture.image, { w: 700, h: 520, q: 70 })}
                        alt=""
                        width={700}
                        height={520}
                        loading="lazy"
                        className="h-52 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/15 to-transparent"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 p-4">
                        <span className="block font-display text-[1.4rem] leading-tight text-paper-bright">
                          {venture.name}
                        </span>
                        <span className="mt-0.5 block text-[0.72rem] uppercase tracking-[0.16em] text-navy-300">
                          {venture.sector}
                        </span>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

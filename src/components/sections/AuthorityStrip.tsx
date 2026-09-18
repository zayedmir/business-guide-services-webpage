import { authorities } from '@/data/company'

export function AuthorityStrip() {
  const doubled = [...authorities, ...authorities]

  return (
    <section
      aria-label="Government authorities and portals we file with"
      className="border-y border-navy-900/12 bg-paper-deep/50 py-6"
    >
      <p className="mx-auto mb-5 max-w-[84rem] px-5 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-ink-soft/70 sm:px-8">
        Filed daily with
      </p>
      <div className="marquee relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent"
        />
        <ul className="marquee-track flex w-max items-center gap-10 pr-10">
          {doubled.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 font-display text-[1.45rem] whitespace-nowrap text-navy-800/85"
            >
              {name}
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-brass/70" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

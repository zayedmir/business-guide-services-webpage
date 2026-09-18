import { Reveal } from '../Reveal'
import { processSteps } from '@/data/company'

export function Process() {
  return (
    <section id="process" className="relative bg-navy-950 py-24 text-paper-bright sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em]">
              How a transaction
              <br />
              actually moves
            </h2>
            <p className="max-w-2xl text-justify text-[1.02rem] leading-relaxed text-navy-300 hyphens-auto lg:pb-3">
              Most delays and fines do not come from the government — they come from a file being
              submitted before it was ready. This is the sequence we follow on every job.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-px border border-paper-bright/15 bg-paper-bright/15 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 90}>
              <div className="h-full bg-navy-950 p-7 transition-colors duration-500 hover:bg-navy-900">
                <span className="font-display text-[2.6rem] leading-none text-brass-soft">
                  {item.step}
                </span>
                <h3 className="mt-5 text-[1.05rem] font-semibold tracking-tight text-paper-bright">
                  {item.title}
                </h3>
                <p className="mt-3 text-justify text-[0.92rem] leading-relaxed text-navy-300 hyphens-auto">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { company, defaultWhatsappMessage, whatsappLink } from '@/data/company'

const sections = [
  { label: 'Services', href: '/#services' },
  { label: 'How it works', href: '/#process' },
  { label: 'The firm', href: '/#firm' },
  { label: 'Group', href: '/group' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/92 backdrop-blur-md border-b border-navy-900/12 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[84rem] items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label={company.name}>
          <Logo className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5" />
          <span className="leading-none">
            <span className="block font-display text-[1.32rem] tracking-tight text-navy-900">
              Business Guide Services
            </span>
            <span className="mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-ink-soft/70">
              Est. {company.established} · Dubai
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.82rem] font-medium uppercase tracking-[0.13em] text-ink-soft transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy-900 px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-paper-bright transition-colors hover:bg-ink"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Contact us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center gap-2 border border-navy-900/25 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>
      </div>

      {open ? (
        <div className="mt-3 border-t border-navy-900/12 bg-paper-bright px-5 py-4 lg:hidden">
          <nav className="flex flex-col">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy-900/8 py-3 font-display text-xl text-navy-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-navy-900 px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.13em] text-paper-bright"
            >
              <MessageCircle className="h-4 w-4" />
              Contact us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

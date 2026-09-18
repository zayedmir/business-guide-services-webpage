import { useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import { AlertCircle, Check, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { Reveal } from '../Reveal'
import {
  address,
  company,
  contact,
  defaultWhatsappMessage,
  officeHours,
  services,
  whatsappLink,
} from '@/data/company'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const initialFields = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export function Contact() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  /**
   * The same answers, handed to WhatsApp instead of the inbox — the enquiry
   * still arrives even if someone would rather not wait on email.
   */
  const whatsappWithDetails = whatsappLink(
    [
      `Hello ${company.name}, I would like help with a UAE government transaction.`,
      fields.name && `Name: ${fields.name}`,
      fields.phone && `Phone: ${fields.phone}`,
      fields.email && `Email: ${fields.email}`,
      fields.service && `Service: ${fields.service}`,
      fields.message && `Details: ${fields.message}`,
    ]
      .filter(Boolean)
      .join('\n'),
  )

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      // Posts to the static skeleton so Netlify's form handler processes it
      // instead of the SSR catch-all.
      const params = new URLSearchParams()
      new FormData(form).forEach((value, key) => {
        if (typeof value === 'string') params.append(key, value)
      })
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
      setFields(initialFields)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="rule-brass" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-navy-900">
              Tell us what
              <br />
              you need
            </h2>
            <p className="max-w-2xl text-justify text-[1.02rem] leading-relaxed text-ink-soft hyphens-auto lg:pb-3">
              Message us on WhatsApp, call the office, or send the details below and we will come
              back with the requirements, the cost and a realistic timeline.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-navy-900/12 lg:grid-cols-[1fr_0.72fr]">
          {/* Form */}
          <Reveal className="bg-paper-bright">
            <div className="p-7 sm:p-10">
              {status === 'sent' ? (
                <div className="flex min-h-[26rem] flex-col items-start justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-paper-bright">
                    <Check className="h-6 w-6" strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-6 font-display text-[2rem] leading-tight text-navy-900">
                    Your enquiry is with us.
                  </h3>
                  <p className="mt-3 max-w-md text-justify text-[0.97rem] leading-relaxed text-ink-soft hyphens-auto">
                    It has gone to {contact.email}, and we reply during office hours —{' '}
                    {contact.hours}. If the matter is urgent, send the same message to us on
                    WhatsApp and it gets picked up faster.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={whatsappLink(defaultWhatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-navy-900 px-5 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-colors hover:bg-ink"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp now
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 border border-navy-900/30 px-5 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:border-navy-900"
                    >
                      Send another
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="enquiry"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="enquiry" />
                  <input type="hidden" name="subject" value="New website enquiry" />
                  <p className="hidden">
                    <label>
                      Do not fill this in
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={fields.name}
                        onChange={handleChange}
                        autoComplete="name"
                        className={inputClass}
                        placeholder="e.g. Rashid Al Amiri"
                      />
                    </Field>
                    <Field label="Phone / WhatsApp" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={fields.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className={inputClass}
                        placeholder="+971 5X XXX XXXX"
                      />
                    </Field>
                  </div>

                  <Field label="Email address" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@company.ae"
                    />
                  </Field>

                  <Field label="What do you need?" htmlFor="service">
                    <select
                      id="service"
                      name="service"
                      required
                      value={fields.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none bg-[length:0.7rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2317355b' stroke-width='1.6' fill='none'/%3E%3C/svg%3E\")",
                      }}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Something else">Something else / not sure</option>
                    </select>
                  </Field>

                  <Field label="Details" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-y`}
                      placeholder="Describe the transaction in your own words — visa type, licence activity, court matter, brand name to register, and any deadline you are working to."
                    />
                  </Field>

                  {status === 'error' ? (
                    <p className="flex items-start gap-2.5 border-l-2 border-brass bg-brass/8 px-4 py-3 text-[0.88rem] text-ink-soft">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                      <span>
                        That did not go through. Please try again, or reach us directly on{' '}
                        <a className="font-semibold text-navy-900 underline" href={`tel:${contact.phone}`}>
                          {contact.phoneDisplay}
                        </a>
                        .
                      </span>
                    </p>
                  ) : null}

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-paper-bright transition-all duration-300 hover:bg-ink hover:shadow-[0_14px_34px_-14px_rgba(7,19,36,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper-bright/40 border-t-paper-bright" />
                          Sending
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send enquiry
                        </>
                      )}
                    </button>
                    <a
                      href={whatsappWithDetails}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 border border-navy-900/30 px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900/5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send on WhatsApp
                    </a>
                  </div>

                  <p className="text-justify text-[0.78rem] leading-relaxed text-ink-soft/70">
                    Your details are used only to answer this enquiry. Enquiries reach us at{' '}
                    {contact.email}, and WhatsApp is usually answered faster.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Direct channels */}
          <Reveal delay={90} className="bg-navy-950 text-paper-bright">
            <div className="flex h-full flex-col p-7 sm:p-10">
              <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brass-soft">
                Or reach us directly
              </h3>
              <p className="mt-4 text-justify text-[0.95rem] leading-relaxed text-navy-300 hyphens-auto">
                The fastest route is WhatsApp — send a photo of the document you are holding and we
                will tell you what it needs.
              </p>

              <div className="mt-8 space-y-px bg-paper-bright/15">
                <DirectChannel
                  href={whatsappLink(defaultWhatsappMessage)}
                  external
                  icon={<MessageCircle className="h-5 w-5" />}
                  label="WhatsApp us"
                  value={contact.phoneDisplay}
                />
                <DirectChannel
                  href={`tel:${contact.phone}`}
                  icon={<Phone className="h-5 w-5" />}
                  label="Call us"
                  value={contact.phoneDisplay}
                />
                <DirectChannel
                  href={`mailto:${contact.email}?subject=${encodeURIComponent('UAE government transaction enquiry')}`}
                  icon={<Mail className="h-5 w-5" />}
                  label="Email us"
                  value={contact.email}
                />
                <DirectChannel
                  href={address.mapsUrl}
                  external
                  icon={<MapPin className="h-5 w-5" />}
                  label="Visit the office"
                  value={address.landmark}
                />
              </div>

              <div className="mt-auto pt-10">
                <h4 className="text-[0.7rem] uppercase tracking-[0.16em] text-navy-300">
                  Head office
                </h4>
                <address className="mt-2 text-[0.95rem] font-medium not-italic leading-relaxed">
                  {address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block font-normal text-navy-300">{address.landmark}</span>
                </address>

                <h4 className="mt-7 text-[0.7rem] uppercase tracking-[0.16em] text-navy-300">
                  Office hours
                </h4>
                <dl className="mt-3 space-y-1.5 text-[0.9rem]">
                  {officeHours.map((slot) => (
                    <div key={slot.days} className="flex flex-wrap justify-between gap-x-4">
                      <dt className="text-navy-300">{slot.days}</dt>
                      <dd className="font-medium">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-8 text-justify font-arabic text-[0.95rem] leading-relaxed text-navy-300" dir="rtl" lang="ar">
                تواصلوا معنا عبر الواتساب أو الهاتف — نخدمكم بالعربية والإنجليزية.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full border border-navy-900/22 bg-paper px-4 py-3.5 text-[0.97rem] text-ink placeholder:text-ink-soft/45 transition-colors focus:border-navy-800 focus:bg-paper-bright focus:outline-none'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-soft"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function DirectChannel({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string
  icon: ReactNode
  label: string
  value: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 bg-navy-950 px-5 py-4 transition-colors duration-300 hover:bg-navy-900"
    >
      <span className="text-brass-soft transition-transform duration-300 group-hover:-translate-y-0.5">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-navy-300">
          {label}
        </span>
        <span className="block truncate text-[0.98rem] font-medium">{value}</span>
      </span>
    </a>
  )
}

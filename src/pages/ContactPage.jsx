import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { siteConfig } from '../config/siteConfig';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Reveal, PageTransition } from '../components/common/Reveal';
import { EnquiryForm } from '../components/sections/EnquiryForm';

const nextSteps = [
  'We review your business context and goals',
  'We schedule a focused requirement discussion',
  'You receive a clear, tailored solution plan',
];

export function ContactPage() {
  usePageMeta({
    title: 'Contact Us | Discuss Your Software or ERP Project — REGULUS',
    description:
      'Contact REGULUS to discuss customized ERP software, custom applications, process automation or website development.',
    path: '/contact',
  });

  return (
    <PageTransition>
      <section className="relative overflow-hidden border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 theme-transition">
        <div
          className="architectural-grid pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="max-w-2xl">
            <Badge variant="accent">Contact Us</Badge>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-regulus-text sm:text-4xl lg:text-5xl">
              Have a Project in Mind?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-regulus-muted sm:text-lg">
              Tell us a little about your business and what you want to build.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-regulus-subtle py-16 sm:py-20 theme-transition">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <div className="rounded-2xl border border-regulus-border bg-regulus-elevated p-6 sm:p-7 shadow-card theme-transition">
                  <h2 className="text-lg font-semibold text-regulus-text">
                    Contact Information
                  </h2>
                  <p className="mt-1.5 text-sm text-regulus-muted">
                    Editable placeholders configured in siteConfig.js.
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-regulus-border bg-regulus-card text-regulus-accent-text">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-regulus-faint">
                          Email
                        </p>
                        {siteConfig.contact.email ? (
                          <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="mt-0.5 block font-medium text-regulus-text hover:underline"
                          >
                            {siteConfig.contact.email}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-regulus-muted">
                            {siteConfig.contact.emailPlaceholder}
                          </p>
                        )}
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-regulus-border bg-regulus-card text-regulus-accent-text">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-regulus-faint">
                          Phone
                        </p>
                        {siteConfig.contact.phone ? (
                          <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="mt-0.5 block font-medium text-regulus-text hover:underline"
                          >
                            {siteConfig.contact.phone}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-regulus-muted">
                            {siteConfig.contact.phonePlaceholder}
                          </p>
                        )}
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-regulus-border bg-regulus-card text-regulus-accent-text">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-regulus-faint">
                          Location
                        </p>
                        <p className="mt-0.5 text-regulus-muted">
                          {siteConfig.contact.address ||
                            siteConfig.contact.addressPlaceholder}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-regulus-border bg-regulus-card text-regulus-accent-text">
                        <Clock className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-regulus-faint">
                          Business Hours
                        </p>
                        <p className="mt-0.5 text-regulus-muted">
                          {siteConfig.contact.hoursPlaceholder}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-regulus-border bg-regulus-card p-6 sm:p-7 theme-transition">
                  <h3 className="text-base font-semibold text-regulus-text">
                    What Happens Next
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {nextSteps.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-2.5 text-sm text-regulus-muted"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-regulus-accent-text" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <EnquiryForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

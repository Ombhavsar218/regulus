import { ArrowRight, Check } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { detailedServices } from '../data/servicesData';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Reveal, PageTransition } from '../components/common/Reveal';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { SolutionPreviewCard } from '../components/mockups/SolutionPreviewCard';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';

export function ServicesPage() {
  usePageMeta({
    title: 'Services | Customized ERP, Custom Software & Website Development — REGULUS',
    description:
      'Explore REGULUS services: Customized ERP Development, Custom Software Development, Website Development and Business Process Automation.',
    path: '/services',
  });

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 theme-transition">
        <div
          className="architectural-grid pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="max-w-2xl">
            <Badge variant="accent">Our Services</Badge>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-regulus-text sm:text-4xl lg:text-5xl">
              Technology Built for Real Operations
            </h1>
            <p className="mt-4 text-base leading-relaxed text-regulus-muted sm:text-lg">
              From customized ERP software to business applications, automation and
              websites—every solution fits your actual workflow.
            </p>

            <nav aria-label="Service sections" className="mt-7 flex flex-wrap gap-2">
              {detailedServices.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-regulus-border bg-regulus-card px-3.5 py-2 text-xs font-medium text-regulus-muted hover:border-regulus-border-strong hover:bg-regulus-elevated hover:text-regulus-text theme-transition"
                >
                  <DynamicIcon
                    name={service.icon}
                    className="h-3.5 w-3.5 text-regulus-accent-text"
                  />
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      {/* 4 Focused Services */}
      <div className="divide-y divide-regulus-border border-b border-regulus-border">
        {detailedServices.map((service, index) => {
          const isAlt = index % 2 === 0;
          const cardBg = isAlt ? 'bg-regulus-elevated' : 'bg-regulus-card';
          const innerBg = isAlt ? 'bg-regulus-subtle' : 'bg-regulus-elevated';
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-20 theme-transition ${
                isAlt ? 'bg-regulus-subtle' : 'bg-regulus-bg'
              }`}
            >
              <Container>
                <Reveal>
                  <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                    {/* Left: Intro + CTA */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-regulus-border ${cardBg} text-regulus-accent-text theme-transition`}>
                          <DynamicIcon name={service.icon} className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-regulus-accent-text">
                          {service.eyebrow}
                        </span>
                      </div>
                      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-regulus-text sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-regulus-muted">
                        {service.intro}
                      </p>

                      <div className={`mt-6 rounded-2xl border border-regulus-border ${cardBg} p-4 shadow-card theme-transition`}>
                        <SolutionPreviewCard
                          type={service.previewType}
                          tone={isAlt ? 'subtle' : 'elevated'}
                        />
                      </div>

                      <div className="mt-6">
                        <Button
                          to={`/contact?service=${encodeURIComponent(service.contactValue)}`}
                          variant="primary"
                          size="md"
                        >
                          Discuss This Service
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Right: Features & Benefits */}
                    <div className="space-y-6 lg:col-span-7">
                      <div className={`rounded-2xl border border-regulus-border ${cardBg} p-6 sm:p-7 shadow-card theme-transition`}>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-regulus-text">
                          Main Features
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {service.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-start gap-3 text-sm text-regulus-text/90"
                            >
                              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-regulus-accent-soft text-regulus-accent-text">
                                <Check className="h-3.5 w-3.5" />
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`rounded-2xl border border-regulus-border ${cardBg} p-6 sm:p-7 shadow-card theme-transition`}>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-regulus-text">
                          Business Benefits
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                          {service.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className={`flex items-start gap-2.5 rounded-lg border border-regulus-border ${innerBg} px-4 py-3 text-sm text-regulus-muted theme-transition`}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-regulus-accent" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <ContactCtaSection />
    </PageTransition>
  );
}

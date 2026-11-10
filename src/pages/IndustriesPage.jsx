import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { industriesDetailed } from '../data/industriesData';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Reveal, PageTransition } from '../components/common/Reveal';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';

export function IndustriesPage() {
  usePageMeta({
    title: 'Industries | Custom ERP & Software Across Sectors — REGULUS',
    description:
      'See how REGULUS tailors ERP software, business applications and automation for Manufacturing, Retail, Healthcare, Logistics, Distribution and Other Industries.',
    path: '/industries',
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
            <Badge variant="accent">Industries</Badge>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-regulus-text sm:text-4xl lg:text-5xl">
              Solutions Across Industries.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-regulus-muted sm:text-lg">
              Every industry manages unique workflows. We build customized software around
              your sector&apos;s everyday operations.
            </p>

            <nav aria-label="Industry sections" className="mt-7 flex flex-wrap gap-2">
              {industriesDetailed.map((ind) => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-regulus-border bg-regulus-card px-3.5 py-2 text-xs font-medium text-regulus-muted hover:border-regulus-border-strong hover:bg-regulus-elevated hover:text-regulus-text theme-transition"
                >
                  <DynamicIcon
                    name={ind.icon}
                    className="h-3.5 w-3.5 text-regulus-accent-text"
                  />
                  {ind.title}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      {/* Industry Grid Cards */}
      <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 theme-transition">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {industriesDetailed.map((industry, index) => (
              <Reveal key={industry.id} delay={index * 0.04}>
                <article
                  id={industry.id}
                  className="flex h-full flex-col justify-between rounded-2xl border border-regulus-border bg-regulus-elevated p-6 sm:p-8 shadow-card theme-transition"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-regulus-border bg-regulus-card text-regulus-accent-text theme-transition">
                          <DynamicIcon name={industry.icon} className="h-5 w-5" />
                        </span>
                        <h2 className="text-xl font-semibold text-regulus-text sm:text-2xl">
                          {industry.title}
                        </h2>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-regulus-faint">
                        Common Operational Challenges
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {industry.challenges.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-regulus-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-regulus-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 rounded-xl border border-regulus-border bg-regulus-subtle p-4 theme-transition">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-regulus-text">
                        How Regulus Can Help
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-regulus-muted">
                        {industry.howWeHelp}
                      </p>
                      <p className="mt-3 text-xs font-medium text-regulus-accent-text">
                        Relevant Solution: {industry.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-regulus-border pt-4">
                    <Button
                      to={`/contact?industry=${encodeURIComponent(industry.contactValue)}`}
                      variant="secondary"
                      size="sm"
                    >
                      Discuss {industry.title}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCtaSection />
    </PageTransition>
  );
}

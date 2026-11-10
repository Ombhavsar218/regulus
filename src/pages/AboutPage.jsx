import { usePageMeta } from '../hooks/usePageMeta';
import { aboutSections, visionMission, coreValues } from '../data/aboutData';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal, PageTransition } from '../components/common/Reveal';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';

export function AboutPage() {
  usePageMeta({
    title: 'About Us | REGULUS — Software & Business Technology Company',
    description:
      'Learn about REGULUS, our vision, mission and core values for building customized ERP software, custom applications and corporate websites.',
    path: '/about',
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
            <Badge variant="accent">About REGULUS</Badge>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-regulus-text sm:text-4xl lg:text-5xl">
              Technology Built Around Your Business.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-regulus-muted sm:text-lg">
              We build customized ERP software, business applications and websites tailored
              to real operational requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are & What We Do */}
      <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 theme-transition">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {aboutSections.map((item, idx) => (
              <Reveal key={item.eyebrow} delay={idx * 0.06}>
                <div className="h-full rounded-2xl border border-regulus-border bg-regulus-elevated p-7 sm:p-8 shadow-card theme-transition">
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-regulus-accent-text">
                    {item.eyebrow}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold text-regulus-text sm:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-regulus-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 theme-transition">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Direction"
              title="Our Vision & Mission"
              description="Clear purpose behind every system we design and deliver."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {visionMission.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.06}>
                <div className="h-full rounded-2xl border border-regulus-border bg-regulus-card p-7 sm:p-8 theme-transition">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-regulus-accent-soft text-regulus-accent-text">
                      <DynamicIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-regulus-accent-text">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-regulus-text sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-regulus-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 theme-transition">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="How We Work"
              description="Practical standards guiding every project we take on."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.04}>
                <div className="h-full rounded-xl border border-regulus-border bg-regulus-elevated p-6 shadow-card theme-transition">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-regulus-accent-soft text-regulus-accent-text">
                    <DynamicIcon name={value.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-regulus-text">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-regulus-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCtaSection />
    </PageTransition>
  );
}

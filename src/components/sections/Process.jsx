import { processSteps } from '../../data/homeData';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';

export function Process() {
  return (
    <section className="border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Development Process"
            title="From Idea to Implementation."
            description="A straightforward four-step workflow from understanding your business to ongoing support."
          />
        </Reveal>

        <div className="relative mt-12">
          {/* Desktop horizontal connector */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-regulus-border lg:block"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="relative flex h-full flex-col rounded-xl border border-regulus-border bg-regulus-card p-6 shadow-card theme-transition">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-regulus-border-strong bg-regulus-elevated font-mono text-sm font-semibold text-regulus-accent-text theme-transition">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-regulus-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-regulus-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

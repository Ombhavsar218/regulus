import { whyRegulusPoints } from '../../data/homeData';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { DynamicIcon } from '../common/DynamicIcon';
import { Reveal } from '../common/Reveal';

export function WhyRegulus() {
  return (
    <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Regulus"
            title="Why Work With Us?"
            description="Clear communication, reliable engineering and software shaped around your business."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyRegulusPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.04}>
              <div className="h-full rounded-xl border border-regulus-border bg-regulus-elevated p-5 shadow-card theme-transition">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-regulus-accent-soft text-regulus-accent-text">
                  <DynamicIcon name={point.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-regulus-text">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-regulus-muted">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';

export function ContactCtaSection({
  title = 'Have a Project in Mind?',
  description = "Let's discuss how technology can help your business.",
  ctaLabel = "Let's Talk",
  ctaTo = '/contact',
}) {
  return (
    <section className="bg-regulus-bg py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-regulus-border-strong/30 bg-regulus-card p-8 sm:p-12 lg:p-14 shadow-card theme-transition">
            <div
              className="architectural-grid pointer-events-none absolute inset-0 opacity-75"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-regulus-accent-text">
                  Get Started
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-regulus-text sm:text-3xl lg:text-4xl">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-regulus-muted sm:text-lg">
                  {description}
                </p>
              </div>
              <div className="shrink-0">
                <Button to={ctaTo} variant="primary" size="lg">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

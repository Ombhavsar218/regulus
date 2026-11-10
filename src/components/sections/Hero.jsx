import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';
import { HeroSystemVisual } from '../mockups/HeroSystemVisual';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 lg:py-24 theme-transition">
      <div
        className="architectural-grid pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Badge variant="accent">
              Software Development &amp; Business Technology Solutions
            </Badge>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-regulus-text sm:text-4xl lg:text-[50px] lg:leading-[1.1] theme-transition">
              Technology That Moves Business Forward.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-regulus-muted sm:text-lg theme-transition">
              We build customized ERP systems, business software and professional websites
              that simplify operations and support business growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary" size="lg">
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <HeroSystemVisual />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

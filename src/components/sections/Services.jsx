import { ArrowRight } from 'lucide-react';
import { homeServices } from '../../data/homeData';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { ServiceCard } from '../common/ServiceCard';
import { Reveal } from '../common/Reveal';

export function Services() {
  return (
    <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Services"
              title="What We Do"
              description="Practical software solutions built around how your business operates."
            />
            <Button to="/services" variant="secondary" size="sm" className="shrink-0">
              All Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

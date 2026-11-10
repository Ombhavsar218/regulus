import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { homeIndustries } from '../../data/homeData';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { DynamicIcon } from '../common/DynamicIcon';
import { Reveal } from '../common/Reveal';

export function Industries() {
  return (
    <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Solutions Across Industries."
              description="Custom software and ERP systems adapted to the workflows of different business sectors."
            />
            <Button to="/industries" variant="secondary" size="sm" className="shrink-0">
              Explore Industries
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeIndustries.map((industry, index) => (
            <Reveal key={industry.id} delay={index * 0.04}>
              <Link
                to={industry.to}
                className="group flex h-full flex-col justify-between rounded-xl border border-regulus-border bg-regulus-elevated p-6 shadow-card hover:border-regulus-border-strong theme-transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-regulus-border bg-regulus-card text-regulus-accent-text theme-transition">
                      <DynamicIcon name={industry.icon} className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-4 w-4 text-regulus-faint transition-transform duration-200 group-hover:translate-x-1 group-hover:text-regulus-accent-text" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-regulus-text">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-regulus-muted">
                    {industry.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

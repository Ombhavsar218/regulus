import { ArrowRight } from 'lucide-react';
import { conceptShowcases } from '../../data/homeData';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../common/ProjectCard';
import { Reveal } from '../common/Reveal';

export function WhatWeCanBuild() {
  return (
    <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Illustrative Concepts"
              title="What We Can Build"
              description="Sample system concepts illustrating the custom software, ERP platforms and websites we design."
            />
            <Button to="/solutions" variant="secondary" size="sm" className="shrink-0">
              View All Concepts
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {conceptShowcases.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <ProjectCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

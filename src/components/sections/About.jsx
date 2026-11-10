import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { TailoredArchVisual } from '../mockups/TailoredArchVisual';

export function About() {
  return (
    <section className="border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="About Regulus"
                title="Technology Built Around Your Business."
              />
              <p className="mt-5 text-base leading-relaxed text-regulus-muted sm:text-lg theme-transition">
                We understand that every business works differently. That&apos;s why we
                develop technology solutions based on your actual requirements.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-regulus-muted sm:text-base theme-transition">
                Instead of selling a single rigid product, we build customized ERP
                systems, business applications and websites designed to fit your team.
              </p>
              <div className="mt-8">
                <Button to="/about" variant="secondary" size="md">
                  Know More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <TailoredArchVisual />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { ErpDashboardMockup } from '../mockups/ErpDashboardMockup';

export function ERPDemo() {
  return (
    <section className="border-b border-regulus-border bg-regulus-bg py-16 sm:py-20 lg:py-24 theme-transition">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Customized ERP Showcase"
              title="Your Business. One Connected System."
              description="Bring different business operations together with ERP solutions designed around your workflow."
            />
            <Button
              to="/solutions#manufacturing-erp"
              variant="primary"
              size="md"
              className="shrink-0"
            >
              Explore ERP Solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <ErpDashboardMockup />
        </Reveal>

        <p className="mt-4 text-center text-xs text-regulus-faint">
          Demo data shown for illustration. Every Regulus ERP is custom-built around each
          client&apos;s actual workflow.
        </p>
      </Container>
    </section>
  );
}

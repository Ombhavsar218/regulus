import { ArrowRight, Check, Info, Layers } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { solutionBlueprints } from '../data/solutionsData';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal, PageTransition } from '../components/common/Reveal';
import { SolutionPreviewCard } from '../components/mockups/SolutionPreviewCard';
import { ErpDashboardMockup } from '../components/mockups/ErpDashboardMockup';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';

export function SolutionsPage() {
  usePageMeta({
    title: 'Our Solutions | Illustrative ERP & Software Concepts — REGULUS',
    description:
      'Explore illustrative solution concepts REGULUS can build: Manufacturing ERP, Inventory Management System, Business Management Software, Custom Applications and Corporate Websites.',
    path: '/solutions',
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
            <Badge variant="concept">Illustrative Demo Concepts</Badge>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-regulus-text sm:text-4xl lg:text-5xl">
              Solutions Built Around Your Workflow
            </h1>
            <p className="mt-4 text-base leading-relaxed text-regulus-muted sm:text-lg">
              These demo blueprints show what Regulus can build for your business. Every
              system is custom-developed rather than sold as a fixed off-the-shelf tool.
            </p>

            <div className="mt-5 inline-flex items-start gap-2.5 rounded-xl border border-regulus-border bg-regulus-card px-4 py-3 text-xs leading-relaxed text-regulus-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-regulus-accent-text" />
              <span>
                All previews below are illustrative concepts demonstrating capabilities—not
                pre-packaged products or existing client installations.
              </span>
            </div>

            <nav aria-label="Solution concepts" className="mt-7 flex flex-wrap gap-2">
              {solutionBlueprints.map((sol) => (
                <a
                  key={sol.id}
                  href={`#${sol.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-regulus-border bg-regulus-card px-3.5 py-2 text-xs font-medium text-regulus-muted hover:border-regulus-border-strong hover:bg-regulus-elevated hover:text-regulus-text theme-transition"
                >
                  <Layers className="h-3.5 w-3.5 text-regulus-accent-text" />
                  {sol.title}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      {/* Interactive ERP Showcase */}
      <section className="border-b border-regulus-border bg-regulus-subtle py-16 sm:py-20 theme-transition">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Interactive ERP Preview"
              title="Your Business. One Connected System."
              description="Click through the sample modules below to preview how departments connect inside a custom ERP dashboard."
            />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <ErpDashboardMockup />
          </Reveal>
        </Container>
      </section>

      {/* 5 Solution Blueprints */}
      <div className="divide-y divide-regulus-border border-b border-regulus-border">
        {solutionBlueprints.map((solution, index) => {
          const isAlt = index % 2 === 1;
          const cardBg = isAlt ? 'bg-regulus-elevated' : 'bg-regulus-card';
          return (
            <section
              key={solution.id}
              id={solution.id}
              className={`py-16 sm:py-20 theme-transition ${
                isAlt ? 'bg-regulus-subtle' : 'bg-regulus-bg'
              }`}
            >
              <Container>
                <Reveal>
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                      <Badge variant="concept">{solution.badge}</Badge>
                      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-regulus-text sm:text-3xl">
                        {solution.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-regulus-accent-text">
                        {solution.subtitle}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-regulus-muted">
                        {solution.description}
                      </p>

                      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {solution.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-regulus-text/90"
                          >
                            <Check className="h-4 w-4 shrink-0 text-regulus-accent-text" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7">
                        <Button
                          to={`/contact?service=${encodeURIComponent(
                            solution.contactService
                          )}&industry=${encodeURIComponent(solution.contactIndustry)}`}
                          variant="primary"
                          size="md"
                        >
                          Discuss a Custom Build
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <div className={`rounded-2xl border border-regulus-border ${cardBg} p-5 shadow-card theme-transition`}>
                        <div className="mb-3 flex items-center justify-between text-xs">
                          <span className="font-medium text-regulus-text">
                            Illustrative Interface Mockup
                          </span>
                          <span className="font-mono text-[11px] text-regulus-faint">
                            Demo Layout
                          </span>
                        </div>
                        <SolutionPreviewCard
                          type={solution.previewType}
                          tone={isAlt ? 'subtle' : 'elevated'}
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <ContactCtaSection />
    </PageTransition>
  );
}

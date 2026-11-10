import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/Reveal';

export function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | REGULUS',
    description: 'The requested page could not be found on REGULUS.',
    path: '/404',
  });

  return (
    <PageTransition>
      <section className="bg-regulus-bg py-24 sm:py-32 theme-transition">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-regulus-accent-text">
              Error 404
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-regulus-text sm:text-4xl">
              Page Not Found
            </h1>
            <p className="mt-4 text-base text-regulus-muted">
              The page you are looking for may have moved or does not exist. Use the links
              below to return to our main sections.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button to="/" variant="primary" size="md">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <Button to="/services" variant="secondary" size="md">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

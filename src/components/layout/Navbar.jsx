import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { RegulusLogo } from '../brand/RegulusLogo';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-regulus-bg/95 backdrop-blur-md theme-transition ${
        scrolled ? 'border-regulus-border-strong/50 shadow-sm' : 'border-regulus-border'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-regulus-elevated focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-regulus-text focus:shadow-card"
      >
        Skip to main content
      </a>

      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg focus-visible:outline-none"
            aria-label="REGULUS Home"
          >
            <RegulusLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-lg px-3.5 py-2 text-sm font-medium theme-transition ${
                    isActive
                      ? 'bg-regulus-card text-regulus-text'
                      : 'text-regulus-muted hover:bg-regulus-card/60 hover:text-regulus-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-regulus-accent-text"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <div className="hidden sm:inline-flex">
              <Button to="/contact" variant="primary" size="sm">
                Get in Touch
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-regulus-border bg-regulus-elevated text-regulus-text hover:border-regulus-border-strong lg:hidden theme-transition"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-regulus-border bg-regulus-bg lg:hidden"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {siteConfig.navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium theme-transition ${
                        isActive
                          ? 'border border-regulus-border bg-regulus-card text-regulus-text'
                          : 'text-regulus-muted hover:bg-regulus-card/60 hover:text-regulus-text'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                  </NavLink>
                ))}
                <div className="mt-3 border-t border-regulus-border pt-3">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

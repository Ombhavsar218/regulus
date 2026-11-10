import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { RegulusLogo } from '../brand/RegulusLogo';
import { Container } from '../common/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-regulus-border bg-regulus-subtle text-regulus-muted theme-transition">
      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center" aria-label="REGULUS Home">
              <RegulusLogo showSubtitle size="md" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-regulus-muted">
              {siteConfig.shortDescription}
            </p>
            <p className="mt-4 font-mono text-xs font-medium tracking-wide text-regulus-text">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-regulus-text">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-regulus-muted hover:text-regulus-text theme-transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-regulus-text">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerServices.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-sm text-regulus-muted hover:text-regulus-text theme-transition"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders & Social Placeholders */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-regulus-text">
              Contact Details
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-regulus-muted">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-regulus-faint" />
                {siteConfig.contact.email ? (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-regulus-text theme-transition"
                  >
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  <span className="text-xs leading-relaxed text-regulus-muted">
                    {siteConfig.contact.emailPlaceholder}
                  </span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-regulus-faint" />
                {siteConfig.contact.phone ? (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-regulus-text theme-transition"
                  >
                    {siteConfig.contact.phone}
                  </a>
                ) : (
                  <span className="text-xs leading-relaxed text-regulus-muted">
                    {siteConfig.contact.phonePlaceholder}
                  </span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-regulus-faint" />
                <span className="text-xs leading-relaxed text-regulus-muted">
                  {siteConfig.contact.address || siteConfig.contact.addressPlaceholder}
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-regulus-text">
                Social Channels
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {siteConfig.socialChannels.map((channel) =>
                  channel.href ? (
                    <a
                      key={channel.name}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-regulus-border bg-regulus-elevated px-2.5 py-1 text-xs font-medium text-regulus-muted hover:border-regulus-border-strong hover:text-regulus-text theme-transition"
                    >
                      {channel.name}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span
                      key={channel.name}
                      title={`${channel.name} — ${channel.status}`}
                      className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-regulus-border-strong/60 bg-regulus-elevated/70 px-2.5 py-1 text-xs text-regulus-faint"
                    >
                      <Globe className="h-3 w-3 opacity-80" />
                      {channel.name} (Placeholder)
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-regulus-border pt-6 text-xs text-regulus-faint sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{siteConfig.businessType}</span>
            <Link
              to="/contact"
              className="font-medium text-regulus-accent-text hover:underline"
            >
              Start a Project Discussion
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

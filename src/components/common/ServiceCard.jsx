import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';

export function ServiceCard({ service }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-regulus-border bg-regulus-elevated p-6 sm:p-7 shadow-card hover:border-regulus-border-strong theme-transition"
    >
      <div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-regulus-border bg-regulus-card text-regulus-accent-text theme-transition">
          <DynamicIcon name={service.icon} className="h-5 w-5" />
        </span>

        <h3 className="mt-5 text-lg font-semibold text-regulus-text theme-transition">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-regulus-muted theme-transition">
          {service.description}
        </p>
      </div>

      <div className="mt-6 pt-1">
        <Link
          to={service.to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-regulus-accent-text hover:underline"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

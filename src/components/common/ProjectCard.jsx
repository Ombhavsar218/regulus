import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from './Badge';
import { SolutionPreviewCard } from '../mockups/SolutionPreviewCard';

export function ProjectCard({ item }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-regulus-border bg-regulus-elevated p-6 shadow-card hover:border-regulus-border-strong theme-transition"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-medium text-regulus-faint">
            {item.category}
          </span>
          <Badge variant="concept">{item.badge}</Badge>
        </div>

        <div className="mt-4">
          <SolutionPreviewCard type={item.previewType} />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-regulus-text">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-regulus-muted">
          {item.description}
        </p>
      </div>

      <div className="mt-5 border-t border-regulus-border pt-4">
        <Link
          to={item.to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-regulus-accent-text hover:underline"
        >
          View Concept
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

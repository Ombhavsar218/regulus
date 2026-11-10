import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Code2,
  Globe,
  Factory,
  Boxes,
  ShoppingCart,
  Users,
  Check,
} from 'lucide-react';

const layers = [
  {
    id: 'erp',
    label: 'Customized ERP',
    icon: Layers,
    summary: 'Connect production, inventory, purchasing and sales in one place.',
    nodes: [
      { title: 'Production', meta: 'Work orders & planning', status: 'Connected' },
      { title: 'Inventory', meta: 'Warehouse stock levels', status: 'Live View' },
      { title: 'Purchase & Sales', meta: 'Orders & billing', status: 'Organized' },
      { title: 'Employees & Reports', meta: 'Roles & summaries', status: 'Tailored' },
    ],
  },
  {
    id: 'software',
    label: 'Custom Software',
    icon: Code2,
    summary: 'Applications and workflow tools built for how your team works.',
    nodes: [
      { title: 'Operations Portal', meta: 'Tasks & approvals', status: 'Streamlined' },
      { title: 'Stock Alerts', meta: 'Automatic reminders', status: 'Automated' },
      { title: 'Client Portals', meta: 'Order & status tracking', status: 'Custom Fit' },
      { title: 'Central Records', meta: 'Clean business data', status: 'Unified' },
    ],
  },
  {
    id: 'web',
    label: 'Business Websites',
    icon: Globe,
    summary: 'Modern, responsive websites designed for business credibility.',
    nodes: [
      { title: 'Corporate Website', meta: 'Clear brand presence', status: 'Responsive' },
      { title: 'Service Showcase', meta: 'Easy for clients to scan', status: 'Structured' },
      { title: 'Enquiry Forms', meta: 'Validated lead capture', status: 'Ready' },
      { title: 'Search Ready', meta: 'Clean web standards', status: 'Fast Load' },
    ],
  },
];

export function HeroSystemVisual() {
  const [activeLayer, setActiveLayer] = useState('erp');
  const current = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <div className="relative rounded-2xl border border-regulus-border-strong/30 bg-regulus-elevated p-4 shadow-elevated sm:p-5 theme-transition">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-regulus-border pb-3.5 theme-transition">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-regulus-border-strong/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-regulus-border-strong/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-regulus-border-strong/50" />
          </div>
          <span className="font-mono text-[11px] font-medium text-regulus-muted">
            REGULUS // CONNECTED BUSINESS SYSTEMS
          </span>
        </div>
        <span className="rounded-md border border-regulus-border bg-regulus-card px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-regulus-muted">
          Demo Concept
        </span>
      </div>

      {/* Tabs */}
      <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-xl border border-regulus-border bg-regulus-card p-1 theme-transition">
        {layers.map((layer) => {
          const Icon = layer.icon;
          const isActive = layer.id === activeLayer;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveLayer(layer.id)}
              className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium theme-transition ${
                isActive
                  ? 'border border-regulus-border bg-regulus-elevated text-regulus-text shadow-sm'
                  : 'border border-transparent text-regulus-muted hover:text-regulus-text'
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-regulus-accent-text" />
              <span className="truncate">{layer.label}</span>
            </button>
          );
        })}
      </div>

      {/* System View */}
      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            <div className="rounded-xl border border-regulus-border bg-regulus-subtle p-3.5 theme-transition">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-regulus-text">{current.label}</p>
                  <p className="mt-0.5 text-xs text-regulus-muted">{current.summary}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-regulus-accent-soft px-2 py-0.5 text-[11px] font-medium text-regulus-accent-text">
                  <Check className="h-3 w-3" />
                  Custom Built
                </span>
              </div>

              <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {current.nodes.map((node) => (
                  <div
                    key={node.title}
                    className="rounded-lg border border-regulus-border bg-regulus-elevated p-3 theme-transition"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-regulus-text">
                        {node.title}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-regulus-accent-text" />
                    </div>
                    <div className="mt-1.5 flex items-center justify-between gap-2 text-[11px]">
                      <span className="text-regulus-muted">{node.meta}</span>
                      <span className="font-mono text-regulus-accent-text">{node.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Bar */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-regulus-border bg-regulus-card px-3.5 py-2.5 theme-transition">
        <div className="flex items-center gap-4 text-[11px] font-medium text-regulus-muted">
          <span className="inline-flex items-center gap-1.5">
            <Factory className="h-3.5 w-3.5 text-regulus-accent-text" />
            Production
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Boxes className="h-3.5 w-3.5 text-regulus-accent-text" />
            Inventory
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShoppingCart className="h-3.5 w-3.5 text-regulus-accent-text" />
            Sales
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-regulus-accent-text" />
            Team
          </span>
        </div>
        <span className="font-mono text-[10px] text-regulus-faint">
          Built for your business
        </span>
      </div>
    </div>
  );
}

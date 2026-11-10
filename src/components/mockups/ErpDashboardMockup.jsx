import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Factory,
  Boxes,
  ShoppingCart,
  TrendingUp,
  Users,
  BarChart3,
  Info,
} from 'lucide-react';

const erpTabs = [
  {
    id: 'production',
    label: 'Production Management',
    shortLabel: 'Production',
    icon: Factory,
    summaryCards: [
      { label: 'Active Work Orders', value: '12 Jobs', note: 'Demo schedule' },
      { label: 'Material Check', value: 'Verified', note: 'Stock linked' },
      { label: 'Production Lines', value: '3 Active', note: 'Day shift' },
    ],
    rows: [
      { code: 'WO-1042', item: 'Metal Enclosure Batch A', detail: 'Assembly Stage', metric: '75%', status: 'In Progress' },
      { code: 'WO-1043', item: 'Control Panel Unit V2', detail: 'Quality Check', metric: '90%', status: 'Testing' },
      { code: 'WO-1044', item: 'Modular Frame Kit', detail: 'Material Issued', metric: '30%', status: 'Scheduled' },
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory Management',
    shortLabel: 'Inventory',
    icon: Boxes,
    summaryCards: [
      { label: 'Tracked Items', value: '480 SKUs', note: 'Demo inventory' },
      { label: 'Storage Zones', value: '4 Warehouses', note: 'Stock synced' },
      { label: 'Low-Stock Alerts', value: '6 Items', note: 'Reorder flagged' },
    ],
    rows: [
      { code: 'SKU-210', item: 'Cold-Rolled Steel Sheet', detail: 'Warehouse A', metric: '1,240 Units', status: 'In Stock' },
      { code: 'SKU-088', item: '24V Power Relay Module', detail: 'Warehouse B', metric: '42 Units', status: 'Low Stock' },
      { code: 'SKU-415', item: 'Finished Control Box', detail: 'Dispatch Bay', metric: '185 Units', status: 'Ready' },
    ],
  },
  {
    id: 'purchase',
    label: 'Purchase Management',
    shortLabel: 'Purchasing',
    icon: ShoppingCart,
    summaryCards: [
      { label: 'Open Purchase Orders', value: '9 Orders', note: 'Demo purchasing' },
      { label: 'Pending Approval', value: '2 Requests', note: 'Manager review' },
      { label: 'Active Suppliers', value: '28 Vendors', note: 'Central list' },
    ],
    rows: [
      { code: 'PO-2091', item: 'Hardware & Fasteners Lot', detail: 'Demo Supplier A', metric: '$4,200', status: 'In Transit' },
      { code: 'PO-2092', item: 'Shipping Cartons & Labels', detail: 'Demo Supplier B', metric: '$1,150', status: 'Awaiting Approval' },
      { code: 'PO-2093', item: 'Wiring Harness Set', detail: 'Demo Supplier C', metric: '$6,800', status: 'Received' },
    ],
  },
  {
    id: 'sales',
    label: 'Sales Management',
    shortLabel: 'Sales',
    icon: TrendingUp,
    summaryCards: [
      { label: 'Open Customer Orders', value: '18 Orders', note: 'Demo pipeline' },
      { label: 'Ready to Ship', value: '7 Orders', note: 'Packed today' },
      { label: 'Invoiced This Week', value: '24 Orders', note: 'Sample count' },
    ],
    rows: [
      { code: 'SO-3180', item: 'Regional Distributor Restock', detail: 'Packing Complete', metric: '$12,400', status: 'Ready to Ship' },
      { code: 'SO-3181', item: 'Custom Assembly Batch', detail: 'Linked to WO-1042', metric: '$8,900', status: 'In Production' },
      { code: 'SO-3182', item: 'Standard Retail Supply', detail: 'Invoice Sent', metric: '$5,300', status: 'Dispatched' },
    ],
  },
  {
    id: 'employees',
    label: 'Employee Management',
    shortLabel: 'Employees',
    icon: Users,
    summaryCards: [
      { label: 'Active Staff', value: '64 Members', note: 'Demo roster' },
      { label: 'Departments', value: '5 Teams', note: 'Role access' },
      { label: 'Leave Requests', value: '3 Pending', note: 'Quick approval' },
    ],
    rows: [
      { code: 'EMP-014', item: 'Production Floor Team', detail: 'Morning Shift (22)', metric: 'Present', status: 'On Duty' },
      { code: 'EMP-029', item: 'Warehouse & Dispatch', detail: 'Day Shift (14)', metric: 'Present', status: 'On Duty' },
      { code: 'EMP-041', item: 'Quality Inspection', detail: 'Shift Review (6)', metric: 'Active', status: 'Verified' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports and Analytics',
    shortLabel: 'Reports',
    icon: BarChart3,
    summaryCards: [
      { label: 'Department Summaries', value: 'Real-Time', note: 'Unified view' },
      { label: 'Report Exports', value: 'PDF / Excel', note: 'One-click share' },
      { label: 'Custom Views', value: 'Role-Based', note: 'Tailored metrics' },
    ],
    bars: [
      { department: 'Production Completion', ratio: 82, tag: 'On-schedule batches' },
      { department: 'Inventory Accuracy', ratio: 90, tag: 'Warehouse stock match' },
      { department: 'Purchase Turnaround', ratio: 74, tag: 'On-time vendor delivery' },
      { department: 'Sales Order Dispatch', ratio: 86, tag: 'Fulfilled on time' },
    ],
  },
];

export function ErpDashboardMockup() {
  const [activeTabId, setActiveTabId] = useState('production');
  const currentTab = erpTabs.find((t) => t.id === activeTabId) || erpTabs[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-regulus-border-strong/30 bg-regulus-elevated shadow-elevated theme-transition">
      {/* Top Bar */}
      <div className="flex flex-col gap-3 border-b border-regulus-border bg-regulus-card px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 theme-transition">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-regulus-border bg-regulus-elevated text-xs font-bold text-regulus-text">
            R
          </span>
          <div>
            <p className="text-xs font-semibold text-regulus-text">
              REGULUS ERP Interface Preview
            </p>
            <p className="text-[11px] text-regulus-muted">
              Sample multi-department business dashboard
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-regulus-border bg-regulus-elevated px-3 py-1 text-[11px] font-medium text-regulus-muted sm:self-auto">
          <Info className="h-3.5 w-3.5 text-regulus-accent-text" />
          <span>Demo Data · Illustrative Preview</span>
        </div>
      </div>

      {/* Module Tabs */}
      <div
        className="flex gap-1 overflow-x-auto border-b border-regulus-border bg-regulus-card px-4 py-2 sm:px-6 theme-transition"
        role="tablist"
        aria-label="ERP system demo modules"
      >
        {erpTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium theme-transition ${
                isActive
                  ? 'border border-regulus-border bg-regulus-elevated text-regulus-text shadow-sm'
                  : 'border border-transparent text-regulus-muted hover:bg-regulus-elevated/60 hover:text-regulus-text'
              }`}
            >
              <Icon className="h-3.5 w-3.5 text-regulus-accent-text" />
              <span className="hidden lg:inline">{tab.label}</span>
              <span className="lg:hidden">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {currentTab.summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-regulus-border bg-regulus-card p-4 theme-transition"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wider text-regulus-faint">
                    {card.label}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-regulus-text">
                    {card.value}
                  </p>
                  <p className="mt-0.5 text-xs text-regulus-muted">{card.note}</p>
                </div>
              ))}
            </div>

            {currentTab.rows ? (
              <div className="mt-5 overflow-hidden rounded-xl border border-regulus-border theme-transition">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-regulus-border bg-regulus-card text-regulus-muted theme-transition">
                      <tr>
                        <th className="px-4 py-3 font-mono font-medium">ID</th>
                        <th className="px-4 py-3 font-medium">Item / Team</th>
                        <th className="px-4 py-3 font-medium">Stage / Location</th>
                        <th className="px-4 py-3 font-medium">Value</th>
                        <th className="px-4 py-3 text-right font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-regulus-border bg-regulus-elevated theme-transition">
                      {currentTab.rows.map((row) => (
                        <tr
                          key={row.code}
                          className="hover:bg-regulus-card/60 theme-transition"
                        >
                          <td className="whitespace-nowrap px-4 py-3 font-mono font-medium text-regulus-accent-text">
                            {row.code}
                          </td>
                          <td className="px-4 py-3 font-medium text-regulus-text">
                            {row.item}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-regulus-muted">
                            {row.detail}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 font-mono text-regulus-muted">
                            {row.metric}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-right">
                            <span className="inline-flex rounded-full border border-regulus-border bg-regulus-card px-2.5 py-0.5 text-[11px] font-medium text-regulus-text">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-regulus-border bg-regulus-card p-4 sm:p-5 theme-transition">
                <div className="flex items-center justify-between gap-2 border-b border-regulus-border pb-3">
                  <p className="text-xs font-semibold text-regulus-text">
                    Sample Management Report View
                  </p>
                  <span className="font-mono text-[11px] text-regulus-faint">
                    Demo Data
                  </span>
                </div>
                <div className="mt-4 space-y-4">
                  {currentTab.bars.map((bar) => (
                    <div key={bar.department}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-regulus-text">
                          {bar.department}
                        </span>
                        <span className="text-regulus-muted">{bar.tag}</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-regulus-elevated">
                        <div
                          className="h-full rounded-full bg-regulus-accent theme-transition"
                          style={{ width: `${bar.ratio}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

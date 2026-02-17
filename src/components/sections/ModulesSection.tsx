import {
  BarChart3,
  Layers,
  Heart,
  Users,
  Contact,
  Package,
  Building2,
  Calendar,
  Headphones,
} from 'lucide-react';
import { Typography } from '@vritti/quantum-ui/Typography';

const suiteConfig = [
  {
    title: 'Sales Suite',
    description:
      'Manage leads, close deals, and nurture customer relationships with AI-powered CRM and lead tracking.',
    icon: BarChart3,
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
    borderColor: 'border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    iconColor: 'text-blue-600',
    tagBg: 'bg-blue-100 dark:bg-blue-900/50',
    tagColor: 'text-blue-700 dark:text-blue-300',
    modules: [
      { name: 'Lead Management', icon: Users },
      { name: 'CRM', icon: Contact },
    ],
    wide: true,
  },
  {
    title: 'Ops Suite',
    description:
      'Streamline inventory, vendor management, and day-to-day operations from one unified dashboard.',
    icon: Layers,
    bgColor: 'bg-violet-50 dark:bg-violet-950/50',
    borderColor: 'border-violet-200 dark:border-violet-800',
    iconBg: 'bg-violet-100 dark:bg-violet-900/50',
    iconColor: 'text-violet-600',
    tagBg: 'bg-violet-100 dark:bg-violet-900/50',
    tagColor: 'text-violet-700 dark:text-violet-300',
    modules: [
      { name: 'Inventory', icon: Package },
      { name: 'Vendor Management', icon: Building2 },
    ],
    wide: false,
  },
  {
    title: 'CX Suite',
    description:
      'Deliver exceptional customer experiences with intelligent bookings and AI-powered support.',
    icon: Heart,
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/50',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
    iconColor: 'text-emerald-600',
    tagBg: 'bg-emerald-100 dark:bg-emerald-900/50',
    tagColor: 'text-emerald-700 dark:text-emerald-300',
    modules: [
      { name: 'Booking System', icon: Calendar },
      { name: 'Customer Support', icon: Headphones },
    ],
    wide: true,
  },
] as const;

export function ModulesSection() {
  return (
    <section id="modules" className="w-full py-16 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Typography
            variant="h2"
            align="center"
            className="border-0 pb-0 text-3xl sm:text-4xl"
          >
            Build{' '}
            <span className="text-highlight-emerald">Your Stack</span>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className="mt-4 text-xl text-vritti-secondary"
          >
            Subscribe only to the modules you need. Add more as you grow.
          </Typography>
        </div>

        {/* Bento grid */}
        <div className="bento-grid stagger-children">
          {/* Sales Suite - wide */}
          <SuiteCard suite={suiteConfig[0]} />

          {/* Ops Suite - regular */}
          <SuiteCard suite={suiteConfig[1]} />

          {/* Accent stat card */}
          <div className="rounded-2xl p-8 bg-primary text-white flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-bold">6</span>
            <Typography variant="body1" className="text-white/80 mt-2">
              Modules
            </Typography>
            <Typography variant="caption" className="text-white/60 mt-1">
              One Platform. Infinite Possibilities.
            </Typography>
          </div>

          {/* CX Suite - wide */}
          <SuiteCard suite={suiteConfig[2]} />
        </div>
      </div>
    </section>
  );
}

function SuiteCard({ suite }: { suite: (typeof suiteConfig)[number] }) {
  const Icon = suite.icon;
  return (
    <div
      className={`rounded-2xl border-2 p-8 flex flex-col justify-between ${suite.bgColor} ${suite.borderColor} ${
        suite.wide ? 'bento-wide' : ''
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-12 h-12 rounded-xl ${suite.iconBg} flex items-center justify-center`}
          >
            <Icon size={24} className={suite.iconColor} />
          </div>
          <Typography variant="h4">{suite.title}</Typography>
        </div>
        <Typography
          variant="body2"
          className="text-vritti-secondary leading-relaxed max-w-md"
        >
          {suite.description}
        </Typography>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {suite.modules.map((mod) => {
          const ModIcon = mod.icon;
          return (
            <span
              key={mod.name}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full ${suite.tagBg} ${suite.tagColor}`}
            >
              <ModIcon size={12} />
              {mod.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

import { Typography } from '@vritti/quantum-ui/Typography';
import { StatCard } from './StatCard';
import { DASHBOARD_STATS } from '@/lib/constants/content';

const chartBars = [60, 75, 45, 90, 65, 80, 85];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-12 max-w-[1152px] w-full">
      {/* Gradient blur behind */}
      <div
        className="absolute inset-0 blur-[64px] opacity-50"
        style={{
          background:
            'linear-gradient(to top, var(--vritti-bg-light), transparent)',
        }}
      />

      {/* Browser window */}
      <div className="relative rounded-2xl bg-background shadow-2xl overflow-hidden border border-vritti">
        {/* Browser chrome */}
        <div className="flex items-center gap-4 px-4 h-[50px] border-b border-vritti bg-vritti-light">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="ml-auto mr-auto px-4 py-1 rounded-lg text-xs bg-background border border-vritti text-vritti-secondary">
            app.vritti.ai/dashboard
          </div>
        </div>

        {/* Dashboard content */}
        <div
          className="p-6 sm:p-8 flex flex-col gap-8"
          style={{
            background:
              'linear-gradient(155deg, var(--vritti-bg-light), var(--color-background))',
          }}
        >
          {/* Greeting */}
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="h3" className="text-xl sm:text-2xl">
                Hello, Admin
              </Typography>
              <Typography variant="body2" className="mt-1 text-vritti-secondary">
                Here&apos;s what&apos;s happening with your business today
              </Typography>
            </div>
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-medium">
              A
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {DASHBOARD_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Revenue chart */}
          <div className="rounded-2xl bg-background p-6 shadow-sm border border-vritti">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="h6">
                Revenue Overview
              </Typography>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary">
                  Week
                </span>
                <Typography variant="caption" className="px-3 py-1 rounded-lg text-vritti-secondary">
                  Month
                </Typography>
                <Typography variant="caption" className="px-3 py-1 rounded-lg hidden sm:inline text-vritti-secondary">
                  Year
                </Typography>
              </div>
            </div>

            {/* CSS bar chart */}
            <div className="flex items-end gap-2 h-32">
              {chartBars.map((height, i) => (
                <div
                  key={days[i]}
                  className="flex-1 rounded-t-xl"
                  style={{
                    height: `${height}%`,
                    background:
                      'linear-gradient(to top, var(--color-primary), color-mix(in oklch, var(--color-primary) 75%, transparent))',
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {days.map((day) => (
                <Typography key={day} variant="caption" align="center" className="flex-1 text-vritti-secondary">
                  {day}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

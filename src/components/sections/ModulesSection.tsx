import { BarChart3, Layers, Heart } from 'lucide-react';
import { Card, CardContent } from '@vritti/quantum-ui/Card';
import { Typography } from '@vritti/quantum-ui/Typography';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { MODULES, SUITES } from '@/lib/constants/content';

const suiteIconMap = { BarChart3, Layers, Heart } as const;

export function ModulesSection() {
  return (
    <section id="modules" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Typography variant="h2" align="center" className="border-0 pb-0 text-3xl sm:text-4xl">
            Build Your Stack
          </Typography>
          <Typography variant="body1" align="center" className="mt-4 text-xl text-vritti-secondary">
            Subscribe only to the modules you need. Add more as you grow.
          </Typography>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {MODULES.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>

        {/* Suite summary cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUITES.map((suite) => {
            const Icon = suiteIconMap[suite.icon];
            return (
              <Card
                key={suite.title}
                className="rounded-2xl bg-vritti-light border-vritti"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${suite.bgColor} flex items-center justify-center mb-4`}
                  >
                    <Icon size={20} className="text-primary" />
                  </div>
                  <Typography variant="h6" className="mb-2">
                    {suite.title}
                  </Typography>
                  <Typography variant="body2" className="leading-relaxed text-vritti-secondary">
                    {suite.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

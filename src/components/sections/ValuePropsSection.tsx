import { Zap, Database, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@vritti/quantum-ui/Card';
import { Typography } from '@vritti/quantum-ui/Typography';
import { DoodleSparkle } from '@/components/ui/Doodles';
import { VALUE_PROPS } from '@/lib/constants/content';

const iconMap = { Zap, Database, TrendingUp } as const;

export function ValuePropsSection() {
  return (
    <section
      id="value-props"
      className="w-full py-16 bg-vritti-light"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-16 doodle-container">
          <DoodleSparkle className="doodle doodle-sparkle -top-4 right-[calc(50%-220px)] w-7 h-7 text-amber-400/60 hidden sm:block" />
          <div className="animate-on-scroll">
            <Typography
              variant="h2"
              align="center"
              className="border-0 pb-0 text-3xl sm:text-4xl"
            >
              Everything you need,{' '}
              <span className="text-highlight-amber">nothing you don&apos;t</span>.
            </Typography>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon];
            return (
              <Card
                key={prop.title}
                className="rounded-2xl shadow-sm border-0 bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <Typography variant="h4" className="mb-2">
                    {prop.title}
                  </Typography>
                  <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
                    {prop.description}
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

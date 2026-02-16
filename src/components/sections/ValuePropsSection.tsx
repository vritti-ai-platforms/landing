import { Zap, Database, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@vritti/quantum-ui/Card';
import { Typography } from '@vritti/quantum-ui/Typography';
import { VALUE_PROPS } from '@/lib/constants/content';

const iconMap = { Zap, Database, TrendingUp } as const;

export function ValuePropsSection() {
  return (
    <section
      id="value-props"
      className="w-full py-20 bg-vritti-light"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <Typography
          variant="h2"
          align="center"
          className="border-0 pb-0 text-3xl sm:text-4xl animate-on-scroll"
        >
          Everything you need, nothing you don&apos;t.
        </Typography>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon];
            return (
              <Card
                key={prop.title}
                className="rounded-2xl shadow-sm border-0 bg-background"
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

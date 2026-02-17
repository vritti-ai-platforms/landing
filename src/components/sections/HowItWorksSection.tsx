import { Plug, Settings, Brain, Rocket } from 'lucide-react';
import { Typography } from '@vritti/quantum-ui/Typography';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants/content';

const iconMap = { Plug, Settings, Brain, Rocket } as const;

const colorStyles = {
  blue: {
    iconBg: 'bg-blue-50 dark:bg-blue-950',
    numberBg: 'bg-blue-50 dark:bg-blue-950',
    numberText: 'text-blue-600',
    iconText: 'text-blue-600',
  },
  purple: {
    iconBg: 'bg-violet-50 dark:bg-violet-950',
    numberBg: 'bg-violet-50 dark:bg-violet-950',
    numberText: 'text-violet-600',
    iconText: 'text-violet-600',
  },
  green: {
    iconBg: 'bg-emerald-50 dark:bg-emerald-950',
    numberBg: 'bg-emerald-50 dark:bg-emerald-950',
    numberText: 'text-emerald-600',
    iconText: 'text-emerald-600',
  },
  amber: {
    iconBg: 'bg-amber-50 dark:bg-amber-950',
    numberBg: 'bg-amber-50 dark:bg-amber-950',
    numberText: 'text-orange-600',
    iconText: 'text-orange-600',
  },
} as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-16 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Typography variant="h2" align="center" className="border-0 pb-0 text-3xl sm:text-4xl">
            How It Works
          </Typography>
          <Typography variant="body1" align="center" className="mt-4 text-xl text-vritti-secondary">
            Get started in four simple steps
          </Typography>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Gradient progress line - hidden on mobile */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5"
            style={{
              background:
                'linear-gradient(to right, rgba(28,119,227,0.2), rgba(139,92,246,0.2), rgba(16,185,129,0.2), rgba(217,165,20,0.2))',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const Icon = iconMap[step.icon];
              const colors = colorStyles[step.color];
              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon box */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl ${colors.iconBg} border-4 border-background shadow-lg flex items-center justify-center p-1`}
                  >
                    <Icon size={32} className={colors.iconText} />
                    {/* Number badge */}
                    <div
                      className={`absolute -top-2 -right-6 w-6 h-6 rounded-full ${colors.numberBg} flex items-center justify-center`}
                    >
                      <span
                        className={`text-xs font-semibold ${colors.numberText}`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <Typography variant="h4" className="mt-5">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" className="mt-1 text-vritti-secondary">
                    {step.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

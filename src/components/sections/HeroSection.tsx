import { Sparkles } from 'lucide-react';
import { Button } from '@vritti/quantum-ui/Button';
import { Typography } from '@vritti/quantum-ui/Typography';
import { DashboardMockup } from '@/components/ui/DashboardMockup';
import { HERO } from '@/lib/constants/content';

export function HeroSection() {
  return (
    <section className="relative w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        {/* Content */}
        <div className="flex flex-col items-center text-center animate-on-scroll">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl text-sm font-medium bg-blue-50 text-primary dark:bg-primary/10">
            <Sparkles size={14} className="shrink-0" />
            {HERO.badge}
          </span>

          {/* Heading */}
          <Typography
            variant="h1"
            align="center"
            className="sm:text-5xl lg:text-[60px] font-semibold leading-tight max-w-[900px]"
          >
            {HERO.heading}
          </Typography>

          {/* Subheading */}
          <Typography
            variant="body1"
            align="center"
            className="mt-6 text-lg sm:text-xl leading-relaxed max-w-[588px] text-vritti-secondary"
          >
            {HERO.subheading}
          </Typography>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg h-12">
              {HERO.primaryCta}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-lg h-12 text-vritti-secondary"
            >
              {HERO.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}

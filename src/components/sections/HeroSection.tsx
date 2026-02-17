import { Sparkles } from 'lucide-react';
import { Button } from '@vritti/quantum-ui/Button';
import { Typography } from '@vritti/quantum-ui/Typography';
import { DashboardMockup } from '@/components/ui/DashboardMockup';
import { DoodleSparkle } from '@/components/ui/Doodles';
import { HERO } from '@/lib/constants/content';

export function HeroSection() {
  return (
    <section className="relative w-full bg-background hero-gradient">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        {/* Content — load-based staggered animation */}
        <div className="flex flex-col items-center text-center hero-animate doodle-container">
          {/* Decorative sparkle */}
          <DoodleSparkle className="doodle doodle-sparkle -top-2 right-[calc(50%-200px)] w-6 h-6 text-primary/40 hidden sm:block" />

          {/* 1st: Badge — 200ms */}
          <div className="hero-item">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl text-sm font-medium bg-blue-50 text-primary dark:bg-primary/10">
              <Sparkles size={14} className="shrink-0" />
              {HERO.badge}
            </span>
          </div>

          {/* 2nd: Heading — 400ms */}
          <div className="hero-item">
            <Typography
              variant="h1"
              align="center"
              className="sm:text-5xl lg:text-[60px] font-semibold leading-tight max-w-[900px]"
            >
              Run Your Entire Business on{' '}
              <span className="text-highlight-shimmer">One Platform</span>.
            </Typography>
          </div>

          {/* 3rd: Subheading — 600ms */}
          <div className="hero-item">
            <Typography
              variant="body1"
              align="center"
              className="mt-6 text-lg sm:text-xl leading-relaxed max-w-[588px] text-vritti-secondary"
            >
              {HERO.subheading}
            </Typography>
          </div>

          {/* 4th: CTA Buttons — 800ms, scale effect */}
          <div className="hero-item">
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

        </div>

        {/* Dashboard mockup — 1000ms fade */}
        <div className="hero-dashboard">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

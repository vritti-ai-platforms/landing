import { Check } from 'lucide-react';
import { Button } from '@vritti/quantum-ui/Button';
import { Typography } from '@vritti/quantum-ui/Typography';
import { DoodleSparkle } from '@/components/ui/Doodles';
import { CTA } from '@/lib/constants/content';

export function CTASection() {
  return (
    <section id="cta" className="w-full py-16 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        <div
          className="relative rounded-3xl p-12 sm:p-16 text-center overflow-hidden shadow-2xl animate-on-scroll doodle-container"
          style={{
            background:
              'linear-gradient(164deg, rgb(28, 119, 227), rgba(28, 119, 227, 0.8))',
          }}
        >
          {/* Decorative sparkles */}
          <DoodleSparkle className="doodle doodle-sparkle top-8 left-8 w-5 h-5 text-white/30" />
          <DoodleSparkle className="doodle doodle-sparkle bottom-12 right-12 w-7 h-7 text-white/20" />
          <DoodleSparkle className="doodle doodle-sparkle top-16 right-24 w-4 h-4 text-white/25" />

          <div className="animate-on-scroll">
            <Typography
              variant="h2"
              align="center"
              className="border-0 pb-0 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-[560px] mx-auto"
            >
              Ready to{' '}
              <span className="text-highlight-amber">modernize</span>{' '}
              your operations?
            </Typography>
          </div>

          <div className="animate-on-scroll delay-100">
            <Typography
              variant="body1"
              align="center"
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-[672px] mx-auto"
            >
              {CTA.subheading}
            </Typography>
          </div>

          {/* Dual CTAs */}
          <div className="animate-scale-in delay-200 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-medium bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              {CTA.buttonText}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-8 h-14 text-lg font-medium text-white border border-white/30 hover:bg-white/10"
            >
              Get Early Access
            </Button>
          </div>

          {/* Trust signals */}
          <div className="animate-on-scroll delay-400 mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Check size={14} />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} />
              Instant access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

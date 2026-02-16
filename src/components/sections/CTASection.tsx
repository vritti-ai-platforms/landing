import { Button } from '@vritti/quantum-ui/Button';
import { Typography } from '@vritti/quantum-ui/Typography';
import { CTA } from '@/lib/constants/content';

export function CTASection() {
  return (
    <section id="cta" className="w-full py-24 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        <div
          className="relative rounded-3xl p-12 sm:p-16 text-center overflow-hidden shadow-2xl animate-on-scroll"
          style={{
            background:
              'linear-gradient(164deg, rgb(28, 119, 227), rgba(28, 119, 227, 0.8))',
          }}
        >
          <Typography
            variant="h2"
            align="center"
            className="border-0 pb-0 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-[560px] mx-auto"
          >
            {CTA.heading}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-[672px] mx-auto"
          >
            {CTA.subheading}
          </Typography>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-medium bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              {CTA.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

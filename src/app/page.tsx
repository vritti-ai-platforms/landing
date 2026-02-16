import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AICapabilitiesSection } from '@/components/sections/AICapabilitiesSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <AICapabilitiesSection />
      <ModulesSection />
      <CTASection />
    </main>
  );
}

import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Typography } from '@vritti/quantum-ui/Typography';
import { Separator } from '@vritti/quantum-ui/Separator';
import { Logo } from '@/components/ui/Logo';
import { FOOTER_LINKS } from '@/lib/constants/content';

const footerSections = [
  FOOTER_LINKS.platform,
  FOOTER_LINKS.resources,
  FOOTER_LINKS.company,
  FOOTER_LINKS.legal,
];

export function Footer() {
  return (
    <footer className="w-full border-t border-vritti bg-background">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/">
              <Logo />
            </Link>
            <Typography variant="body2" className="mt-4 leading-relaxed max-w-[220px] text-vritti-secondary">
              The Operating System for Modern Business
            </Typography>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <Typography variant="h6" className="mb-4">
                {section.title}
              </Typography>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-foreground text-vritti-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <Separator className="mt-12 bg-vritti-light" />
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Typography variant="caption" className="text-vritti-secondary">
            &copy; 2026 Vritti AI. All rights reserved.
          </Typography>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors hover:text-foreground text-vritti-secondary"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground text-vritti-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground text-vritti-secondary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@vritti/quantum-ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { NAV_LINKS } from '@/lib/constants/content';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-vritti bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent text-vritti-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle size="sm" />
          <Button className="rounded-full px-6">Book Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle size="sm" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-vritti bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent text-vritti-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button className="rounded-full mt-2 w-full">Book Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}

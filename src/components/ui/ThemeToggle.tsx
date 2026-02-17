'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@vritti/quantum-ui';
import { Button } from '@vritti/quantum-ui/Button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ size = 'sm' }: { size?: 'sm' | 'default' | 'lg' }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size={size === 'sm' ? 'sm' : 'default'} className="text-foreground" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size={size === 'sm' ? 'sm' : 'default'}
      onClick={toggleTheme}
      className="text-foreground"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}

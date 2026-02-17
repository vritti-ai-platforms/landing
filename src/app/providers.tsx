'use client';

import { ThemeProvider } from '@vritti/quantum-ui/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vritti-theme">
      {children}
    </ThemeProvider>
  );
}

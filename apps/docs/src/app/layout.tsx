import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enhancer UI - Modern React Component Library',
  description: 'A beautiful and accessible React UI component library with advanced animations and effects',
  keywords: ['react', 'ui library', 'components', 'typescript', 'tailwind'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Navigation />
            <main className="flex-1 px-6 pb-16 pt-24 md:px-16 md:pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

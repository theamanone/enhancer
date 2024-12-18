import { Button } from '@enhancer/core';
import { GithubIcon } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      <div className="relative mx-auto max-w-5xl pt-20 pb-24 text-center">
        <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
          Beautiful UI Components
          <br />
          Made Simple
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A modern React component library with advanced animations, accessibility features,
          and beautiful design. Perfect for building your next project.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">
            Get Started
          </Button>
          
          <Button size="lg" variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
        
        {/* Feature badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['TypeScript', 'React 18+', 'Tailwind CSS', 'Accessibility', 'Dark Mode'].map((feature) => (
            <div
              key={feature}
              className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { ComponentShowcase } from '@/components/component-showcase';

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <Features />
      <ComponentShowcase />
    </div>
  );
}

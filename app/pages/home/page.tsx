import IntroSection from '../home/introsection/page';
import TestimonialsSection from '../home/testimonialsSection/page';
import { JSX } from 'react';
import WhoWeAreSection from './whoAreWeSection/page';
import WhyUsSection from './whyUsSection/page';
import BlogSection from './blogSection/page';
import HeroSection from './heroSection/page';

export default function HomePage(): JSX.Element {
  return (
    <main className="bg-[#0a0e27]">
      <HeroSection />
      <WhoWeAreSection/>
      <IntroSection />
      <WhyUsSection/>
      <TestimonialsSection />
      <BlogSection/>
    </main>
  );
}
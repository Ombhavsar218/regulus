import { usePageMeta } from '../hooks/usePageMeta';
import { PageTransition } from '../components/common/Reveal';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Industries } from '../components/sections/Industries';
import { ERPDemo } from '../components/sections/ERPDemo';
import { WhyRegulus } from '../components/sections/WhyRegulus';
import { Process } from '../components/sections/Process';
import { WhatWeCanBuild } from '../components/sections/WhatWeCanBuild';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';

export function HomePage() {
  usePageMeta({
    title: 'REGULUS | Customized ERP Software & Business Technology Solutions',
    description:
      'REGULUS builds customized ERP systems, business software and professional websites that simplify operations and support business growth.',
    path: '/',
  });

  return (
    <PageTransition>
      <Hero />
      <Services />
      <About />
      <Industries />
      <ERPDemo />
      <WhyRegulus />
      <Process />
      <WhatWeCanBuild />
      <ContactCtaSection />
    </PageTransition>
  );
}

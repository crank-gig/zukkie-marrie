import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { DirectorMessage } from './components/sections/DirectorMessage';
import { CompanyOverview } from './components/sections/CompanyOverview';
import { Offices } from './components/sections/Offices';
import { VisionValues } from './components/sections/VisionValues';
import { History } from './components/sections/History';
import { Services } from './components/sections/Services';

// Below-the-fold sections are split out to keep the initial bundle lean.
const Projects = lazy(() =>
  import('./components/sections/Projects').then((module) => ({ default: module.Projects })),
);
const FeaturedPlan = lazy(() =>
  import('./components/sections/FeaturedPlan').then((module) => ({ default: module.FeaturedPlan })),
);
const Team = lazy(() => import('./components/sections/Team').then((module) => ({ default: module.Team })));
const Expertise = lazy(() =>
  import('./components/sections/Expertise').then((module) => ({ default: module.Expertise })),
);
const Capabilities = lazy(() =>
  import('./components/sections/Capabilities').then((module) => ({ default: module.Capabilities })),
);
const Equipment = lazy(() =>
  import('./components/sections/Equipment').then((module) => ({ default: module.Equipment })),
);
const QualityAssurance = lazy(() =>
  import('./components/sections/QualityAssurance').then((module) => ({ default: module.QualityAssurance })),
);
const Hse = lazy(() => import('./components/sections/Hse').then((module) => ({ default: module.Hse })));
const OrgChart = lazy(() =>
  import('./components/sections/OrgChart').then((module) => ({ default: module.OrgChart })),
);
const WhyChooseUs = lazy(() =>
  import('./components/sections/WhyChooseUs').then((module) => ({ default: module.WhyChooseUs })),
);
const Contact = lazy(() =>
  import('./components/sections/Contact').then((module) => ({ default: module.Contact })),
);

/** Loading placeholder shown while a deferred section chunk resolves. */
function SectionFallback() {
  return (
    <div className="container-content py-24" aria-hidden="true">
      <div className="h-4 w-32 animate-pulse rounded-full bg-navy-100" />
      <div className="mt-5 h-9 w-2/3 max-w-md animate-pulse rounded-lg bg-navy-100" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-40 animate-pulse rounded-2xl bg-navy-100" />
        ))}
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-full w-full bg-white">
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <DirectorMessage />
        <Offices />
        <VisionValues />
        <History />
        <Services />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
          <FeaturedPlan />
          <Team />
          <Expertise />
          <Capabilities />
          <Equipment />
          <QualityAssurance />
          <Hse />
          <OrgChart />
          <WhyChooseUs />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import PricingTeaser from './components/PricingTeaser';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import { initAnalytics, trackEvent, trackPageView } from './utils/analytics';
import { captureInitialUTM } from './utils/utm';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [intent, setIntent] = useState('trial'); // 'trial' | 'demo'

  // Simple A/B variant persisted per visitor
  const variant = useMemo(() => {
    const key = 'abVariant_v1';
    const stored = localStorage.getItem(key);
    if (stored) return stored;
    const v = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem(key, v);
    return v;
  }, []);

  useEffect(() => {
    initAnalytics(import.meta.env.VITE_GA_ID);
    captureInitialUTM();
    trackPageView(window.location.pathname);
  }, []);

  const openLead = (type) => {
    setIntent(type);
    setLeadModalOpen(true);
    trackEvent('cta_click', { type, variant });
  };

  const closeLead = () => setLeadModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Hero variant={variant} onPrimary={() => openLead('trial')} onSecondary={() => openLead('demo')} />
      <main>
        <Benefits onCta={() => openLead('trial')} />
        <Features />
        <Testimonial />
        <PricingTeaser onCta={() => openLead('trial')} onDemo={() => openLead('demo')} />
        <FAQ />
      </main>
      <Footer />

      <LeadForm open={leadModalOpen} onClose={closeLead} variant={variant} intent={intent} />
    </div>
  );
}

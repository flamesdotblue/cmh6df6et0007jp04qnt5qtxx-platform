import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero({ variant = 'A', onPrimary, onSecondary }) {
  const headline = variant === 'A'
    ? 'Know what your SaaS stack is doing — before something goes wrong.'
    : 'Full visibility across your SaaS — catch risks before they become incidents.';

  const subHeadline = 'Monitor permissions, integrations and compliance across all your SaaS tools — designed for SMBs.';

  const primaryLabel = variant === 'A' ? 'Start free trial' : 'Get started free';
  const secondaryLabel = variant === 'A' ? 'Book a demo' : 'See it in action';

  return (
    <section className="relative w-full">
      <div className="relative h-[680px] md:h-[720px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#0b0b0f]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{headline}</h1>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">{subHeadline}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-md bg-red-500 hover:bg-red-400 transition-colors text-white px-6 py-3 font-semibold">
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 transition-colors text-white px-6 py-3 font-semibold">
                  {secondaryLabel}
                </button>
              </div>
              <p className="mt-4 text-xs text-white/60">No credit card required. 14‑day free trial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

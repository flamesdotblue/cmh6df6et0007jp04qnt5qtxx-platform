export default function PricingTeaser({ onCta, onDemo }) {
  return (
    <section className="py-16 md:py-24 bg-[#0b0b0f]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold">Simple, transparent pricing</h2>
        <p className="mt-2 text-white/70">Start free. Upgrade when you’re ready.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Plan name="Free" price="$0" features={[
            'Up to 2 SaaS integrations',
            'Basic permission view',
            'Weekly risk summary',
          ]} cta="Start free" highlight onClick={onCta} />
          <Plan name="Starter" price="$99/mo" features={[
            'Up to 10 integrations',
            'Risk alerts + score',
            'Compliance export (PDF)',
          ]} cta="Start trial" onClick={onCta} />
          <Plan name="Pro" price="Custom" features={[
            'Unlimited integrations',
            'SSO, SCIM, API access',
            'SOC 2/ISO-ready reporting',
          ]} cta="Book a demo" onClick={onDemo} />
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, features, cta, onClick, highlight }) {
  return (
    <div className={`rounded-2xl border ${highlight ? 'border-red-500/40' : 'border-white/10'} bg-white/5 p-6 flex flex-col`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-xl font-bold">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {features.map((f) => (
          <li key={f} className="flex gap-2"><span className="text-green-400">•</span>{f}</li>
        ))}
      </ul>
      <button onClick={onClick} className={`mt-6 rounded-md px-4 py-2 font-semibold ${highlight ? 'bg-red-500 text-white hover:bg-red-400' : 'bg-white text-black hover:bg-white/90'}`}>{cta}</button>
    </div>
  );
}

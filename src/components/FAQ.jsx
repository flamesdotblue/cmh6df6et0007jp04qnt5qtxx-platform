export default function FAQ() {
  const faqs = [
    {
      q: 'Which SaaS tools are supported?',
      a: 'We support Google Workspace, Microsoft 365, Slack, GitHub, Okta, Notion, and 30+ more. Don’t see yours? Request it during onboarding.'
    },
    {
      q: 'How long does setup take?',
      a: 'Most teams connect their first tools in under 10 minutes with OAuth. No agents or network changes required.'
    },
    {
      q: 'Is my data safe?',
      a: 'Yes. Data is encrypted in transit and at rest. We follow security best practices and offer SOC 2-ready controls for customers on Pro.'
    },
    {
      q: 'What does the free trial include?',
      a: 'Full product access for 14 days, including integrations, risk scoring, and compliance exports. No credit card required.'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#12121a]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Eye, Bell, FileCheck, Shield } from 'lucide-react';

export default function Benefits({ onCta }) {
  const items = [
    {
      icon: Eye,
      title: 'Instant visibility into who has access to what',
      text: 'See users, roles, and permissions across Google Workspace, Microsoft 365, Slack, Github, and more — in one place.'
    },
    {
      icon: Bell,
      title: 'AI-powered risk scoring + actionable alerts',
      text: 'We surface risky integrations, dormant accounts, and excessive privileges, and notify you before it becomes an incident.'
    },
    {
      icon: FileCheck,
      title: 'Compliance reporting made simple',
      text: 'Generate export-ready reports for GDPR, ISO 27001, and SOC 2 without heavy consultancy or spreadsheets.'
    },
    {
      icon: Shield,
      title: 'Affordable & easy to set up',
      text: 'Connect in minutes with OAuth. No agent, no dedicated security team required.'
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#0b0b0f]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Why SMBs choose us</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Purpose-built for teams of 10–200. Get visibility, alerts, and compliance — without enterprise complexity.</p>
          </div>
          <button onClick={onCta} className="rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-white/90">Start free</button>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((b, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <b.icon className="h-6 w-6 text-red-400" />
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

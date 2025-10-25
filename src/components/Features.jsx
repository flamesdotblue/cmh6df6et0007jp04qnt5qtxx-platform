import { CheckCircle, Zap } from 'lucide-react';

export default function Features() {
  const integrations = ['Google Workspace', 'Microsoft 365', 'Slack', 'GitHub', 'Okta', 'Notion'];
  const bullets = [
    'Auto-discover SaaS tools and connected integrations',
    'Permission and role change tracking with history',
    'Risky OAuth scopes detection and revocation guidance',
    'Scheduled compliance exports (GDPR/ISO/SOC 2)',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0b0b0f] to-[#12121a]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              <Zap className="h-4 w-4 text-yellow-300" />
              Built for speed and clarity
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Everything you need to monitor your SaaS surface</h2>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-400" />
                  <span className="text-white/80">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">Data encrypted in transit and at rest. SSO support available. EU data residency by request.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Popular integrations</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {integrations.map((i) => (
                <div key={i} className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/80">{i}</div>
              ))}
            </div>
            <div className="mt-6 text-xs text-white/60">And 30+ more. Request yours during onboarding.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

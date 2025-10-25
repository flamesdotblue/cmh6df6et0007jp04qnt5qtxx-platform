import { useEffect, useMemo, useState } from 'react';
import { trackEvent } from '../utils/analytics';

export default function LeadForm({ open, onClose, variant = 'A', intent = 'trial' }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      setError('');
      setLoading(false);
    }
  }, [open]);

  const defaultTools = 'Google Workspace, Slack';

  const utm = useMemo(() => {
    try {
      const stored = localStorage.getItem('utmParams');
      return stored ? JSON.parse(stored) : {};
    } catch (e) { return {}; }
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '10-50',
    tools: defaultTools,
    intent,
    consent: true,
  });

  useEffect(() => {
    setForm((f) => ({ ...f, intent }));
  }, [intent]);

  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT || '';
  const calendly = import.meta.env.VITE_DEMO_LINK || 'https://calendly.com/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.name) {
      setError('Please enter your name and work email.');
      return;
    }
    setLoading(true);
    const payload = { ...form, variant, utm, ts: new Date().toISOString() };

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        const existing = JSON.parse(localStorage.getItem('leads') || '[]');
        existing.push(payload);
        localStorage.setItem('leads', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 600));
      }
      setSuccess(true);
      trackEvent('lead_submit', { intent: form.intent, variant });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-[#101018] border border-white/10 p-6">
        {!success ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{intent === 'demo' ? 'Book a demo' : 'Start your free trial'}</h3>
                <p className="mt-1 text-sm text-white/70">We’ll follow up with next steps. No spam.</p>
              </div>
              <button onClick={onClose} aria-label="Close" className="text-white/60 hover:text-white">✕</button>
            </div>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-white/80">Full name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500" placeholder="Priya Kumar"/>
                </div>
                <div>
                  <label className="text-sm text-white/80">Work email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500" placeholder="priya@company.com"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-white/80">Company</label>
                  <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500" placeholder="Acme Inc."/>
                </div>
                <div>
                  <label className="text-sm text-white/80">Company size</label>
                  <select value={form.companySize} onChange={(e) => setForm({ ...form, companySize: e.target.value })} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500">
                    <option>1-9</option>
                    <option>10-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-white/80">SaaS tools used</label>
                <input value={form.tools} onChange={(e) => setForm({ ...form, tools: e.target.value })} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500" placeholder="Google Workspace, Slack, GitHub"/>
              </div>
              <input type="hidden" name="variant" value={variant} readOnly />
              <input type="hidden" name="intent" value={form.intent} readOnly />
              {error && <div className="text-sm text-red-400">{error}</div>}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-white/70">
                  <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="h-4 w-4" />
                  I agree to the privacy policy.
                </label>
                <div className="flex gap-2">
                  <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-white/10 text-white/80 hover:text-white">Cancel</button>
                  <button disabled={loading} type="submit" className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-400 disabled:opacity-60 font-semibold">
                    {loading ? 'Submitting…' : intent === 'demo' ? 'Request demo' : 'Start trial'}
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="text-2xl font-bold">Thank you!</div>
            <p className="mt-2 text-white/70">We’ve received your request. Check your email for next steps.</p>
            {intent === 'demo' && (
              <a href={calendly} target="_blank" rel="noreferrer" className="inline-block mt-6 px-5 py-2 rounded-md bg-white text-black font-semibold hover:bg-white/90">Book a time</a>
            )}
            <button onClick={onClose} className="block mx-auto mt-4 text-white/70 hover:text-white">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

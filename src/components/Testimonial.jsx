export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-[#12121a]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-center">
            <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=256&auto=format&fit=crop" alt="Customer headshot" className="h-20 w-20 rounded-full object-cover"/>
            <div>
              <p className="text-lg md:text-xl">“We finally have one place to see who has access across all our tools. The risk alerts help us act before issues escalate — and the auditor loved the reports.”</p>
              <p className="mt-3 text-sm text-white/70">Priya K, IT & Ops Manager — Fintech SMB (120 FTE)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

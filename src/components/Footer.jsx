export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0f]">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm text-white/70">© {new Date().getFullYear()} SaaS Monitor Co.</div>
          <div className="text-xs text-white/50 mt-1">Built for SMBs across APAC & India.</div>
        </div>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "হোম", labelEn: "Home" },
    { id: "about", label: "পরিচিতি", labelEn: "About" },
    { id: "education", label: "শিক্ষা", labelEn: "Education" },
    { id: "experience", label: "অভিজ্ঞতা", labelEn: "Experience" },
    { id: "courses", label: "কোর্সসমূহ", labelEn: "Courses" },
    { id: "activities", label: "কার্যক্রম", labelEn: "Activities" },
    { id: "contact", label: "যোগাযোগ", labelEn: "Contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#145A46] text-white transition-all duration-300 shadow-md ${
        isScrolled ? "py-3 sm:py-3.5" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark as per Top Bar Contract */}
          <button
            onClick={() => scrollTo("hero")}
            className="text-left group cursor-pointer focus:outline-none relative py-1 px-1.5 sm:px-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
            aria-label="Mufti Inzamamul Islam"
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9B76E] group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(217,183,110,0.8)]" />
              <div>
                <span className="text-base sm:text-xl font-bold tracking-tight text-[#faf8f4] group-hover:text-[#D9B76E] transition-colors relative block leading-tight font-heading">
                  মুফতী ইনজামামুল ইসলাম
                </span>
                <span className="text-[10px] font-cinzel text-[#D9B76E] tracking-widest uppercase hidden xs:block font-medium">
                  Islamic Scholar & Educator
                </span>
              </div>
            </div>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-1.5 transition-colors hover:text-[#D9B76E] cursor-pointer whitespace-nowrap ${
                    isActive ? "text-[#D9B76E] font-bold" : "text-white/85"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D9B76E] rounded-full shadow-[0_0_6px_rgba(217,183,110,0.7)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href="https://wa.me/8801923595009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="হোয়াটসঅ্যাপে যোগাযোগ"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] active:scale-95 rounded-xl transition-all shadow-sm"
              title="হোয়াটসঅ্যাপ: +8801923595009"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden md:inline">হোয়াটসঅ্যাপ</span>
            </a>

            <button
              onClick={() => scrollTo("courses")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#145A46] bg-[#D9B76E] hover:bg-[#e4c683] active:scale-95 rounded-xl transition-all shadow-sm border border-[#D9B76E]/60 cursor-pointer whitespace-nowrap font-medium"
            >
              <span className="text-[#0a3126] font-bold">কোর্সসমূহ</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0a3126]" />
            </button>

            {/* Mobile Hamburger Toggle with refined touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/15 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#D9B76E]/50"
              aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D9B76E]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Thin line along bottom edge of header with moving continuous golden light */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1a6e56] overflow-hidden pointer-events-none">
        {/* Continuous looping golden light beam */}
        <div
          className="absolute top-0 bottom-0 w-36 sm:w-56 bg-gradient-to-r from-transparent via-[#D9B76E] to-transparent animate-header-gold-light opacity-95 shadow-[0_0_10px_#D9B76E]"
        />
        {/* Subtle static ambient golden line baseline */}
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#D9B76E]/40 to-transparent" />
      </div>

      {/* Mobile Drawer Menu with deep green theme matching header */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e4434] border-b border-[#D9B76E]/30 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-5 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? "bg-[#145A46] text-[#D9B76E] shadow-sm border border-[#D9B76E]/30"
                      : "text-white/90 hover:bg-white/10 active:bg-white/15"
                  }`}
                >
                  <span className="font-heading text-base">{item.label}</span>
                  <span className={`text-[11px] font-cinzel tracking-wider ${isActive ? "text-[#D9B76E]" : "text-white/60"}`}>
                    {item.labelEn}
                  </span>
                </button>
              );
            })}

            <div className="pt-3.5 mt-2 border-t border-white/15 grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/8801923595009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] active:scale-95 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>হোয়াটসঅ্যাপ</span>
              </a>

              <button
                onClick={() => scrollTo("courses")}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#0a3126] bg-[#D9B76E] hover:bg-[#e4c683] active:scale-95 transition-all shadow-sm"
              >
                <span>কোর্সসমূহ</span>
                <ArrowUpRight className="w-4 h-4 text-[#0a3126]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

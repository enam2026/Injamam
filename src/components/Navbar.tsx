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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f4]/95 backdrop-blur-md shadow-sm border-b border-[#e5dfd3] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark as per Top Bar Contract */}
          <button
            onClick={() => scrollTo("hero")}
            className="text-left group cursor-pointer focus:outline-none relative py-1 px-1.5 sm:px-2.5 rounded-xl hover:bg-[#efe9dc]/70 transition-all duration-300"
            aria-label="Mufti Inzamamul Islam"
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059] group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(197,160,89,0.7)]" />
              <div>
                <span className="text-base sm:text-xl font-bold tracking-tight text-[#0f3d2e] group-hover:text-[#185d46] transition-colors relative block leading-tight font-heading">
                  মুফতী ইনজামামুল ইসলাম
                </span>
                <span className="text-[10px] font-cinzel text-[#8c7447] tracking-widest uppercase hidden xs:block">
                  Islamic Scholar & Educator
                </span>
              </div>
            </div>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#3e4f45]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-1.5 transition-colors hover:text-[#0f3d2e] cursor-pointer whitespace-nowrap ${
                    isActive ? "text-[#0f3d2e] font-bold" : "text-[#4d5d53]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#c5a059] to-[#0f3d2e] rounded-full" />
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
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0f3d2e] hover:bg-[#15543f] active:scale-95 rounded-xl transition-all shadow-sm border border-[#c5a059]/40 cursor-pointer whitespace-nowrap"
            >
              <span>কোর্সসমূহ</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#dfc285]" />
            </button>

            {/* Mobile Hamburger Toggle with refined touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#0f3d2e] bg-[#f2eee3] hover:bg-[#eae3d5] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/20"
              aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with polished layout */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f4]/98 backdrop-blur-md border-b border-[#e5dfd3] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-5 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? "bg-[#0f3d2e] text-white shadow-sm"
                      : "text-[#2e3e34] hover:bg-[#eeeae0] active:bg-[#e4ded0]"
                  }`}
                >
                  <span className="font-heading text-base">{item.label}</span>
                  <span className={`text-[11px] font-cinzel tracking-wider ${isActive ? "text-[#dfc285]" : "text-[#7a8a81]"}`}>
                    {item.labelEn}
                  </span>
                </button>
              );
            })}

            <div className="pt-3.5 mt-2 border-t border-[#e8e2d4] grid grid-cols-2 gap-2">
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
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#0f3d2e] hover:bg-[#144f3b] active:scale-95 transition-all shadow-sm border border-[#c5a059]/40"
              >
                <span>কোর্সসমূহ</span>
                <ArrowUpRight className="w-4 h-4 text-[#dfc285]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

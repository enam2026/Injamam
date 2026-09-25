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
            className="text-left group cursor-pointer focus:outline-none relative py-1 px-2.5 rounded-xl hover:bg-[#efe9dc]/70 transition-all duration-300"
            aria-label="Mufti Inzamamul Islam"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] group-hover:scale-125 transition-transform animate-ping" />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0f3d2e] group-hover:text-[#185d46] transition-colors relative">
                মুফতী ইনজামামুল ইসলাম
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-[#c5a059] to-[#0f3d2e]" />
              </span>
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
                  className={`relative py-1 transition-colors hover:text-[#0f3d2e] cursor-pointer whitespace-nowrap ${
                    isActive ? "text-[#0f3d2e] font-semibold" : "text-[#4d5d53]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/8801923595009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="হোয়াটসঅ্যাপে যোগাযোগ"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1ca850] rounded-lg transition-colors shadow-sm"
              title="হোয়াটসঅ্যাপ: +8801923595009"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden md:inline">হোয়াটসঅ্যাপ</span>
            </a>

            <button
              onClick={() => scrollTo("courses")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0f3d2e] hover:bg-[#15543f] active:bg-[#0a2b20] rounded-lg transition-colors shadow-sm border border-[#c5a059]/40 cursor-pointer whitespace-nowrap"
            >
              <span>কোর্সসমূহ</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#dfc285]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0f3d2e] hover:bg-[#efebe2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/20"
              aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f4] border-b border-[#e5dfd3] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-5 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-left transition-colors ${
                    isActive
                      ? "bg-[#0f3d2e] text-white"
                      : "text-[#2e3e34] hover:bg-[#eeeae0]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs opacity-60 font-sans tracking-wide">
                    {item.labelEn}
                  </span>
                </button>
              );
            })}

            <div className="pt-3 space-y-2">
              <a
                href="https://wa.me/8801923595009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>হোয়াটসঅ্যাপ: +8801923595009</span>
              </a>

              <button
                onClick={() => scrollTo("courses")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-semibold text-white bg-[#0f3d2e] hover:bg-[#144f3b] transition-colors shadow"
              >
                <span>কোর্সসমূহ দেখুন</span>
                <ArrowUpRight className="w-4 h-4 text-[#dfc285]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

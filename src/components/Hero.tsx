import { ArrowRight, BookOpen, GraduationCap, Compass, Briefcase, Award, ShieldCheck, UserCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ScholarPortrait, IslamicGeometricRing, IslamicStarIcon } from "./IslamicMotifs";

export const Hero = () => {
  const { scholar } = PORTFOLIO_DATA;

  const scrollTo = (id: string) => {
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
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-24 bg-[#faf8f4] overflow-hidden"
    >
      {/* Subtle background geometric rings & ambient gradients */}
      <IslamicGeometricRing className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-15" />
      <IslamicGeometricRing className="absolute bottom-0 right-10 w-[500px] h-[500px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Scholarly Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small label (zero-pill: unboxed text with subtle separator) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0f3d2e] tracking-wide">
              <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
              <span className="text-[#0f3d2e]">{scholar.titleBn}</span>
            </div>

            {/* Main Heading & Animated Name Button */}
            <div className="space-y-3">
              <div className="inline-block relative">
                {/* Background animated aura around name button */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#c5a059]/40 via-[#dfc285]/60 to-[#0f3d2e]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <button
                  onClick={() => scrollTo("about")}
                  className="relative group cursor-pointer text-left focus:outline-none block"
                  aria-label="মুফতী ইনজামামুল ইসলাম - পরিচিতি"
                >
                  <div className="relative flex items-center gap-3.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#0f3d2e] via-[#144e3b] to-[#0a291f] text-white border border-[#dfc285]/60 shadow-[0_4px_20px_rgba(15,61,46,0.2)] hover:shadow-[0_6px_28px_rgba(197,160,89,0.35)] transition-all duration-300 transform hover:-translate-y-0.5">
                    {/* Animated Light Shimmer Ribbon across button */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="w-[200%] h-full absolute -left-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[nameShimmer_3.5s_infinite]" />
                    </div>

                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#09241b] border border-[#dfc285]/50 flex items-center justify-center text-[#dfc285] group-hover:rotate-12 transition-transform duration-300 shadow-inner shrink-0">
                      <IslamicStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfc285]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#faf8f4] group-hover:text-[#dfc285] tracking-tight leading-tight font-heading transition-colors">
                          {scholar.nameBn}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-[#c5a059]/20 text-[#dfc285] border border-[#dfc285]/40 animate-pulse">
                          অফিসিয়াল প্রোফাইল
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-cinzel text-[#dfc285]/90 tracking-widest uppercase font-medium mt-0.5">
                        {scholar.nameEn}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#3b4c42] leading-relaxed max-w-2xl">
              {scholar.heroIntro}
            </p>

            {/* Core credentials summary */}
            <div className="pt-2 pb-1 border-y border-[#e6dfd1] grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-xs sm:text-sm text-[#44564c]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0f3d2e] shrink-0" />
                <span>শিক্ষা সচিব ও শাইখুল হাদিস — জামিয়া রহিমিয়া আরাবিয়া</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>মেন্টর — খিদমাহ ইনস্টিটিউট</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo("about")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0f3d2e] hover:bg-[#15543f] active:bg-[#0a2b20] transition-all duration-200 shadow-md hover:shadow-lg border border-[#c5a059]/30 cursor-pointer"
              >
                <span>আমার সম্পর্কে জানুন</span>
                <ArrowRight className="w-4 h-4 text-[#dfc285]" />
              </button>

              <button
                onClick={() => scrollTo("courses")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0f3d2e] bg-[#f2eee3] hover:bg-[#eae3d5] active:bg-[#ded5c4] transition-all duration-200 border border-[#d8cfbd] cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#c5a059]" />
                <span>কোর্সসমূহ দেখুন</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-3 flex items-center gap-4 text-xs text-[#5f7166]">
              <span>বিশেষায়িত ইফতা ও ফিকহ</span>
              <span aria-hidden="true" className="text-[#c5a059]">·</span>
              <span>উচ্চতর হাদিস শিক্ষা</span>
              <span aria-hidden="true" className="text-[#c5a059]">·</span>
              <span>ক্যারিয়ার মেন্টরশিপ</span>
            </div>
          </div>

          {/* Right Column: Large Professional Portrait Placeholder with Animated Side Infographics */}
          <div className="lg:col-span-5 relative">
            {/* Subtle Islamic geometric visuals behind portrait without distracting */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#c5a059]/15 via-transparent to-[#0f3d2e]/10 rounded-3xl transform rotate-1 scale-105 pointer-events-none" />
            <div className="absolute -inset-2 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />

            <div className="relative">
              <ScholarPortrait photoUrl={scholar.photoUrl} size="hero" />

              {/* Animated Floating Side Infographics (Desktop / Tablet) */}
              {/* Infographic 1: ইসলামিক স্কলার (Top Left) */}
              <div className="hidden sm:flex absolute -left-6 top-8 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#dfc285]/70 shadow-[0_4px_16px_rgba(15,61,46,0.12)] animate-float-1 group hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#0f3d2e] flex items-center justify-center text-[#dfc285] shadow-sm shrink-0">
                  <Award className="w-4 h-4 text-[#dfc285]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-[#0f3d2e] tracking-tight font-heading">
                    ইসলামিক স্কলার
                  </span>
                  <span className="block text-[9px] text-[#718579] font-medium leading-none">
                    ইফতা ও শাইখুল হাদিস
                  </span>
                </div>
              </div>

              {/* Infographic 2: শিক্ষক (Top Right) */}
              <div className="hidden sm:flex absolute -right-6 top-20 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#dfc285]/70 shadow-[0_4px_16px_rgba(15,61,46,0.12)] animate-float-2 group hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#144938] flex items-center justify-center text-[#dfc285] shadow-sm shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#dfc285]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-[#0f3d2e] tracking-tight font-heading">
                    শিক্ষক ও শিক্ষাবিদ
                  </span>
                  <span className="block text-[9px] text-[#718579] font-medium leading-none">
                    দাওরায়ে হাদিস ও আরবি
                  </span>
                </div>
              </div>

              {/* Infographic 3: মেন্টর (Bottom Left) */}
              <div className="hidden sm:flex absolute -left-6 bottom-24 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#dfc285]/70 shadow-[0_4px_16px_rgba(15,61,46,0.12)] animate-float-3 group hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#0f3d2e] flex items-center justify-center text-[#dfc285] shadow-sm shrink-0">
                  <Compass className="w-4 h-4 text-[#dfc285]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-[#0f3d2e] tracking-tight font-heading">
                    পরামর্শক ও মেন্টর
                  </span>
                  <span className="block text-[9px] text-[#718579] font-medium leading-none">
                    ক্যারিয়ার ও জীবনযাপন
                  </span>
                </div>
              </div>

              {/* Infographic 4: উদ্যোক্তা (Bottom Right) */}
              <div className="hidden sm:flex absolute -right-6 bottom-12 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#dfc285]/70 shadow-[0_4px_16px_rgba(15,61,46,0.12)] animate-float-4 group hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#17523f] flex items-center justify-center text-[#dfc285] shadow-sm shrink-0">
                  <Briefcase className="w-4 h-4 text-[#dfc285]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-[#0f3d2e] tracking-tight font-heading">
                    উদ্যোক্তা
                  </span>
                  <span className="block text-[9px] text-[#718579] font-medium leading-none">
                    খিদমাহ ইনস্টিটিউট ও সমাজ
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Responsive Infographic Bar (visible on small mobile screens below photo) */}
            <div className="sm:hidden grid grid-cols-2 gap-2 mt-4 pt-1">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/95 border border-[#dfc285]/60 shadow-sm animate-float-1">
                <div className="w-7 h-7 rounded-lg bg-[#0f3d2e] flex items-center justify-center text-[#dfc285] shrink-0">
                  <Award className="w-3.5 h-3.5 text-[#dfc285]" />
                </div>
                <span className="text-[11px] font-bold text-[#0f3d2e]">ইসলামিক স্কলার</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/95 border border-[#dfc285]/60 shadow-sm animate-float-2">
                <div className="w-7 h-7 rounded-lg bg-[#144938] flex items-center justify-center text-[#dfc285] shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-[#dfc285]" />
                </div>
                <span className="text-[11px] font-bold text-[#0f3d2e]">শিক্ষক</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/95 border border-[#dfc285]/60 shadow-sm animate-float-3">
                <div className="w-7 h-7 rounded-lg bg-[#0f3d2e] flex items-center justify-center text-[#dfc285] shrink-0">
                  <Compass className="w-3.5 h-3.5 text-[#dfc285]" />
                </div>
                <span className="text-[11px] font-bold text-[#0f3d2e]">মেন্টর</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/95 border border-[#dfc285]/60 shadow-sm animate-float-4">
                <div className="w-7 h-7 rounded-lg bg-[#17523f] flex items-center justify-center text-[#dfc285] shrink-0">
                  <Briefcase className="w-3.5 h-3.5 text-[#dfc285]" />
                </div>
                <span className="text-[11px] font-bold text-[#0f3d2e]">উদ্যোক্তা</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

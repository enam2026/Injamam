import { CheckCircle2, Award, Landmark, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ScholarPortrait, IslamicStarIcon } from "./IslamicMotifs";

export const About = () => {
  const { about, scholar } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative">
              {/* Outer soft framing */}
              <div className="absolute -inset-3 bg-[#e8e0d0] rounded-2xl transform -rotate-1 pointer-events-none" />
              <div className="relative">
                <ScholarPortrait
                  photoUrl={scholar.aboutImageUrl}
                  size="about"
                  className="w-full"
                />

                {/* Sub-badge highlighting institutions */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#e2d8c3] shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#0f3d2e] font-semibold">
                    <Landmark className="w-4 h-4 text-[#c5a059]" />
                    <span>শিক্ষা সচিব ও শাইখুল হাদিস — জামিয়া রহিমিয়া আরাবিয়া</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#0f3d2e] font-semibold border-t border-[#f0ebd9] pt-2">
                    <Building2 className="w-4 h-4 text-[#c5a059]" />
                    <span>অফিসিয়াল মেন্টর — খিদমাহ ইনস্টিটিউট</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            {/* Header Lockup */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
                <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
                <span>{about.subheading}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
                {about.heading}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#324339] leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-white border border-[#e5ddcb] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f3d2e] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0f3d2e]">ফিকহ ও গবেষণা</div>
                  <div className="text-xs text-[#5e7166]">ইসলামী আইন ও সমসাময়িক ফতোয়া বিশারদ</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#e5ddcb] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f3d2e] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0f3d2e]">হাদিস পাঠদান</div>
                  <div className="text-xs text-[#5e7166]">সিহাহ সিত্তাহ ও উসূলে হাদিসের সুনিপুণ দরস</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#e5ddcb] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f3d2e] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0f3d2e]">যুব ও শিক্ষার্থী মেন্টরশিপ</div>
                  <div className="text-xs text-[#5e7166]">সঠিক ক্যারিয়ার ও নৈতিক মূল্যবোধ গঠন</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#e5ddcb] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f3d2e] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0f3d2e]">হালাল ব্যবসায়িক উদ্যোগ</div>
                  <div className="text-xs text-[#5e7166]">দ্বীনি দাওয়াহর পাশাপাশি স্বাবলম্বী উদ্যোগ</div>
                </div>
              </div>
            </div>

            {/* Mission Note */}
            <div className="p-4 rounded-xl bg-[#f2eee3] border-l-4 border-[#0f3d2e] text-xs sm:text-sm text-[#384a40] leading-relaxed">
              <span className="font-semibold text-[#0f3d2e]">মূল দর্শন: </span>
              {about.mission}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

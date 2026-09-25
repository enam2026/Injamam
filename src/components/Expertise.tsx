import { Scale, BookOpenCheck, Compass, Users } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { IslamicStarIcon, CornerOrnament } from "./IslamicMotifs";

export const Expertise = () => {
  const { expertise } = PORTFOLIO_DATA;

  const getIcon = (name: string) => {
    switch (name) {
      case "Scale":
        return <Scale className="w-6 h-6 text-[#0f3d2e]" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-6 h-6 text-[#0f3d2e]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#0f3d2e]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#0f3d2e]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-[#f7f3ea] border-t border-[#e6dfd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
            <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
            <span>পারদর্শিতা ও বিশেষত্ব</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
            দক্ষতা ও বিশেষত্ব
          </h2>
          <p className="text-sm sm:text-base text-[#4f6155]">
            শাস্ত্রীয় পাণ্ডিত্য ও আধুনিক প্রায়োগিক পরিচালনার সমন্বয়
          </p>
        </div>

        {/* 4 Modern Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, idx) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl p-7 border border-[#e4dcce] shadow-[0_2px_12px_rgba(15,61,46,0.03)] hover:shadow-[0_8px_24px_rgba(15,61,46,0.07)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <CornerOrnament position="top-right" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#faf7f0] border border-[#e2d7c5] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#0f3d2e] transition-all duration-300">
                  <div className="group-hover:text-[#dfc285] transition-colors duration-300">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <div className="text-[11px] font-cinzel text-[#8c7447] mb-1">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-[#0f3d2e] mb-2.5 leading-snug font-heading">
                  {item.title}
                </h3>

                <p className="text-sm text-[#46574d] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ebd9] flex items-center justify-between text-xs text-[#708277]">
                <span>বিশেষ পারদর্শিতা</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

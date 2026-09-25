import { GraduationCap, Award, BookCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { IslamicStarIcon, CornerOrnament } from "./IslamicMotifs";

export const Education = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-[#f6f2e8] border-t border-[#e6dfd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
            <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
            <span>অ্যাকাডেমিক পটভূমি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
            শিক্ষাগত যোগ্যতা
          </h2>
          <p className="text-sm sm:text-base text-[#4f6155]">
            ঐতিহ্যবাহী কওমি ও আলিয়া উভয় শিক্ষাধারায় ফিকহ, হাদিস ও ইসলামী জ্ঞানের সর্বোচ্চ সনদ
          </p>
        </div>

        {/* 3 Premium Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {education.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl p-7 lg:p-8 border border-[#e4dcce] shadow-[0_2px_12px_rgba(15,61,46,0.04)] hover:shadow-[0_8px_24px_rgba(15,61,46,0.08)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <CornerOrnament position="top-right" />

              <div>
                {/* Number & Icon lockup */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#faf7f0] border border-[#e2d7c5] flex items-center justify-center text-[#0f3d2e] group-hover:bg-[#0f3d2e] group-hover:text-[#dfc285] transition-colors duration-300">
                    {index === 0 ? (
                      <Award className="w-6 h-6" />
                    ) : index === 1 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <BookCheck className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-2xl font-bold text-[#c5a059] font-cinzel opacity-75">
                    {item.code}
                  </span>
                </div>

                {/* Subtitle / Department */}
                {item.institutionType && (
                  <div className="text-xs font-medium text-[#7a8c80] mb-1">
                    {item.institutionType}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0f3d2e] mb-3 leading-snug font-heading">
                  {item.degree}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#46574d] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags without static pills (Zero-Pill discipline: unboxed text with subtle separator) */}
              {item.tags && (
                <div className="pt-4 border-t border-[#f0ebd9] flex items-center flex-wrap gap-2 text-xs text-[#63756a]">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="flex items-center gap-2">
                      <span>{tag}</span>
                      {tIdx < item.tags!.length - 1 && (
                        <span aria-hidden="true" className="text-[#c5a059]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

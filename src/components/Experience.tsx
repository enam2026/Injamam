import { Briefcase, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { IslamicStarIcon } from "./IslamicMotifs";

export const Experience = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#faf8f4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
            <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
            <span>কর্মজীবন ও প্রাতিষ্ঠানিক সেবা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
            অভিজ্ঞতা ও দায়িত্ব
          </h2>
          <p className="text-sm sm:text-base text-[#4f6155]">
            দ্বীনি শিক্ষা প্রতিষ্ঠান পরিচালনা, খুতবা ও সমাজসেবামূলক গুরুত্বপূর্ণ দায়িত্বসমূহ
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#d9d0be] space-y-10 sm:space-y-12">
          {experience.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#faf8f4] border-2 border-[#0f3d2e] flex items-center justify-center group-hover:border-[#c5a059] transition-colors duration-300">
                <span
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                    item.isCurrent ? "bg-[#0f3d2e] animate-pulse" : "bg-[#c5a059]"
                  }`}
                />
              </div>

              {/* Timeline Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e4dcce] shadow-[0_2px_12px_rgba(15,61,46,0.03)] hover:shadow-[0_6px_20px_rgba(15,61,46,0.06)] transition-all duration-300">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs text-[#607166]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span className="font-medium text-[#0f3d2e]">{item.organization}</span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 text-[#607166]">
                          <MapPin className="w-3 h-3 text-[#c5a059]" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>

                  {item.period && (
                    <span className="text-[11px] font-medium text-[#7c6439] bg-[#fbf8f0] px-2.5 py-0.5 rounded border border-[#e8dfcf]">
                      {item.period}
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold text-[#0f3d2e] mb-2 font-heading">
                  {item.role}
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-[#46574d] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { PORTFOLIO_DATA } from "../data/portfolioData";
import { IslamicStarIcon, IslamicGeometricRing } from "./IslamicMotifs";

export const Quote = () => {
  const { scholar } = PORTFOLIO_DATA;

  return (
    <section className="relative py-20 lg:py-24 bg-[#0a291f] text-white overflow-hidden">
      {/* Background Decorative Rings */}
      <IslamicGeometricRing className="absolute -top-32 -left-32 w-[550px] h-[550px] opacity-15" />
      <IslamicGeometricRing className="absolute -bottom-32 -right-32 w-[550px] h-[550px] opacity-15" />

      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Star Medallion */}
        <div className="w-12 h-12 rounded-full border border-[#c5a059]/50 bg-[#0d3427] flex items-center justify-center mx-auto shadow-lg">
          <IslamicStarIcon className="w-6 h-6 text-[#dfc285]" />
        </div>

        {/* Quote Typography */}
        <blockquote className="space-y-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#faf8f4] leading-relaxed tracking-tight font-heading">
            {scholar.quoteText}
          </p>
        </blockquote>

        {/* Citation & Attributable Metadata */}
        <div className="pt-4 flex flex-col items-center justify-center space-y-1">
          <div className="w-16 h-0.5 bg-[#c5a059] rounded-full mb-2" />
          <cite className="not-italic text-sm sm:text-base font-bold text-[#dfc285] tracking-wide">
            — {scholar.quoteAuthor}
          </cite>
          <span className="text-xs text-[#a0b5ab]">
            {scholar.titleBn}
          </span>
        </div>
      </div>
    </section>
  );
};

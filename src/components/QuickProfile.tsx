import { Calendar, HeartPulse, GraduationCap, Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { CornerOrnament } from "./IslamicMotifs";

export const QuickProfile = () => {
  const { quickStats } = PORTFOLIO_DATA;

  const getIcon = (name: string) => {
    switch (name) {
      case "Calendar":
        return <Calendar className="w-5 h-5 text-[#c5a059]" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-[#c5a059]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#c5a059]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#c5a059]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#f4efe4] border-y border-[#e5ddcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {quickStats.map((stat, idx) => (
            <div
              key={stat.id}
              className="relative bg-white rounded-2xl p-4 sm:p-7 border border-[#e4dcce] shadow-[0_2px_12px_rgba(15,61,46,0.04)] hover:shadow-[0_6px_20px_rgba(15,61,46,0.08)] transition-all duration-300 group overflow-hidden"
            >
              <CornerOrnament position="top-right" />

              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#faf7f0] border border-[#e2d7c5] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {getIcon(stat.iconName)}
                </div>
                <span className="text-[10px] sm:text-[11px] font-cinzel text-[#8c7447] tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              {/* Stat Value */}
              <div className="text-xl sm:text-3xl font-extrabold text-[#0f3d2e] tracking-tight tabular-nums mb-0.5 sm:mb-1 font-heading">
                {stat.value}
              </div>

              {/* Stat Label */}
              <div className="text-xs sm:text-sm font-semibold text-[#2f4035] mb-0.5 sm:mb-1 leading-snug">
                {stat.label}
              </div>

              {/* Sublabel */}
              {stat.sublabel && (
                <div className="text-[11px] sm:text-xs text-[#6b7d72] line-clamp-1">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

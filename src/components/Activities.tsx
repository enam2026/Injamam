import { useState } from "react";
import { MapPin, Calendar, ZoomIn, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA, ActivityItem } from "../data/portfolioData";
import { ThematicPlaceholder, IslamicStarIcon, CornerOrnament } from "./IslamicMotifs";
import { LightboxModal } from "./LightboxModal";

export const Activities = () => {
  const { activities, activityCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState("সকল কার্যক্রম");
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const filteredActivities =
    activeCategory === "সকল কার্যক্রম"
      ? activities
      : activities.filter((act) => act.category === activeCategory);

  const handleNext = () => {
    if (!selectedActivity) return;
    const currentIndex = filteredActivities.findIndex((a) => a.id === selectedActivity.id);
    const nextIndex = (currentIndex + 1) % filteredActivities.length;
    setSelectedActivity(filteredActivities[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedActivity) return;
    const currentIndex = filteredActivities.findIndex((a) => a.id === selectedActivity.id);
    const prevIndex = (currentIndex - 1 + filteredActivities.length) % filteredActivities.length;
    setSelectedActivity(filteredActivities[prevIndex]);
  };

  return (
    <section id="activities" className="py-20 lg:py-28 bg-[#f6f2e8] border-t border-[#e5ddcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
            <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
            <span>দ্বীনি ও সামাজিক সম্পৃক্ততা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
            কার্যক্রম
          </h2>
          <p className="text-sm sm:text-base text-[#4f6155]">
            দরস, দাওয়াহ, সেমিনার, মেন্টরশিপ ও সমাজকল্যাণমূলক বহুমুখী উদ্যোগসমূহ
          </p>
        </div>

        {/* Categories Segmented Filter (Allowed interactive buttons as per skill rules) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none no-scrollbar">
          {activityCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0f3d2e] text-white shadow-sm border border-[#0f3d2e]"
                    : "bg-white text-[#44564c] hover:bg-[#ede7da] border border-[#e1d8c7]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => setSelectedActivity(act)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#e4dcce] shadow-[0_2px_12px_rgba(15,61,46,0.03)] hover:shadow-[0_10px_28px_rgba(15,61,46,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <CornerOrnament position="top-right" />

              <div>
                {/* Media Placeholder */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <ThematicPlaceholder
                    category={act.category}
                    title={act.title}
                    theme="activity"
                    aspectRatio="wide"
                    imageUrl={act.imageUrl}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0f3d2e]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#0f3d2e] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 text-[#c5a059]" />
                      বড় করে দেখুন
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#708277]">
                    <span className="font-semibold text-[#0f3d2e]">{act.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#c5a059]" />
                      {act.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0f3d2e] group-hover:text-[#175b44] transition-colors leading-snug font-heading">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#48594e] line-clamp-2 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Bottom footer */}
              <div className="px-6 pb-5 pt-0 flex items-center justify-between text-xs text-[#63766b] border-t border-[#f4ede0] mt-3">
                <span className="flex items-center gap-1 text-[#617469]">
                  <MapPin className="w-3 h-3 text-[#c5a059]" />
                  {act.location}
                </span>
                <span className="text-[#0f3d2e] font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  ভিউ <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Preview */}
      <LightboxModal
        activity={selectedActivity}
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={filteredActivities.length > 1}
      />
    </section>
  );
};

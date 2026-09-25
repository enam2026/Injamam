import { useEffect } from "react";
import { X, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { ActivityItem } from "../data/portfolioData";
import { ThematicPlaceholder, IslamicStarIcon } from "./IslamicMotifs";

interface LightboxModalProps {
  activity: ActivityItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasMultiple: boolean;
}

export const LightboxModal = ({
  activity,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasMultiple,
}: LightboxModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !activity) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activity.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#faf8f4] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#d8cdb8] overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="relative w-full aspect-video bg-[#0f3d2e] overflow-hidden">
          <ThematicPlaceholder
            category={activity.category}
            title={activity.title}
            theme="activity"
            aspectRatio="video"
            imageUrl={activity.imageUrl}
          />

          {/* Navigation Controls */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors z-10 cursor-pointer"
                aria-label="পূর্ববর্তী ছবি"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors z-10 cursor-pointer"
                aria-label="পরবর্তী ছবি"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Activity Details */}
        <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#627569]">
            <div className="flex items-center gap-1.5 text-[#0f3d2e] font-semibold">
              <IslamicStarIcon className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{activity.category}</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{activity.date}</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{activity.location}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#0f3d2e] font-heading leading-snug">
            {activity.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#384a3f] leading-relaxed">
            {activity.description}
          </p>

          <div className="pt-2 text-xs text-[#7d8f84] border-t border-[#ede6d8]">
            ছবি প্রতিস্থাপন করতে data/portfolioData.ts ফাইলে সংশ্লিষ্ট কার্যক্রমের imageUrl ফিল্ডে ইমেজ লিঙ্ক যুক্ত করুন।
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { X, Clock, Users, BookOpen, CheckCircle, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { CourseItem, PORTFOLIO_DATA } from "../data/portfolioData";
import { CourseThumbnail } from "./CourseThumbnail";

interface CourseModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForContact: (courseTitle: string) => void;
}

export const CourseModal = ({
  course,
  isOpen,
  onClose,
  onSelectForContact,
}: CourseModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const getTheme = (id: string): "arabic" | "quran" | "career" => {
    if (id.includes("arabic")) return "arabic";
    if (id.includes("quran")) return "quran";
    return "career";
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="bg-[#faf8f4] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#d8cdb8] overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Thumbnail Visual */}
        <div className="relative">
          <CourseThumbnail
            type={getTheme(course.id)}
            title={course.title}
            category={course.category}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-[#29382f]">
          {/* Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-white border border-[#e5ddcb] text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
              <div>
                <div className="text-[10px] text-[#708277]">সময়কাল</div>
                <div className="font-semibold text-[#0f3d2e]">{course.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#c5a059] shrink-0" />
              <div>
                <div className="text-[10px] text-[#708277]">ফরম্যাট</div>
                <div className="font-semibold text-[#0f3d2e]">{course.format}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#c5a059] shrink-0" />
              <div>
                <div className="text-[10px] text-[#708277]">মানদণ্ড</div>
                <div className="font-semibold text-[#0f3d2e]">{course.level}</div>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div>
            <h4 className="text-sm font-bold text-[#0f3d2e] uppercase tracking-wider mb-2">
              কোর্সের বিবরণ
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-[#3c4e43]">
              {course.description}
            </p>
          </div>

          {/* Key Topics / Modules */}
          <div>
            <h4 className="text-sm font-bold text-[#0f3d2e] uppercase tracking-wider mb-2.5">
              কোর্সের মূল বিষয়বস্তু ও মডিউল
            </h4>
            <div className="space-y-2.5">
              {course.keyTopics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#e5ddcb] text-xs sm:text-sm text-[#314238]"
                >
                  <CheckCircle className="w-4 h-4 text-[#0f3d2e] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-xl bg-[#f2eee3] border-l-4 border-[#0f3d2e] text-xs sm:text-sm text-[#384a40]">
            <span className="font-semibold text-[#0f3d2e]">কাদের জন্য এই কোর্স: </span>
            {course.targetAudience}
          </div>

          {/* Trust Guarantee */}
          <div className="flex items-center gap-2 text-xs text-[#5e7166]">
            <ShieldCheck className="w-4 h-4 text-[#0f3d2e]" />
            <span>মুফতী ইনজামামুল ইসলামের সার্বক্ষণিক তত্ত্বাবধানে পাঠদান ও পরামর্শ।</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#f3efe6] border-t border-[#e2d8c5] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#4b5a51] hover:text-[#0f3d2e] transition-colors cursor-pointer"
          >
            বন্ধ করুন
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`https://wa.me/8801923595009?text=${encodeURIComponent(
                `আসসালামু আলাইকুম, আমি মুফতী ইনজামামুল ইসলাম সাহেবের "${course.title}" কোর্সে ভর্তি ও বিস্তারিত তথ্য কনফার্ম করতে চাই।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1ca850] transition-colors shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>হোয়াটসঅ্যাপে ভর্তি কনফার্ম করুন</span>
            </a>

            <button
              onClick={() => {
                onSelectForContact(course.title);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0f3d2e] hover:bg-[#15543f] active:bg-[#0a2b20] transition-colors shadow-sm cursor-pointer"
            >
              <span>ওয়েব বার্তা পাঠান</span>
              <ArrowRight className="w-4 h-4 text-[#dfc285]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Clock, ArrowRight, BookOpen, Sparkles, MessageCircle } from "lucide-react";
import { PORTFOLIO_DATA, CourseItem } from "../data/portfolioData";
import { IslamicStarIcon, CornerOrnament } from "./IslamicMotifs";
import { CourseThumbnail } from "./CourseThumbnail";
import { CourseModal } from "./CourseModal";

interface CoursesProps {
  onSelectCourseForContact: (courseTitle: string) => void;
}

export const Courses = ({ onSelectCourseForContact }: CoursesProps) => {
  const { courses } = PORTFOLIO_DATA;
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const getTheme = (id: string): "arabic" | "quran" | "career" => {
    if (id.includes("arabic")) return "arabic";
    if (id.includes("quran")) return "quran";
    return "career";
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
            <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
            <span>জ্ঞান ও স্কিল ডেভেলপমেন্ট</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
            কোর্সসমূহ
          </h2>
          <p className="text-sm sm:text-base text-[#4f6155]">
            জ্ঞান থেকে দক্ষতা—পরিকল্পিত শিক্ষার মাধ্যমে এগিয়ে যাওয়ার সুযোগ।
          </p>
        </div>

        {/* 3 Premium Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const theme = getTheme(course.id);
            return (
              <div
                key={course.id}
                className="relative bg-white rounded-2xl border border-[#e4dcce] shadow-[0_2px_12px_rgba(15,61,46,0.04)] hover:shadow-[0_12px_32px_rgba(15,61,46,0.1)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <CornerOrnament position="top-right" />

                {/* Card Top: Premium Course Thumbnail */}
                <div>
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedCourse(course)}>
                    <CourseThumbnail
                      type={theme}
                      title={course.title}
                      category={course.category}
                    />
                    <div className="absolute inset-0 bg-[#0f3d2e]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 text-[#0f3d2e] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                        বিস্তারিত দেখুন
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Category & Order unboxed */}
                    <div className="flex items-center justify-between text-xs text-[#708277]">
                      <span className="font-medium text-[#c5a059]">{course.category}</span>
                      <span className="font-cinzel tracking-wider">কোর্স 0{idx + 1}</span>
                    </div>

                    {/* Course Title */}
                    <h3
                      onClick={() => setSelectedCourse(course)}
                      className="text-xl font-bold text-[#0f3d2e] leading-snug font-heading cursor-pointer group-hover:text-[#185e46] transition-colors"
                    >
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#46574d] leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Quick Meta */}
                    <div className="pt-2 flex items-center gap-3 text-xs text-[#627569]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{course.duration}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-[#0f3d2e]" />
                        <span>{course.format}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 sm:p-7 pt-0">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0f3d2e] bg-[#faf7f0] hover:bg-[#0f3d2e] hover:text-white border border-[#e2d8c3] group-hover:border-[#0f3d2e] transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>{course.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:text-[#dfc285]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#f4efe4] border border-[#e2d8c3] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0f3d2e]">
              কোর্স ও ভর্তি সম্পর্কিত যেকোনো তথ্য ও পরামর্শ
            </h4>
            <p className="text-xs sm:text-sm text-[#4d5e53]">
              সরাসরি হোয়াটসঅ্যাপে বার্তা পাঠিয়ে অথবা ফোনে কথা বলে আপনার কাঙ্ক্ষিত কোর্সে ভর্তি কনফার্ম করতে পারেন।
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/8801923595009?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%2C%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%20%E0%A6%AD%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BF%20%E0%A6%95%E0%A6%A8%E0%A6%AB%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AE%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1ca850] transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>হোয়াটসঅ্যাপে ভর্তি কনফার্ম</span>
            </a>

            <button
              onClick={() => onSelectCourseForContact("সাধারণ কোর্স পরামর্শ")}
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#0f3d2e] bg-[#faf7f0] hover:bg-[#eee8da] border border-[#d8cfbe] transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              পরামর্শ ফর্ম পূরণ করুন
            </button>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onSelectForContact={(title) => {
          onSelectCourseForContact(title);
          const contactElement = document.getElementById("contact");
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </section>
  );
};

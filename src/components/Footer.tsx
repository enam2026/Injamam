import { ChevronUp, Facebook, Youtube, MessageCircle, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { IslamicStarIcon } from "./IslamicMotifs";

export const Footer = () => {
  const { scholar, socialLinks } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Facebook":
        return <Facebook className="w-4 h-4" />;
      case "Youtube":
        return <Youtube className="w-4 h-4" />;
      case "MessageCircle":
        return <MessageCircle className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#0b2b20] text-[#e3ece7] pt-16 pb-12 border-t border-[#1a4a39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#184434]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <IslamicStarIcon className="w-5 h-5 text-[#dfc285]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                {scholar.nameEn}
              </h3>
            </div>

            <p className="text-sm text-[#cbdcd3] font-medium">
              {scholar.nameBn}
            </p>

            <p className="text-xs sm:text-sm text-[#93aba0] max-w-md leading-relaxed">
              Islamic Scholar • Educator • Mentor • Entrepreneur
              <br />
              ফিকহ, হাদিস ও আধুনিক বাস্তবতার সমন্বয়ে দ্বীনি শিক্ষা ও সমাজের ইতিবাচক রূপান্তরে নিবেদিত।
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (item.url === "#") {
                      e.preventDefault();
                      alert(`${item.label} লিঙ্ক শীঘ্রই সংযুক্ত করা হবে।`);
                    }
                  }}
                  className="w-9 h-9 rounded-lg bg-[#143d2f] border border-[#235844] flex items-center justify-center text-[#dfc285] hover:text-white hover:bg-[#1a513e] transition-colors"
                  aria-label={item.platform}
                >
                  {getSocialIcon(item.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#dfc285] uppercase tracking-wider">
              দ্রুত লিঙ্কসমূহ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a4b8ad]">
              <li>
                <button
                  onClick={() => scrollTo("hero")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  হোম
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  পরিচিতি
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("education")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  শিক্ষাগত যোগ্যতা
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("experience")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  অভিজ্ঞতা ও দায়িত্ব
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("courses")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  কোর্সসমূহ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("activities")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  কার্যক্রম ও গ্যালারি
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  যোগাযোগ
                </button>
              </li>
            </ul>
          </div>

          {/* Institutions & Affiliations */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#dfc285] uppercase tracking-wider">
              দায়িত্বপ্রাপ্ত প্রতিষ্ঠান
            </h4>
            <div className="space-y-3 text-xs text-[#a4b8ad] leading-relaxed">
              <div>
                <span className="font-semibold text-white block">জামিয়া রহিমিয়া আরাবিয়া</span>
                <span>শিক্ষা সচিব ও শাইখুল হাদিস</span>
              </div>
              <div>
                <span className="font-semibold text-white block">খিদমাহ ইনস্টিটিউট</span>
                <span>অফিসিয়াল মেন্টর</span>
              </div>
              <div>
                <span className="font-semibold text-white block">বাইতুর রশিদ জামে মসজিদ</span>
                <span>সাবেক খতীব (উত্তর রায়েরবাগ, যাত্রাবাড়ী, ঢাকা)</span>
              </div>
              <div className="pt-2 border-t border-[#1a4a39]">
                <span className="font-semibold text-[#dfc285] block">সরাসরি যোগাযোগ ও ভর্তি:</span>
                <a href="tel:+8801923595009" className="text-white hover:text-[#dfc285] transition-colors block text-sm font-semibold">
                  +8801923595009
                </a>
                <span className="text-[11px] text-[#8fa79c]">(হোয়াটসঅ্যাপ মেসেজ ও কল)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Designer Credit & Back-to-Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7e998c]">
          <p>© 2026 Mufti Inzamamul Islam. All Rights Reserved.</p>

          <div className="flex items-center gap-1.5 text-xs text-[#9bb3a6]">
            <span>Designed by :</span>
            <a
              href="https://www.enambinsiddik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfc285] hover:text-white font-medium hover:underline transition-colors"
            >
              Enam Bin Siddik
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#143d2f] text-[#dfc285] hover:text-white hover:bg-[#1a513e] transition-colors cursor-pointer"
            aria-label="উপরে যান"
          >
            <span>উপরে যান</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

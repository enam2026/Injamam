import React from "react";

// Subtle 8-Point Islamic Star (Khatim) Ornament
export const IslamicStarIcon = ({ className = "w-6 h-6 text-[#c5a059]" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20 0L24.5 9.5L34.1 5.9L30.5 15.5L40 20L30.5 24.5L34.1 34.1L24.5 30.5L20 40L15.5 30.5L5.9 34.1L9.5 24.5L0 20L9.5 15.5L5.9 5.9L15.5 9.5L20 0Z"
      opacity="0.85"
    />
    <circle cx="20" cy="20" r="4.5" fill="#faf8f4" opacity="0.9" />
  </svg>
);

// Geometric Corner Accent for cards
export const CornerOrnament = ({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const rotation =
    position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
      ? "rotate-180"
      : position === "bottom-left"
      ? "-rotate-90"
      : "";

  return (
    <div
      aria-hidden="true"
      className={`absolute w-7 h-7 pointer-events-none opacity-30 text-[#c5a059] ${rotation} ${
        position.includes("top") ? "top-2" : "bottom-2"
      } ${position.includes("left") ? "left-2" : "right-2"}`}
    >
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 26V4C2 2.9 2.9 2 4 2H26" />
        <path d="M6 16V6C6 4.9 6.9 4 8 4H18" opacity="0.6" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

// Subtle Islamic geometric backdrop element
export const IslamicGeometricRing = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" stroke="#c5a059" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
    <circle cx="200" cy="200" r="140" stroke="#0f3d2e" strokeWidth="1" opacity="0.15" />
    <rect x="90" y="90" width="220" height="220" stroke="#c5a059" strokeWidth="0.8" opacity="0.25" transform="rotate(45 200 200)" />
    <rect x="90" y="90" width="220" height="220" stroke="#0f3d2e" strokeWidth="0.8" opacity="0.2" />
    <circle cx="200" cy="200" r="70" stroke="#c5a059" strokeWidth="1" opacity="0.3" />
    <path d="M200 20 L200 380 M20 200 L380 200" stroke="#c5a059" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

// High-Fidelity Dignified Scholar Portrait Placeholder
interface ScholarPortraitProps {
  photoUrl?: string;
  size?: "hero" | "about" | "card";
  className?: string;
}

export const ScholarPortrait = ({ photoUrl, size = "hero", className = "" }: ScholarPortraitProps) => {
  const isHero = size === "hero";

  if (photoUrl && photoUrl.trim().length > 0) {
    return (
      <div
        className={`relative rounded-2xl group ${
          isHero
            ? "aspect-[4/5] sm:aspect-[3/4] max-h-[580px] w-full"
            : "aspect-[4/5] max-h-[460px] w-full"
        } ${className}`}
      >
        {/* Animated Light Border Effect: Outer rotating radiant golden beam */}
        <div className="absolute -inset-1 sm:-inset-1.5 rounded-2xl overflow-hidden pointer-events-none z-0">
          <div className="w-[300%] h-[300%] -left-[100%] -top-[100%] absolute animate-gold-beam bg-[conic-gradient(from_0deg,transparent_0_300deg,#dfc285_330deg,#ffffff_345deg,#c5a059_360deg)] opacity-85" />
        </div>

        {/* Ambient Pulsing Aura Glow behind the photo */}
        <div className="absolute -inset-2 rounded-2xl animate-gold-glow pointer-events-none -z-10 blur-xl opacity-60 bg-gradient-to-tr from-[#0f3d2e] via-[#c5a059] to-[#dfc285]" />

        {/* Inner Container Holding Image and Vignette */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#dfc285]/70 bg-[#0c2e23] z-10 shadow-2xl">
          <img
            src={photoUrl}
            alt="মুফতী ইনজামামুল ইসলাম"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />

          {/* Golden Light Sweep Highlight over Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Vignette gradient overlay at bottom for scholarly framing */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#092b20]/65 via-transparent to-transparent pointer-events-none" />

          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
        </div>
      </div>
    );
  }

  // Premium styled SVG portrait placeholder with scholarly insignia
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-xl border border-[#c5a059]/35 bg-gradient-to-b from-[#134938] via-[#0d3427] to-[#071f17] text-white flex flex-col items-center justify-center p-6 text-center select-none ${
        isHero ? "min-h-[480px] lg:min-h-[540px] w-full" : "min-h-[380px] w-full"
      } ${className}`}
    >
      {/* Background Islamic Geometric Watermark */}
      <IslamicGeometricRing className="absolute -top-12 -right-12 w-96 h-96 opacity-35" />
      <IslamicGeometricRing className="absolute -bottom-16 -left-16 w-80 h-80 opacity-25" />

      {/* Decorative inner frame */}
      <div className="absolute inset-3 border border-[#c5a059]/25 rounded-xl pointer-events-none" />

      {/* Scholarly Medallion */}
      <div className="relative z-10 mb-6">
        <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full border-2 border-[#c5a059] p-1.5 shadow-2xl bg-[#092b20]/80 backdrop-blur-sm mx-auto flex items-center justify-center">
          <div className="w-full h-full rounded-full border border-[#c5a059]/50 flex flex-col items-center justify-center bg-gradient-to-b from-[#14533f] to-[#0b2b20]">
            <IslamicStarIcon className="w-8 h-8 text-[#dfc285] mb-1" />
            <span className="font-arabic text-xl lg:text-2xl text-[#f3e5c8] tracking-wider font-semibold">
              مفتي
            </span>
          </div>
        </div>
      </div>

      {/* Person Identity Display */}
      <div className="relative z-10 max-w-sm px-4">
        <span className="inline-block text-[#dfc285] text-xs font-semibold tracking-wider uppercase mb-1">
          অফিসিয়াল পোর্ট্রেট প্লেসহোল্ডার
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-[#faf8f4] mb-1 font-heading">
          মুফতী ইনজামামুল ইসলাম
        </h3>
        <p className="text-xs lg:text-sm text-[#cbdad2] leading-relaxed mb-3">
          ইসলামিক স্কলার • শিক্ষক • মেন্টর • উদ্যোক্তা
        </p>

        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#185542]/70 border border-[#c5a059]/40 text-[11px] text-[#f4eedd]">
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
          <span>শিক্ষা সচিব ও শাইখুল হাদিস — জামিয়া রহিমিয়া আরাবিয়া</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-[#8ea79d]/80 z-10">
        ছবি যুক্ত করতে data/portfolioData.ts ফাইলে photoUrl আপডেট করুন
      </div>
    </div>
  );
};

// Course Image / Activity Placeholder with domain icons
interface ThematicPlaceholderProps {
  category: string;
  title: string;
  theme?: "arabic" | "quran" | "career" | "activity";
  aspectRatio?: "video" | "square" | "wide";
  imageUrl?: string;
}

export const ThematicPlaceholder = ({
  category,
  title,
  theme = "arabic",
  aspectRatio = "video",
  imageUrl,
}: ThematicPlaceholderProps) => {
  if (imageUrl && imageUrl.trim().length > 0) {
    return (
      <div className={`relative overflow-hidden w-full ${aspectRatio === "video" ? "aspect-video" : aspectRatio === "wide" ? "aspect-[16/10]" : "aspect-square"}`}>
        <img
          src={imageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  const getThemeStyling = () => {
    switch (theme) {
      case "arabic":
        return {
          bg: "from-[#114232] via-[#0d3326] to-[#071c15]",
          badge: "اللغة العربية",
          sub: "আরবি ভাষা ও ব্যাকরণ",
          symbol: "ض",
        };
      case "quran":
        return {
          bg: "from-[#1b4332] via-[#103425] to-[#082016]",
          badge: "القرآن الكريم",
          sub: "সহীহ তাজবীদ ও তিলাওয়াত",
          symbol: "ق",
        };
      case "career":
        return {
          bg: "from-[#1a3a30] via-[#122c24] to-[#0a1b15]",
          badge: "الإرشاد والتوجيه",
          sub: "ক্যারিয়ার গাইডলাইন ও মেন্টরশিপ",
          symbol: "ن",
        };
      default:
        return {
          bg: "from-[#134938] via-[#0e3629] to-[#09221a]",
          badge: "الأنشطة والبرامج",
          sub: "কার্যক্রম ও আয়োজন",
          symbol: "خ",
        };
    }
  };

  const style = getThemeStyling();

  return (
    <div
      className={`relative overflow-hidden w-full bg-gradient-to-br ${style.bg} text-white flex flex-col justify-between p-5 select-none transition-all duration-300 ${
        aspectRatio === "video" ? "aspect-video" : aspectRatio === "wide" ? "aspect-[16/10]" : "aspect-square"
      }`}
    >
      {/* Background Watermark Pattern */}
      <IslamicGeometricRing className="absolute -top-10 -right-10 w-64 h-64 opacity-25" />
      <div className="absolute inset-2 border border-[#c5a059]/20 rounded-lg pointer-events-none" />

      {/* Top Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-medium text-[#dfc285] bg-[#08241b]/80 border border-[#c5a059]/30 px-2.5 py-0.5 rounded">
          {category}
        </span>
        <span className="font-arabic text-sm text-[#f5ebd6]/90">
          {style.badge}
        </span>
      </div>

      {/* Center Calligraphic Monogram */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="w-14 h-14 rounded-full border border-[#c5a059]/40 bg-[#07241b]/60 flex items-center justify-center shadow-inner">
          <span className="font-arabic text-2xl text-[#dfc285] font-bold">
            {style.symbol}
          </span>
        </div>
      </div>

      {/* Bottom Title Area */}
      <div className="relative z-10">
        <p className="text-[11px] text-[#a9c2b6] mb-0.5">{style.sub}</p>
        <h4 className="text-sm font-semibold text-[#faf8f4] line-clamp-1">
          {title}
        </h4>
      </div>
    </div>
  );
};

import React from "react";

interface CourseThumbnailProps {
  type: "arabic" | "quran" | "career";
  title: string;
  category: string;
  className?: string;
}

export const CourseThumbnail: React.FC<CourseThumbnailProps> = ({
  type,
  title,
  category,
  className = "",
}) => {
  if (type === "arabic") {
    // 01: Arabic Language Course - Stylized Calligraphy, Parchment, Ink & Reed Pen
    return (
      <div
        className={`relative overflow-hidden w-full aspect-video bg-[#0c2a1f] text-white select-none group-hover:scale-[1.02] transition-transform duration-500 ${className}`}
      >
        <svg
          viewBox="0 0 640 360"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bg-arabic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082218" />
              <stop offset="50%" stopColor="#0f3d2e" />
              <stop offset="100%" stopColor="#061c14" />
            </linearGradient>

            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7e0a3" />
              <stop offset="50%" stopColor="#c5a059" />
              <stop offset="100%" stopColor="#8d6e32" />
            </linearGradient>

            <linearGradient id="parchment" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfaf3" />
              <stop offset="100%" stopColor="#ede4d1" />
            </linearGradient>

            <pattern id="islamic-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M20 0 L40 20 L20 40 L0 20 Z"
                fill="none"
                stroke="#c5a059"
                strokeWidth="0.75"
                strokeOpacity="0.18"
              />
              <circle cx="20" cy="20" r="4" fill="none" stroke="#c5a059" strokeWidth="0.5" strokeOpacity="0.15" />
            </pattern>
          </defs>

          {/* Background */}
          <rect width="640" height="360" fill="url(#bg-arabic)" />
          <rect width="640" height="360" fill="url(#islamic-grid)" />

          {/* Radial ambient glow */}
          <circle cx="320" cy="180" r="220" fill="#c5a059" opacity="0.08" />

          {/* Outer Islamic Border Frame */}
          <rect
            x="16"
            y="16"
            width="608"
            height="328"
            rx="12"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <rect
            x="24"
            y="24"
            width="592"
            height="312"
            rx="8"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.1"
          />

          {/* Corner Rosettes */}
          <circle cx="24" cy="24" r="5" fill="#c5a059" opacity="0.8" />
          <circle cx="616" cy="24" r="5" fill="#c5a059" opacity="0.8" />
          <circle cx="24" cy="336" r="5" fill="#c5a059" opacity="0.8" />
          <circle cx="616" cy="336" r="5" fill="#c5a059" opacity="0.8" />

          {/* Centerpiece: Open Manuscript Parchment */}
          <g transform="translate(195, 60)">
            {/* Soft Shadow */}
            <rect x="5" y="10" width="240" height="155" rx="8" fill="#000000" opacity="0.45" filter="blur(8px)" />
            {/* Book Spine / Base */}
            <rect x="0" y="0" width="250" height="155" rx="6" fill="#1e1810" stroke="#c5a059" strokeWidth="1" />
            {/* Left Page */}
            <path
              d="M10 8 Q 65 14 120 10 L 120 145 Q 65 149 10 145 Z"
              fill="url(#parchment)"
            />
            {/* Right Page */}
            <path
              d="M130 10 Q 185 14 240 8 L 240 145 Q 185 149 130 145 Z"
              fill="url(#parchment)"
            />
            {/* Book Center Fold Shadow */}
            <rect x="120" y="8" width="10" height="137" fill="#c9bba6" />

            {/* Simulated Calligraphy script lines on Left Page */}
            <path d="M22 30 Q 60 28 108 30" stroke="#0f3d2e" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <path d="M25 48 Q 70 46 105 48" stroke="#0f3d2e" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
            <path d="M22 66 Q 65 64 108 66" stroke="#0f3d2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M25 84 Q 55 83 95 84" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <path d="M22 102 Q 60 100 108 102" stroke="#0f3d2e" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
            <path d="M25 120 Q 55 119 80 120" stroke="#0f3d2e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

            {/* Stylized Arabic "ض" (Language of Dhad) on Right Page */}
            <circle cx="185" cy="78" r="42" fill="#f4ebd9" stroke="#c5a059" strokeWidth="0.8" opacity="0.6" />
            <text
              x="185"
              y="98"
              fontFamily="Amiri, serif"
              fontSize="56"
              fontWeight="bold"
              fill="#0f3d2e"
              textAnchor="middle"
            >
              ض
            </text>
            <circle cx="198" cy="46" r="4.5" fill="#c5a059" />

            {/* Classical Qalam / Reed Pen laying across */}
            <g transform="translate(140, 100) rotate(-35)">
              <polygon points="0,0 120,-4 125,-2 120,4 0,0" fill="#9e6938" stroke="#5a3818" strokeWidth="0.5" />
              {/* Nib with dark ink */}
              <polygon points="0,0 -16,-2 -22,0 -16,2" fill="#1b1b1b" />
              <circle cx="-16" cy="0" r="0.8" fill="#fdfaf3" />
            </g>
          </g>

          {/* Top Tag & Arabic Calligraphic Badge */}
          <g transform="translate(40, 48)">
            <rect x="0" y="0" width="130" height="26" rx="6" fill="#082218" stroke="#c5a059" strokeWidth="1" />
            <text x="65" y="17" fill="#dfc285" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              {category}
            </text>
          </g>

          <g transform="translate(480, 46)">
            <text x="120" y="20" fill="#f5ebd6" fontSize="18" fontFamily="Amiri, serif" textAnchor="end" opacity="0.95">
              اللغة العربية الفصحى
            </text>
          </g>

          {/* Bottom Title Band */}
          <g transform="translate(40, 260)">
            <rect x="0" y="0" width="560" height="66" rx="8" fill="#061c14" fillOpacity="0.85" stroke="#c5a059" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="20" y="28" fill="#c5a059" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              মৌলিক থেকে ধাপে ধাপে বিশুদ্ধ আরবি কিতাবাত ও বোঝাপড়া
            </text>
            <text x="20" y="52" fill="#faf8f4" fontSize="19" fontWeight="bold" fontFamily="Hind Siliguri, sans-serif">
              {title}
            </text>
            <circle cx="530" cy="33" r="14" fill="#0f3d2e" stroke="#c5a059" strokeWidth="1" />
            <text x="530" y="38" fill="#dfc285" fontSize="14" fontFamily="Amiri, serif" textAnchor="middle" fontWeight="bold">
              ع
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "quran") {
    // 02: Quran Learning Course - Holy Quran on Golden Wooden Rehal (Stand), Tajweed Mihrab Arch & Divine Rays
    return (
      <div
        className={`relative overflow-hidden w-full aspect-video bg-[#0a2318] text-white select-none group-hover:scale-[1.02] transition-transform duration-500 ${className}`}
      >
        <svg
          viewBox="0 0 640 360"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bg-quran" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#081e15" />
              <stop offset="45%" stopColor="#124433" />
              <stop offset="100%" stopColor="#05160e" />
            </linearGradient>

            <linearGradient id="gold-quran" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae7b5" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#997a22" />
            </linearGradient>

            <linearGradient id="page-gold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff9ea" />
              <stop offset="100%" stopColor="#edd8b2" />
            </linearGradient>

            <radialGradient id="mihrab-light" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0a2318" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width="640" height="360" fill="url(#bg-quran)" />

          {/* Illuminated Mihrab Arch Outline in Center */}
          <path
            d="M230 260 L230 110 Q230 40 320 20 Q410 40 410 110 L410 260 Z"
            fill="url(#mihrab-light)"
            stroke="url(#gold-quran)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M245 260 L245 115 Q245 55 320 38 Q395 55 395 115 L395 260 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.1"
          />

          {/* Outer Frame */}
          <rect
            x="16"
            y="16"
            width="608"
            height="328"
            rx="12"
            fill="none"
            stroke="url(#gold-quran)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Quranic Sunburst rays from top arch */}
          <g opacity="0.22" stroke="#fae7b5" strokeWidth="0.75">
            <line x1="320" y1="20" x2="160" y2="240" />
            <line x1="320" y1="20" x2="210" y2="250" />
            <line x1="320" y1="20" x2="270" y2="255" />
            <line x1="320" y1="20" x2="320" y2="260" />
            <line x1="320" y1="20" x2="370" y2="255" />
            <line x1="320" y1="20" x2="430" y2="250" />
            <line x1="320" y1="20" x2="480" y2="240" />
          </g>

          {/* Handcrafted Rehal (X-shaped wooden Holy Quran stand) */}
          <g transform="translate(320, 195)">
            {/* Rehal Left Leg */}
            <polygon
              points="-85,35 -65,45 65,-25 85,-35"
              fill="#523215"
              stroke="#8c5825"
              strokeWidth="1"
            />
            {/* Rehal Right Leg */}
            <polygon
              points="-85,-35 -65,-25 65,45 85,35"
              fill="#6b411d"
              stroke="#9e6630"
              strokeWidth="1"
            />
            {/* Shadow under rehal */}
            <ellipse cx="0" cy="50" rx="95" ry="12" fill="#000000" opacity="0.5" filter="blur(6px)" />
          </g>

          {/* Open Holy Quran Mushaf Resting on Rehal */}
          <g transform="translate(320, 160)">
            {/* Left Page of Mushaf */}
            <path
              d="M0 10 Q -50 -12 -100 -2 L -95 -50 Q -50 -60 0 -38 Z"
              fill="url(#page-gold)"
              stroke="#c5a059"
              strokeWidth="1.2"
            />
            {/* Right Page of Mushaf */}
            <path
              d="M0 10 Q 50 -12 100 -2 L 95 -50 Q 50 -60 0 -38 Z"
              fill="url(#page-gold)"
              stroke="#c5a059"
              strokeWidth="1.2"
            />

            {/* Golden Illuminated Page Borders (Tazhib) */}
            <path
              d="M-5 -35 Q -48 -54 -88 -45 L -92 -8 Q -48 -17 -5 4 Z"
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
            />
            <path
              d="M5 -35 Q 48 -54 88 -45 L 92 -8 Q 48 -17 5 4 Z"
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
            />

            {/* Sacred Arabic Text Representation inside Quran */}
            <text x="-48" y="-22" fill="#0f3d2e" fontSize="11" fontFamily="Amiri, serif" textAnchor="middle" fontWeight="bold">
              بِسْمِ اللَّهِ
            </text>
            <text x="48" y="-22" fill="#0f3d2e" fontSize="11" fontFamily="Amiri, serif" textAnchor="middle" fontWeight="bold">
              الرَّحْمَٰنِ الرَّحِيمِ
            </text>

            {/* Golden Bookmark Ribbon (Ribat) hanging down */}
            <path d="M0 -36 Q -6 0 -12 36 L 0 45 L -2 36 Q 4 0 0 -36" fill="#c5a059" stroke="#997a22" strokeWidth="0.5" />
          </g>

          {/* Top Tag & Arabic Calligraphic Badge */}
          <g transform="translate(40, 48)">
            <rect x="0" y="0" width="130" height="26" rx="6" fill="#081e15" stroke="#c5a059" strokeWidth="1" />
            <text x="65" y="17" fill="#dfc285" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              {category}
            </text>
          </g>

          <g transform="translate(480, 46)">
            <text x="120" y="20" fill="#f5ebd6" fontSize="18" fontFamily="Amiri, serif" textAnchor="end" opacity="0.95">
              القرآن الكريم والتجويد
            </text>
          </g>

          {/* Bottom Title Band */}
          <g transform="translate(40, 260)">
            <rect x="0" y="0" width="560" height="66" rx="8" fill="#05160e" fillOpacity="0.85" stroke="#c5a059" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="20" y="28" fill="#c5a059" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              সহীহ মাখরাজ, তাজবীদ ও শুদ্ধ তিলাওয়াতের বিশেষ প্রশিক্ষণ
            </text>
            <text x="20" y="52" fill="#faf8f4" fontSize="19" fontWeight="bold" fontFamily="Hind Siliguri, sans-serif">
              {title}
            </text>
            <circle cx="530" cy="33" r="14" fill="#0f3d2e" stroke="#c5a059" strokeWidth="1" />
            <text x="530" y="38" fill="#dfc285" fontSize="14" fontFamily="Amiri, serif" textAnchor="middle" fontWeight="bold">
              ق
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // 03: Career Guideline Course for Qawmi Students - Compass of Direction, Stepping Steps to Success & Halal Entrepreneurship
  return (
    <div
      className={`relative overflow-hidden w-full aspect-video bg-[#0a2018] text-white select-none group-hover:scale-[1.02] transition-transform duration-500 ${className}`}
    >
      <svg
        viewBox="0 0 640 360"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bg-career" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#081a13" />
            <stop offset="50%" stopColor="#10382b" />
            <stop offset="100%" stopColor="#05120d" />
          </linearGradient>

          <linearGradient id="gold-career" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e0a3" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#8d6e32" />
          </linearGradient>

          <linearGradient id="stair-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e5440" />
            <stop offset="100%" stopColor="#0f3426" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="640" height="360" fill="url(#bg-career)" />

        {/* Outer Frame */}
        <rect
          x="16"
          y="16"
          width="608"
          height="328"
          rx="12"
          fill="none"
          stroke="url(#gold-career)"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* Background Network of Growth Lines & Nodes */}
        <g stroke="#c5a059" strokeOpacity="0.2" strokeWidth="1">
          <line x1="160" y1="180" x2="240" y2="130" />
          <line x1="240" y1="130" x2="320" y2="150" />
          <line x1="320" y1="150" x2="400" y2="100" />
          <line x1="400" y1="100" x2="480" y2="70" />
          <circle cx="160" cy="180" r="4" fill="#c5a059" />
          <circle cx="240" cy="130" r="4" fill="#c5a059" />
          <circle cx="320" cy="150" r="5" fill="#dfc285" />
          <circle cx="400" cy="100" r="5" fill="#dfc285" />
          <circle cx="480" cy="70" r="6" fill="#f7e0a3" />
        </g>

        {/* Visual Symbol 1: Modern Navigational Qibla & Career Compass */}
        <g transform="translate(230, 145)">
          {/* Outer Ring */}
          <circle cx="0" cy="0" r="56" fill="#082218" stroke="url(#gold-career)" strokeWidth="2" />
          <circle cx="0" cy="0" r="50" fill="none" stroke="#ffffff" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="42" fill="#0c2d20" stroke="#c5a059" strokeWidth="0.8" strokeOpacity="0.5" />

          {/* Compass Rose Star Pointer */}
          <polygon points="0,-36 7,-10 0,0 -7,-10" fill="#dfc285" stroke="#9e7b30" strokeWidth="0.5" />
          <polygon points="0,36 7,10 0,0 -7,10" fill="#0f3d2e" stroke="#c5a059" strokeWidth="0.5" />
          <polygon points="-36,0 -10,7 0,0 -10,-7" fill="#1b4d3a" stroke="#c5a059" strokeWidth="0.5" />
          <polygon points="36,0 10,7 0,0 10,-7" fill="#1b4d3a" stroke="#c5a059" strokeWidth="0.5" />

          {/* Cardinal Directions */}
          <text x="0" y="-40" fill="#dfc285" fontSize="9" fontWeight="bold" textAnchor="middle">N</text>
          <text x="44" y="3" fill="#dfc285" fontSize="8" textAnchor="start">E</text>
          <text x="0" y="47" fill="#dfc285" fontSize="8" textAnchor="middle">S</text>
          <text x="-44" y="3" fill="#dfc285" fontSize="8" textAnchor="end">W</text>
          <circle cx="0" cy="0" r="4" fill="#fae7b5" />
        </g>

        {/* Visual Symbol 2: Ascension Steps (Staircase to Professional & Spiritual Excellence) */}
        <g transform="translate(350, 80)">
          {/* Step 1 */}
          <polygon points="0,110 50,95 85,105 35,120" fill="url(#stair-grad)" stroke="#c5a059" strokeWidth="1" />
          <polygon points="35,120 85,105 85,120 35,135" fill="#0b241a" />

          {/* Step 2 */}
          <polygon points="40,80 90,65 125,75 75,90" fill="url(#stair-grad)" stroke="#c5a059" strokeWidth="1" />
          <polygon points="75,90 125,75 125,90 75,105" fill="#0b241a" />

          {/* Step 3 */}
          <polygon points="80,50 130,35 165,45 115,60" fill="url(#stair-grad)" stroke="#c5a059" strokeWidth="1" />
          <polygon points="115,60 165,45 165,60 115,75" fill="#0b241a" />

          {/* Top Pinnacle Star on Step 3 */}
          <g transform="translate(140, 20)">
            <circle cx="0" cy="0" r="14" fill="#09291e" stroke="#c5a059" strokeWidth="1" />
            <polygon
              points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3"
              fill="#fae7b5"
            />
          </g>
        </g>

        {/* Top Tag & Arabic Calligraphic Badge */}
        <g transform="translate(40, 48)">
          <rect x="0" y="0" width="145" height="26" rx="6" fill="#081a13" stroke="#c5a059" strokeWidth="1" />
          <text x="72.5" y="17" fill="#dfc285" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            {category}
          </text>
        </g>

        <g transform="translate(480, 46)">
          <text x="120" y="20" fill="#f5ebd6" fontSize="18" fontFamily="Amiri, serif" textAnchor="end" opacity="0.95">
            الإرشاد وبناء المستقبل
          </text>
        </g>

        {/* Bottom Title Band */}
        <g transform="translate(40, 260)">
          <rect x="0" y="0" width="560" height="66" rx="8" fill="#05120d" fillOpacity="0.85" stroke="#c5a059" strokeWidth="0.8" strokeOpacity="0.4" />
          <text x="20" y="28" fill="#c5a059" fontSize="12" fontWeight="600" fontFamily="sans-serif">
            সমসাময়িক বাস্তব কর্মক্ষেত্র, সফট স্কিলস ও স্বাবলম্বী ক্যারিয়ার গাইড
          </text>
          <text x="20" y="52" fill="#faf8f4" fontSize="19" fontWeight="bold" fontFamily="Hind Siliguri, sans-serif">
            {title}
          </text>
          <circle cx="530" cy="33" r="14" fill="#0f3d2e" stroke="#c5a059" strokeWidth="1" />
          <text x="530" y="38" fill="#dfc285" fontSize="14" fontFamily="Amiri, serif" textAnchor="middle" fontWeight="bold">
            م
          </text>
        </g>
      </svg>
    </div>
  );
};

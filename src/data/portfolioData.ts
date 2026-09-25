export interface QuickStat {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  code: string;
  degree: string;
  institutionType?: string;
  description: string;
  tags?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period?: string;
  description?: string;
  isCurrent?: boolean;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CourseItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  format: string;
  level: string;
  description: string;
  ctaText: string;
  targetAudience: string;
  keyTopics: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string; // Placeholder as instructed
  iconName: string;
  colorClass: string;
}

export const PORTFOLIO_DATA = {
  scholar: {
    nameBn: "মুফতী ইনজামামুল ইসলাম",
    nameEn: "Mufti Inzamamul Islam",
    titleBn: "ইসলামিক স্কলার • শিক্ষক • মেন্টর • উদ্যোক্তা",
    titleEn: "Islamic Scholar • Educator • Mentor • Entrepreneur",
    heroIntro: "ফিকহ ও হাদিসের জ্ঞান, শিক্ষাদান এবং দাওয়াতী কার্যক্রমের মাধ্যমে দ্বীনি শিক্ষা ও মানুষের কল্যাণে কাজ করে যাচ্ছেন।",
    photoUrl: "https://res.cloudinary.com/nwbfiy4i/image/upload/v1790311077/IMG-20260726-WA0030_txjclz.jpg",
    aboutImageUrl: "https://res.cloudinary.com/nwbfiy4i/image/upload/v1790311077/IMG-20260726-WA0030_txjclz.jpg",
    quoteText: "“ইলম শুধু জানার বিষয় নয়; সঠিক জ্ঞান মানুষের চিন্তা, চরিত্র ও জীবনকে পরিবর্তন করে।”",
    quoteAuthor: "মুফতী ইনজামামুল ইসলাম",
  },

  quickStats: [
    {
      id: "age",
      value: "৩২ বছর",
      label: "বয়স",
      sublabel: "সমসাময়িক তরুণ স্কলার",
      iconName: "Calendar",
    },
    {
      id: "blood",
      value: "AB+",
      label: "রক্তের গ্রুপ",
      sublabel: "ব্লাড ডোনার কমিউনিটি",
      iconName: "HeartPulse",
    },
    {
      id: "exp",
      value: "৫+ বছর",
      label: "শিক্ষাদানের অভিজ্ঞতা",
      sublabel: "কওমি ও আলিয়া নেসাব",
      iconName: "GraduationCap",
    },
    {
      id: "domains",
      value: "৪টি ক্ষেত্র",
      label: "শিক্ষা • দাওয়াহ • মেন্টরশিপ • ব্যবসা",
      sublabel: "সমন্বিত কর্মপ্রয়াস",
      iconName: "Briefcase",
    },
  ] as QuickStat[],

  about: {
    heading: "আমার সম্পর্কে",
    subheading: "জ্ঞান, শিক্ষা ও দাওয়াহর পথে",
    paragraphs: [
      "মুফতী ইনজামামুল ইসলাম একজন ইসলামিক স্কলার, শিক্ষক, মেন্টর ও উদ্যোক্তা। তিনি ইসলামী আইন ও ফিকহ শাস্ত্রে উচ্চতর বিশেষায়িত শিক্ষা অর্জনের পাশাপাশি দীর্ঘদিন ধরে কওমি ও আলিয়া নেসাবের বিভিন্ন গুরুত্বপূর্ণ কিতাব পাঠদান করে আসছেন।",
      "বর্তমানে তিনি জামিয়া রহিমিয়া আরাবিয়ায় শিক্ষা সচিব ও শাইখুল হাদিস হিসেবে দায়িত্ব পালন করছেন এবং খিদমাহ ইনস্টিটিউটে মেন্টর হিসেবে যুক্ত রয়েছেন। শিক্ষা ও দাওয়াতী কার্যক্রমের পাশাপাশি তিনি ব্যবসায়িক উদ্যোগের সঙ্গেও সম্পৃক্ত।",
    ],
    mission: "জ্ঞানচর্চা, নৈতিক জাগরণ এবং সমসাময়িক বাস্তবতার আলোকে তরুণ প্রজন্মকে আদর্শবান ও স্বাবলম্বী নাগরিক হিসেবে গড়ে তোলার লক্ষ্যে অবিচল সাধনা।",
  },

  education: [
    {
      id: "edu-1",
      code: "০১",
      degree: "তাখাচ্ছুছ ফিল ফিকহ (ইফতা)",
      description: "ইসলামী আইন ও ফিকহ শাস্ত্রের ওপর উচ্চতর বিশেষায়িত শিক্ষা।",
      institutionType: "উচ্চতর ইসলামিক আইন অনুষদ",
      tags: ["ইসলামী আইন", "ফিকহি গবেষণা", "ফতোয়া প্রদান"],
    },
    {
      id: "edu-2",
      code: "০২",
      degree: "দাওরায়ে হাদিস",
      description: "কওমি মাদ্রাসা শিক্ষাধারায় উচ্চতর হাদিস শিক্ষা।",
      institutionType: "মাস্টার্স সমমান ইসলামিক স্টাডিজ",
      tags: ["হাদিস শাস্ত্র", "সিহাহ সিত্তাহ", "উসূলে হাদিস"],
    },
    {
      id: "edu-3",
      code: "০৩",
      degree: "ফাজিল ও কামিল",
      description: "আলিয়া মাদ্রাসা শিক্ষাধারায় উচ্চতর শিক্ষা।",
      institutionType: "ইসলামিক ইউনিভার্সিটি বাংলাদেশ পাঠ্যক্রম",
      tags: ["আলিয়া শিক্ষাক্রম", "ইসলামিক স্টাডিজ", "আরবি সাহিত্য"],
    },
  ] as EducationItem[],

  experience: [
    {
      id: "exp-1",
      role: "শিক্ষা সচিব ও শাইখুল হাদিস",
      organization: "জামিয়া রহিমিয়া আরাবিয়া",
      period: "বর্তমান দায়িত্ব",
      description: "প্রতিষ্ঠানের শিক্ষা কার্যক্রমের সামগ্রিক পরিকল্পনা ও তত্ত্বাবধান এবং হাদিসের সর্বোচ্চ জামাতে দরস প্রদান।",
      isCurrent: true,
    },
    {
      id: "exp-2",
      role: "মেন্টর",
      organization: "খিদমাহ ইনস্টিটিউট",
      period: "বর্তমান দায়িত্ব",
      description: "তরুণ শিক্ষার্থী ও যুবকদের দ্বীনি বোঝাপড়া, স্কিল ডেভেলপমেন্ট ও ক্যারিয়ার ভিত্তিক দিকনির্দেশনা প্রদান।",
      isCurrent: true,
    },
    {
      id: "exp-3",
      role: "সাবেক খতীব",
      organization: "বাইতুর রশিদ জামে মসজিদ",
      location: "উত্তর রায়েরবাগ, যাত্রাবাড়ী, ঢাকা",
      period: "সাবেক দায়িত্ব",
      description: "জুমার খুতবায় সমসাময়িক ইসলামী ও সামাজিক বিষয়ে কোরআন ও সুন্নাহর আলোকে দিকনির্দেশনামূলক আলোচনা।",
      isCurrent: false,
    },
    {
      id: "exp-4",
      role: "অধ্যাপনা ও শিক্ষাদান",
      organization: "কওমি ও আলিয়া নেসাব",
      period: "৫+ বছরের অভিজ্ঞতা",
      description: "কওমি ও আলিয়া নেসাবের বিভিন্ন গুরুত্বপূর্ণ ফিকহ, হাদিস ও আরবি সাহিত্যের কিতাব পাঠদানে ৫ বছরের সমৃদ্ধ অভিজ্ঞতা।",
      isCurrent: false,
    },
    {
      id: "exp-5",
      role: "ব্যবসায়ী ও উদ্যোক্তা",
      organization: "ব্যবসায়িক উদ্যোগ",
      period: "স্বতন্ত্র উদ্যোগ",
      description: "দ্বীনি ও সামাজিক কার্যক্রমের পাশাপাশি নিজস্ব ব্যবসায়িক উদ্যোগ সফলভাবে পরিচালনা করছেন।",
      isCurrent: true,
    },
  ] as ExperienceItem[],

  expertise: [
    {
      id: "exp-item-1",
      title: "ফিকহ ও ইসলামী আইন",
      description: "সমসাময়িক ও জটিল ফিকহি বিষয় বিশ্লেষণ, সমাধান এবং আধুনিক জীবনের প্রায়োগিক শরীয়াহ পরামর্শ।",
      iconName: "Scale",
    },
    {
      id: "exp-item-2",
      title: "হাদিস ও ইসলামিক স্টাডিজ",
      description: "হাদিসের বিশুদ্ধ পাঠদান, সনদের মানদণ্ড ও সংশ্লিষ্ট শাস্ত্রীয় গবেষণায় দীর্ঘ অধ্যয়ন।",
      iconName: "BookOpenCheck",
    },
    {
      id: "exp-item-3",
      title: "শিক্ষাদান ও মেন্টরশিপ",
      description: "শিক্ষার্থীদের শিক্ষাগত উৎকর্ষ, নৈতিক চরিত্র গঠন ও ক্যারিয়ারভিত্তিক কার্যকর দিকনির্দেশনা।",
      iconName: "Compass",
    },
    {
      id: "exp-item-4",
      title: "নেতৃত্ব ও ব্যবস্থাপনা",
      description: "শিক্ষা প্রতিষ্ঠান, অ্যাকাডেমিক কারিকুলাম ও সামাজিক দ্বীনি কার্যক্রম সুষ্ঠুভাবে পরিচালনার অভিজ্ঞতা।",
      iconName: "Users",
    },
  ] as ExpertiseItem[],

  courses: [
    {
      id: "course-arabic",
      title: "আরবি ভাষা শিক্ষা কোর্স",
      category: "ভাষা ও যোগাযোগ",
      duration: "৩ মাস (২৪টি লাইভ সেশন)",
      format: "অনলাইন ও অফলাইন ব্যাচ",
      level: "বেসিক থেকে ইন্টারমিডিয়েট",
      description: "আরবি ভাষার মৌলিক বিষয় থেকে ধাপে ধাপে ভাষা বোঝা, পড়া ও ব্যবহার করার দক্ষতা তৈরির জন্য পরিকল্পিত কোর্স।",
      ctaText: "কোর্স সম্পর্কে জানুন",
      targetAudience: "কওমি/আলিয়া শিক্ষার্থী, মাদ্রাসার ছাত্র ও যারা সহজে আরবি কিতাব ও কোরআন বুঝতে চান।",
      keyTopics: [
        "নাহু ও সরফের সহজবোধ্য প্রায়োগিক পদ্ধতি",
        "কুরআনিক শব্দভাণ্ডার ও বাক্যগঠন শৈলী",
        "আরবি কিতাবাত ও সহজ বাক্য অনুবাদের অনুশীলন",
        "দৈনন্দিন কথোপকথনের প্রয়োজনীয় শব্দমালা",
      ],
    },
    {
      id: "course-quran",
      title: "জেনারেলদের জন্য সহী কুরআন শিক্ষা কোর্স",
      category: "কুরআন ও তাজবীদ",
      duration: "২ মাস (১৬টি বিশেষ ক্লাস)",
      format: "সান্ধ্যকালীন ও উইকেন্ড সেশন",
      level: "সকল বয়সীদের জন্য প্রযোজ্য",
      description: "জেনারেল শিক্ষিত, কর্মজীবী ও সাধারণ মানুষের কথা মাথায় রেখে সহীহ তিলাওয়াত ও প্রয়োজনীয় কুরআন শিক্ষার জন্য সাজানো কোর্স।",
      ctaText: "কোর্স সম্পর্কে জানুন",
      targetAudience: "স্কুল-কলেজ-বিশ্ববিদ্যালয়ের শিক্ষার্থী, পেশাজীবী ও সহীহ তিলাওয়াত শিখতে আগ্রহী যে কেউ।",
      keyTopics: [
        "মাখরাজ ও সিফাতের সহীহ উচ্চারণ পদ্ধতি",
        "তাজবীদের অত্যাবশ্যকীয় সহজ নিয়মাবলি",
        "নামাজের ফরজ কিরাত ও মাসনুন দোয়ার বিশুদ্ধকরণ",
        "নিয়মিত ব্যক্তিগত তিলাওয়াত মনিটরিং",
      ],
    },
    {
      id: "course-career",
      title: "কওমি শিক্ষার্থীদের জন্য ক্যারিয়ার গাইডলাইন কোর্স",
      category: "মেন্টরশিপ ও ক্যারিয়ার",
      duration: "৪ সপ্তাহ (ইনটেনসিভ ওয়ার্কশপ)",
      format: "ইন্টারেক্টিভ ওয়েবিনার ও ওয়ার্কশপ",
      level: "কওমি শিক্ষার্থীদের জন্য নিবেদিত",
      description: "কওমি মাদ্রাসার শিক্ষার্থীদের দক্ষতা, সম্ভাবনা ও বাস্তব কর্মক্ষেত্র সম্পর্কে ধারণা দিয়ে ভবিষ্যতের সঠিক পথ নির্ধারণে সহায়তামূলক কোর্স।",
      ctaText: "কোর্স সম্পর্কে জানুন",
      targetAudience: "কওমি মাদ্রাসার ফারিগীন, দাওরায়ে হাদিস ও উচ্চতর জামাতের শিক্ষার্থী।",
      keyTopics: [
        "বর্তমান সময়ের বাস্তব কর্মক্ষেত্র ও সম্ভাবনার মানচিত্র",
        "দ্বীনি শিক্ষার পাশাপাশি আধুনিক সফট স্কিলস উন্নয়ন",
        "উচ্চশিক্ষা, ইফতা ও গবেষণার দিকনির্দেশনা",
        "হালাল উদ্যোক্তা হওয়া ও স্বাবলম্বী ক্যারিয়ার পরিকল্পনা",
      ],
    },
  ] as CourseItem[],

  activityCategories: [
    "সকল কার্যক্রম",
    "দরস ও পাঠদান",
    "দাওয়াতী কার্যক্রম",
    "সেমিনার ও আলোচনা",
    "শিক্ষার্থী মেন্টরশিপ",
    "সামাজিক কার্যক্রম",
    "বিভিন্ন প্রোগ্রাম ও আয়োজন",
  ],

  activities: [
    {
      id: "act-1",
      title: "জামিয়া রহিমিয়া আরাবিয়ায় নিয়মিত দরস ও হাদিস পাঠ",
      category: "দরস ও পাঠদান",
      location: "জামিয়া রহিমিয়া আরাবিয়া, ঢাকা",
      date: "নিয়মিত অ্যাকাডেমিক পর্ব",
      description: "শিক্ষার্থীদের সরাসরি হাদিসের কিতাব ও ফিকহি নসুস বিশ্লেষণ করে পাঠদান এবং প্রাতিষ্ঠানিক পর্যালোচনা।",
      imageUrl: "https://res.cloudinary.com/nwbfiy4i/image/upload/v1790311077/IMG-20260726-WA0030_txjclz.jpg",
    },
    {
      id: "act-2",
      title: "দ্বীনি দাওয়াতী জলসা ও আত্মশুদ্ধি মাহফিল",
      category: "দাওয়াতী কার্যক্রম",
      location: "ঢাকা ও বিভিন্ন জেলা",
      date: "দাওয়াতী সফর",
      description: "সাধারণ মানুষের অন্তরে আল্লাহভীতি, রাসুলের সুন্নাহর প্রতি ভালোবাসা এবং সুশৃঙ্খল জীবনাচারের আহ্বান।",
      imageUrl: "https://res.cloudinary.com/nwbfiy4i/image/upload/v1790311077/IMG-20260726-WA0030_txjclz.jpg",
    },
    {
      id: "act-3",
      title: "সমসাময়িক ফিকহি জিজ্ঞাসা ও ইসলামি অর্থনীতি সেমিনার",
      category: "সেমিনার ও আলোচনা",
      location: "খিদমাহ অডিটোরিয়াম, ঢাকা",
      date: "বিশেষ সেমিনার",
      description: "আধুনিক আর্থিক লেনদেন, ব্যবসা ও বিনিয়োগে শরিয়াহ সম্মত নীতিমালার ওপর গবেষণাধর্মী আলোচনা।",
    },
    {
      id: "act-4",
      title: "কওমি ও তরুণ শিক্ষার্থীদের জন্য ক্যারিয়ার কাউন্সিলিং",
      category: "শিক্ষার্থী মেন্টরশিপ",
      location: "খিদমাহ ইনস্টিটিউট",
      date: "ত্রৈমাসিক সেশন",
      description: "শিক্ষার্থীদের ব্যক্তিগত লক্ষ্য নির্ধারণ, সময় ব্যবস্থাপনা এবং উচ্চশিক্ষার সুযোগ নিয়ে ওয়ান-অন-ওয়ান মেন্টরশিপ।",
    },
    {
      id: "act-5",
      title: "দরিদ্র ও অসহায় মানুষের কল্যাণে শীতবস্ত্র ও খাদ্য বিতরণ",
      category: "সামাজিক কার্যক্রম",
      location: "উত্তর রায়েরবাগ ও সুবিধাবঞ্চিত এলাকা",
      date: "সামাজিক উদ্যোগ",
      description: "মানবিক সেবার অংশ হিসেবে আর্তমানবতার পাশে দাঁড়ানো ও সামাজিক সম্প্রীতি বৃদ্ধির প্রয়াস।",
    },
    {
      id: "act-6",
      title: "জাতীয় হিফজ ও কিরাত প্রতিযোগিতার সমাপনী অনুষ্ঠান",
      category: "বিভিন্ন প্রোগ্রাম ও আয়োজন",
      location: "ঢাকা কেন্দ্রীয় মিলনায়তন",
      date: "বার্ষিক প্রতিযোগিতা",
      description: "কুরআনের হাফেজ ও তরুণ ক্বারীগণের পুরস্কার বিতরণী অনুষ্ঠানে প্রধান আলোচক হিসেবে দিকনির্দেশনামূলক বক্তব্য।",
    },
  ] as ActivityItem[],

  socialLinks: [
    {
      platform: "WhatsApp",
      label: "হোয়াটসঅ্যাপ (+8801923595009)",
      url: "https://wa.me/8801923595009",
      iconName: "MessageCircle",
      colorClass: "hover:bg-[#25d366] hover:text-white",
    },
    {
      platform: "Facebook",
      label: "ফেসবুক পেজ",
      url: "#", // Placeholder
      iconName: "Facebook",
      colorClass: "hover:bg-[#1877f2] hover:text-white",
    },
    {
      platform: "YouTube",
      label: "ইউটিউব চ্যানেল",
      url: "#", // Placeholder
      iconName: "Youtube",
      colorClass: "hover:bg-[#ff0000] hover:text-white",
    },
    {
      platform: "Email",
      label: "ইমেইল যোগাযোগ",
      url: "#", // Placeholder
      iconName: "Mail",
      colorClass: "hover:bg-[#0f3d2e] hover:text-white",
    },
  ] as SocialLink[],

  contactInfo: {
    heading: "যোগাযোগ করুন",
    phone: "+8801923595009",
    whatsappUrl: "https://wa.me/8801923595009",
    description: "দ্বীনি আলোচনা, শিক্ষামূলক কার্যক্রম, কোর্স, মেন্টরশিপ অথবা প্রাতিষ্ঠানিক প্রয়োজনে যোগাযোগ করতে পারেন।",
    location: "ঢাকা, বাংলাদেশ",
    consultationNotice: "ব্যক্তিগত বা প্রাতিষ্ঠানিক সাক্ষাতের জন্য অগ্রিম সময় নির্ধারণ করা কাম্য।",
    admissionNotice: "সরাসরি ফোন বা হোয়াটসঅ্যাপে বার্তা পাঠিয়ে কোর্স ভর্তি ও তথ্য নিশ্চিত করতে পারেন।",
  },
};

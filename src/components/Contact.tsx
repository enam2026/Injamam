import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Mail, Youtube, Facebook, ShieldCheck, PhoneCall, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { IslamicStarIcon, CornerOrnament } from "./IslamicMotifs";

interface ContactProps {
  initialSubject?: string;
}

export const Contact = ({ initialSubject = "" }: ContactProps) => {
  const { contactInfo, socialLinks } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: initialSubject,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) {
      setError("অনুগ্রহ করে আপনার নাম লিখুন।");
      return;
    }
    if (!formData.contact.trim()) {
      setError("অনুগ্রহ করে আপনার ইমেইল অথবা মোবাইল নম্বর দিন।");
      return;
    }
    if (!formData.message.trim()) {
      setError("অনুগ্রহ করে আপনার বার্তা লিখুন।");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        contact: "",
        subject: "",
        message: "",
      });
    }, 900);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Facebook":
        return <Facebook className="w-5 h-5" />;
      case "Youtube":
        return <Youtube className="w-5 h-5" />;
      case "MessageCircle":
        return <MessageCircle className="w-5 h-5" />;
      case "Mail":
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Contact Copy & Social Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7447] tracking-wider uppercase">
                <IslamicStarIcon className="w-4 h-4 text-[#c5a059]" />
                <span>সরাসরি যোগাযোগ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight font-heading">
                {contactInfo.heading}
              </h2>
              <p className="text-base text-[#3d4f43] leading-relaxed">
                {contactInfo.description}
              </p>
            </div>

            {/* Direct Phone & WhatsApp Admission / Contact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0f3d2e] to-[#07241b] text-white shadow-md border border-[#c5a059]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#dfc285] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
                  সরাসরি যোগাযোগ ও ভর্তি
                </span>
                <span className="text-[11px] text-[#b3ccbf] bg-[#144937] px-2 py-0.5 rounded border border-[#c5a059]/30">
                  হোয়াটসঅ্যাপ ও কল
                </span>
              </div>

              <div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-2xl sm:text-3xl font-extrabold text-[#faf8f4] hover:text-[#dfc285] tracking-tight font-heading transition-colors block"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-xs text-[#cbdad1] mt-1 leading-relaxed">
                  কোর্স ভর্তি কনফার্ম, দ্বীনি পরামর্শ বা প্রাতিষ্ঠানিক সমন্বয়ের জন্য সরাসরি কথা বলুন অথবা হোয়াটসঅ্যাপে বার্তা পাঠান।
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1ca850] transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>হোয়াটসঅ্যাপে চ্যাট করুন</span>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#faf8f4] bg-[#17523f] hover:bg-[#1d634c] transition-colors border border-[#c5a059]/40 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#dfc285]" />
                  <span>কল করুন</span>
                </a>
              </div>
            </div>

            {/* Consultation Note */}
            <div className="p-4 rounded-xl bg-[#f2eee3] border border-[#e1d7c4] text-xs sm:text-sm text-[#46574c] space-y-1">
              <div className="font-semibold text-[#0f3d2e] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>পরামর্শ ও সাক্ষাতের নিয়মাবলী</span>
              </div>
              <p className="text-xs text-[#5f7166] leading-relaxed">
                {contactInfo.consultationNotice}
              </p>
            </div>

            {/* Social / Direct Connect Cards (Using placeholders as instructed) */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#0f3d2e] uppercase tracking-wider">
                অনলাইন মাধ্যম ও প্ল্যাটফর্ম
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (social.url === "#") {
                        e.preventDefault();
                        alert(`${social.label} লিঙ্ক শীঘ্রই সংযুক্ত করা হবে।`);
                      }
                    }}
                    className={`flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e4dcce] text-[#2d3e34] shadow-sm transition-all duration-200 group ${social.colorClass}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#faf7f0] border border-[#e5ddcd] flex items-center justify-center text-[#0f3d2e] group-hover:bg-white/20 group-hover:text-inherit transition-colors">
                      {getSocialIcon(social.iconName)}
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold">{social.platform}</div>
                      <div className="text-[11px] opacity-75">{social.label}</div>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-[#7d9084] pt-1">
                * সোশ্যাল মিডিয়া ও মেসেঞ্জার লিঙ্কসমূহ data/portfolioData.ts ফাইলে আপডেটযোগ্য।
              </p>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-2xl p-7 sm:p-9 border border-[#e4dcce] shadow-[0_4px_20px_rgba(15,61,46,0.06)]">
              <CornerOrnament position="top-right" />

              <h3 className="text-xl sm:text-2xl font-bold text-[#0f3d2e] mb-2 font-heading">
                বার্তা পাঠান
              </h3>
              <p className="text-xs sm:text-sm text-[#5d6f63] mb-6">
                নিচের ফর্মটি পূরণ করে আপনার বার্তা পাঠাতে পারেন।
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#065f46]">
                    আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#047857]">
                    যোগাযোগ করার জন্য ধন্যবাদ। অতি শীঘ্রই আপনার সাথে পর্যালোচনাপূর্বক যোগাযোগ করা হবে, ইনশাআল্লাহ।
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-lg text-xs font-semibold text-[#065f46] bg-white border border-[#a7f3d0] hover:bg-[#d1fae5] transition-colors cursor-pointer"
                  >
                    আরেকটি বার্তা পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-[#fef2f2] border border-[#fecaca] text-xs sm:text-sm text-[#b91c1c] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#293b31] mb-1.5">
                      নাম <span className="text-[#c5a059]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcd4c5] bg-[#faf8f4] text-[#1b2820] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/30 focus:border-[#0f3d2e] transition-colors"
                      required
                    />
                  </div>

                  {/* Contact field */}
                  <div>
                    <label htmlFor="contact" className="block text-xs font-semibold text-[#293b31] mb-1.5">
                      ইমেইল / মোবাইল <span className="text-[#c5a059]">*</span>
                    </label>
                    <input
                      id="contact"
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="ইমেইল অ্যাড্রেস অথবা মোবাইল নম্বর"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcd4c5] bg-[#faf8f4] text-[#1b2820] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/30 focus:border-[#0f3d2e] transition-colors"
                      required
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#293b31] mb-1.5">
                      বিষয়
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="যেমন: কোর্স ভর্তি, দ্বীনি আলোচনা, মেন্টরশিপ ইত্যাদি"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcd4c5] bg-[#faf8f4] text-[#1b2820] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/30 focus:border-[#0f3d2e] transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#293b31] mb-1.5">
                      বার্তা <span className="text-[#c5a059]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcd4c5] bg-[#faf8f4] text-[#1b2820] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/30 focus:border-[#0f3d2e] transition-colors resize-y"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-[#0f3d2e] hover:bg-[#15543f] active:bg-[#0a2b20] transition-colors shadow-md disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>পাঠানো হচ্ছে...</span>
                      ) : (
                        <>
                          <span>বার্তা পাঠান</span>
                          <Send className="w-4 h-4 text-[#dfc285]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

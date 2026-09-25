import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuickProfile } from "./components/QuickProfile";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Expertise } from "./components/Expertise";
import { Courses } from "./components/Courses";
import { Activities } from "./components/Activities";
import { Quote } from "./components/Quote";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [contactSubject, setContactSubject] = useState("");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "education",
      "experience",
      "courses",
      "activities",
      "contact",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectCourseForContact = (courseTitle: string) => {
    setContactSubject(`কোর্স সম্পর্কিত তথ্য ও ভর্তি: ${courseTitle}`);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f4] text-[#1b2820] selection:bg-[#0f3d2e] selection:text-[#f8f5ee]">
      {/* Sticky Modern Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Quick Profile */}
        <QuickProfile />

        {/* Section 3: About */}
        <About />

        {/* Section 4: Education */}
        <Education />

        {/* Section 5: Experience */}
        <Experience />

        {/* Section 6: Expertise */}
        <Expertise />

        {/* Section 7: Courses */}
        <Courses onSelectCourseForContact={handleSelectCourseForContact} />

        {/* Section 8: Activities */}
        <Activities />

        {/* Section 9: Quote */}
        <Quote />

        {/* Section 10: Contact */}
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

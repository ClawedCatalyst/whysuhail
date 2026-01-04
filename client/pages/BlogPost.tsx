import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!post) return;

    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    post.sections.forEach((section) => {
      const element = sectionRefs.current[section.title];
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(section.title);
          }
        });
      }, observerOptions);

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [post]);

  const scrollToSection = (sectionTitle: string) => {
    const element = sectionRefs.current[sectionTitle];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <ThemeToggle />
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-32 pt-16 md:pt-24 pb-32 md:pb-48">
          <h1 className="text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA] mb-4">Post Not Found</h1>
          <Link to="/" className="text-[#2563EB] dark:text-[#60A5FA] hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <ThemeToggle />
      <div className="relative">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-32">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block fixed left-8 md:left-16 lg:left-32 w-48 top-24 bottom-0">
            <nav className="space-y-2 pt-0">
                {post.sections.map((section) => {
                  const isActive = activeSection === section.title;
                  return (
                    <button
                      key={section.title}
                      onClick={() => scrollToSection(section.title)}
                      className={`block text-left text-sm transition-colors w-full ${
                        isActive
                          ? "text-[#111111] dark:text-[#FAFAFA] font-semibold"
                          : "text-[#999999] dark:text-[#666666] hover:text-[#111111] dark:hover:text-[#FAFAFA]"
                      }`}
                    >
                      {section.title}
                    </button>
                  );
                })}
              </nav>
          </aside>

          {/* Main Content */}
          <div className="pt-16 md:pt-24 pb-32 md:pb-48">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-block text-sm text-[#2563EB] dark:text-[#60A5FA] hover:underline mb-8 md:mb-12"
          >
            ← Back
          </Link>

          {/* Header */}
          <header className="mb-8 md:mb-12">
            <div className="text-sm text-[#999999] dark:text-[#666666] mb-2">{post.period}</div>
            <h1 className="text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA] mb-2">
              {post.title}
            </h1>
            <p className="text-sm text-[#777777] dark:text-[#A0A0A0]">{post.description}</p>
          </header>

          {/* Content Sections */}
          <div className="space-y-8 md:space-y-10">
            {post.sections.map((section, index) => (
              <section
                key={index}
                ref={(el) => {
                  if (el) sectionRefs.current[section.title] = el;
                }}
                className="space-y-3 md:space-y-4 scroll-mt-24"
              >
                <h2 className="text-sm font-semibold text-[#111111] dark:text-[#FAFAFA]">
                  {section.title}
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm leading-relaxed text-[#111111] dark:text-[#FAFAFA]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

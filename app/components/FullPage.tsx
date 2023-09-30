import React, { useState, useEffect } from "react";

interface FullPageProps {
  children: any;
}
export const FullPage = ({ children }: FullPageProps) => {
  const [activeSection, setActiveSection] = useState(0);
  console.log(
    "🚀 ~ file: FullPage.tsx:8 ~ FullPage ~ activeSection:",
    activeSection
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section-index"));
          }
        }
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    const sections = document.querySelectorAll("[data-section-index]");

    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      {children.map((child: any, index: number) => (
        <div
          key={index}
          data-section-index={index}
          className={activeSection === index ? "active" : ""}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

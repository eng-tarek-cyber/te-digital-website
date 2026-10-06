import { useState, useEffect } from "react";
import Header from "./components/Header";
import MobileDrawer from "./components/MobileDrawer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import WhyUsSection from "./components/WhyUsSection";
import ProcessSection from "./components/ProcessSection";
import AdsVisionSection from "./components/AdsVisionSection";
import PortfolioSection from "./components/PortfolioSection";
import ProjectModal from "./components/ProjectModal";
import CtaBanner from "./components/CtaBanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import NotFoundPage from "./components/NotFoundPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { ProjectItem } from "./types";
import { initAnalytics } from "./utils/analytics";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [preselectedService, setPreselectedService] =
    useState<string>("إعلانات ممولة");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isNotFound, setIsNotFound] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      return path !== "/" && path !== "" && path !== "/index.html";
    }
    return false;
  });

  // Initialize analytics once on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (isNotFound) return;

    const handleScroll = () => {
      const sections = [
        "hero",
        "services",
        "why-us",
        "process",
        "portfolio",
          "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNotFound]);

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRequestSimilarProject = (category: string) => {
    setPreselectedService(`مشروع ${category}`);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGoHome = () => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", "/");
    }
    setIsNotFound(false);
  };

  if (isNotFound) {
    return (
      <ErrorBoundary>
        <NotFoundPage onGoHome={handleGoHome} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div
        id="app-root"
        dir="rtl"
        className="min-h-screen bg-[#0d1322] text-[#dde2f8] flex flex-col font-['IBM_Plex_Sans_Arabic',sans-serif]"
      >
        {/* Mobile Drawer */}
        <MobileDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />

        {/* Project Case Study Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={handleRequestSimilarProject}
        />

        {/* Standard Fluid Layout */}
        <div className="flex flex-col flex-1 w-full">
          <Header onOpenDrawer={() => setDrawerOpen(true)} />

          <main className="flex flex-col flex-1 w-full pb-16 md:pb-0">
            <HeroSection />
            <ServicesSection onSelectService={handleSelectService} />
            <WhyUsSection />
            <ProcessSection />
            <AdsVisionSection />
            <PortfolioSection onOpenProject={setSelectedProject} />
            <FAQSection />
            <CtaBanner />
            <ContactSection
              preselectedService={preselectedService}
              onServiceChange={setPreselectedService}
            />
          </main>
          <Footer />

          {/* Sticky Bottom Nav Bar for Mobile Screens */}
          <BottomNav activeSection={activeSection} />
          <FloatingWhatsApp />
        </div>
      </div>
    </ErrorBoundary>
  );
}

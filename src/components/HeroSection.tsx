import { useState, useEffect } from 'react';
import { trackCtaClick } from '../utils/analytics';

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(1840);
  const [activeTab, setActiveTab] = useState<'realtime' | 'summary'>('realtime');

  // Subtle real-time visitor counter tick
  useEffect(() => {
    const timer = setInterval(() => {
      setVisitorCount((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative px-4 sm:px-6 py-10 sm:py-16 overflow-hidden flex flex-col items-center text-center"
    >
      {/* Ambient Sapphire / Electric Gradient Orb */}
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#0053db]/20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Agency Badge */}
      <div
        id="hero-agency-badge"
        className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#242a3a]/80 border border-[#38bdf8]/25 text-[#8ed5ff] text-[11px] sm:text-xs md:text-sm font-semibold mb-5 shadow-sm backdrop-blur-md max-w-full text-center leading-snug"
      >
        <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shrink-0" />
        <span className="truncate sm:overflow-visible">T.E Digital | Digital Marketing • Software • Web Solutions</span>
      </div>

      {/* Main Headline */}
      <h1
        id="hero-main-title"
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dde2f8] mb-4 sm:mb-6 tracking-tight max-w-3xl leading-snug sm:leading-tight break-words"
      >
        T.E Digital — طارق عيد |{' '}
        <span className="text-[#8ed5ff] drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
          حلول التسويق الرقمي
        </span>{' '}
        وتطوير المواقع والبرمجيات في مصر
      </h1>

      {/* Supporting Text */}
      <p
        id="hero-description"
        className="text-xs sm:text-base md:text-lg text-[#bdc8d1] max-w-2xl mb-8 leading-relaxed px-1 sm:px-0"
      >
        أهلاً بك في <strong className="text-[#dde2f8]">T.E Digital</strong> بإدارة <strong className="text-[#dde2f8]">طارق عيد (Tarek Eid)</strong> — Front-End Developer ومتخصص حلول الويب. نقدم خدمات متكاملة تشمل الإعلانات الممولة (Paid Advertising)، إدارة صفحات السوشيال ميديا، وتطوير مواقع وتطبيقات وصفحات هبوط (Landing Pages) فائقة السرعة بـ React و Next.js لتعزيز تواجدك الرقمي ومضاعفة مبيعاتك في مصر والوطن العربي.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md mb-10 sm:mb-12">
        <a
          id="hero-start-project-cta"
          href="#contact"
          onClick={() => trackCtaClick('hero-start-project', 'ابدأ مشروعك الآن')}
          aria-label="تواصل مع طارق عيد لبدء مشروع جديد"
          className="w-full sm:w-auto flex-1 min-h-[48px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm sm:text-base shadow-lg shadow-[#38bdf8]/20 hover:bg-[#c4e7ff] active:scale-95 transition-all cursor-pointer"
        >
          <span>ابدأ مشروعك الآن</span>
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        </a>
        <a
          id="hero-explore-services-cta"
          href="#services"
          onClick={() => trackCtaClick('hero-explore-services', 'استكشف الخدمات')}
          aria-label="استكشف خدمات تطوير الويب والواجهات الأمامية"
          className="w-full sm:w-auto flex-1 min-h-[48px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#242a3a]/70 hover:bg-[#242a3a] border border-[#3e484f]/60 text-[#8ed5ff] font-semibold text-sm sm:text-base active:scale-95 transition-all cursor-pointer"
        >
          <span>استكشف الخدمات</span>
        </a>
      </div>

      {/* Real-time Marketing Ecosystem Telemetry Card */}
      <div
        id="hero-telemetry-card"
        className="w-full max-w-md rounded-2xl bg-[#151b2b]/90 border border-[#242a3a] backdrop-blur-xl p-4 sm:p-5 shadow-2xl text-right transition-all hover:border-[#38bdf8]/35"
      >
        {/* Card Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#242a3a] gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8ed5ff] shadow-[0_0_8px_#38bdf8] shrink-0" />
            <span className="text-xs sm:text-sm text-[#dde2f8] font-bold truncate">
              حملة إطلاق التطبيق - نشطة
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'realtime' ? 'summary' : 'realtime')}
              className="text-[11px] px-2.5 py-1 rounded-full bg-[#242a3a] text-[#8ed5ff] font-medium border border-[#38bdf8]/20 hover:bg-[#33394a] transition-colors cursor-pointer"
            >
              مباشر ⚡
            </button>
          </div>
        </div>

        {/* Targeting Spec */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-[#080e1d]/85 border border-[#191f2f] mb-3">
          <div className="flex items-center justify-between text-[#bdc8d1] text-xs mb-1.5 gap-2">
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-[16px] text-[#8ed5ff]">target</span>
              الجمهور المستهدف
            </span>
            <span className="text-[#dde2f8] font-semibold text-[11px] sm:text-xs">مصر والدول المجاورة</span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#dde2f8]/90 font-medium">
            مهتمون بالخدمات الرقمية والأنشطة التجارية ورواد الأعمال
          </p>
        </div>

        {/* Real Telemetry Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-3.5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#191f2f]/80 border border-[#242a3a]">
            <span className="block text-[10px] sm:text-[11px] text-[#bdc8d1] mb-0.5">معدل التفاعل</span>
            <span className="text-lg sm:text-xl font-bold text-[#dde2f8]">4.8%</span>
            <span className="text-[#8ed5ff] text-[10px] sm:text-[11px] flex items-center gap-1 mt-1 font-medium">
              <span className="material-symbols-outlined text-[13px] sm:text-[14px]">trending_up</span>
              ضمن المعدل النموذجي
            </span>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#191f2f]/80 border border-[#242a3a]">
            <span className="block text-[10px] sm:text-[11px] text-[#bdc8d1] mb-0.5">زوار الهبوط المؤهلين</span>
            <span className="text-lg sm:text-xl font-bold text-[#dde2f8]">
              {visitorCount.toLocaleString('ar-EG')}
            </span>
            <span className="text-[#bdc8d1] text-[10px] sm:text-[11px] block mt-1">خلال آخر 7 أيام</span>
          </div>
        </div>

        {/* Integrated Channel Chips */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#242a3a]/70">
          <span className="text-[11px] sm:text-xs text-[#bdc8d1]">القنوات الإعلانية:</span>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-[#242a3a] text-[#8ed5ff] text-[11px] sm:text-xs font-medium border border-[#38bdf8]/20">
              Meta
            </span>
            <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-[#242a3a] text-[#8ed5ff] text-[11px] sm:text-xs font-medium border border-[#38bdf8]/20">
              TikTok
            </span>
            <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-[#242a3a] text-[#8ed5ff] text-[11px] sm:text-xs font-medium border border-[#38bdf8]/20">
              Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

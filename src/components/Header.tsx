import { AGENCY_NAME, DEVELOPER_NAME, DEVELOPER_TITLE } from "../data";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  onOpenDrawer: () => void;
}

export default function Header({ onOpenDrawer }: HeaderProps) {
  return (
    <header
      id="app-header"
      className="sticky top-0 inset-x-0 z-40 bg-[#0d1322]/85 backdrop-blur-xl border-b border-[#242a3a]/60 shadow-[0_1px_8px_rgba(0,0,0,0.2)] pt-safe"
    >
      <div className="max-w-6xl mx-auto h-16 px-3 sm:px-4 md:px-6 flex items-center justify-between gap-1.5 sm:gap-2">
        {/* Right side (in RTL: Start): Menu button & Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <button
            id="drawer-toggle-btn"
            type="button"
            aria-label="فتح قائمة التصفح"
            onClick={onOpenDrawer}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#dde2f8] hover:text-[#8ed5ff] hover:bg-[#242a3a]/60 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[26px]">menu</span>
          </button>

          <a
            href="#hero"
            aria-label={`الصفحة الرئيسية — ${AGENCY_NAME}`}
            className="flex items-center gap-2 select-none group min-w-0"
          >
            <BrandLogo
              variant="header"
              className="shrink-0 group-hover:opacity-95 transition-opacity"
            />
            <div className="hidden xs:flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#dde2f8] leading-none">
                {DEVELOPER_NAME}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#8ed5ff] font-medium tracking-wide leading-none mt-1 truncate max-w-[170px] sm:max-w-none">
                {DEVELOPER_TITLE}
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav
          aria-label="التنقل الرئيسي بالموقع"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          <a
            href="#hero"
            className="px-3 py-1.5 rounded-lg text-sm text-[#8ed5ff] font-semibold bg-[#242a3a]/40 hover:bg-[#242a3a]/70 transition-all"
          >
            الرئيسية
          </a>
          <a
            href="#services"
            className="px-3 py-1.5 rounded-lg text-sm text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/40 transition-all"
          >
            الخدمات
          </a>
          <a
            href="#portfolio"
            className="px-3 py-1.5 rounded-lg text-sm text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/40 transition-all"
          >
            معرض الأعمال
          </a>
          <a
            href="#faq"
            className="px-3 py-1.5 rounded-lg text-sm text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/40 transition-all"
          >
            الأسئلة الشائعة
          </a>
          <a
            href="#process"
            className="px-3 py-1.5 rounded-lg text-sm text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/40 transition-all"
          >
            طريقة العمل
          </a>
          <a
            href="#why-us"
            className="px-3 py-1.5 rounded-lg text-sm text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/40 transition-all"
          >
            لماذا نحن؟
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg text-sm text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/40 transition-all"
          >
            تواصل معنا
          </a>
        </nav>

        {/* Left side (in RTL: End): Quick CTA & Profile Icon */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="header-cta-btn"
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#8ed5ff] text-[#00354a] font-semibold text-xs tracking-tight transition-all active:scale-95 hover:bg-[#c4e7ff] shadow-[0_0_12px_rgba(142,213,255,0.3)]"
          >
            <span>ابدأ مشروعك</span>
            <span className="material-symbols-outlined text-[15px]">
              arrow_back
            </span>
          </a>

          <a
            href="#contact"
            aria-label="تواصل مع طارق عيد"
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#8ed5ff] flex items-center justify-center text-[#00354a] shadow-sm hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">
              person
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

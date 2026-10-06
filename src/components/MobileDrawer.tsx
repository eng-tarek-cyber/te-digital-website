import { useEffect } from "react";
import { AGENCY_NAME, DEVELOPER_NAME, DEVELOPER_TITLE_AR } from "../data";
import BrandLogo from "./BrandLogo";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        id="drawer-backdrop"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-[#080e1d]/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      />

      {/* Slide-out Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-[#151b2b]/98 backdrop-blur-2xl border-l border-[#242a3a] shadow-[0_24px_48px_-12px_rgba(2,6,23,0.9)] transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto pt-safe pb-safe ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="قائمة التصفح"
      >
        <div className="p-5">
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-5 border-b border-[#242a3a]">
            <div className="flex items-center gap-2.5 min-w-0">
              <BrandLogo variant="drawer" className="shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-[#dde2f8] leading-tight truncate">
                  {AGENCY_NAME}
                </span>
                <span className="text-[10px] text-[#8ed5ff] truncate">
                  {DEVELOPER_NAME} · {DEVELOPER_TITLE_AR}
                </span>
              </div>
            </div>
            <button
              id="drawer-close-btn"
              type="button"
              aria-label="إغلاق القائمة"
              onClick={onClose}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#bdc8d1] hover:text-[#dde2f8] hover:bg-[#242a3a]/60 active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mt-5">
            <a
              href="#hero"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#8ed5ff] font-bold bg-[#242a3a]/70 border border-[#38bdf8]/20 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">الرئيسية</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
            <a
              href="#services"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/50 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">خدماتنا</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
            <a
              href="#process"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/50 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">طريقة العمل</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
            <a
              href="#portfolio"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/50 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">أعمالنا</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
            <a
              href="#faq"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/50 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">الأسئلة الشائعة</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
            <a
              href="#why-us"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/50 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">لماذا نحن؟</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#242a3a]/50 transition-colors active:scale-[0.99]"
            >
              <span className="text-sm">تواصل معنا</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </a>
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-5 space-y-3 border-t border-[#242a3a] mt-auto">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[48px] rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm shadow-lg shadow-[#38bdf8]/20 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              rocket_launch
            </span>
            <span>ابدأ مشروعك الآن</span>
          </a>
          <div className="flex items-center justify-center gap-1.5 text-[#bdc8d1] text-xs">
            <span className="material-symbols-outlined text-[14px] text-[#8ed5ff]">
              location_on
            </span>
            <span>القاهرة، جمهورية مصر العربية</span>
          </div>
        </div>
      </aside>
    </>
  );
}

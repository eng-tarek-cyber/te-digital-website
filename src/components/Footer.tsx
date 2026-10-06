import {
  AGENCY_LOCATION,
  AGENCY_NAME,
  AGENCY_NAME_AR,
  AGENCY_TAGLINE_AR,
  DEVELOPER_NAME,
  DEVELOPER_NAME_AR,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  FACEBOOK_PAGE_URL,
} from "../data";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="px-3 sm:px-6 pt-12 pb-28 md:pb-12 bg-[#080e1d] border-t border-[#242a3a] text-right">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Brand & Description */}
        <div className="flex flex-col items-start gap-3 mb-8">
          <a
            href="#hero"
            aria-label={`${AGENCY_NAME} — الصفحة الرئيسية`}
            className="inline-block"
          >
            <BrandLogo variant="footer" />
          </a>
          <p className="text-xs sm:text-sm text-[#bdc8d1] max-w-md leading-relaxed">
            <strong className="text-[#dde2f8] font-semibold">
              {AGENCY_NAME} ({AGENCY_NAME_AR})
            </strong>{" "}
            بإدارة {DEVELOPER_NAME_AR} ({DEVELOPER_NAME}) — {AGENCY_TAGLINE_AR}.
            نطوّر مواقع وصفحات هبوط سريعة بـ React و Next.js، وندير حملات
            إعلانية وحضورًا رقميًا يحقق نتائج قابلة للقياس.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 mb-8 pb-8 border-b border-[#242a3a]/60">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#dde2f8] font-bold mb-1">
              أقسام الموقع
            </span>
            <a
              href="#hero"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              الرئيسية
            </a>
            <a
              href="#services"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              خدمات الويب
            </a>
            <a
              href="#portfolio"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              معرض الأعمال
            </a>
            <a
              href="#process"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              طريقة العمل
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#dde2f8] font-bold mb-1">
              الخدمات التقنية
            </span>
            <a
              href="#services"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              تطوير تطبيقات React & Next.js
            </a>
            <a
              href="#services"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              صفحات الهبوط وسرعة الأداء
            </a>
            <a
              href="#services"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              إعلانات ممولة ومسارات تحويل
            </a>
            <a
              href="#services"
              className="text-xs sm:text-sm text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors py-1"
            >
              إدارة الهوية الرقمية
            </a>
          </div>

          <div className="flex flex-col gap-2 col-span-1 xs:col-span-2 sm:col-span-2">
            <span className="text-sm text-[#dde2f8] font-bold mb-1">
              الموقع والتواصل
            </span>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#bdc8d1]">
              <span className="material-symbols-outlined text-[18px] text-[#8ed5ff] shrink-0">
                pin_drop
              </span>
              <span>{AGENCY_LOCATION}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile - Tarek Eid"
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#151b2b] border border-[#242a3a] flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 active:scale-95 transition-all font-bold text-xs"
              >
                GH
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile - Tarek Eid"
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#151b2b] border border-[#242a3a] flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 active:scale-95 transition-all font-bold text-xs"
              >
                IN
              </a>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#151b2b] border border-[#242a3a] flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 active:scale-95 transition-all font-bold text-xs"
              >
                FB
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#151b2b] border border-[#242a3a] flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 active:scale-95 transition-all font-bold text-xs"
              >
                IG
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-2 text-[#bdc8d1] text-xs">
          <span>
            © 2026 {AGENCY_NAME} — {DEVELOPER_NAME_AR} ({DEVELOPER_NAME}).
          </span>
          <span className="text-[#8ed5ff] font-medium">
            حلول رقمية في مصر والوطن العربي
          </span>
        </div>
      </div>
    </footer>
  );
}

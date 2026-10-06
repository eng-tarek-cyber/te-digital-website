import { WHATSAPP_NUMBER } from '../data';
import { trackWhatsAppClick, trackCtaClick } from '../utils/analytics';

export default function CtaBanner() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'مرحبًا T.E Digital، أود الاستفسار عن خدمات التسويق وتطوير الويب لمشروعي.'
  )}`;

  return (
    <section className="px-3 sm:px-6 py-10 max-w-4xl mx-auto w-full">
      <div className="p-5 sm:p-10 rounded-3xl bg-gradient-to-br from-[#242a3a] via-[#191f2f] to-[#151b2b] border border-[#38bdf8]/25 text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
        {/* Ambient Glow */}
        <div
          className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Icon */}
        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[#38bdf8]/20 border border-[#38bdf8]/40 text-[#8ed5ff] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
          <span className="material-symbols-outlined text-[26px] sm:text-[30px]">rocket_launch</span>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#dde2f8] mb-3 max-w-lg leading-tight">
          جاهز تخلي مشروعك يظهر بشكل أقوى أونلاين؟
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm md:text-base text-[#bdc8d1] mb-6 sm:mb-8 max-w-md leading-relaxed">
          احكيلنا عن مشروعك وهدفك، ونساعدك تحدد الحل الرقمي الأنسب ليك بدون أي التزام أو مصاريف مسبقة.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-sm">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_banner')}
            aria-label="تحدث مع طارق عيد عبر واتساب"
            className="w-full sm:w-auto flex-1 py-3.5 px-5 min-h-[48px] rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#38bdf8]/25 hover:bg-[#c4e7ff] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>تحدث معنا عبر واتساب</span>
          </a>

          <a
            href="#contact"
            onClick={() => trackCtaClick('cta_banner', 'املأ استمارة المشروع')}
            aria-label="الانتقال لنموذج استمارة المشروع والتواصل"
            className="w-full sm:w-auto flex-1 py-3.5 px-5 min-h-[48px] rounded-xl bg-[#080e1d]/80 text-[#8ed5ff] border border-[#242a3a] hover:border-[#38bdf8]/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span>املأ استمارة المشروع</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import { WHATSAPP_NUMBER } from '../data';
import { trackWhatsAppClick } from '../utils/analytics';

interface BottomNavProps {
  activeSection: string;
}

export default function BottomNav({ activeSection }: BottomNavProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'مرحبًا T.E Digital، أود الاستفسار عن خدمات التسويق وتطوير الويب.'
  )}`;

  return (
    <nav
      id="mobile-bottom-nav"
      className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#0d1322]/90 backdrop-blur-xl border-t border-[#242a3a] shadow-[0_-1px_12px_rgba(0,0,0,0.3)] md:hidden"
      aria-label="شريط التصفح السفلي"
    >
      <div className="flex justify-around items-center h-16 px-1 sm:px-2 max-w-lg mx-auto">
        {/* Home */}
        <a
          href="#hero"
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[44px] px-1 transition-colors ${
            activeSection === 'hero' ? 'text-[#8ed5ff] font-bold' : 'text-[#bdc8d1] hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[22px]">domain</span>
          <span className="text-[10px] sm:text-[11px]">الرئيسية</span>
        </a>

        {/* Services */}
        <a
          href="#services"
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[44px] px-1 transition-colors ${
            activeSection === 'services'
              ? 'text-[#8ed5ff] font-bold'
              : 'text-[#bdc8d1] hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[22px]">design_services</span>
          <span className="text-[10px] sm:text-[11px]">خدماتنا</span>
        </a>

        {/* Floating WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_bottom_nav')}
          aria-label="محادثة واتساب سريعة"
          className="flex flex-col items-center justify-center -mt-5 group min-w-[48px] min-h-[48px]"
        >
          <div className="w-12 h-12 rounded-full bg-[#8ed5ff] text-[#00354a] flex items-center justify-center shadow-[0_4px_16px_rgba(56,189,248,0.4)] group-hover:scale-105 active:scale-95 transition-transform border-2 border-[#0d1322]">
            <span className="material-symbols-outlined text-[24px]">chat</span>
          </div>
          <span className="text-[10px] text-[#8ed5ff] mt-0.5 font-bold">واتساب</span>
        </a>

        {/* Portfolio */}
        <a
          href="#portfolio"
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[44px] px-1 transition-colors ${
            activeSection === 'portfolio'
              ? 'text-[#8ed5ff] font-bold'
              : 'text-[#bdc8d1] hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[22px]">dashboard</span>
          <span className="text-[10px] sm:text-[11px]">أعمالنا</span>
        </a>

        {/* Consultation */}
        <a
          href="#contact"
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[44px] px-1 transition-colors ${
            activeSection === 'contact'
              ? 'text-[#8ed5ff] font-bold'
              : 'text-[#bdc8d1] hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[22px]">support_agent</span>
          <span className="text-[10px] sm:text-[11px]">استشارة</span>
        </a>
      </div>
    </nav>
  );
}

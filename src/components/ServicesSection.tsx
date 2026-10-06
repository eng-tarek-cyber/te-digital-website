import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { trackServiceSelect } from '../utils/analytics';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-xs sm:text-sm text-[#8ed5ff] font-semibold tracking-wider block mb-1">
          خدمات تطوير الويب والحلول الرقمية
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dde2f8] mb-3">
          خدمات T.E Digital للتسويق والحلول الرقمية وتطوير الويب
        </h2>
        <p className="text-sm sm:text-base text-[#bdc8d1] max-w-2xl mx-auto leading-relaxed">
          تطوير تطبيقات ومواقع ويب حديثة باستخدام React.js و Next.js و TypeScript، وبناء صفحات هبوط سريعة وحملات تسويقية ذكية تعزز مبيعاتك في مصر والوطن العربي.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {SERVICES_DATA.map((service: ServiceItem) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="p-5 sm:p-7 rounded-2xl bg-[#151b2b]/85 border border-[#242a3a] backdrop-blur-md flex flex-col justify-between shadow-lg hover:border-[#38bdf8]/40 hover:shadow-[0_8px_30px_rgba(2,6,23,0.7)] transition-all group"
          >
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#242a3a] border border-[#38bdf8]/20 flex items-center justify-center text-[#8ed5ff] mb-4 group-hover:scale-105 group-hover:border-[#38bdf8]/50 transition-all">
                <span className="material-symbols-outlined text-[28px]">{service.iconName}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-[#dde2f8] mb-2 group-hover:text-[#8ed5ff] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-[#191f2f] border border-[#242a3a] text-[#bdc8d1] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Request Button */}
            <a
              href="#contact"
              onClick={() => {
                trackServiceSelect(service.title);
                onSelectService(service.title);
              }}
              className="w-full py-3 px-4 min-h-[44px] rounded-xl bg-[#242a3a] text-[#8ed5ff] hover:bg-[#38bdf8] hover:text-[#00354a] font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all border border-[#38bdf8]/20 group-hover:border-[#38bdf8] cursor-pointer"
            >
              <span>اطلب الخدمة</span>
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

import { VALUE_PILLARS } from '../data';

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="px-3 sm:px-6 py-12 sm:py-16 bg-[#080e1d]/70 border-y border-[#242a3a]/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm text-[#8ed5ff] font-semibold tracking-wider block mb-1">
            القيم والمبادئ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dde2f8] mb-3">
            لماذا تختار العمل مع طارق عيد؟
          </h2>
          <p className="text-xs sm:text-base text-[#bdc8d1] max-w-2xl mx-auto leading-relaxed">
            التزام كامل بالجودة البرمجية، سرعة تحميل استثنائية في مؤشرات Core Web Vitals، وتجربة مستخدم مدروسة بعناية.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-6">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="p-4 sm:p-6 rounded-2xl bg-[#151b2b]/80 border border-[#242a3a] hover:border-[#38bdf8]/35 transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[#242a3a] text-[#8ed5ff] border border-[#38bdf8]/20 flex items-center justify-center mb-3.5">
                <span className="material-symbols-outlined text-[22px]">{pillar.iconName}</span>
              </div>
              <h3 className="text-base font-bold text-[#dde2f8] mb-1.5">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency Charter */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#242a3a]/40 border border-[#38bdf8]/25 flex items-start gap-3 text-right">
          <span className="material-symbols-outlined text-[#8ed5ff] text-[24px] shrink-0 mt-0.5">
            verified_user
          </span>
          <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
            <span className="font-bold text-[#dde2f8]">عهد الشفافية:</span> لا نعدك بأرقام خيالية غير
            قابلة للتطبيق، بل نضع أساسات تسويقية وبرمجية صلبة تضمن لك أفضل فرصة نجاح مستدامة مع
            تقارير قياس ومتابعة مستمرة.
          </p>
        </div>
      </div>
    </section>
  );
}

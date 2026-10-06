import { PROCESS_STEPS } from '../data';

export default function ProcessSection() {
  return (
    <section id="process" className="px-3 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <span className="text-xs sm:text-sm text-[#8ed5ff] font-semibold tracking-wider block mb-1">
          منهجية العمل
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dde2f8] mb-3">
          بنشتغل معاك إزاي؟
        </h2>
        <p className="text-xs sm:text-base text-[#bdc8d1] max-w-md mx-auto">
          خطوات منظمة ومحددة من الاستكشاف وحتى قياس النتائج والتحسين المستمر.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-4 sm:gap-6">
        {/* Continuous Connecting Line - perfectly centered through circle markers in RTL */}
        <div
          className="absolute right-[19px] sm:right-[23px] top-6 bottom-6 w-0.5 bg-[#2f3445]"
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, idx) => {
          const isFirst = idx === 0;
          return (
            <div key={step.stepNumber} className="relative flex items-start gap-3 sm:gap-6 group">
              {/* Step Circle Marker */}
              <div
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base shrink-0 z-10 transition-all ${
                  isFirst
                    ? 'bg-[#8ed5ff] text-[#00354a] shadow-[0_0_16px_rgba(142,213,255,0.4)]'
                    : 'bg-[#242a3a] text-[#8ed5ff] border border-[#38bdf8]/30 group-hover:border-[#8ed5ff]'
                }`}
              >
                {step.stepNumber}
              </div>

              {/* Step Content Card */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-[#151b2b]/90 border border-[#242a3a] flex-1 group-hover:border-[#38bdf8]/35 transition-all">
                <h3 className="text-sm sm:text-lg font-bold text-[#dde2f8] mb-1 group-hover:text-[#8ed5ff] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

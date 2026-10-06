export default function AdsVisionSection() {
  return (
    <section className="px-3 sm:px-6 py-10 sm:py-14 max-w-4xl mx-auto w-full">
      <div className="rounded-3xl bg-[#151b2b]/90 border border-[#242a3a] p-5 sm:p-9 flex flex-col shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute -top-12 left-10 w-48 h-48 rounded-full bg-[#0053db]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#38bdf8]/10 text-[#8ed5ff] border border-[#38bdf8]/20 text-xs font-semibold w-fit mb-4">
          <span className="material-symbols-outlined text-[16px]">insights</span>
          <span>رؤيتنا في الإعلانات</span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#dde2f8] mb-3 leading-snug">
          مش كل إعلان ممول بيجيب نتيجة... السر في استهداف العميل الصح.
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm md:text-base text-[#bdc8d1] mb-6 leading-relaxed">
          نتائج الإعلانات تختلف حسب طبيعة النشاط، قوة العرض، وعي الجمهور، والمنافسة في السوق
          والميزانية. لذلك نركز على بناء حملة مناسبة لهدف مشروعك ومتابعة أدائها باستمرار لتعديل
          الصياغات والتصميمات الموجهة لتخفيض تكلفة الاكتساب.
        </p>

        {/* Budget Distribution Visualizer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#191f2f]/80 border border-[#242a3a] mb-6 space-y-3">
          <div className="flex justify-between items-center text-[#dde2f8] text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-[#8ed5ff] text-[18px]">pie_chart</span>
              توزيع ميزانية الحملة النموذجية
            </span>
            <span className="text-[#8ed5ff] font-bold">100% محسوبة</span>
          </div>

          {/* Progress bar */}
          <div
            className="w-full h-3 sm:h-3.5 rounded-full bg-[#242a3a] overflow-hidden flex flex-row-reverse"
            role="progressbar"
            aria-label="توزيع ميزانية الحملة"
          >
            <div
              className="bg-[#8ed5ff] h-full w-[60%] transition-all"
              title="60% وصول لجمهور جديد"
            />
            <div
              className="bg-[#0053db] h-full w-[25%] transition-all"
              title="25% إعادة استهداف"
            />
            <div
              className="bg-[#7bb4ff] h-full w-[15%] transition-all"
              title="15% اختبار تصميمات"
            />
          </div>

          <div className="flex flex-wrap justify-between text-[#bdc8d1] text-[11px] sm:text-xs pt-1 gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8ed5ff]" />
              <strong className="text-[#dde2f8]">60%</strong> وصول لجمهور جديد
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0053db]" />
              <strong className="text-[#dde2f8]">25%</strong> إعادة استهداف (Retargeting)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7bb4ff]" />
              <strong className="text-[#dde2f8]">15%</strong> تجارب واختبار صياغات (A/B)
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm sm:text-base active:scale-95 transition-all shadow-md hover:bg-[#c4e7ff]"
        >
          <span className="material-symbols-outlined text-[18px]">support_agent</span>
          <span>اطلب استشارة مجانية لحملتك</span>
        </a>
      </div>
    </section>
  );
}

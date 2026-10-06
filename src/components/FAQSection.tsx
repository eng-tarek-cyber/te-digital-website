import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQS = [
  {
    question: "الموقع الإلكتروني بيكلف كام؟",
    answer:
      "تكلفة الموقع بتختلف حسب نوع المشروع وعدد الصفحات والوظائف المطلوبة. بعد معرفة احتياجاتك بنحدد السعر المناسب ونوضح لك كل التفاصيل قبل البدء.",
  },
  {
    question: "الموقع بياخد وقت قد إيه؟",
    answer:
      "مدة التنفيذ بتختلف حسب حجم المشروع ومتطلباته. بعد الاتفاق على التفاصيل بنحدد المدة المتوقعة للتنفيذ بشكل واضح.",
  },
  {
    question: "هل المواقع بتشتغل على الموبايل؟",
    answer:
      "أيوه، بنصمم ونطور المواقع بشكل متجاوب بحيث تعمل بشكل جيد على الموبايل والتابلت والكمبيوتر.",
  },
  {
    question: "هل بتقدموا خدمات التسويق والإعلانات؟",
    answer:
      "أيوه، T.E Digital بتقدم خدمات التسويق الرقمي وإدارة الحملات الإعلانية، بالإضافة إلى تصميم وتطوير المواقع وحلول الويب.",
  },
  {
    question: "هل أقدر أطلب تعديلات على الموقع؟",
    answer:
      "بالتأكيد. بنحدد نطاق التعديلات المطلوبة حسب طبيعة المشروع والاتفاق قبل بدء التنفيذ.",
  },
  {
    question: "هل توفرون الدومين والاستضافة؟",
    answer:
      "نقدر نساعدك في اختيار وتجهيز الدومين والاستضافة المناسبة لمشروعك حسب احتياجات الموقع.",
  },
  {
    question: "إزاي أبدأ مشروعي مع T.E Digital؟",
    answer:
      "ابعتلنا تفاصيل فكرتك من خلال نموذج التواصل أو واتساب، وهنراجع احتياجاتك ونتواصل معاك لمناقشة التفاصيل والخطوات القادمة.",
  },
  {
    question: "هل أقدر أشوف أعمال سابقة؟",
    answer:
      "طبعًا. تقدر تشوف نماذج من المشاريع الحقيقية التي تم تطويرها من خلال قسم معرض الأعمال بالموقع.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full px-4 py-14 sm:px-6 sm:py-20"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 block text-xs font-semibold tracking-wider text-[#8ed5ff] sm:text-sm">
            الأسئلة الشائعة
          </span>

          <h2
            id="faq-title"
            className="mb-3 text-2xl font-bold text-[#dde2f8] sm:text-3xl lg:text-4xl"
          >
            كل اللي محتاج تعرفه قبل ما تبدأ مشروعك
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#bdc8d1] sm:text-base">
            إجابات سريعة على أهم الأسئلة المتعلقة بتصميم وتطوير المواقع والتسويق
            الرقمي مع T.E Digital.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#38bdf8]/40 bg-[#151b2b]"
                    : "border-[#242a3a] bg-[#111827]/80 hover:border-[#38bdf8]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-right sm:px-6"
                >
                  <span className="text-sm font-semibold leading-relaxed text-[#dde2f8] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#8ed5ff]"
                        : "border-[#242a3a] text-[#8ed5ff]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#242a3a] px-5 pb-5 pt-4 text-sm leading-7 text-[#bdc8d1] sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl border border-[#38bdf8]/20 bg-[#111827]/80 p-5 text-center sm:p-6">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#38bdf8]/10 text-[#8ed5ff]">
            <MessageCircle className="h-5 w-5" />
          </div>

          <h3 className="mb-2 text-base font-bold text-[#dde2f8] sm:text-lg">
            لسه عندك سؤال؟
          </h3>

          <p className="mb-4 text-sm text-[#bdc8d1]">
            تواصل معنا وخلينا نتكلم عن مشروعك.
          </p>

          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#38bdf8] px-5 py-3 text-sm font-bold text-[#00354a] transition-all hover:-translate-y-0.5 hover:bg-[#67ccff] active:scale-95"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}

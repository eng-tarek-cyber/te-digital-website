import { useState, FormEvent } from "react";
import { ContactFormData } from "../types";
import { WHATSAPP_NUMBER, AGENCY_EMAIL } from "../data";
import {
  trackWhatsAppClick,
  trackLeadSubmission,
  trackEmailClick,
} from "../utils/analytics";

interface ContactSectionProps {
  preselectedService: string;
  onServiceChange: (service: string) => void;
}

export default function ContactSection({
  preselectedService,
  onServiceChange,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    businessType: "ecommerce",
    service: preselectedService || "إعلانات ممولة",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    trackLeadSubmission(
      formData.service || preselectedService,
      formData.businessType,
    );

    const data = new FormData();

    data.append("access_key", "8f4a1365-c6d9-4a0f-a4ac-13634b489d25");

    data.append("name", formData.fullName);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("business_type", formData.businessType);
    data.append("service", formData.service || preselectedService);
    data.append("message", formData.message);

    data.append("subject", `طلب جديد من T.E Digital - ${formData.fullName}`);

    data.append("from_name", "T.E Digital");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        console.error("Web3Forms:", result);

        alert(result.message || "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert("تعذر إرسال الطلب. تأكد من اتصال الإنترنت وحاول مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    trackWhatsAppClick("contact_form_success");
    const text = `مرحبًا T.E Digital، أرغب في استشارة لمشروعي:
- الاسم: ${formData.fullName || "غير محدد"}
- النشاط: ${formData.businessType}
- الخدمة المطلوبة: ${formData.service || preselectedService}
- التفاصيل: ${formData.message || "أود مناقشة الخطة المناسبة"}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="px-3 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="text-xs sm:text-sm text-[#8ed5ff] font-semibold tracking-wider block mb-1">
          تواصل واستشارة مجانية
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dde2f8] mb-3">
          تواصل مع T.E Digital و طارق عيد لبدء مشروعك
        </h2>
        <p className="text-xs sm:text-base text-[#bdc8d1] max-w-md mx-auto leading-relaxed">
          هل ترغب في توظيف Front-End Developer أو إطلاق حملة إعلانية أو بناء
          موقع وتطبيق React فائق السرعة؟ املأ النموذج وسنتواصل معك خلال 24 ساعة.
        </p>
      </div>

      {/* Form Container */}
      <div className="p-4 sm:p-8 rounded-3xl bg-[#151b2b]/95 border border-[#242a3a] shadow-2xl flex flex-col mb-6 relative">
        {submitted ? (
          <div
            id="form-success-container"
            className="p-4 sm:p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="w-16 h-16 rounded-full bg-[#8ed5ff]/20 text-[#8ed5ff] flex items-center justify-center mx-auto shadow-[0_0_24px_rgba(56,189,248,0.4)]">
              <span className="material-symbols-outlined text-[36px]">
                check_circle
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#dde2f8]">
              تم استلام طلبك بنجاح!
            </h3>
            <p className="text-xs sm:text-sm text-[#bdc8d1] max-w-md mx-auto leading-relaxed">
              شكرًا لتواصلك معنا يا{" "}
              <span className="text-[#8ed5ff] font-bold">
                {formData.fullName || "عزيزي"}
              </span>
              . سيقوم أحد مستشارينا بالتواصل معك عبر واتساب أو الهاتف خلال ساعات
              العمل الرسمية.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full sm:w-auto min-h-[44px] py-2.5 px-5 rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#c4e7ff] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                <span>إرسال البيانات عبر واتساب الآن</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    businessType: "ecommerce",
                    service: "إعلانات ممولة",
                    message: "",
                  });
                }}
                className="w-full sm:w-auto min-h-[44px] py-2.5 px-4 rounded-xl bg-[#242a3a] text-[#bdc8d1] hover:text-white text-sm transition-colors cursor-pointer"
              >
                إرسال استفسار آخر
              </button>
            </div>
          </div>
        ) : (
          <form
            id="lead-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-right"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="lead-name"
                className="block text-xs sm:text-sm font-semibold text-[#dde2f8] mb-1.5"
              >
                الاسم بالكامل <span className="text-[#8ed5ff]">*</span>
              </label>
              <input
                id="lead-name"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="مثال: أحمد محمد"
                className="w-full h-12 px-3.5 rounded-xl bg-[#080e1d] border border-[#242a3a] text-[#dde2f8] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all placeholder:text-[#3e484f]"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label
                htmlFor="lead-phone"
                className="block text-xs sm:text-sm font-semibold text-[#dde2f8] mb-1.5"
              >
                رقم الهاتف / واتساب <span className="text-[#8ed5ff]">*</span>
              </label>
              <input
                id="lead-phone"
                type="tel"
                required
                dir="ltr"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+20 100 000 0000"
                className="w-full h-12 px-3.5 rounded-xl bg-[#080e1d] border border-[#242a3a] text-[#dde2f8] text-sm text-right focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all placeholder:text-[#3e484f]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="lead-email"
                className="block text-xs sm:text-sm font-semibold text-[#dde2f8] mb-1.5"
              >
                البريد الإلكتروني
              </label>
              <input
                id="lead-email"
                type="email"
                dir="ltr"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="name@business.com"
                className="w-full h-12 px-3.5 rounded-xl bg-[#080e1d] border border-[#242a3a] text-[#dde2f8] text-sm text-right focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all placeholder:text-[#3e484f]"
              />
            </div>

            {/* Business Type */}
            <div>
              <label
                htmlFor="business-type"
                className="block text-xs sm:text-sm font-semibold text-[#dde2f8] mb-1.5"
              >
                نوع النشاط التجاري
              </label>
              <select
                id="business-type"
                value={formData.businessType}
                onChange={(e) =>
                  setFormData({ ...formData, businessType: e.target.value })
                }
                className="w-full h-12 px-3.5 rounded-xl bg-[#080e1d] border border-[#242a3a] text-[#dde2f8] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all"
              >
                <option value="medical">طبي / عيادات ومراكز</option>
                <option value="ecommerce">تجارة إلكترونية ومتاجر</option>
                <option value="restaurants">مطاعم وكافيهات</option>
                <option value="corporate">شركة أو خدمات أعمال B2B</option>
                <option value="realestate">عقارات ومقاولات</option>
                <option value="other">نشاط آخر</option>
              </select>
            </div>

            {/* Required Service */}
            <div>
              <label
                htmlFor="service-select"
                className="block text-xs sm:text-sm font-semibold text-[#dde2f8] mb-1.5"
              >
                الخدمة المطلوبة
              </label>
              <select
                id="service-select"
                value={formData.service || preselectedService}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData({ ...formData, service: val });
                  onServiceChange(val);
                }}
                className="w-full h-12 px-3.5 rounded-xl bg-[#080e1d] border border-[#242a3a] text-[#dde2f8] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all"
              >
                <option value="إعلانات ممولة">
                  إعلانات ممولة (Sponsored Ads)
                </option>
                <option value="إدارة سوشيال ميديا">
                  إدارة صفحات السوشيال ميديا
                </option>
                <option value="تصميم موقع إلكتروني">
                  تصميم وتطوير المواقع
                </option>
                <option value="صفحة هبوط (Landing Page)">
                  صفحة هبوط (Landing Page)
                </option>
                <option value="باقة متكاملة">باقة تسويق وبرمجة متكاملة</option>
              </select>
            </div>

            {/* Message / Project Details */}
            <div>
              <label
                htmlFor="lead-message"
                className="block text-xs sm:text-sm font-semibold text-[#dde2f8] mb-1.5"
              >
                تفاصيل مشروعك أو استفسارك
              </label>
              <textarea
                id="lead-message"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="احكيلنا عن هدفك، ميزانيتك التقديرية، أو التحدي اللي بتواجهه..."
                className="w-full p-3.5 rounded-xl bg-[#080e1d] border border-[#242a3a] text-[#dde2f8] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all resize-none placeholder:text-[#3e484f]"
              />
            </div>

            {/* Submit Button */}
            <button
              id="submit-lead-btn"
              type="submit"
              disabled={submitting}
              className="w-full min-h-[48px] py-3.5 rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm sm:text-base flex items-center justify-center gap-2 mt-2 active:scale-95 transition-all shadow-md hover:bg-[#c4e7ff] cursor-pointer disabled:opacity-60"
            >
              <span>{submitting ? "جاري الإرسال..." : "إرسال الطلب"}</span>
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>

            {/* Privacy Disclaimer */}
            <p className="text-[11px] text-[#bdc8d1] text-center mt-2 flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">
                lock
              </span>
              بياناتك مشفرة ومحمية وتستخدم للرد على استفسارك فقط.
            </p>
          </form>
        )}
      </div>

      {/* Quick Direct Contact Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <a
          id="contact-whatsapp-direct"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("contact_section_direct")}
          className="p-4 rounded-2xl bg-[#151b2b] border border-[#242a3a] hover:border-[#38bdf8]/40 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all group min-w-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[#8ed5ff] text-[26px] group-hover:scale-110 transition-transform">
            chat
          </span>
          <span className="text-xs sm:text-sm text-[#dde2f8] font-bold">
            واتساب مباشر
          </span>
          <span className="text-[11px] text-[#bdc8d1]">
            تواصل فوري مع الفريق
          </span>
        </a>

        <a
          id="contact-email-direct"
          href={`mailto:${AGENCY_EMAIL}`}
          onClick={() => trackEmailClick()}
          className="p-4 rounded-2xl bg-[#151b2b] border border-[#242a3a] hover:border-[#38bdf8]/40 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all group min-w-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[#8ed5ff] text-[26px] group-hover:scale-110 transition-transform">
            mail
          </span>
          <span className="text-xs sm:text-sm text-[#dde2f8] font-bold">
            البريد الإلكتروني
          </span>
          <span className="text-[11px] text-[#bdc8d1] truncate max-w-full px-2">
            {AGENCY_EMAIL}
          </span>
        </a>
      </div>
    </section>
  );
}

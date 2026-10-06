interface NotFoundPageProps {
  onGoHome: () => void;
}

export default function NotFoundPage({ onGoHome }: NotFoundPageProps) {
  return (
    <div
      id="not-found-screen"
      className="min-h-screen bg-[#0d1322] text-[#dde2f8] flex flex-col items-center justify-center px-4 py-16 text-center"
      dir="rtl"
    >
      <div className="w-full max-w-md p-6 sm:p-10 rounded-3xl bg-[#151b2b] border border-[#242a3a] shadow-2xl flex flex-col items-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#0053db]/25 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* 404 Badge */}
        <div className="w-16 h-16 rounded-2xl bg-[#242a3a] border border-[#38bdf8]/30 text-[#8ed5ff] flex items-center justify-center mb-4 text-2xl font-extrabold shadow-[0_0_20px_rgba(56,189,248,0.25)]">
          404
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-[#dde2f8] mb-2">
          الصفحة غير موجودة
        </h1>
        <p className="text-xs sm:text-sm text-[#bdc8d1] mb-6 leading-relaxed">
          عذرًا، الرابط الذي تحاول الوصول إليه غير متوفر أو تم نقله. يمكنك العودة للصفحة الرئيسية أو استكشاف خدماتنا.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <button
            type="button"
            onClick={onGoHome}
            className="w-full sm:flex-1 py-3 px-4 min-h-[44px] rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#c4e7ff] active:scale-95 transition-all cursor-pointer"
          >
            <span>العودة للرئيسية</span>
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>
          <a
            href="/#services"
            className="w-full sm:flex-1 py-3 px-4 min-h-[44px] rounded-xl bg-[#242a3a] text-[#8ed5ff] border border-[#38bdf8]/20 hover:bg-[#33394a] font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>خدماتنا</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import { ProjectItem } from '../types';
import { trackProjectView } from '../utils/analytics';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (category: string) => void;
}

export default function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const hasResults = Boolean(project.results && project.results.length > 0);

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080e1d]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-2xl bg-[#151b2b] border border-[#242a3a] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-right animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header & Image */}
        <div className="relative h-52 sm:h-64 bg-[#191f2f] shrink-0 overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.altText}
              width="672"
              height="256"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#191f2f] via-[#151b2b] to-[#0d1322]">
              <span className="material-symbols-outlined text-[#8ed5ff] text-[40px]">web</span>
              <span className="text-[#dde2f8] text-sm font-semibold px-6 text-center">{project.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151b2b] via-transparent to-black/40" />

          {/* Close button */}
          <button
            type="button"
            aria-label="إغلاق النافذة"
            onClick={onClose}
            className="absolute top-3 left-3 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#0d1322]/85 text-[#dde2f8] hover:text-white flex items-center justify-center backdrop-blur-md border border-[#242a3a] cursor-pointer active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Category Pill */}
          <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-[#0d1322]/85 backdrop-blur-md text-[#8ed5ff] text-xs font-semibold border border-[#38bdf8]/30">
            {project.category}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-4 sm:space-y-5">
          <div>
            <h2 id="modal-project-title" className="text-lg sm:text-2xl font-bold text-[#dde2f8] mb-2">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          {hasResults && (
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-[#0d1322] border border-[#242a3a]">
              {project.results!.map((res, i) => (
                <div key={i} className="text-center px-0.5">
                  <span className="block text-sm sm:text-xl font-bold text-[#8ed5ff] truncate">
                    {res.value}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-[#dde2f8] font-medium mt-0.5 leading-tight">
                    {res.label}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-[#bdc8d1] mt-0.5 leading-tight">{res.subtext}</span>
                </div>
              ))}
            </div>
          )}

          {(project.challenge || project.solution) && (
            <div className="space-y-3">
              {project.challenge && (
                <div className="p-3.5 rounded-xl bg-[#191f2f]/60 border border-[#242a3a]">
                  <span className="text-xs font-bold text-[#ffb4ab] flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-[16px]">priority_high</span>
                    التحدي الأولي:
                  </span>
                  <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-3.5 rounded-xl bg-[#191f2f]/60 border border-[#242a3a]">
                  <span className="text-xs font-bold text-[#8ed5ff] flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    الحل والنتيجة:
                  </span>
                  <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#242a3a] text-[#bdc8d1] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-3 border-t border-[#242a3a] flex flex-col sm:flex-row gap-2.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectView(project.id, project.title)}
              className="flex-1 min-h-[48px] py-3 px-4 rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#c4e7ff] active:scale-95 transition-all cursor-pointer"
            >
              <span>زيارة الموقع</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
            <button
              type="button"
              onClick={() => {
                onRequestSimilar(project.category);
                onClose();
              }}
              className="flex-1 min-h-[48px] py-3 px-4 rounded-xl bg-[#242a3a] text-[#dde2f8] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#33394a] active:scale-95 transition-all cursor-pointer"
            >
              <span>طلب مشروع مماثل</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[48px] py-3 px-5 rounded-xl bg-[#242a3a] text-[#dde2f8] text-sm hover:bg-[#33394a] transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';
import { trackProjectView } from '../utils/analytics';

interface PortfolioSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

const FILTERS = [
  { id: 'all', label: 'جميع الأعمال', match: '' },
  { id: 'restaurant', label: 'مطاعم', match: 'مطعم' },
  { id: 'dashboard', label: 'لوحات تحكم وأنظمة', match: 'لوحة' },
  { id: 'healthcare', label: 'رعاية صحية', match: 'أسنان' },
  { id: 'ecommerce', label: 'متاجر إلكترونية', match: 'تجارة' },
] as const;

export default function PortfolioSection({ onOpenProject }: PortfolioSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProjects =
    selectedFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => {
          const filter = FILTERS.find((f) => f.id === selectedFilter);
          if (!filter?.match) return true;
          return (
            p.category.includes(filter.match) ||
            p.categoryEn.toLowerCase().includes(filter.match.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase().includes(filter.match.toLowerCase()))
          );
        });

  return (
    <section id="portfolio" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="text-xs sm:text-sm text-[#8ed5ff] font-semibold tracking-wider block mb-1">
          معرض الأعمال والمشاريع
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dde2f8] mb-3">
          مشاريع وتطبيقات ويب سريعة من تطوير طارق عيد
        </h2>
        <p className="text-sm sm:text-base text-[#bdc8d1] max-w-2xl mx-auto leading-relaxed">
          نماذج حقيقية لمشاريع وتطبيقات تم تطويرها باستخدام React.js و Next.js و Tailwind CSS مع التركيز على سرعة التحميل، تجربة المستخدم المتجاوبة، وتحسين محركات البحث.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3 sm:px-3.5 py-2 min-h-[38px] rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-[#8ed5ff] text-[#00354a] font-bold shadow-sm'
                  : 'bg-[#151b2b] text-[#bdc8d1] border border-[#242a3a] hover:border-[#38bdf8]/40'
              }`}
            >
              {filter.id === 'all' ? `${filter.label} (${PROJECTS_DATA.length})` : filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="rounded-2xl bg-[#151b2b]/90 border border-[#242a3a] overflow-hidden shadow-lg hover:border-[#38bdf8]/40 hover:shadow-[0_12px_36px_rgba(2,6,23,0.8)] transition-all flex flex-col group"
          >
            {/* Project Image Frame */}
            <button
              type="button"
              onClick={() => {
                trackProjectView(project.id, project.title);
                onOpenProject(project);
              }}
              className="h-48 sm:h-56 bg-[#242a3a] relative flex items-center justify-center overflow-hidden cursor-pointer text-right"
              aria-label={`تفاصيل ${project.title}`}
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  width="600"
                  height="350"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#191f2f] via-[#151b2b] to-[#0d1322] group-hover:scale-105 transition-transform duration-500"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-[#8ed5ff] text-[36px]">web</span>
                  <span className="text-[#dde2f8] text-sm font-semibold px-4 text-center">{project.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151b2b] via-transparent to-black/20 pointer-events-none" />

              <span className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-[#080e1d]/85 backdrop-blur-md text-[#8ed5ff] text-xs font-medium border border-[#38bdf8]/20">
                {project.category}
              </span>
            </button>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#dde2f8] mb-1.5 group-hover:text-[#8ed5ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-[#191f2f] text-[#bdc8d1] text-xs border border-[#242a3a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProjectView(project.id, project.title)}
                className="w-full py-3 px-4 min-h-[44px] rounded-xl bg-[#242a3a] text-[#8ed5ff] hover:bg-[#38bdf8] hover:text-[#00354a] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-[#38bdf8]/20 hover:border-transparent cursor-pointer"
              >
                <span>زيارة الموقع</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { FolderGit2, Search, ExternalLink, Github, Shield, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & Security', 'SOC & Defense', 'Network Security', 'Tools & Utilities'];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SECURITY REPOSITORIES // FEATURED & ALL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cybersecurity Projects
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              Exploring defensive automation, SOC log analysis, CTF challenge helpers, and network scanners.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-900 pb-4">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`bg-slate-900/90 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden ${
                  isFeatured
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-950/30'
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Glowing Top Edge for Featured */}
                {isFeatured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500" />
                )}

                <div>
                  {/* Card Header Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]">
                      {project.category}
                    </span>

                    {isFeatured && (
                      <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/80 font-mono text-[10px] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400 font-mono">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400">›</span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Tags & Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-mono text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Details & Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-800 font-mono text-slate-400 text-sm">
            No projects matched query "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Cpu, Award, HelpCircle, ArrowRight, Shield } from 'lucide-react';
import { Project, SkillCategory, FAQItem } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  skills: SkillCategory[];
  faqs: FAQItem[];
  onSelectProject: (project: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  projects,
  skills,
  faqs,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSkills = skills.flatMap((c) =>
    c.skills.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
        
        {/* Input Bar */}
        <div className="relative p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, security tools, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Window */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-xs font-mono">
          
          {/* Quick Navigation Jump Links */}
          {!query && (
            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 uppercase">Quick Jump Sections:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <a
                  href="#about"
                  onClick={onClose}
                  className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700 flex items-center justify-between"
                >
                  <span>#about</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="#projects"
                  onClick={onClose}
                  className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700 flex items-center justify-between"
                >
                  <span>#projects</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="#skills"
                  onClick={onClose}
                  className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700 flex items-center justify-between"
                >
                  <span>#skills</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="#quick-answers"
                  onClick={onClose}
                  className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700 flex items-center justify-between"
                >
                  <span>#faq</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] text-cyan-400 uppercase flex items-center gap-1">
                <FolderGit2 className="w-3 h-3" /> Projects ({filteredProjects.length})
              </span>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onSelectProject(proj);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded bg-slate-950 border border-slate-800/80 hover:border-cyan-500/50 text-left flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="font-bold text-slate-200 group-hover:text-cyan-400">
                        {proj.title}
                      </span>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{proj.summary}</p>
                    </div>
                    <span className="text-[10px] text-slate-500 shrink-0">{proj.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills Results */}
          {filteredSkills.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] text-emerald-400 uppercase flex items-center gap-1">
                <Cpu className="w-3 h-3" /> Skills ({filteredSkills.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredSkills.slice(0, 6).map((skill, i) => (
                  <div key={i} className="p-2 rounded bg-slate-950 border border-slate-800/80 text-slate-300">
                    <div className="font-bold text-white">{skill.name}</div>
                    <div className="text-[10px] text-slate-400">{skill.badge}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Results */}
          {filteredFaqs.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] text-amber-400 uppercase flex items-center gap-1">
                <HelpCircle className="w-3 h-3" /> Quick Answers ({filteredFaqs.length})
              </span>
              <div className="space-y-1">
                {filteredFaqs.map((faq) => (
                  <a
                    key={faq.id}
                    href="#quick-answers"
                    onClick={onClose}
                    className="block p-2 rounded bg-slate-950 border border-slate-800/80 hover:border-amber-500/50 text-slate-300"
                  >
                    <span className="font-bold text-white block">{faq.question}</span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">{faq.answer}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>Mohammad Ahmed Portfolio Search</span>
        </div>

      </div>
    </div>
  );
};

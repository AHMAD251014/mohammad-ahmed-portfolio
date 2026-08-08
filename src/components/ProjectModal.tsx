import React from 'react';
import { X, Github, ExternalLink, Shield, CheckCircle2, Cpu, Tag, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono flex items-center gap-1">
                <Shield className="w-3 h-3" /> Featured System
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Key Capability Modules</span>
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">›</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Architecture & Implementation</span>
          </h3>
          <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800/80 font-mono leading-relaxed">
            {project.architectureDetails}
          </p>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Tag className="w-4 h-4 text-amber-400" />
            <span>Technologies & Domains</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono flex items-center gap-2 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <a
            href={project.demoUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-all"
          >
            <span>Open Repository</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

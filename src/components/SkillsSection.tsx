import React, { useState } from 'react';
import { Cpu, ShieldCheck, Network, Terminal, Code2, Check, Sparkles } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITIES // SKILLS MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cybersecurity Competencies
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              Categorized breakdown of technical proficiency across security monitoring, networking, ethical hacking, and programming.
            </p>
          </div>

          {/* Quick Category Switcher */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories
            .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
            .map((cat) => (
              <div
                key={cat.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-6 hover:border-slate-700 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-200 font-mono flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                          {skill.badge} ({skill.level}%)
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-400 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, ExternalLink, Sparkles, UserCheck, GraduationCap, Cpu, FolderGit2, Target, Mail } from 'lucide-react';
import { FAQItem } from '../types';

interface QuickAnswersSectionProps {
  faqItems: FAQItem[];
}

export const QuickAnswersSection: React.FC<QuickAnswersSectionProps> = ({ faqItems }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-who-is-mohammad', 'faq-projects']);

  const categories = ['All', 'General', 'Education', 'Skills', 'Projects', 'Career Goals', 'Contact'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'General':
        return <UserCheck className="w-4 h-4 text-cyan-400" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'Skills':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Projects':
        return <FolderGit2 className="w-4 h-4 text-amber-400" />;
      case 'Career Goals':
        return <Target className="w-4 h-4 text-rose-400" />;
      case 'Contact':
        return <Mail className="w-4 h-4 text-cyan-400" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="quick-answers" className="py-20 bg-slate-950/80 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>QUICK ANSWERS // PORTFOLIO FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Quick Answers & FAQ
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              Instant responses regarding Mohammad Ahmed's education, skills, projects, and career goals.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-900 pb-4">
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

        {/* Accordion FAQ Grid */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                      {getCategoryIcon(faq.category)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-cyan-400 block">
                        {faq.category}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className="p-1 rounded bg-slate-950 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    <p className="whitespace-pre-line text-xs sm:text-sm">
                      {faq.answer}
                    </p>

                    {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                        {faq.relatedLinks.map((link, i) => {
                          const isExternal = link.action.startsWith('http') || link.action.startsWith('mailto');
                          return (
                            <a
                              key={i}
                              href={link.action}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-700 font-mono text-xs flex items-center gap-1 transition-colors"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Terminal, Shield, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Profile } from '../types';

interface FooterProps {
  profile: Profile;
  onOpenContentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenContentGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono font-bold text-sm text-white">Mohammad Ahmed</span>
                <span className="text-[11px] font-mono text-cyan-400 block -mt-0.5">ID: {profile.studentId}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              BS Cyber Security Student at {profile.university} ({profile.location}). Focused on threat detection, SOC log analysis, ethical hacking, and open-source security tools.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-3 py-1.5 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Status: 100% Static & Private (Zero API Keys)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors"># About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors"># Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors"># Skills</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors"># Certifications</a></li>
              <li><a href="#github" className="hover:text-cyan-400 transition-colors"># GitHub</a></li>
              <li><a href="#quick-answers" className="hover:text-cyan-400 transition-colors"># FAQ</a></li>
              <li><a href="#blog" className="hover:text-cyan-400 transition-colors"># Writeups</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors"># Contact</a></li>
            </ul>
          </div>

          {/* Local Content Guide */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Content Management
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Need to add or edit projects, skills, or FAQs? You can edit local JSON files directly inside <code className="text-cyan-400">src/data/</code>.
            </p>
            <button
              onClick={onOpenContentGuide}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-700 text-xs font-mono transition-colors"
            >
              Open Content Guide →
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Mohammad Ahmed ({profile.studentId}). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub (AHMAD251014)
            </a>
            <span>•</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

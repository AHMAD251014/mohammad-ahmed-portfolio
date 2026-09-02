import React, { useState, useEffect } from 'react';
import { Terminal, Shield, FolderGit2, Cpu, Award, HelpCircle, Mail, BookOpen, Search, Menu, X, FileCode } from 'lucide-react';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  onOpenContentGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette, onOpenContentGuide }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Shield },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'GitHub', href: '#github', icon: FolderGit2 },
    { name: 'Quick Answers', href: '#quick-answers', icon: HelpCircle },
    { name: 'Articles', href: '#blog', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Terminal Tag */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-100 hover:text-cyan-400 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="font-mono font-bold text-sm tracking-tight flex items-center gap-1.5">
                <span>MA_CYS</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-400 font-mono -mt-0.5">Cyber Security</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 rounded-md transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2">
            {/* Command Search Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs font-mono transition-all"
              title="Search portfolio (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-300">
                Ctrl K
              </kbd>
            </button>

            {/* Content Guide Modal Button */}
            <button
              onClick={onOpenContentGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 hover:bg-cyan-900/50 hover:text-cyan-200 text-xs font-mono transition-all"
              title="View Local Content Management Guide"
            >
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Content Guide</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 backdrop-blur-xl">
          <div className="mb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400" />
                Search Projects & Skills
              </span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 rounded">Ctrl K</kbd>
            </button>
          </div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

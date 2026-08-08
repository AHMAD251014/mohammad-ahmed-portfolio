import React from 'react';
import { Github, ExternalLink, FolderGit2, Star, GitFork, Shield, Code, CheckCircle } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const username = 'AHMAD251014';
  const profileUrl = 'https://github.com/AHMAD251014/';

  const staticRepos = [
    {
      name: 'HackHero-AI',
      description: 'Intelligent Cybersecurity CTF Assistant & Vulnerability Analysis Toolkit.',
      language: 'Python / TypeScript',
      stars: 12,
      forks: 4,
      topics: ['cybersecurity', 'ctf-solver', 'vulnerability-scanner', 'ai-security']
    },
    {
      name: 'SOC-Shield-AI',
      description: 'Security Operations Center Log Analysis & Real-Time Threat Detection Engine.',
      language: 'TypeScript / React',
      stars: 15,
      forks: 5,
      topics: ['soc', 'siem', 'log-parsing', 'incident-response']
    },
    {
      name: 'Network-Vulnerability-Analyzer',
      description: 'Multi-threaded port discovery, banner grabbing, and protocol security auditor.',
      language: 'Python',
      stars: 9,
      forks: 2,
      topics: ['networking', 'nmap', 'port-scanner', 'python']
    },
    {
      name: 'Threat-Intel-Console',
      description: 'Centralized IoC tracker for managing IP addresses, hashes, and CVE advisories.',
      language: 'React / Tailwind',
      stars: 8,
      forks: 1,
      topics: ['threat-intelligence', 'ioc', 'cve', 'security']
    }
  ];

  return (
    <section id="github" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>STATIC GITHUB REPOSITORIES // NO API CALLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub Profile & Code Repositories
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              Open-source security tools, CTF writeups, and defensive algorithms published on GitHub.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 font-mono text-xs flex items-center gap-2 transition-all shadow-lg"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>@{username} Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Profile Card Summary Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-400">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Mohammad Ahmed</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono text-[10px]">
                  Verified Account
                </span>
              </div>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">github.com/{username}</p>
              <p className="text-xs text-slate-400 mt-1">
                BS Cyber Security Student at DHA Suffa University (ID: CYS251014) building open-source security software.
              </p>
            </div>
          </div>

          {/* Static Stats Pills */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs shrink-0">
            <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-center">
              <span className="text-cyan-400 font-bold block text-base">AHMAD251014</span>
              <span className="text-slate-500 text-[10px]">Username</span>
            </div>
            <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-center">
              <span className="text-emerald-400 font-bold block text-base">Public</span>
              <span className="text-slate-500 text-[10px]">Repositories</span>
            </div>
            <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-center">
              <span className="text-indigo-400 font-bold block text-base">Static</span>
              <span className="text-slate-500 text-[10px]">Zero API Keys</span>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {staticRepos.map((repo) => (
            <div
              key={repo.name}
              className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <a
                    href={`${profileUrl}${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2 font-mono"
                  >
                    <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{repo.name}</span>
                  </a>

                  <a
                    href={`${profileUrl}${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-slate-950 text-slate-400 hover:text-cyan-400 border border-slate-800"
                    title="Open on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {repo.topics.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <GitFork className="w-3.5 h-3.5 text-indigo-400" /> {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="mt-8 text-center pt-4">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline"
          >
            <span>Explore all repositories directly on GitHub (AHMAD251014) →</span>
          </a>
        </div>

      </div>
    </section>
  );
};

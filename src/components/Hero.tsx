import React, { useState } from 'react';
import { Shield, Terminal, ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, Code2, Copy, Check } from 'lucide-react';
import { Profile } from '../types';

interface HeroProps {
  profile: Profile;
  onOpenContentGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenContentGuide }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'status'>('profile');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden cyber-grid">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Main Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM READY // STATIC & ENCRYPTED</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {profile.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-cyan-400 flex flex-wrap items-center gap-2">
                <span>{profile.degree}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-mono text-lg bg-slate-900/80 px-2.5 py-0.5 rounded border border-slate-800">
                  ID: {profile.studentId}
                </span>
              </p>
            </div>

            {/* Metadata Tags (University, Location) */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>{profile.university}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Bio / Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Featured Projects Pills */}
            <div className="pt-1">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Featured Security Systems
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#projects"
                  className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 text-xs font-mono flex items-center gap-2 hover:bg-cyan-900/60 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>HackHero AI</span>
                </a>
                <a
                  href="#projects"
                  className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-800/80 text-indigo-300 text-xs font-mono flex items-center gap-2 hover:bg-indigo-900/60 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>SOC Shield AI</span>
                </a>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-medium text-sm hover:border-slate-700 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700 transition-all"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              <div className="h-6 w-px bg-slate-800 mx-1 hidden sm:block" />

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column - Cyber Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-slate-950/80 backdrop-blur-md">
              
              {/* Terminal Header Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    mohammad_ahmed@dsu-cys:~
                  </span>
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'profile' ? 'bg-cyan-950 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    profile.json
                  </button>
                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'projects' ? 'bg-cyan-950 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    projects.json
                  </button>
                  <button
                    onClick={() => setActiveTab('status')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'status' ? 'bg-cyan-950 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    sys_status
                  </button>
                </div>
              </div>

              {/* Terminal Output Window */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto max-h-[360px] min-h-[280px]">
                {activeTab === 'profile' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-400">
                      <span className="text-emerald-400">cys@dsu:~$</span> cat data/profile.json
                    </div>
                    <pre className="text-cyan-300/90 whitespace-pre-wrap">
                      {JSON.stringify(
                        {
                          name: profile.name,
                          studentId: profile.studentId,
                          degree: profile.degree,
                          university: profile.university,
                          location: profile.location,
                          email: profile.email,
                          github: profile.githubUsername,
                          featured_apps: ["HackHero AI", "SOC Shield AI"]
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-400">
                      <span className="text-emerald-400">cys@dsu:~$</span> cat data/projects.json | head -n 2
                    </div>
                    <div className="space-y-2 text-slate-300">
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <span className="text-emerald-400 font-bold">[1] HackHero AI</span>
                        <p className="text-slate-400 text-[11px] mt-1">
                          CTF Assistant & Vulnerability Analysis Toolkit.
                        </p>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <span className="text-cyan-400 font-bold">[2] SOC Shield AI</span>
                        <p className="text-slate-400 text-[11px] mt-1">
                          Log Analysis & Threat Detection Platform for SSH/syslog streams.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'status' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-400">
                      <span className="text-emerald-400">cys@dsu:~$</span> ./check_env_security.sh
                    </div>
                    <div className="space-y-1 text-[11px]">
                      <p className="text-emerald-400">✓ API Keys Required: 0 (100% Static)</p>
                      <p className="text-emerald-400">✓ Database Dependencies: None (Local JSON/MD)</p>
                      <p className="text-emerald-400">✓ Third-Party Paid APIs: None</p>
                      <p className="text-emerald-400">✓ Deploy Target: Free Vercel / Cloud Run</p>
                      <p className="text-cyan-400 pt-2">» System running in static browser mode.</p>
                    </div>
                  </div>
                )}

                <div className="pt-2 text-slate-400 flex items-center gap-1">
                  <span className="text-emerald-400">cys@dsu:~$</span>
                  <span className="w-2 h-4 bg-cyan-400 inline-block animate-cursor" />
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-slate-950 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>LOCAL JSON ENGINE</span>
                <button
                  onClick={onOpenContentGuide}
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  How to edit data →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

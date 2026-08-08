import React from 'react';
import { Shield, GraduationCap, Code2, Award, Terminal, CheckCircle2 } from 'lucide-react';
import { Profile, Experience } from '../types';

interface AboutSectionProps {
  profile: Profile;
  experiences: Experience[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, experiences }) => {
  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>SECURITY PROFILE // OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Mohammad Ahmed
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl">
              BS Cyber Security Student at DHA Suffa University (Student ID: CYS251014), Karachi, Pakistan.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-cyan-400">{profile.stats.projectsCount}+</div>
              <div className="text-[11px] text-slate-400">Projects</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-400">{profile.stats.ctfSolved}+</div>
              <div className="text-[11px] text-slate-400">CTFs Solved</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-indigo-400">{profile.stats.skillsCount}+</div>
              <div className="text-[11px] text-slate-400">Security Tools</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-400">{profile.stats.certificationsCount}</div>
              <div className="text-[11px] text-slate-400">Certs & Badges</div>
            </div>
          </div>
        </div>

        {/* Grid Layout: Left Academic Profile, Right Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Card - Academic & Key Focus */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">DHA Suffa University</h3>
                  <p className="text-xs text-cyan-400 font-mono">Student ID: {profile.studentId}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Specializing in <strong className="text-slate-100">BS Cyber Security</strong> in Karachi, Pakistan. My academic training combines theoretical computer science with hands-on security laboratory practice.
                </p>

                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Academic Highlights
                  </h4>
                  {profile.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Pillars Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Primary Security Disciplines</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-cyan-400 font-bold block mb-1">01 // SOC Operations</span>
                  <span className="text-slate-400">Log Parsing, SIEM, Incident Response, Alert Analysis</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-emerald-400 font-bold block mb-1">02 // Network Security</span>
                  <span className="text-slate-400">TCP/IP, Wireshark Packet Analysis, Nmap Scanning</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-indigo-400 font-bold block mb-1">03 // Ethical Hacking</span>
                  <span className="text-slate-400">OWASP Top 10, CTF Web Exploitation, Cryptography</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-amber-400 font-bold block mb-1">04 // Security Scripting</span>
                  <span className="text-slate-400">Python Automation, Linux Bash, Regex Heuristics</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Card - Experience / Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Academic & Lab Track</span>
              </h3>

              <div className="relative border-l-2 border-slate-800 ml-3 space-y-8 pl-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative group">
                    {/* Bullet indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/80">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {exp.organization} • {exp.location}
                      </p>

                      <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mt-3 space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-cyan-400 font-mono">›</span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

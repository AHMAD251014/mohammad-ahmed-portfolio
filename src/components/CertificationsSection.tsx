import React from 'react';
import { Award, CheckCircle2, ShieldAlert, GraduationCap, Calendar } from 'lucide-react';
import { Certification } from '../types';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED MILESTONES // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
            Industry and academic certifications validated through practical labs, coursework, and examinations.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => {
            const isCompleted = cert.status === 'Completed';

            return (
              <div
                key={cert.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
              >
                <div>
                  {/* Status Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[10px] uppercase font-bold flex items-center gap-1 ${
                        isCompleted
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-amber-950 text-amber-300 border border-amber-800'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Completed
                        </>
                      ) : (
                        <>
                          <ShieldAlert className="w-3 h-3 text-amber-400" /> {cert.status}
                        </>
                      )}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" /> {cert.issueDate}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-1 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" /> {cert.issuer}
                  </p>

                  {/* Skills List */}
                  <div className="mt-4 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-500">Key Competencies:</span>
                    <ul className="space-y-1">
                      {cert.skillsLearned.map((skill, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5 font-mono">
                          <span className="text-emerald-400">✓</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                  <span>Badge: {cert.badgeType}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

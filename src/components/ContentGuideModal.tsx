import React, { useState } from 'react';
import { X, FileCode, Check, Copy, Code2, BookOpen, Database, FolderGit2 } from 'lucide-react';

interface ContentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentGuideModal: React.FC<ContentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const guideFiles = [
    {
      path: 'src/data/profile.json',
      title: 'Profile & Bio Details',
      description: 'Update name, student ID (CYS251014), university, email, social links, and bio text.',
      example: `{
  "name": "Mohammad Ahmed",
  "studentId": "CYS251014",
  "degree": "BS Cyber Security",
  "university": "DHA Suffa University",
  "location": "Karachi, Pakistan",
  "email": "ahmadmalikqqq380@gmail.com",
  "github": "https://github.com/AHMAD251014/",
  "githubUsername": "AHMAD251014"
}`
    },
    {
      path: 'src/data/projects.json',
      title: 'Projects & Repositories',
      description: 'Add or modify featured security projects (such as HackHero AI and SOC Shield AI).',
      example: `[
  {
    "id": "new-project-id",
    "title": "New Security Project",
    "featured": true,
    "summary": "Brief 1-line description",
    "description": "Full project details...",
    "category": "SOC & Defense",
    "tags": ["Python", "SIEM", "Security"],
    "githubUrl": "https://github.com/AHMAD251014/project-name",
    "keyFeatures": ["Feature 1", "Feature 2"],
    "architectureDetails": "Client-side / static execution notes...",
    "status": "Completed"
  }
]`
    },
    {
      path: 'src/data/skills.json',
      title: 'Skills Matrix',
      description: 'Categorize security tools, protocols, ethical hacking concepts, and proficiency percentages.',
      example: `[
  {
    "id": "soc-defense",
    "category": "SOC & Defensive Security",
    "iconName": "ShieldCheck",
    "description": "Monitoring systems & logs.",
    "skills": [
      {
        "name": "SIEM Log Analysis",
        "level": 90,
        "badge": "Advanced",
        "description": "Parsing syslog & auth.log streams"
      }
    ]
  }
]`
    },
    {
      path: 'src/data/certifications.json',
      title: 'Certifications & Credentials',
      description: 'Add completed or target security certifications and learning tracks.',
      example: `[
  {
    "id": "cert-id",
    "title": "TryHackMe Pre-Security Path",
    "issuer": "TryHackMe",
    "issueDate": "2024",
    "status": "Completed",
    "skillsLearned": ["Networking", "Linux"],
    "badgeType": "Security Certificate"
  }
]`
    },
    {
      path: 'src/data/faq.json',
      title: 'Quick Answers & FAQ',
      description: 'Modify or add questions to the Quick Answers section without any chatbot API keys.',
      example: `[
  {
    "id": "faq-custom",
    "question": "What is Mohammad Ahmed's focus?",
    "category": "General",
    "answer": "Focusing on SOC analysis, threat detection, and ethical hacking.",
    "relatedLinks": [
      { "label": "GitHub Profile", "action": "https://github.com/AHMAD251014/" }
    ]
  }
]`
    },
    {
      path: 'src/data/blog.json',
      title: 'Blog Articles & Writeups',
      description: 'Add local Markdown security walkthroughs and CTF writeups.',
      example: `[
  {
    "id": "soc-log-analysis",
    "slug": "soc-log-analysis",
    "title": "SOC Log Analysis Guide",
    "date": "2025-02-10",
    "readTime": "5 min read",
    "category": "SOC & SIEM",
    "excerpt": "Parsing auth.log for SSH brute force...",
    "tags": ["SOC", "Linux"],
    "content": "### Introduction\\nWrite your markdown content here..."
  }
]`
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Local Content Management Guide</h2>
              <p className="text-xs text-slate-400 font-mono">Zero Database • 100% Local File Based Editing</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
          <p className="text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
            <Database className="w-4 h-4" /> How to Update Portfolio Data:
          </p>
          <p>
            To add or edit projects, skills, certifications, writeups, or FAQs, simply edit the corresponding JSON file inside <code className="text-emerald-400">src/data/</code>. No database, server, or API keys are required. Changes reflect immediately on rebuild or refresh.
          </p>
        </div>

        {/* Files Guide List */}
        <div className="space-y-6">
          {guideFiles.map((item, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800/90 rounded-xl p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-[11px] font-bold">
                    {item.path}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">{item.title}</h3>
                </div>

                <button
                  onClick={() => handleCopy(item.example, idx)}
                  className="self-start sm:self-auto px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedIndex === idx ? 'Copied' : 'Copy Example JSON'}</span>
                </button>
              </div>

              <p className="text-xs text-slate-400">{item.description}</p>

              <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 font-mono text-[11px] text-cyan-300/90 overflow-x-auto">
                <code>{item.example}</code>
              </pre>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};

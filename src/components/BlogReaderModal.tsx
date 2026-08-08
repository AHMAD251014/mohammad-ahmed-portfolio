import React, { useState } from 'react';
import { X, Calendar, Clock, Tag, Share2, Check, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6">
        
        {/* Close & Share Actions */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span>SECURITY ARTICLE // LOCAL MD CONTENT</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" /> {post.date}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 font-sans border-t border-b border-slate-800/80 py-6">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg font-bold text-cyan-400 font-mono mt-4 mb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('```')) {
              const codeLines = paragraph.replace(/```[a-z]*/, '').replace(/```$/, '').trim();
              return (
                <pre key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto my-3">
                  <code>{codeLines}</code>
                </pre>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags Footer */}
        <div className="flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-500" />
          {post.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 font-mono text-xs">
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

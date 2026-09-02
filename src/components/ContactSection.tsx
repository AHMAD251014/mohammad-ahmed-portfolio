import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Linkedin, Github, MapPin, GraduationCap, ShieldAlert } from 'lucide-react';
import { Profile } from '../types';

interface ContactSectionProps {
  profile: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be empty.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || 'Cyber Security Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Mohammad Ahmed
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
            Have a project, security consultation, or academic inquiry? Send a direct message or copy details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Primary Email</span>
                    <p className="text-sm font-bold font-mono text-cyan-300 break-all">{profile.email}</p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* University Details */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Institution</span>
                  <p className="text-xs text-slate-200 font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{profile.university}</span>
                  </p>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Location</span>
                  <p className="text-xs text-slate-200 font-medium flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{profile.location}</span>
                  </p>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Online Profiles
                </span>
                <div className="flex gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 hover:text-cyan-400 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub Profile
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 hover:text-cyan-400 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Client Side Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Message Prepared!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your contact message has been validated successfully. Click the button below to send it directly via your default email application.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Email via Email Client</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700 transition-colors"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border ${
                          errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } text-xs text-white placeholder-slate-600 focus:outline-none font-mono transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } text-xs text-white placeholder-slate-600 focus:outline-none font-mono transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      placeholder="Security Inquiry / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border ${
                        errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-xs text-white placeholder-slate-600 focus:outline-none font-mono transition-colors`}
                    />
                    {errors.subject && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Message Content *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your inquiry or security project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-xs text-white placeholder-slate-600 focus:outline-none font-mono transition-colors`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Validate & Prepare Email</span>
                  </button>

                  <p className="text-[10px] text-slate-500 font-mono text-center">
                    100% Static & Private. No message data is logged or sent to third-party databases.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, Linkedin, Mail, FlaskConical, Code2, Cpu, Globe } from 'lucide-react'

const GOOGLE_SCHOLAR_URL =
  'https://scholar.google.com/citations?user=YOLQS00AAAAJ&hl=en'

const stats = [
  { icon: Code2, label: 'Projects Built', value: '20+' },
  { icon: Globe, label: 'Years Experience', value: '3+' },
  { icon: Cpu, label: 'AI Apps Shipped', value: '5+' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kathy-zhang-01/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kathy.zhang.job@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/catkathy', label: 'GitHub' },
  { icon: FlaskConical, href: GOOGLE_SCHOLAR_URL, label: 'Google Scholar' },
]

export default function Hero() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section id="about" className="pt-28 pb-16 bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-10"
        >
          {/* Photo */}
          <div className="shrink-0">
            {!photoError ? (
              <img
                src="/photo.jpg"
                alt="Kathy Zhang"
                onError={() => setPhotoError(true)}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-stone-200 border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold text-stone-400 select-none">
                KZ
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Kathy Zhang</h1>
            <p className="text-base text-slate-500 mb-5">Full-Stack Developer · AI Enthusiast</p>

            {/* Bio */}
            <p className="text-sm text-slate-600 leading-relaxed mb-3 max-w-xl">
              I'm a full-stack developer with a focus on backend systems and AI integration. I enjoy
              building things that are technically sound and genuinely useful, from REST APIs to
              LLM-powered applications.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3 max-w-xl">
              I work at the intersection of{' '}
              <span className="text-indigo-600">software engineering</span> and{' '}
              <span className="text-indigo-600">artificial intelligence</span>, and I'm also
              experienced in marketing analytics and growth strategy.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Outside of work: AI papers, open source, and coffee ☕
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-7">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={15} className="text-stone-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{value}</span>
                  <span className="text-sm text-slate-400">{label}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 border border-stone-200 bg-white hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

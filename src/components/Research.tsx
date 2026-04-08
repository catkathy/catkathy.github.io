import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, FlaskConical } from 'lucide-react'

const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?user=YOLQS00AAAAJ&hl=en'

const papers = [
  {
    title: 'Towards Adaptive Zero Trust Model for Secure AI',
    venue: '2023 IEEE Conference on Communications and Network Security (CNS)',
    year: '2023',
    authors: 'Kexin Zhang, Shengjie Xu, Bongsik Shin',
    abstract:
      'The attack surface of AI is expanding and posing numerous security threats. Threat actors have created new and unknown vulnerabilities against intelligent information systems and critical infrastructure. Secure and adaptive countermeasures are needed when detecting threats and mitigating risks. Zero Trust Model is a cybersecurity paradigm that assumes no user or system should be inherently trusted. It applies the security principle of Least Privilege to network access and Continuous Verification to monitoring and auditing. In this paper, we study the landscape of Secure AI and envision applying the Zero Trust Model to defend against AI threats.',
    tags: ['Zero Trust', 'Secure AI', 'Cybersecurity', 'IEEE'],
    link: 'https://ieeexplore.ieee.org/document/10288892',
    citations: 14,
  },
]

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-lg font-bold text-slate-800">Research</h2>
          <a
            href={GOOGLE_SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 border border-stone-200 bg-white px-3 py-1.5 rounded-lg transition-colors"
          >
            <FlaskConical size={12} />
            Google Scholar
            <ExternalLink size={11} className="opacity-60" />
          </a>
        </motion.div>

        {/* Papers — academic publication list style */}
        <div className="flex flex-col divide-y divide-stone-200">
          {papers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-5 first:pt-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-1">
                    <span className="font-medium text-slate-600">{paper.venue}</span>
                    {' · '}
                    {paper.year}
                  </p>
                  <p className="text-xs text-slate-400 mb-3 italic">{paper.authors}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-1 items-center">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-stone-100 text-slate-500">
                        {tag}
                      </span>
                    ))}
                    {'citations' in paper && (
                      <span className="px-2 py-0.5 rounded text-xs bg-indigo-50 text-indigo-500 font-medium">
                        Cited by {paper.citations}
                      </span>
                    )}
                  </div>
                </div>
                {paper.link && paper.link !== '#' && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors mt-0.5"
                  >
                    PDF <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

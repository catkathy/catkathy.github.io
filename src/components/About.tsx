import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Globe } from 'lucide-react'

const stats = [
  { icon: Code2, label: 'Projects Built', value: '20+' },
  { icon: Globe, label: 'Years Experience', value: '3+' },
  { icon: Cpu, label: 'AI Apps Shipped', value: '5+' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold text-slate-800 mb-6"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Hi, I'm <span className="font-medium text-slate-800">Kathy Zhang</span> — a full-stack developer
            with a focus on backend systems and AI integration. I enjoy building things that are technically
            sound and genuinely useful, from REST APIs to LLM-powered applications.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            I work at the intersection of <span className="text-indigo-600">software engineering</span> and{' '}
            <span className="text-indigo-600">artificial intelligence</span>, and I'm also experienced in
            marketing analytics and growth strategy.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            Outside of work: AI papers, open source, and coffee ☕
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon size={16} className="text-stone-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{value}</span>
                <span className="text-sm text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

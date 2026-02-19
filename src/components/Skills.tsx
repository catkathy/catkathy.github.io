import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Node.js', 'FastAPI', 'Spring Boot', 'Express'],
  },
  {
    category: 'AI / ML',
    skills: ['LangChain', 'OpenAI API', 'PyTorch', 'HuggingFace', 'RAG'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Tools & Infra',
    skills: ['Docker', 'Git', 'AWS', 'GitHub Actions', 'Linux'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold text-slate-800 mb-8"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6"
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

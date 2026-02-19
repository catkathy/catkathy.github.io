import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI Chat Assistant',
    description:
      'A full-stack RAG-based chat application powered by OpenAI and LangChain. Supports multi-turn conversations with document context retrieval.',
    tags: ['Python', 'FastAPI', 'LangChain', 'React', 'PostgreSQL'],
    github: 'https://github.com/catkathy',
    demo: '#',
  },
  {
    title: 'DevFlow API',
    description:
      'A scalable REST API for project management with real-time collaboration features, JWT auth, and comprehensive test coverage.',
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'Docker', 'Redis'],
    github: 'https://github.com/catkathy',
    demo: '#',
  },
  {
    title: 'SmartAnalytics Dashboard',
    description:
      'Data visualization dashboard with ML-powered anomaly detection, interactive charts, and automated reporting.',
    tags: ['React', 'Python', 'PyTorch', 'AWS', 'SQL'],
    github: 'https://github.com/catkathy',
    demo: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold text-slate-800 mb-8"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col bg-white rounded-xl border border-stone-200 p-5 hover:border-stone-300 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-sm font-semibold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs bg-stone-100 text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-stone-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  <Github size={13} /> Code
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={13} /> Demo
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

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, TrendingUp } from 'lucide-react'

type Track = 'engineering' | 'marketing'

const engineeringExp = [
  {
    title: 'Full-Stack Developer',
    organization: 'Tech Company',
    period: '2023 – Present',
    description:
      'Designed and shipped AI-powered features using LangChain and OpenAI API. Built and maintained high-throughput REST APIs with Python (FastAPI) and Node.js. Improved system reliability by 30% through better observability and automated testing.',
  },
  {
    title: 'Backend Engineer Intern',
    organization: 'Startup',
    period: '2022 – 2023',
    description:
      'Developed microservices for data processing pipelines. Implemented Redis caching to reduce database load by 40%. Collaborated closely with frontend teams and product managers to ship features on time.',
  },
]

const marketingExp = [
  {
    title: 'Marketing & Growth Analyst',
    organization: 'Company',
    period: '2023 – Present',
    description:
      'Drove data-driven growth strategies leveraging A/B testing, user funnel analysis, and cohort analysis. Built dashboards in Tableau to track KPIs and campaign performance across channels.',
  },
  {
    title: 'Growth Marketing Intern',
    organization: 'Startup',
    period: '2022 – 2023',
    description:
      'Managed SEO/SEM campaigns and social media growth initiatives. Analysed user acquisition data to optimise ad spend ROI. Contributed to a 25% increase in monthly active users.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTrack, setActiveTrack] = useState<Track>('engineering')

  const data = activeTrack === 'engineering' ? engineeringExp : marketingExp

  return (
    <section id="experience" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <h2 className="text-lg font-bold text-slate-800">Experience</h2>

          <div className="inline-flex rounded-lg bg-stone-100 p-0.5 gap-0.5">
            {([
              { key: 'engineering' as Track, label: 'Software Engineering', icon: Briefcase },
              { key: 'marketing' as Track, label: 'Marketing & Growth', icon: TrendingUp },
            ] as const).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTrack(key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 ${
                  activeTrack === key
                    ? 'bg-white text-slate-800 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Icon size={12} />
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* List */}
        <motion.div
          key={activeTrack}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col divide-y divide-stone-200"
        >
          {data.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="py-5 first:pt-0 flex gap-4"
            >
              <div className="shrink-0 mt-0.5">
                <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center">
                  <Briefcase size={13} className="text-slate-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                  <h3 className="text-sm font-semibold text-slate-800">{exp.title}</h3>
                  <span className="text-xs text-stone-400 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs text-indigo-600 mb-2">{exp.organization}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const links = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@catkathy',
    href: 'https://github.com/catkathy',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Kathy Zhang',
    href: '#',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'your@email.com',
    href: 'mailto:your@email.com',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold text-slate-800 mb-2"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm text-slate-500 mb-8 max-w-md"
        >
          I'm open to new opportunities, collaborations, or a good conversation about technology.
          Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-3"
        >
          {links.map(({ icon: Icon, label, handle, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-slate-600 text-sm hover:border-indigo-300 hover:text-indigo-600 transition-all duration-150 group"
            >
              <Icon size={15} />
              <div>
                <span className="font-medium">{label}</span>
                <span className="text-stone-400 ml-1.5 text-xs">{handle}</span>
              </div>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity ml-1" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

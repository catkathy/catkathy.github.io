import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    degree: "Master of Science in Information Systems",
    school: "San Diego State University",
    period: "2021 – 2023",
    // description:
    //   'Studied algorithms, distributed systems, machine learning, and software engineering. Graduated with honors. Completed thesis on neural network optimization.',
  },
  {
    degree: "Master of International Affairs",
    school: "University of California, San Diego",
    period: "2019 – 2021",
    // description:
    //   'Coursework in consumer behaviour, digital marketing, market research, and statistical analysis. Applied machine learning to marketing datasets for the capstone project.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-16 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold text-slate-800 mb-8"
        >
          Education
        </motion.h2>

        <div className="flex flex-col divide-y divide-stone-200">
          {educationItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-5 first:pt-0 flex gap-4"
            >
              <div className="shrink-0 mt-0.5">
                <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center">
                  <GraduationCap size={13} className="text-slate-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.degree}
                  </h3>
                  <span className="text-xs text-stone-400 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs text-indigo-600">{item.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

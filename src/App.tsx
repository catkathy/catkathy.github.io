import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 text-xs text-stone-400">
          © {new Date().getFullYear()} Kathy Zhang
        </div>
      </footer>
    </div>
  )
}

export default App

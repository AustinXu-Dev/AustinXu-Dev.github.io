import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import SystemsThinking from '@/components/SystemsThinking'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <SystemsThinking />
      <Skills />
      <Blog />
      <Footer />
    </main>
  )
}

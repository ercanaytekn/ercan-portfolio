import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-dark">
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
